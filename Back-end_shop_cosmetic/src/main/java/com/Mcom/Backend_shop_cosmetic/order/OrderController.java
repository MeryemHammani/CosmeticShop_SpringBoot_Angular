package com.Mcom.Backend_shop_cosmetic.order;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("orders")
public class OrderController {
    @Autowired
    private  OrderService orderService;

    @PostMapping("")
    public ResponseEntity<OrderResponseDto> save(@RequestBody OrderRequestDto orderDto) {
        return new  ResponseEntity<>(orderService.save(orderDto), HttpStatus.CREATED);
    }

    @GetMapping("")
    public ResponseEntity<List<OrderResponseDto>>findAll(){

        return new  ResponseEntity<>(orderService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/userOrders/{id}")
    public ResponseEntity<List<OrderResponseDto>>getAllUserOrders(@PathVariable("id") UUID id){
        return new  ResponseEntity<>(orderService.getUSerOrders(id),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<OrderResponseDto> finById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(orderService.findById(id),HttpStatus.OK);
    }

    @PutMapping("id/{id}")
    public ResponseEntity<OrderResponseDto> update(@RequestBody OrderRequestDto orderDto , @PathVariable("id") Integer id){
        return  new ResponseEntity<>(orderService.update(orderDto,id),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        orderService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
