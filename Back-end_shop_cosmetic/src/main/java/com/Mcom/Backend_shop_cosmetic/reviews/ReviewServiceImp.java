package com.Mcom.Backend_shop_cosmetic.reviews;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;
@Service
@RequiredArgsConstructor

public class ReviewServiceImp implements ReviewService{
    private final ReviewDao ReviewDao;
    private final ModelMapper modelMapper;
   

    @Override
    public ReviewsDtoResponse save(ReviewsDtoRequest ReviewsDto) {
        ReviewEntity ReviewEntity = modelMapper.map(ReviewsDto, ReviewEntity.class);
        ReviewEntity saved = ReviewDao.save(ReviewEntity);
        return  this.ReviewMapper(saved);
    }


    @Override
    public void delete(Integer id) {
        ReviewDao.deleteById(id);

    }

    @Override
    public ReviewsDtoResponse update(ReviewsDtoRequest ReviewsDto, Integer id) {
        Optional<ReviewEntity> reviewEntityOptional = ReviewDao.findById(id);

            ReviewEntity existingReviewEntity = reviewEntityOptional.get();

            // Update the review text if present in the request
            if (ReviewsDto.getReview() != null) {
                existingReviewEntity.setReview(ReviewsDto.getReview());
            }

            // Update the rating if present in the request
            if (ReviewsDto.getRating() != null) {
                existingReviewEntity.setRating(ReviewsDto.getRating());
            }

            // Update the validity if present in the request
            if (ReviewsDto.getValid() != null) {
                existingReviewEntity.setValid(ReviewsDto.getValid());
            }

            // Save the updated entity
            ReviewEntity updated = ReviewDao.save(existingReviewEntity);

            // Map the updated entity to DTO and return
            return this.ReviewMapper(updated);
    }




    @Override
    public List<ReviewsDtoResponse> findAll() {
        return ReviewDao.findAll().stream().map(el ->this.ReviewMapper(el)).collect(Collectors.toList());
    }

  public  ReviewsDtoResponse  ReviewMapper(ReviewEntity reviewEntity){
        Integer id=reviewEntity.getId();
        String review=reviewEntity.getReview();
        Integer rating=reviewEntity.getRating();
        UUID user_id=reviewEntity.getUser().getId() ;
        String firstName=reviewEntity.getUser().getFirstName();
        String lastName=reviewEntity.getUser().getLastName();
        String product_name=reviewEntity.getProduct().getName();
        String code=reviewEntity.getProduct().getCode();
      String image=reviewEntity.getProduct().getImage();
        Date created_at=reviewEntity.getCreated_at();
         boolean valid=reviewEntity.getValid();
        return new ReviewsDtoResponse(id,review,rating,user_id,firstName,lastName,product_name,code,image,valid,created_at);
    }

    @Override
    public List<ReviewsDtoResponse> getValidReviews(Integer prod_id) {
     return ReviewDao.getValidReviews(prod_id).stream().map(el ->this.ReviewMapper(el)).collect(Collectors.toList());

    }

}
