package com.Mcom.Backend_shop_cosmetic.User;


import com.Mcom.Backend_shop_cosmetic.Role.RoleDao;
import com.Mcom.Backend_shop_cosmetic.Role.RoleEntity;
import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartEntity;
import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartRequestDto;
import com.Mcom.Backend_shop_cosmetic.ShopingCart.ShopingCartResponseDto;
import com.Mcom.Backend_shop_cosmetic.exceptions.AppException;
import com.Mcom.Backend_shop_cosmetic.mappers.UserMapper;
import com.Mcom.Backend_shop_cosmetic.product.ProductDao;
import com.Mcom.Backend_shop_cosmetic.product.ProductDtoResponse;
import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import lombok.RequiredArgsConstructor;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.nio.CharBuffer;
import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
@Transactional
@RequiredArgsConstructor
public class UserServiceImp implements UserService {
    private final UserDao userDao;
    private final PasswordEncoder passwordEncoder;
    private final RoleDao roleDao;
    private final ModelMapper modelMapper;
    private final UserMapper userMapper;
    private final ProductDao productDao;

    @Override
    public UserDto save(SignUpDto userDto) {
        UserEntity user = userMapper.signUpToUser(userDto);

        user.setPassword(passwordEncoder.encode(CharBuffer.wrap(userDto.password())));

        UserEntity savedUser = userDao.save(user);

        return userMapper.toUserDto(savedUser);
    }

    @Override
    public UserDto login(CredentialsDto credentialsDto) {
        UserEntity user = userDao.findByEmail(credentialsDto.email()).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()), user.getPassword())) {
            return userMapper.toUserDto(user);
        }
        throw new AppException("Invalid password", HttpStatus.BAD_REQUEST);

    }

    @Override
    public void delete(UUID id) {
        userDao.deleteById(id);

    }

    @Override
    public UserDto update(SignUpDto userDto) {
        String pass=userDto.password();
        UserEntity old =this.userDao.findByEmail(userDto.email()).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        UserEntity userEntity = userMapper.signUpToUser(userDto);
        userEntity.setId(old.getId());
        //it is correct just if we won't update the roles (user)
        userEntity.setRoles(old.getRoles());
        userEntity.setPassword(old.getPassword());
        UserEntity updated = userDao.save(userEntity);
        return userMapper.toUserDto(updated);
    }

    @Override
    public UserDto updateCredential( CredentialUpdateDto credential) {
        UserDto userDto1=this.login(new CredentialsDto (credential.getOld_email(), credential.getOld_pass()));

        UserEntity old =this.userDao.findByEmail(credential.getOld_email()).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));

        if(!credential.getNew_pass().equals(""))
            old.setPassword(passwordEncoder.encode(CharBuffer.wrap(credential.getNew_pass())));

        if(!credential.getNew_email().equals(""))
            old.setEmail(credential.getNew_email());

        return userMapper.toUserDto(old);

    }

    @Override
    public List<UserDto> findAll() {
        return userDao.findAll().stream().map(el -> userMapper.toUserDto(el))
                .collect(Collectors.toList());
    }

    @Override
    public UserDto findById(UUID id) {
        return userMapper.toUserDto(userDao.findById(id)
                .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND)));
    }

    @Override
    public UserDto findByEmail(String email) {
        UserEntity userEntity =  userDao.findByEmail(email).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return userMapper.toUserDto(userEntity);
    }

    @Override
    public void addRoleToUser(String userName, String roleName) {
        UserEntity appUser =userDao.findByEmail(userName)  .orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        RoleEntity role= roleDao.findByRoleName(roleName);
        appUser.getRoles().add(role);
    }

    @Override
    public List<ProductDtoResponse> getWishlist(UUID id) {
        UserEntity userEntity =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        return  userEntity.getProducts().stream().map(el -> modelMapper.map(el,ProductDtoResponse.class)).collect(Collectors.toList());
    }

    @Override
    public void addToWishList(UUID id, Integer prod_id) {
        UserEntity userEntity =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        ProductEntity prod= productDao.findById(prod_id).orElseThrow(() -> new AppException("product not found", HttpStatus.NOT_FOUND));
        if(!userEntity.getProducts().contains(prod))
        userEntity.getProducts().add(prod);
    }

    @Override
    public void removeFromWishList(UUID id, Integer prod_id) {
        UserEntity userEntity =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        ProductEntity prod= productDao.getById(prod_id);
        userEntity.getProducts().remove(prod);

    }

    @Override
    public void removeAllFromWishList(UUID id) {
        UserEntity userEntity =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        userEntity.getProducts().clear();
    }

    @Override
    public List<ShopingCartResponseDto> getCarts(UUID id){
        UserEntity user =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
      return  user.getCarts().stream().map(el -> (modelMapper.map(el, ShopingCartResponseDto.class))).collect(Collectors.toList());
    }

    @Override
    public Integer getProductsCartCount(UUID id) {
        UserEntity user =  userDao.findById(id).orElseThrow(() -> new AppException("Unknown user", HttpStatus.NOT_FOUND));
        Integer count=user.getCarts().stream().map(ShopingCartEntity::getQuantity).reduce(0,Integer::sum);
        return count;
    }


}
