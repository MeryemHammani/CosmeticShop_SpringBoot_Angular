package com.Mcom.Backend_shop_cosmetic.reclamation;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class ReclamationController {
    private  final ReclamationService reclamationService;
    @PostMapping("/addReclamation")
    public ResponseEntity<ReclamationEntity> save(@RequestBody ReclamationEntity reclamation) {
        return new  ResponseEntity<>(reclamationService.save(reclamation), HttpStatus.CREATED);
    }

    @GetMapping("/getReclamations")
    public ResponseEntity<List<ReclamationEntity>>getAll(){
        return new  ResponseEntity<>(reclamationService.getAll(),HttpStatus.OK);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<?>deleteReclamation(@PathVariable Integer id ){
        reclamationService.delete(id);
        return  ResponseEntity.noContent().build();
    }

    @DeleteMapping("/deleteAll")
    public ResponseEntity<?>deleteAllReclamation( ){
        reclamationService.deleteAll();
        return  ResponseEntity.noContent().build();
    }
}
