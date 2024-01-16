package com.Mcom.Backend_shop_cosmetic.brand;

import com.Mcom.Backend_shop_cosmetic.banner.BannerDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryDto;
import com.Mcom.Backend_shop_cosmetic.category.CategoryService;
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
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController
@RequestMapping("brands")
@RequiredArgsConstructor
public class BrandController {
    private final BrandService BrandService;

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
    public BrandDto save(@RequestBody BrandDto BrandDto) {
        return BrandService.save(BrandDto);
    }

    @GetMapping("")
    public List<BrandDto> getAll(){
        return BrandService.findAll();
    }


    @DeleteMapping("/name/{name}")
    public void deleteBrandByName(@PathVariable String name) {
        BrandService.deleteByName(name);
    }


    @GetMapping("/getProds")
    public ResponseEntity<HashMap<String,Object>> getAllProduct(@RequestParam  Integer id, @RequestParam Integer size){
        return new  ResponseEntity<>(BrandService.getAllProducts(id,size), HttpStatus.OK);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<BrandDto> update(@RequestBody() BrandDto BrandDto, @PathVariable() Integer id)  {
        BrandDto brandDto = BrandService.update(BrandDto, id);
        return ResponseEntity.accepted().body(brandDto);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<BrandDto> findByName(@PathVariable() String name) {
        BrandDto brandDto = BrandService.findByName(name);
        return ResponseEntity.ok(brandDto);
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<BrandDto> delete(@PathVariable() Integer id) {
        BrandService.delete(id);
        return ResponseEntity.noContent().build();
    }


    @GetMapping("id/{id}")
    public ResponseEntity<BrandDto>getById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(BrandService.findById(id),HttpStatus.OK);
    }


}
