package com.Mcom.Backend_shop_cosmetic.coupon;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("coupons")
@RequiredArgsConstructor
public class CouponController {

    private final CouponService CouponService;
    @PostMapping("")
    public CouponDto save(@RequestBody CouponDto CouponDto) {
        return CouponService.save(CouponDto);
    }

    @GetMapping("")
    public List<CouponDto> getAll(){
        return CouponService.findAll();
    }


    @DeleteMapping("/couponName/{couponName}")
    public void deleteByCouponName(@PathVariable String couponName) {
        CouponService.deleteByCouponName(couponName);
    }



    @PutMapping("/id/{id}")
    public ResponseEntity<CouponDto> update(@RequestBody() CouponDto CouponDto, @PathVariable() Integer id)  {
        CouponDto couponDto = CouponService.update(CouponDto, id);
        return ResponseEntity.accepted().body(couponDto);
    }

    @GetMapping("/couponName/{couponName}")
    public ResponseEntity<CouponDto> findByCouponName(@PathVariable() String couponName) {
        CouponDto couponDto = CouponService.findByCouponName(couponName);
        return ResponseEntity.ok(couponDto);
    }

    @DeleteMapping("/id/{id}")
    public ResponseEntity<CouponDto> delete(@PathVariable() Integer id) {
        CouponService.delete(id);
        return ResponseEntity.noContent().build();
    }


}
