package com.Mcom.Backend_shop_cosmetic.product;

import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientsDto;
import com.Mcom.Backend_shop_cosmetic.order.OrderResponseDto;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewsDtoResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
@RequestMapping("products")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

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

    @PutMapping("/updateQuantity/{productId}")
    public ResponseEntity<?> updateProductQuantity(
            @PathVariable("productId") Integer productId,
            @RequestParam("quantity") Integer quantity
    ) {
        // Call the service method to update the product quantity
        productService.updateProductQuantity(productId, quantity);

        return ResponseEntity.ok().build();
    }



    @PostMapping("")
    public ResponseEntity<ProductDtoResponse> save(@RequestBody ProductDtoRequest productDto) {
        return new  ResponseEntity<>(productService.save(productDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<HashMap<String,Object>>getAll(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new  ResponseEntity<>(productService.findAll(pageable),HttpStatus.OK);
    }

    @GetMapping("/getBestProducts")
    public ResponseEntity<HashMap<String,Object>>getAllBestProducts(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new  ResponseEntity<>(productService.getBestProducts(pageable),HttpStatus.OK);
    }

    @GetMapping("/getNewProducts")
    public ResponseEntity<HashMap<String,Object>>getNewProducts(@RequestParam int page, @RequestParam int size) {
        Pageable pageable = PageRequest.of(page, size);
        return new  ResponseEntity<>(productService.getNewProducts(pageable),HttpStatus.OK);
    }

    @GetMapping("/searchProducts")
    public ResponseEntity<HashMap<String,Object>>getSearchProducts(@RequestParam String query,@RequestParam int page, @RequestParam int size){
        Pageable pageable = PageRequest.of(page, size);
        return new  ResponseEntity<>(productService.getProductsSearch(query,pageable),HttpStatus.OK);
    }


    @GetMapping("/code/{code}")
    public ResponseEntity<ProductDtoResponse> getByCode(@PathVariable("code") String code){
        return new ResponseEntity<>(productService.findByCode(code),HttpStatus.OK);
    }

    //add later
    @PreAuthorize("hasRole('Admin')")
    @GetMapping("getReviews/{code}")
    public ResponseEntity<List<ReviewsDtoResponse>> getReviews(@PathVariable("code") String code){
        return new ResponseEntity<>(productService.getReviews(code),HttpStatus.OK);
    }

    @GetMapping("getValidReviews/{prod_id}")
    public ResponseEntity<List<ReviewsDtoResponse>> getValidReviews(@PathVariable("prod_id") Integer prod_id){
        return new ResponseEntity<>(productService.getValidReviews(prod_id),HttpStatus.OK);
    }

    @GetMapping("getIngredients/{code}")
    public ResponseEntity<List<IngredientsDto>> getIngredients(@PathVariable("code") String code){
        return new ResponseEntity<>(productService.getIngredients(code),HttpStatus.OK);
    }


    @PutMapping("id/{id}")
    public ResponseEntity<ProductDtoResponse> update(@RequestBody ProductDtoRequest productDto ,@PathVariable("id") Integer id){
        return  new ResponseEntity<>(productService.update(productDto,id),HttpStatus.ACCEPTED);
    }


    @DeleteMapping("/id/{id}")
     public ResponseEntity<?> delete(@PathVariable("id") Integer id){
         productService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('Admin')")
    @DeleteMapping("/code/{code}")
    public ResponseEntity<?> deleteByCode(@PathVariable("code") String  code ){
        productService.deleteByCode(code);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<ProductDtoResponse> finById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(productService.findById(id),HttpStatus.OK);
    }


    //get count
    @GetMapping("/count")
    public ResponseEntity<Long>getProdCount(){
       return ResponseEntity.ok(productService.getCount());
    }





}
