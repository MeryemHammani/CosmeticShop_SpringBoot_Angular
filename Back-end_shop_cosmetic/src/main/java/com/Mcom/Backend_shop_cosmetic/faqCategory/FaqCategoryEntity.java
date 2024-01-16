package com.Mcom.Backend_shop_cosmetic.faqCategory;

import com.Mcom.Backend_shop_cosmetic.faqItem.FaqItemEntity;
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
@Table(name="faqCategories")
public class FaqCategoryEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false,unique = true)
    private String name;
    private String icon;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;

//relations
    //1-A faqCategory could contain different FaqItems
    @OneToMany(mappedBy = "faqCategory" , cascade = CascadeType.ALL , fetch = FetchType.LAZY)
    private List<FaqItemEntity>faqItems;

}
