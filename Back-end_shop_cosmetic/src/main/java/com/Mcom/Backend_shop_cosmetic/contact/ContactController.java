package com.Mcom.Backend_shop_cosmetic.contact;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor

public class ContactController {
    private  final ContactService contactService;
    @PostMapping("/addContact")
    public ResponseEntity<ContactEntity> save(@RequestBody ContactEntity contact) {
        return new  ResponseEntity<>(contactService.save(contact), HttpStatus.CREATED);
    }

    @GetMapping("/getContacts")
    public ResponseEntity<List<ContactEntity>>getAll(){
        return new  ResponseEntity<>(contactService.getAll(),HttpStatus.OK);
    }

    @DeleteMapping("/deleteContact/{id}")
    public ResponseEntity<?>deleteContact(@PathVariable Integer id ){
        contactService.delete(id);
        return  ResponseEntity.noContent().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ContactEntity> getContactById(@PathVariable Integer id) {
        ContactEntity contact = contactService.findById(id);

        if (contact == null) {
            return ResponseEntity.notFound().build();
        }

        return ResponseEntity.ok(contact);
    }

    @PutMapping("/updateContact/{id}")
    public ResponseEntity<ContactEntity>updateContact( @RequestBody ContactEntity contact){
        return  ResponseEntity.accepted().body(contactService.update(contact));
    }
}
