package com.example.personaumg4.rest;

import com.example.personaumg4.model.LoginRequest;
import com.example.personaumg4.model.Usuario;
import com.example.personaumg4.security.JwtService;
import com.example.personaumg4.service.UsuarioService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "*")
public class UsuarioREST {

    @Autowired
    private UsuarioService usuarioService;

    @Autowired
    private JwtService jwtService;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest request) {

        String username = request.getUsername();
        String password = request.getPassword();

        if(username == null || password == null || username.isEmpty() || password.isEmpty()) {
            return ResponseEntity.badRequest().body("Faltan parámetros");
        }

        Usuario user = usuarioService.login(username, password);

        if (user != null) {

            String token = jwtService.generateToken(user);

            return ResponseEntity.ok(token);
        } else {
            return ResponseEntity.status(401).body("Usuario o contraseña incorrectos");
        }
    }
}