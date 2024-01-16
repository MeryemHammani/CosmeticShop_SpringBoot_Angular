package com.Mcom.Backend_shop_cosmetic.faqItem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/faqItems")
public class FaqItemController {
    @Autowired
    private FaqItemService faqItemService;

    @PostMapping("")
    public ResponseEntity<FaqItemResponseDto> save(@RequestBody FaqItemRequestDto faqItemDto) {
        return new  ResponseEntity<>(faqItemService.save(faqItemDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<FaqItemResponseDto>>findAll(){

        return new  ResponseEntity<>(faqItemService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<FaqItemResponseDto> finById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(faqItemService.findById(id),HttpStatus.OK);
    }

    @PutMapping("id/{id}")
    public ResponseEntity<FaqItemResponseDto> update(@RequestBody FaqItemRequestDto faqItemDto , @PathVariable("id") Integer id){
        return  new ResponseEntity<>(faqItemService.update(faqItemDto,id),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        faqItemService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
