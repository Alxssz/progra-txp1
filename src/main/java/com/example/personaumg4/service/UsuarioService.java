package com.example.personaumg4.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.personaumg4.model.Usuario;
import com.example.personaumg4.repository.UsuarioRepository;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public boolean login(String username, String password) {
        Usuario user = usuarioRepository.findByUsername(username);

        if (user == null) return false;
        if (!"E".equalsIgnoreCase(user.getEstadoU())) return false;
        if (!user.getPassword().equals(password)) return false;

        return true;
    }
}