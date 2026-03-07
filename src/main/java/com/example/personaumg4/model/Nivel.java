package com.example.personaumg4.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "nivel")
@Data
public class Nivel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String nombre;
}