package com.apirest.coleccioncai.services.LinksCamisetaService;

import com.apirest.coleccioncai.models.LinksCamisetas;
import com.apirest.coleccioncai.repositorio.LinkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@Transactional
public class LinkCamisetaServiceImpl implements ILinkCamisetaService {

    @Autowired
    private LinkRepository linkRepository;

    @Override
    public LinksCamisetas save(LinksCamisetas link) {
        return this.linkRepository.save(link);
    }
}
