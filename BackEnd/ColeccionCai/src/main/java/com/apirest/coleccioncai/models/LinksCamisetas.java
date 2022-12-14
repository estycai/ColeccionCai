package com.apirest.coleccioncai.models;

import javax.persistence.*;

@Entity
@Table(name ="linkCamisetas")
public class LinksCamisetas{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String link;

    @ManyToOne
    @JoinColumn(name = "linksCamisetas")
    private Camiseta camiseta;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Camiseta getCamiseta() {
        return camiseta;
    }

    public void setCamiseta(Camiseta camiseta) {
        this.camiseta = camiseta;
    }
}
