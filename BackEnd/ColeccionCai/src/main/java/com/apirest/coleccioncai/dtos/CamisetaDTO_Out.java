package com.apirest.coleccioncai.dtos;

import com.apirest.coleccioncai.models.Camiseta;
import com.apirest.coleccioncai.models.LinksCamisetas;

import java.util.ArrayList;
import java.util.List;

public class CamisetaDTO_Out {
    private long id;
    private Integer anio;
    private Boolean laTengo;
    private Integer tipo;
    private Double precio;
    private String fotoUrl;
    private List<String> linksDTOList = new ArrayList<>();

    public CamisetaDTO_Out(Camiseta camiseta) {
        this.id = camiseta.getId();
        this.anio = camiseta.getAnio();
        this.laTengo = camiseta.getLaTengo();
        this.tipo = camiseta.getTipo();
        this.precio = camiseta.getPrecio();
        this.fotoUrl = camiseta.getFotoUrl();

        for (LinksCamisetas link :camiseta.getLinksCamisetas()) {
            this.linksDTOList.add(link.getLink());
        }
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Integer getAnio() {
        return anio;
    }

    public void setAnio(Integer anio) {
        this.anio = anio;
    }

    public Boolean getLaTengo() {
        return laTengo;
    }

    public void setLaTengo(Boolean laTengo) {
        this.laTengo = laTengo;
    }

    public Integer getTipo() {
        return tipo;
    }

    public void setTipo(Integer tipo) {
        this.tipo = tipo;
    }

    public Double getPrecio() {
        return precio;
    }

    public void setPrecio(Double precio) {
        this.precio = precio;
    }

    public String getFotoUrl() {
        return fotoUrl;
    }

    public void setFotoUrl(String fotoUrl) {
        this.fotoUrl = fotoUrl;
    }

    public List<String> getLinksDTOList() {
        return linksDTOList;
    }

    public void setLinksDTOList(List<String> linksDTOList) {
        this.linksDTOList = linksDTOList;
    }
}
