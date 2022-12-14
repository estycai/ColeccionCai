package com.apirest.coleccioncai.controllers;

import com.apirest.coleccioncai.dtos.CamisetaDTO_Out;
import com.apirest.coleccioncai.models.Camiseta;
import com.apirest.coleccioncai.services.CamisetaService.ICamisetaService;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api")
public class CamisetaControllers {
    @Autowired
    private ICamisetaService camisetaService;

    @Autowired
    private ModelMapper modelMapper;

    @GetMapping("/camisetas")
    public ResponseEntity<?> getAllCamisetas(){
        List<Camiseta> camisetaList= camisetaService.getAllCamisetas();

        List<CamisetaDTO_Out> camisetaDTOOutList = new ArrayList<>();

        for (Camiseta c: camisetaList) {
            camisetaDTOOutList.add(new CamisetaDTO_Out(c));
        }

        return new ResponseEntity(camisetaDTOOutList, HttpStatus.OK);
    }

    @PutMapping("/camiseta/{idCamiseta}")
    public ResponseEntity<?> editCamisetas(@PathVariable Integer idCamiseta, @RequestBody Camiseta camiseta){
        Camiseta camisetaAEditar = this.camisetaService.getCamisetaById(idCamiseta);
        Camiseta camisetaUpdateada= null;

        if (camisetaAEditar == null) {
            return new ResponseEntity("No se encontro camiseta con ese id", HttpStatus.NOT_FOUND);
        }

        camisetaAEditar.setLaTengo(camiseta.getLaTengo());
        camisetaAEditar.setAnio(camiseta.getAnio());
        camisetaAEditar.setPrecio(camiseta.getPrecio());
        camisetaUpdateada = camisetaService.save(camisetaAEditar);


        CamisetaDTO_Out camisetaDTO_out= new CamisetaDTO_Out(camisetaUpdateada);

        return new ResponseEntity(camisetaDTO_out, HttpStatus.OK);
    }


}
