package com.Mcom.Backend_shop_cosmetic.blog;

import com.Mcom.Backend_shop_cosmetic.brand.BrandDto;
import com.Mcom.Backend_shop_cosmetic.contact.ContactEntity;

import java.util.List;

public interface BlogService {

    BlogEntity save(BlogEntity blog);
    List<BlogEntity> getAll();
    void delete(Integer id);
    void deleteAll();

    BlogEntity findById(Integer id);

    BlogEntity update(BlogEntity blog);

}
