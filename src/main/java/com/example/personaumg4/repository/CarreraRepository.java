package com.example.personaumg4.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.personaumg4.model.Carrera;

public interface CarreraRepository extends JpaRepository<Carrera, Long> {

    List<Carrera> findByNivelId(Long idNivel);

}