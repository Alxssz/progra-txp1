package com.example.personaumg4.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.personaumg4.model.Carrera;
import com.example.personaumg4.service.CarreraService;

@RestController
@RequestMapping("/carreras/")
@CrossOrigin(origins = "*")
public class CarreraREST {

    @Autowired
    private CarreraService carreraService;

    @GetMapping("{idNivel}")
    public ResponseEntity<List<Carrera>> getCarrerasPorNivel(
            @PathVariable("idNivel") Long idNivel) {

        return ResponseEntity.ok(
                carreraService.findByNivel(idNivel)
        );
    }
}