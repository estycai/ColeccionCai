package com.apirest.coleccioncai.repositorio;

import com.apirest.coleccioncai.models.LinksCamisetas;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LinkRepository extends JpaRepository<LinksCamisetas, Long> {
}
