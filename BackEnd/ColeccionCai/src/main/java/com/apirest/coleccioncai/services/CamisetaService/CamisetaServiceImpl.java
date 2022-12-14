package com.apirest.coleccioncai.services.CamisetaService;

import com.apirest.coleccioncai.models.Camiseta;
import com.apirest.coleccioncai.repositorio.CamisetaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class CamisetaServiceImpl implements ICamisetaService{

    @Autowired
    private CamisetaRepository camisetaRepository;

    @Override
    public List<Camiseta> getAllCamisetas() {
        return camisetaRepository.findAll();
    }

    @Override
    public Camiseta getCamisetaById(long id) {
        return camisetaRepository.findById(id).orElseThrow();
    }

    @Override
    public Camiseta save(Camiseta camiseta) {
        return camisetaRepository.save(camiseta);
    }
}
