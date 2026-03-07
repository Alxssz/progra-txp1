package com.example.personaumg4.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.personaumg4.model.Nivel;
import com.example.personaumg4.repository.NivelRepository;

@Service
public class NivelService {

    @Autowired
    private NivelRepository nivelRepository;

    public List<Nivel> findAll() {
        return nivelRepository.findAll();
    }

}