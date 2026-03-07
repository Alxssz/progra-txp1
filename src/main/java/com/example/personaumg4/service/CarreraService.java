package com.example.personaumg4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.personaumg4.model.Carrera;
import com.example.personaumg4.repository.CarreraRepository;

@Service
public class CarreraService {

    @Autowired
    private CarreraRepository carreraRepository;

    public List<Carrera> findByNivel(Long idNivel) {
        return carreraRepository.findByNivelId(idNivel);
    }
}