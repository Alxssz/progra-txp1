package com.example.personaumg4.model;

import jakarta.persistence.*;
import lombok.Data;

import java.io.Serializable;
import java.math.BigInteger;

@Entity
@Data
@Table(name = "persona")
public class Persona implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
    private String apellido;
    private Integer edad;

    @Column(name = "cui", unique = true)
    private BigInteger cui;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_pais", referencedColumnName = "id_pais")
    private Pais pais;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_estado", referencedColumnName = "id")
    private Estado estado;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_nivel")
    private Nivel nivel;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_carrera")
    private Carrera carrera;

    @Column(name = "estado_p")
    private String estadoP;

    @PrePersist
    public void prePersist() {
        if (this.estadoP == null) {
            this.estadoP = "E";
        }
    }
}