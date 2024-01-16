package com.Mcom.Backend_shop_cosmetic.reviews;

import jakarta.transaction.Transactional;

import java.util.List;

public interface ReviewService {
    ReviewsDtoResponse save(ReviewsDtoRequest ReviewDto);

    @Transactional
    void delete(Integer id);

    ReviewsDtoResponse update(ReviewsDtoRequest reviewDto, Integer id);


    List<ReviewsDtoResponse> findAll();
    ReviewsDtoResponse  ReviewMapper(ReviewEntity reviewEntity);

    List<ReviewsDtoResponse> getValidReviews(Integer prod_id);




}
