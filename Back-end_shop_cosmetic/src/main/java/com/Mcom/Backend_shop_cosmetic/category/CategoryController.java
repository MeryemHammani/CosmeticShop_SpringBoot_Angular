package com.Mcom.Backend_shop_cosmetic.category;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.subCategory.SubCategoryResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.*;
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
@RequestMapping("categories")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;


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
    public ResponseEntity<CategoryDto> save(@RequestBody CategoryDto categoryDto) {
        return  new ResponseEntity<>(categoryService.save(categoryDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<CategoryDto>>getAll(){
        return new ResponseEntity<>(categoryService.findAll(),HttpStatus.OK);
    }

    @GetMapping("id/{id}")
    public ResponseEntity<CategoryDto>getById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(categoryService.findById(id),HttpStatus.OK);
    }

    @GetMapping("name/{name}")
    public ResponseEntity<CategoryDto>getByName(@PathVariable("name") String name){
        return new ResponseEntity<>(categoryService.findByName(name),HttpStatus.OK);
    }
    @PutMapping("id/{id}")
    public ResponseEntity<CategoryDto>update(@RequestBody CategoryDto categoryDto, @PathVariable("id") Integer id ){
        return  new ResponseEntity<>(categoryService.update(categoryDto,id), HttpStatus.ACCEPTED );
    }

    @DeleteMapping("id/{id}")
    public ResponseEntity<?> delete (@PathVariable  Integer id){
        categoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

    //get subcategories of a  category
    @GetMapping("getSubCategories/{id}")
    public ResponseEntity<List<SubCategoryResponseDto>> getSubCategories (@PathVariable  Integer id){
        return ResponseEntity.ok(categoryService.getSubCategories(id));
    }


    //get products of a category
    @GetMapping("getCatProducts")
    public ResponseEntity<HashMap<String,Object>> getCategoryProducts (@RequestParam  Integer id, @RequestParam Integer size){
        return ResponseEntity.ok(categoryService.getCatProducts(id,size));
    }

  //get count of products
  @GetMapping("getProductsCount/{id}")
  public ResponseEntity<Map<String, Integer>> getProductsCount (@PathVariable  Integer id){
      Map<String, Integer> response = new HashMap<>();
      response.put("count",categoryService.getProductCount(id) );
      return ResponseEntity.ok(response);
  }









}
