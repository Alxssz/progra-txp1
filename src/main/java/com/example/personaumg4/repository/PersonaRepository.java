package com.example.personaumg4.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.stereotype.Repository;
import com.example.personaumg4.model.Persona;

import java.util.List;

@Repository
public interface PersonaRepository extends JpaRepository<Persona, Long>{

    List<Persona> findByEstadoP(String nombre);

}

