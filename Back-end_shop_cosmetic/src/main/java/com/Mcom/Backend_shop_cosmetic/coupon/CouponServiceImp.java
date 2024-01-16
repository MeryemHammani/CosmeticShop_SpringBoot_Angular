package com.Mcom.Backend_shop_cosmetic.coupon;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CouponServiceImp implements CouponService{

    private final CouponDao CouponDao;
    private final ModelMapper modelMapper;

    @Override
    public CouponDto save(CouponDto CouponDto) {
        CouponEntity couponEntity = modelMapper.map(CouponDto, CouponEntity.class);
        CouponEntity savedCoupon = CouponDao.save(couponEntity);
        return modelMapper.map(savedCoupon, CouponDto.class);
    }

    @Override
    public void delete(Integer id) {
        CouponDao.deleteById(id);
    }

    @Override
    public CouponDto update(CouponDto CouponDto,Integer id) {
        Optional<CouponEntity> clientEntityOptional = CouponDao.findById(id);
        CouponEntity couponEntity = modelMapper.map(CouponDto, CouponEntity.class);
        couponEntity.setId(id);
        CouponEntity updated = CouponDao.save(couponEntity);
        return modelMapper.map(updated, CouponDto.class);
    }

    @Override
    public CouponDto findByCouponName(String coupon_name) {
        CouponEntity couponEntity = CouponDao.findByCouponName(coupon_name);
        return modelMapper.map(couponEntity, CouponDto.class);
    }


    @Override
    public List<CouponDto> findAll() {
        return CouponDao.findAll().stream().map(el -> modelMapper.map(el, CouponDto.class)).collect(Collectors.toList());
    }
   @Transactional
    @Override
    public void deleteByCouponName(String couponName) {
       CouponDao.deleteByCouponName(couponName);
   }

}
