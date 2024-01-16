package com.Mcom.Backend_shop_cosmetic.reclamation;

import java.util.List;

public interface ReclamationService {
     ReclamationEntity  save( ReclamationEntity reclamation);
     List<ReclamationEntity> getAll();
     void delete(Integer id);
     void deleteAll();

}
