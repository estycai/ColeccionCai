package com.apirest.coleccioncai.repositorio;

import com.apirest.coleccioncai.models.Camiseta;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CamisetaRepository extends JpaRepository<Camiseta, Long> {
}
