package com.Mcom.Backend_shop_cosmetic.User;

import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartResponseDto;
import com.Mcom.Backend_shop_cosmetic.config.UserAuthenticationProvider;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@RestController




public class UserController {

    private UserService userService;
    private final UserAuthenticationProvider userAuthenticationProvider;


    public UserController(UserService userService,UserAuthenticationProvider userAuthenticationProvider ) {
        this.userService = userService;
        this.userAuthenticationProvider=userAuthenticationProvider;
    }


    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto userDto) {
       UserDto user=userService.save(userDto);
       user.setToken(userAuthenticationProvider.createToken(user));
        return  new ResponseEntity<>(user, HttpStatus.CREATED);
    }


    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) {
        UserDto user=userService.login(credentialsDto);
       user.setToken(userAuthenticationProvider.createToken(user));
        return  new ResponseEntity<>(user, HttpStatus.OK);
    }


    @GetMapping("/getUsers")
    public ResponseEntity<List<UserDto>>getAll(){

        return ResponseEntity.ok().body(userService.findAll());
    }

    @PutMapping("UserUpdate")
    public ResponseEntity<UserDto> update(@RequestBody() SignUpDto userDto)  {
        UserDto user=userService.update(userDto);
        user.setToken(userAuthenticationProvider.createToken(user));
        return ResponseEntity.accepted().body(user);
    }

    @PreAuthorize("hasRole('User')")
    @PutMapping("UpdateCredential")
    public ResponseEntity<UserDto> updateCredential(@RequestBody() CredentialUpdateDto credential )  {
        UserDto user=userService.updateCredential(credential);
        user.setToken(userAuthenticationProvider.createToken(user));
        return ResponseEntity.accepted().body(user);
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("/id/{id}")
    public ResponseEntity<UserDto> findById(@PathVariable() UUID id) {
        return ResponseEntity.ok().body(userService.findById(id));
    }



    @DeleteMapping("delUser/id/{id}")
    public ResponseEntity<SignUpDto> delete(@PathVariable() UUID id) {
        userService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('Admin')")
    @GetMapping("email/{email}")
    public ResponseEntity<UserDto> getByCode(@PathVariable("email") String code){
        return new ResponseEntity<>(userService.findByEmail(code),HttpStatus.OK);
    }

    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getWishList/{id}"})
    public ResponseEntity<List<ProductDtoResponse>>getWishList( @PathVariable UUID id){
        return ResponseEntity.ok(userService.getWishlist(id));
    }


    @PreAuthorize("hasRole('User')")
    @PostMapping({"/AddProdToWishList"})
    public ResponseEntity<Map<String, String>>getWishList( @RequestBody WishProd wishProd){
        this.userService.addToWishList(wishProd.user_id(),wishProd.prod_id());
        Map<String, String> response = new HashMap<>();
        response.put("message", "Added Successfully");
        return new ResponseEntity<>(response,HttpStatus.CREATED);
    }

    @PreAuthorize("hasRole('User')")
    @DeleteMapping({"/RemoveFromWishList"})
    public ResponseEntity<?>RemoveFromWishList(@RequestParam UUID user_id, @RequestParam Integer prod_id){
        this.userService.removeFromWishList(user_id,prod_id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('User')")
    @DeleteMapping({"/RemoveAllFromWishList/{user_id}"})
    public ResponseEntity<?> RemoveAllFromWishList(@PathVariable UUID user_id){
        this.userService.removeAllFromWishList(user_id);
        return ResponseEntity.noContent().build();
    }

    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getCart/{id}"})
    public ResponseEntity<List<ShopingCartResponseDto>> getUserCarts(@PathVariable UUID id){
        return ResponseEntity.ok(this.userService.getCarts(id));
    }

    @PreAuthorize("hasRole('User')")
    @GetMapping({"/getCountCart/{id}"})
    public ResponseEntity<Map<String, Integer>> getCountCart(@PathVariable UUID id){
        Map<String,Integer> response = new HashMap<>();
        response.put("count", this.userService.getProductsCartCount(id));
        return  ResponseEntity.ok(response);
    }
}
