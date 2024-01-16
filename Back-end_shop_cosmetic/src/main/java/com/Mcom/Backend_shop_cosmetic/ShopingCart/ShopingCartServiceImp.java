package com.Mcom.Backend_shop_cosmetic.ShopingCart;

import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor

public class ShopingCartServiceImp implements ShopingCartService {

    private final ShopingCartDao ShopingCartDao;
    private final ModelMapper modelMapper;


    public BigDecimal getPrice(BigDecimal price, Integer discount, Integer flushDiscount) {
        if (discount != 0 || flushDiscount != 0) {
            if (flushDiscount != 0) {
                discount = flushDiscount;
            }
            BigDecimal discountDecimal = new BigDecimal(discount);
            BigDecimal discountPercentage = discountDecimal.divide(new BigDecimal(100));
            return price.multiply(BigDecimal.ONE.subtract(discountPercentage));
        } else {
            return price;
        }
    }




    @Override
    public ShopingCartResponseDto save(ShopingCartRequestDto ShopingCartDto) {
        ShopingCartEntity ShopingCartEntity = modelMapper.map(ShopingCartDto, ShopingCartEntity.class);
        Optional<ShopingCartEntity>cart=ShopingCartDao.findById(ShopingCartEntity.getId());
        if(cart.isPresent()){
           ShopingCartEntity old=cart.get();
            Integer qte=old.getQuantity()+1;
            BigDecimal price=this.getPrice( old.getProduct().getPrice() , old.getProduct().getDiscount(), old.getProduct().getFlush_discount());
            BigDecimal sub_amount=old.getSub_amount().add(price);
            old.setQuantity(qte);
            old.setSub_amount(sub_amount);
            return modelMapper.map(ShopingCartDao.save(old), ShopingCartResponseDto.class);
        }
        else{
        ShopingCartEntity saved = ShopingCartDao.save(ShopingCartEntity);
        return modelMapper.map(saved, ShopingCartResponseDto.class);}
    }

    @Override
    public void delete(CartKey id) {
        ShopingCartDao.deleteById(id);

    }



    @Override
    public ShopingCartResponseDto update(ShopingCartRequestDto ShopingCartDto) {
        ShopingCartEntity ShopingCartEntity = modelMapper.map(ShopingCartDto, ShopingCartEntity.class);
        ShopingCartEntity updated = ShopingCartDao.save(ShopingCartEntity);
        return modelMapper.map(updated, ShopingCartResponseDto.class);
    }



    @Override
    public List<ShopingCartResponseDto> findAll() {
        return ShopingCartDao.findAll().stream().map(el -> modelMapper.map(el, ShopingCartResponseDto.class)).collect(Collectors.toList());

    }

    @Transactional
    @Override
    public void removeAllUserCart(UUID id) {
       this.ShopingCartDao.removeAllUserCarts(id);
    }



}
