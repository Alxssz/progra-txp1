package com.example.personaumg4.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.personaumg4.model.Nivel;
import com.example.personaumg4.service.NivelService;

@RestController
@RequestMapping("/niveles/")
@CrossOrigin(origins = "*")
public class NivelREST {

    @Autowired
    private NivelService nivelService;

    @GetMapping
    public ResponseEntity<List<Nivel>> getAllNiveles() {
        return ResponseEntity.ok(nivelService.findAll());
    }
}