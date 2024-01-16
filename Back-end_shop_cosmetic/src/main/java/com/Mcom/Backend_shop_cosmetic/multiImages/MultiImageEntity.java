package com.Mcom.Backend_shop_cosmetic.multiImages;

import com.Mcom.Backend_shop_cosmetic.product.ProductEntity;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="Images")

public class MultiImageEntity implements Serializable  {

    //---------attributs-------------------
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true)
    private String src;


    //relation
    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @ManyToOne
    private ProductEntity product;

}
