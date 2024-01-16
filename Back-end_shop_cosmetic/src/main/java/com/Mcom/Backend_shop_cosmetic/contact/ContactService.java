package com.Mcom.Backend_shop_cosmetic.contact;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;

import java.util.List;

public interface ContactService {
    ContactEntity save(ContactEntity contact);
    List<ContactEntity> getAll();
    ContactEntity update(ContactEntity contact);
    void delete(Integer id);
   ContactEntity findById(Integer id);
}
