package com.Mcom.Backend_shop_cosmetic.banner;

import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryService;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoRequest;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.time.Clock;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("banners")
@RequiredArgsConstructor

public class BannerController {
    private final BannerService bannerService;


    @GetMapping("/images/{fileName:.+}")
    public ResponseEntity<Resource> serveImage(@PathVariable String fileName) {
        try {
            Path imagePath = Paths.get("uploads").resolve(fileName);
            Resource resource = new UrlResource(imagePath.toUri());

            if (resource.exists() && resource.isReadable()) {
                return ResponseEntity.ok()
                        .header(HttpHeaders.CONTENT_DISPOSITION, "inline; filename=\"" + resource.getFilename() + "\"")
                        .body(resource);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (MalformedURLException e) {
            return ResponseEntity.badRequest().build();
        }
    }


    @PostMapping(value = "/upload", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Map<String, String>> uploadFile(@RequestParam("file") MultipartFile file) throws IOException {
        if (file.isEmpty()) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "File is empty");
            return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
        }

        // Implement the logic to save the file on the server here
        // For example, you can save it to a directory named "uploads" in the current working directory
        String uploadDir = System.getProperty("user.dir") + "/uploads";
        try {
            // Ensure the directory exists; if not, create it
            Files.createDirectories(Path.of(uploadDir));

            // Generate a unique filename based on the uploaded file's name (UUID + original filename)
            String originalFileName = file.getOriginalFilename();
            String uniqueFileName = UUID.randomUUID() + "_" + originalFileName;

            // Set the file path (without the directory) to be saved in the database
            String filePath = uniqueFileName;

            // Save the file to the server
            Files.copy(file.getInputStream(), Paths.get(uploadDir, uniqueFileName), StandardCopyOption.REPLACE_EXISTING);

            // Return the generated file path (without the directory) in the response
            Map<String, String> successResponse = new HashMap<>();
            successResponse.put("filePath", filePath);

            return ResponseEntity.ok(successResponse);
        } catch (IOException e) {
            // Handle the exception if the file cannot be saved
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", "Failed to save file");
            return new ResponseEntity<>(errorResponse, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }



    @PostMapping("")
    public ResponseEntity<BannerDto> save(@RequestBody BannerDto BannerDto) {
        BannerDto savedBanner = bannerService.save(BannerDto);
        return new ResponseEntity<>(savedBanner, HttpStatus.CREATED);
    }


    @GetMapping("")
    public List<BannerDto> getAll(){
        return bannerService.findAll();
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<BannerDto> update( @RequestBody() BannerDto BannerDto, @PathVariable() Integer id)  {
        BannerDto BannerrDto = bannerService.update(BannerDto, id);
        return ResponseEntity.accepted().body(BannerrDto);
    }
    /*@GetMapping("/title/{title}")
    public ResponseEntity<BannerDto> findByTitle(@PathVariable() String title) {
        BannerDto BannerDto = bannerService.findByTitle(title);
        return ResponseEntity.ok(BannerDto);
    }*/

    @DeleteMapping("/id/{id}")
    public ResponseEntity<BannerDto> delete(@PathVariable() Integer id) {
        bannerService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<BannerDto> findById(@PathVariable("id") Integer id) {
        BannerDto bannerDto = bannerService.findById(id);
        return ResponseEntity.ok(bannerDto);
    }

}

