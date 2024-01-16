package com.Mcom.Backend_shop_cosmetic.flush;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flush")
public class FlushController {
    @Autowired
    private FlushService flushService;

    @PostMapping("")
    public ResponseEntity<FlushResponseDto> save(@RequestBody FlushRequestDto flushDto) {
        return new  ResponseEntity<>(flushService.save(flushDto), HttpStatus.CREATED);
    }
    @PutMapping("/endFlush/{id}")
    public ResponseEntity<?>endFlush(@PathVariable Integer id){
       flushService.EndFlush(id);
       return ResponseEntity.noContent().build();
    }

    @GetMapping("/getCurrentFlushes")
    public ResponseEntity<List<FlushResponseDto>>getCurrentFlush(){
        return new  ResponseEntity<>(flushService.getCurrentFlush(),HttpStatus.OK);

    }
    @GetMapping("")
    public ResponseEntity<List<FlushResponseDto>>findAll(){
        return new  ResponseEntity<>(flushService.findAll(),HttpStatus.OK);
    }

    @GetMapping("/id/{id}")
    public ResponseEntity<FlushResponseDto> finById(@PathVariable("id") Integer id){
        return new ResponseEntity<>(flushService.findById(id),HttpStatus.OK);
    }

    @PutMapping("id/{id}")
    public ResponseEntity<FlushResponseDto> update(@RequestBody FlushRequestDto flushDto , @PathVariable("id") Integer id){
        return  new ResponseEntity<>(flushService.update(flushDto,id),HttpStatus.ACCEPTED);
    }



    @DeleteMapping("/id/{id}")
    public ResponseEntity<?> delete(@PathVariable("id") Integer id){
        flushService.delete(id);
        return ResponseEntity.noContent().build();
    }

}
