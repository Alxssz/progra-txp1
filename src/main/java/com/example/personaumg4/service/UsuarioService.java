package com.example.personaumg4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.personaumg4.model.Usuario;
import com.example.personaumg4.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario login(String username, String password) {

        Usuario user = usuarioRepository.findByUsername(username);

        if (user == null) return null;
        if (!"E".equalsIgnoreCase(user.getEstadoU())) return null;

        if (!user.getPassword().equals(password)) return null;

        return user;
    }
}