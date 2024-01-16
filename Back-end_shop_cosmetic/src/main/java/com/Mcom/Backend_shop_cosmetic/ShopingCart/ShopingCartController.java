package com.Mcom.Backend_shop_cosmetic.ShopingCart;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;


@RestController
@RequestMapping("shopingcarts")
@RequiredArgsConstructor
public class ShopingCartController {
    private final ShopingCartService ShopingCartService;

    @PostMapping("")
    public ShopingCartResponseDto save(@RequestBody ShopingCartRequestDto ShopingCartDto) {
        return ShopingCartService.save(ShopingCartDto);
    }

    @GetMapping("")
    public List<ShopingCartResponseDto> getAll(){
        return ShopingCartService.findAll();
    }



    @PutMapping("")
    public ResponseEntity<ShopingCartResponseDto> update(@RequestBody() ShopingCartRequestDto ShopingCartDto)  {
        ShopingCartResponseDto shopingCartDto = ShopingCartService.update(ShopingCartDto);
        return ResponseEntity.accepted().body(shopingCartDto);
    }


    @DeleteMapping("/RemoveCart")
    public ResponseEntity<ShopingCartRequestDto> delete(@RequestParam UUID user_id, @RequestParam Integer product_id) {
        CartKey id=new CartKey();
        id.setUser_id(user_id);
        id.setProduct_id(product_id);
        ShopingCartService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('User')")
    @DeleteMapping({"/RemoveAllCarts/{user_id}"})
    public ResponseEntity<?> RemoveAllUserCarts(@PathVariable UUID user_id){
        this.ShopingCartService.removeAllUserCart(user_id);
        return ResponseEntity.noContent().build();
    }


}
