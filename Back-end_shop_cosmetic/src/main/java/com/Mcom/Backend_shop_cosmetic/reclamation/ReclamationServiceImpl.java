package com.Mcom.Backend_shop_cosmetic.reclamation;

import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class ReclamationServiceImpl implements ReclamationService {

    private final  ReclamationDao reclamationDao;

    @Override
    public ReclamationEntity save(ReclamationEntity reclamation) {
        return this.reclamationDao.save(reclamation) ;
    }

    @Override
    public List<ReclamationEntity> getAll() {
        return this.reclamationDao.findAll();
    }

    @Override
    public void delete(Integer id) {
        this.reclamationDao.deleteById(id);
    }

    @Override
    public void deleteAll( ) {
        this.reclamationDao.deleteAll();
    }
}
