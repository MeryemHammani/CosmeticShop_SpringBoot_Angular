package com.Mcom.Backend_shop_cosmetic.config;

import com.Mcom.Backend_shop_cosmetic.User.UserDto;
import com.Mcom.Backend_shop_cosmetic.User.UserService;
import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import jakarta.annotation.PostConstruct;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Value;
import java.util.*;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Component

public class UserAuthenticationProvider {

    @Value("${security.jwt.token.secret-key:secret-key}")
    private String secretKey;

    private final UserService userService;

    @PostConstruct
    protected void init() {
        // this is to avoid having the raw secret key available in the JVM
        secretKey = Base64.getEncoder().encodeToString(secretKey.getBytes());
    }

    public String createToken(UserDto user) {
        Date now = new Date();
        // Date validity = new Date(now.getTime() + 3600000); // 1 hour
        Date validity = new Date(now.getTime() + 36000000*24); // a day
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        List<String> roles= user.getRoles().stream()
                .map(el -> el.getRoleName() )
                .collect(Collectors.toList());

        return JWT.create()
                .withIssuer(user.getEmail())
                .withIssuedAt(now)
                .withExpiresAt(validity)
                .withClaim("Id", user.getId().toString())
                .withClaim("firstName", user.getFirstName())
                .withClaim("lastName", user.getLastName())
                /*.withClaim("gender", user.getGender())
                .withClaim("country", user.getCountry())
                .withClaim("city", user.getCity())
                .withClaim("phone", user.getPhone())*/
                .withClaim("roles",  roles)
                .sign(algorithm);
    }

    public Authentication validateToken(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm)
                .build();

        DecodedJWT decoded = verifier.verify(token);

        UserDto user = UserDto.builder()
                .email(decoded.getIssuer())
                .firstName(decoded.getClaim("firstName").asString())
                .lastName(decoded.getClaim("lastName").asString())
                .build();

        Set<SimpleGrantedAuthority> authorities = getAuthority( decoded.getClaim("roles").asList(String.class));
        return new UsernamePasswordAuthenticationToken(user, null, authorities);
    }

    public Authentication validateTokenStrongly(String token) {
        Algorithm algorithm = Algorithm.HMAC256(secretKey);

        JWTVerifier verifier = JWT.require(algorithm)
                .build();

        DecodedJWT decoded = verifier.verify(token);

        UserDto user = userService.findByEmail(decoded.getIssuer());

        Set<SimpleGrantedAuthority> authorities = getAuthority( decoded.getClaim("roles").asList(String.class));
        return new UsernamePasswordAuthenticationToken(user, null, authorities);
    }


    private Set getAuthority(List<String>roles) {
        Set<SimpleGrantedAuthority> authorities = new HashSet<>();
        roles.forEach(role -> {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role));
        });
        return authorities;
    }
}
