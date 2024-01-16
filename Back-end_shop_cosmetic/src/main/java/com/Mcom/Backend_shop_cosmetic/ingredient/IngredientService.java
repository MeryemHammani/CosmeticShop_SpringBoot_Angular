package com.Mcom.Backend_shop_cosmetic.ingredient;

import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import jakarta.transaction.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.util.HashMap;
import java.util.List;

public interface IngredientService {
    IngredientsDto save(IngredientsDto IngredientsDto);


    void delete(Integer id);

    IngredientsDto update(IngredientsDto IngredientsDto, Integer id);

    IngredientsDto getById(Integer id);
    IngredientsDto findByName(String name);

    List<IngredientsDto> findAll();

   HashMap<String, Object>getAllProducts(Integer id, Integer size);
}
