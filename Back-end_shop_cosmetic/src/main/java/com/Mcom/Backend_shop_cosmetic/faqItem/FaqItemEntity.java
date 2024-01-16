package com.Mcom.Backend_shop_cosmetic.faqItem;

import com.Mcom.Backend_shop_cosmetic.faqCategory.FaqCategoryEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.GenericGenerator;


@Data
@NoArgsConstructor
@AllArgsConstructor

@Entity
@Table(name="FaqItems")

public class FaqItemEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false , unique = false, columnDefinition = "TEXT")
    private String question ;
    @Column(nullable = false, unique = false, columnDefinition = "TEXT")
    private  String answer ;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

    //relations
    //1-a FaqItem could be  contained in a faqCategory
    @ManyToOne
    private FaqCategoryEntity faqCategory;

}
