package com.Mcom.Backend_shop_cosmetic.reviews;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("reviews")
@RequiredArgsConstructor

public class ReviewController {

    private final ReviewService reviewService;
    @PostMapping("")
    public ReviewsDtoResponse save(@RequestBody ReviewsDtoRequest ReviewsDto) {
        return reviewService.save(ReviewsDto);
    }

    @GetMapping("")
    public List<ReviewsDtoResponse> getAll(){
        return reviewService.findAll();
    }



    @PutMapping("/id/{id}")
    public ResponseEntity<ReviewsDtoResponse> update(@RequestBody ReviewsDtoRequest reviewDto, @PathVariable Integer id) {
        ReviewsDtoResponse reviewsDto = reviewService.update(reviewDto, id);
        return ResponseEntity.accepted().body(reviewsDto);
    }
  

    @DeleteMapping("/id/{id}")
    public ResponseEntity<ReviewsDtoResponse> delete(@PathVariable() Integer id) {
        reviewService.delete(id);
        return ResponseEntity.noContent().build();
    }



}
