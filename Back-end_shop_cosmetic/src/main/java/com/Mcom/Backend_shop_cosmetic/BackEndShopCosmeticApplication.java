package com.Mcom.Backend_shop_cosmetic;

import com.Mcom.Backend_shop_cosmetic.Role.RoleDto;

import com.Mcom.Backend_shop_cosmetic.Role.RoleService;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewEntity;
import com.Mcom.Backend_shop_cosmetic.reviews.ReviewsDtoResponse;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import com.Mcom.Backend_shop_cosmetic.User.SignUpDto;
import com.Mcom.Backend_shop_cosmetic.User.UserService;

import java.util.ArrayList;
import java.util.Date;
import java.util.UUID;


import org.modelmapper.ModelMapper;
@EnableGlobalMethodSecurity(prePostEnabled = true)
@SpringBootApplication
public class BackEndShopCosmeticApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackEndShopCosmeticApplication.class, args);
	}

	@Bean
	public ModelMapper modelMapper() {
		return new ModelMapper();
	}





	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}


//	@Bean
//	CommandLineRunner start(UserService service, RoleService roleService,ModelMapper modelMapper) {
//		return args -> {
//			RoleDto userRoleDto= new RoleDto("User", null);
//			RoleDto adminRoleDto= new RoleDto("Admin", null);
//			roleService.save( userRoleDto);
//			roleService.save(adminRoleDto);
//			SignUpDto user1 = new SignUpDto(
//					"admin1",
//					"nom",
//					"admin@gmail.com",
//					"Admin123#",
//					"0533443955",
//					"maroc",
//					"fes",
//					"m",
//					null
//			);
//			SignUpDto user2 = new SignUpDto(
//					"user1",
//					"nom",
//					"user@gmail.com",
//					"User123#",
//					"0533543955",
//					"maroc",
//					"fes",
//					"f",
//					null
//			);
//			service.save(user1);
//			service.save(user2);
//
//			service.addRoleToUser(user1.email(),"Admin");
//			service.addRoleToUser(user1.email(),"User");
//			service.addRoleToUser(user2.email(), "User");
//
//		};
//	}

}

