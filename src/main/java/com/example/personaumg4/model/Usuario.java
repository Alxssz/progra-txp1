package com.example.personaumg4.model;

import jakarta.persistence.*;
import lombok.Data;
import java.io.Serializable;

@Entity
@Data
@Table(name = "usuario")
public class Usuario implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "username", unique = true)
    private String username;

    @Column(name = "password")
    private String password;

    @Column(name = "estado_u")
    private String estadoU; // "E" o "I"

    @Column(name = "rol")
    private String rol; // administrador
}