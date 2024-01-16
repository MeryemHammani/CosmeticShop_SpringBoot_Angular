package com.Mcom.Backend_shop_cosmetic.flush;

import com.Mcom.Backend_shop_cosmetic.flushItem.FlushItemEntity;
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
@AllArgsConstructor
@NoArgsConstructor

@Entity
@Table(name="flushes")
public class FlushEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String description;
    @Column(nullable=false)
    private Date start_date;
    @Column(nullable=false)
    private Date end_date;
    @CreationTimestamp
    @Temporal(TemporalType.TIMESTAMP)
    private Date created_at;


    //Relation
    @OneToMany(mappedBy = "flush" , cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<FlushItemEntity> flushItems;




}
