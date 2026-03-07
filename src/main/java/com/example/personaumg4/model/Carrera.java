package com.example.personaumg4.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "carrera")
@Data
public class Carrera {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "id_nivel")
    private Nivel nivel;
}