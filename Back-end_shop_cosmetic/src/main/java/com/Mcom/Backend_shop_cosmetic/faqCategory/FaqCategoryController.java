package com.Mcom.Backend_shop_cosmetic.faqCategory;

import com.Mcom.Backend_shop_cosmetic.faqItem.FaqItemResponseDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faqCategories")
public class FaqCategoryController {

    @Autowired
    private FaqCategoryService faqCategoryService;

    @PostMapping("")
    public ResponseEntity<FaqCategoryDto> save(@RequestBody FaqCategoryDto FaqCategoryDto) {
        return new  ResponseEntity<>(faqCategoryService.save(FaqCategoryDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<FaqCategoryDto>>findAll(){

        return new  ResponseEntity<>(faqCategoryService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<FaqCategoryDto> finById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(faqCategoryService.findById(id),HttpStatus.OK);
    }

    @PutMapping("/id/{id}")
    public ResponseEntity<FaqCategoryDto> update(@RequestBody FaqCategoryDto faqCategoryDto, @PathVariable("id") Integer id){
        return  new ResponseEntity<>(faqCategoryService.update(faqCategoryDto ,id),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        faqCategoryService.delete(id);
        return ResponseEntity.noContent().build();
    }

    // get faqItems of a faqCategory
    @GetMapping("/getFaqItems/{name}")
    public ResponseEntity<List<FaqItemResponseDto>>getFaqItems(@PathVariable String name ){
        return new  ResponseEntity<>(faqCategoryService.getFaqItem(name),HttpStatus.OK);
    }


}
