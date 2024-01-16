package com.Mcom.Backend_shop_cosmetic.mappers;
import com.Mcom.Backend_shop_cosmetic.User.SignUpDto;
import com.Mcom.Backend_shop_cosmetic.User.UserDto;
import com.Mcom.Backend_shop_cosmetic.User.UserEntity;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
@Mapper(componentModel = "spring")
public interface UserMapper {

    UserDto toUserDto(UserEntity user);

    @Mapping(target = "password", ignore = true)
    UserEntity signUpToUser(SignUpDto signUpDto);
}

