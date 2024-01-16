package com.Mcom.Backend_shop_cosmetic.orderItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("orderItem")
public class OrderItemController {
    @Autowired
    private OrderItemService orderItemService;

    @PostMapping("")
    public ResponseEntity<OrderItemDto> save(@RequestBody OrderItemDto orderItemDto) {
        return new  ResponseEntity<>(orderItemService.save(orderItemDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<OrderItemDto>>findAll(){

        return new  ResponseEntity<>(orderItemService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id")
    public ResponseEntity<OrderItemDto> finById(@RequestBody OrderItemKey id){
        return new ResponseEntity<>(orderItemService.findById(id),HttpStatus.OK);
    }

    @PutMapping("")
    public ResponseEntity<OrderItemDto> update(@RequestBody OrderItemDto orderItemDto){
        return  new ResponseEntity<>(orderItemService.update(orderItemDto),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("")
    public ResponseEntity<?> delete(@RequestBody OrderItemKey id){
        orderItemService.delete(id);
        return ResponseEntity.noContent().build();
    }
    
}
