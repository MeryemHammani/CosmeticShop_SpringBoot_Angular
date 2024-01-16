package com.Mcom.Backend_shop_cosmetic.product;

import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientsDto;
import com.Mcom.Backend_shop_cosmetic.order.OrderResponseDto;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewsDtoResponse;
import org.springframework.data.domain.Pageable;


import java.util.HashMap;
import java.util.List;

public interface ProductService {

    //to save a new product
    ProductDtoResponse save(ProductDtoRequest productDto);

    //to delete  a product by its  iD
      void delete(Integer id);

    // to delete by code
    Long  deleteByCode(String code);
    ProductDtoResponse update(ProductDtoRequest productDto, Integer id);
    ProductDtoResponse findByCode(String code);
    //to list all product
    HashMap<String,Object>findAll( Pageable pageable);

    // get boi ingredients in  a product ;
    List<IngredientsDto> getIngredients(String code);
    List<ReviewsDtoResponse> getReviews(String code);

    List<ReviewsDtoResponse> getValidReviews(Integer id);
    long getCount();

    HashMap<String,Object> getBestProducts(Pageable page);
    HashMap<String,Object> getNewProducts(Pageable page);

    //get search products
    HashMap<String,Object> getProductsSearch(String query,Pageable page);
    //get product rating
   Integer getProductRating(Integer prod_id);
    ProductDtoResponse findById(Integer id);
    void updateProductQuantity(Integer productId, Integer quantity);




}
