package com.Mcom.Backend_shop_cosmetic.contact;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ContactServiceImpl implements  ContactService{
    private final ContactDao contactDao;
    @Override
    public ContactEntity save(ContactEntity contact) {
        return contactDao.save(contact);
    }

    @Override
    public List<ContactEntity> getAll() {
        return contactDao.findAll();
    }

    @Override
    public ContactEntity update(ContactEntity contact) {
        return contactDao.save(contact);

    }

    @Override
    public void delete(Integer id) {
        contactDao.deleteById(id);
    }

    @Override
    public ContactEntity findById(Integer id) {
        return contactDao.findById(id)
                .orElse(null);
    }


}
