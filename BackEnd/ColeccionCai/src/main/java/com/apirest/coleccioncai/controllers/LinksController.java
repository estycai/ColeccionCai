package com.apirest.coleccioncai.controllers;

import com.apirest.coleccioncai.models.Camiseta;
import com.apirest.coleccioncai.models.LinksCamisetas;
import com.apirest.coleccioncai.services.CamisetaService.ICamisetaService;
import com.apirest.coleccioncai.services.LinksCamisetaService.ILinkCamisetaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class LinksController {
    @Autowired
    private ILinkCamisetaService linkCamisetaService;

    @Autowired
    private ICamisetaService camisetaService;

    @PostMapping("/link/camiseta/{idCamiseta}")
    public ResponseEntity<?> postLink(@RequestBody LinksCamisetas link, @PathVariable int idCamiseta){
        Camiseta camiseta= camisetaService.getCamisetaById(idCamiseta);

        link.setCamiseta(camiseta);
        LinksCamisetas linkSave = this.linkCamisetaService.save(link);

        return new ResponseEntity("url creada", HttpStatus.CREATED);
    }


}
