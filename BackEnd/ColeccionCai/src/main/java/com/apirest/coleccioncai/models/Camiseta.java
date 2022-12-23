package com.apirest.coleccioncai.models;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "camiseta")
public class Camiseta {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "anio")
    private Integer anio;


    @Column(name = "laTengo")
    private Boolean laTengo;

    @Column(name ="tipo")
    private Integer tipo;

    @Column(name ="precio")
    private Double precio;

    @Column(name ="fotoUrl")
    private String fotoUrl;

    @Column(name = "descripcion")
    private String descripcion;

    @OneToMany(mappedBy = "camiseta")
    private List<LinksCamisetas> linksCamisetas;

    public Camiseta() {
    }

    public Camiseta(long id, Integer anio, Boolean laTengo, Integer tipo, Double precio, String fotoUrl, String descripcion) {
        this.id = id;
        this.anio = anio;
        this.laTengo = laTengo;
        this.tipo = tipo;
        this.precio = precio;
        this.fotoUrl = fotoUrl;
        this.descripcion = descripcion;
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

    public List<LinksCamisetas> getLinksCamisetas() {
        return linksCamisetas;
    }

    public void setLinksCamisetas(List<LinksCamisetas> linksCamisetas) {
        this.linksCamisetas = linksCamisetas;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}
