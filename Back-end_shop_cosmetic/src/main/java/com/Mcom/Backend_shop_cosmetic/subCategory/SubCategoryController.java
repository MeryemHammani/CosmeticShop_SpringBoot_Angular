package com.Mcom.Backend_shop_cosmetic.subCategory;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;

@RestController
@RequestMapping("subCategories")
public class SubCategoryController {

    @Autowired
    private  SubCategoryService subCategoryService;

    @PostMapping("")
    public ResponseEntity<SubCategoryResponseDto> save(@RequestBody SubCategoryRequestDto subCategoryRequestDto){
     return new ResponseEntity<>(subCategoryService.save(subCategoryRequestDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<SubCategoryResponseDto>>getAll(){
        return new  ResponseEntity<>(subCategoryService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<SubCategoryResponseDto>getById(@PathVariable("id") Integer id ){
        return new ResponseEntity<>(subCategoryService.findById(id),HttpStatus.OK);
    }

    @GetMapping("/name/{name}")
    public ResponseEntity<SubCategoryResponseDto>getByName(@PathVariable("name") String name ){
        return new  ResponseEntity<>(subCategoryService.findByName(name),HttpStatus.OK);
    }


    @GetMapping("/allProducts")
    public ResponseEntity<HashMap<String,Object>> getAllProducts (@RequestParam  Integer id, @RequestParam Integer size){
            return new  ResponseEntity<>(subCategoryService.getAllProduct(id,size),HttpStatus.OK);
    }


    @PutMapping("/id/{id}")
    public ResponseEntity<SubCategoryResponseDto>update(@RequestBody SubCategoryRequestDto subCategoryRequestDto,@PathVariable("id") Integer id ){
        return  new ResponseEntity<>(subCategoryService.update(subCategoryRequestDto,id) ,HttpStatus.ACCEPTED);
    }


    @DeleteMapping("id/{id}")
    public ResponseEntity<?>delete(@PathVariable Integer id){
        subCategoryService.delete(id);
        return  ResponseEntity.noContent().build();
    }
}

