package com.Mcom.Backend_shop_cosmetic.product;

import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.ingredient.IngredientsDto;
import com.Mcom.Backend_shop_cosmetic.multiImages.MultiImageEntity;
import com.Mcom.Backend_shop_cosmetic.order.OrderResponseDto;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewService;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewsDtoResponse;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import org.springframework.data.domain.Pageable;

import java.util.HashMap;
import java.util.List;
import java.util.stream.Collectors;
import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;

@Service
@RequiredArgsConstructor

public class ProductServiceImp implements ProductService{

    private final ProductDao productDao;
    private final ModelMapper modelMapper;
    private final ReviewService reviewService;
    @Override
    public ProductDtoResponse save(ProductDtoRequest productDto) {
        ProductEntity productEntity = modelMapper.map(productDto, ProductEntity.class);
       /* List<MultiImageEntity>images= productEntity.getImages();
        for(int i=0; i<images.size();i++){
            images.get(i).setProduct(productEntity);
        }*/
        ProductEntity savedProduct = productDao.save(productEntity);
        return modelMapper.map(savedProduct, ProductDtoResponse.class);
    }

    @Override
    public void updateProductQuantity(Integer productId, Integer quantity) {
        // Retrieve the product by its ID
        ProductEntity product = productDao.findById(productId)
                .orElseThrow(() -> new AppException("Product not found", HttpStatus.NOT_FOUND));

        // Update the product's quantity
        product.setQuantity(quantity);

        // Save the updated product
        productDao.save(product);
    }


    @Override
    public ProductDtoResponse findById(Integer id) {
        return modelMapper.map(productDao.findById(id).get(), ProductDtoResponse.class);
    }

    @Override
    public void delete(Integer id) {
        productDao.deleteById(id);
    }

    @Transactional
    @Override
    public Long deleteByCode(String code) {
       return  productDao.deleteByCode(code);
    }

    @Override
    public ProductDtoResponse update(ProductDtoRequest productDto ,Integer id) {

        ProductEntity productEntity= modelMapper.map(productDto,ProductEntity.class);
        productEntity.setId(id);
//        List<MultiImageEntity>images= productEntity.getImages();
//        for(int i=0; i<images.size();i++){
//            images.get(i).setProduct(productEntity);
//        }
        return  modelMapper.map(productDao.save(productEntity), ProductDtoResponse.class);

    }

    @Override
    public ProductDtoResponse findByCode(String code) {
        ProductEntity productEntity =  productDao.findByCode(code).orElseThrow(() -> new AppException("product not found", HttpStatus.NOT_FOUND));
        ProductDtoResponse prod=modelMapper.map(productEntity, ProductDtoResponse.class);
       //set the product rating
        Integer id = prod.getId();
        prod.setRating(getProductRating(id));
        return prod;
    }

    @Override
    public   HashMap<String,Object> findAll( Pageable pageable) {
        Page<ProductEntity>prodsPage= productDao.findAll(pageable);
        List<ProductDtoResponse>products=prodsPage.getContent().stream().map(el -> modelMapper.map(el, ProductDtoResponse.class)).collect(Collectors.toList());
        //store rating foreach products
        getRatingList(products);
        HashMap<String,Object> response= new HashMap<String,Object>();
        response.put("total",prodsPage.getTotalElements());
        response.put("pages",prodsPage.getTotalPages());
        response.put("products",products);
        return response;
    }

//list of products
    @Override
    public List<IngredientsDto> getIngredients(String code) {
        ProductEntity productEntity=productDao.findByCode(code).orElseThrow(() -> new AppException("product not found", HttpStatus.NOT_FOUND));
        return  productEntity.getBioIngredients().stream().map(el -> modelMapper.map(el,IngredientsDto.class)).collect(Collectors.toList());
    }

    @Override
    public List<ReviewsDtoResponse> getReviews(String code) {
        ProductEntity productEntity=productDao.findByCode(code).orElseThrow(() -> new AppException("product not found", HttpStatus.NOT_FOUND));
        return  productEntity.getReviews().stream().map(el ->reviewService.ReviewMapper(el)).collect(Collectors.toList());
    }

    @Override
    public List<ReviewsDtoResponse> getValidReviews(Integer prod_id) {
        return reviewService.getValidReviews(prod_id);
    }

    // get count of allproducts


    public long getCount() {
        return productDao.count();
    }


   //get best products
    @Override
    public HashMap<String,Object>  getBestProducts(Pageable page) {
        Page<ProductEntity>prodsPage= productDao.getBestOffers(page);
        List<ProductDtoResponse>products=prodsPage.getContent().stream().map(el -> modelMapper.map(el, ProductDtoResponse.class)).collect(Collectors.toList());
       //store rating foreach products
        getRatingList(products);
        HashMap<String,Object> response= new HashMap<String,Object>();
        response.put("total",prodsPage.getTotalElements());
        response.put("pages",prodsPage.getTotalPages());
        response.put("products",products);
        return response;

    }

    //get new products
    @Override
    public HashMap<String,Object> getNewProducts(Pageable page) {
        Page<ProductEntity>prodsPage=productDao.getNewProducts(page);
        List<ProductDtoResponse>products=prodsPage.getContent().stream().map(el -> modelMapper.map(el, ProductDtoResponse.class)).collect(Collectors.toList());
        //store rating foreach products
        getRatingList(products);
        HashMap<String,Object>response=new HashMap<String,Object>();
        response.put("total",prodsPage.getTotalElements());
        response.put("pages",prodsPage.getTotalPages());
        response.put("products",products);
        return  response;
    }

    @Override
    public HashMap<String,Object> getProductsSearch(String query,Pageable page) {
        Page<ProductEntity>prodsPage=productDao.SearchProducts(query,page);
        List<ProductDtoResponse>products=prodsPage.getContent().stream().map(el -> modelMapper.map(el, ProductDtoResponse.class)).collect(Collectors.toList());
        //store rating foreach products
        getRatingList(products);
        HashMap<String,Object>response=new HashMap<String,Object>();
        response.put("total",prodsPage.getTotalElements());
        response.put("pages",prodsPage.getTotalPages());
        response.put("products",products);
        return  response;
    }

    @Override
     public Integer getProductRating(Integer prod_id) {
        return this.productDao.getProductRating(prod_id);
    }

// get rating for a list of products
public void getRatingList(List<ProductDtoResponse> products){

    for (ProductDtoResponse product : products) {
        Integer id = product.getId();
        Integer rating = getProductRating(id);
        product.setRating(rating);
    }
    }



}
