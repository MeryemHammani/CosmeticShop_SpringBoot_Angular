package com.Mcom.Backend_shop_cosmetic.flushItem;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("flushItems")
public class FlushItemController {
    @Autowired
    private FlushItemService flushItemService;

    @PostMapping("")
    public ResponseEntity<FlushItemDto> save(@RequestBody FlushItemDto flushItemDto) {
        return new  ResponseEntity<>(flushItemService.save(flushItemDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<FlushItemDto>>findAll(){

        return new  ResponseEntity<>(flushItemService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<FlushItemDto> finById(@RequestBody FlushItemKey id){
        return new ResponseEntity<>(flushItemService.findById(id),HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<FlushItemDto> update(@RequestBody FlushItemDto flushItemDto){
        return  new ResponseEntity<>(flushItemService.update(flushItemDto),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("")
    public ResponseEntity<?> delete(@RequestBody FlushItemKey id){
        flushItemService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
