package com.Mcom.Backend_shop_cosmetic.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CredentialUpdateDto {
   private String old_email;
    private String old_pass;
    private String new_email;
    private  String new_pass;
}
