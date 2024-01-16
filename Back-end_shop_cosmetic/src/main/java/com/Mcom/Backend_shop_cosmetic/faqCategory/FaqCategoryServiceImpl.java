package com.Mcom.Backend_shop_cosmetic.faqCategory;

import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.faqItem.FaqItemResponseDto;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;


@Service
@RequiredArgsConstructor
public class FaqCategoryServiceImpl implements  FaqCategoryService{
    private final ModelMapper modelMapper ;
    private final FaqCategoryDao faqCategoryDao;
    
    
    @Override
    public FaqCategoryDto save(FaqCategoryDto faqCategoryDto) {

        FaqCategoryEntity faq=modelMapper.map(faqCategoryDto, FaqCategoryEntity.class);
        return modelMapper.map(faqCategoryDao.save(faq), FaqCategoryDto.class);

    }

    @Override
    public List<FaqCategoryDto> findAll() {
        return faqCategoryDao.findAll().stream().map(el -> modelMapper.map(el , FaqCategoryDto.class)).collect(Collectors.toList());

    }

    @Override
    public FaqCategoryDto findById(Integer id) {
        return modelMapper.map(faqCategoryDao.findById(id).get(), FaqCategoryDto.class);

    }

    @Override
    public void delete(Integer id) {
        faqCategoryDao.deleteById(id);
    }

    @Override
    public FaqCategoryDto update(FaqCategoryDto faqCategoryDto, Integer id) {
        FaqCategoryEntity faq= modelMapper.map(faqCategoryDto,FaqCategoryEntity.class);
        faq.setId(id);
        return modelMapper.map(faqCategoryDao.save(faq), FaqCategoryDto.class);
    }

    @Override
    public List<FaqItemResponseDto> getFaqItem(String name) {
        FaqCategoryEntity faq=  faqCategoryDao.findByName(name);
        return faq.getFaqItems().stream().map(el -> modelMapper.map(el , FaqItemResponseDto.class)).collect(Collectors.toList());
    }
}
