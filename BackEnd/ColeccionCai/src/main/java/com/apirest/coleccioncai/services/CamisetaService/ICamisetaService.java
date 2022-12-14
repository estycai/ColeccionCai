package com.apirest.coleccioncai.services.CamisetaService;

import com.apirest.coleccioncai.models.Camiseta;

import java.util.List;

public interface ICamisetaService {
    List<Camiseta> getAllCamisetas();

    Camiseta getCamisetaById(long id);

    Camiseta save(Camiseta camiseta);
}
