package com.Mcom.Backend_shop_cosmetic.blog;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

import java.io.Serializable;
import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="blogs")
public class BlogEntity  implements Serializable {
    @Id
    @Column(name = "blog_id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(nullable = false)
    private String title;
    @Column(columnDefinition = "TEXT")
    private String text;
    private String image;
    private String src;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;







}
