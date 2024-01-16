package com.Mcom.Backend_shop_cosmetic.blog;

import com.Mcom.Backend_shop_cosmetic.contact.ContactEntity;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Transactional
@RequiredArgsConstructor
public class BlogServiceImp implements BlogService {


    private final BlogDao blogDao;
    @Override
    public BlogEntity save(BlogEntity blog) {
        return this.blogDao.save(blog) ;
    }

    @Override
    public BlogEntity findById(Integer id) {
        return blogDao.findById(id)
                .orElse(null);
    }
    @Override
    public List<BlogEntity> getAll() {
        return this.blogDao.findAll();
    }

    @Override
    public void delete(Integer id) {
        this.blogDao.deleteById(id);

    }

    @Override
    public void deleteAll() {
        this.blogDao.deleteAll();

    }

    @Override
    public BlogEntity update(BlogEntity blog) {
        return blogDao.save(blog);

    }
}
