package org.aveelon.internship.controllers;

import jakarta.servlet.http.HttpServletRequest;
import org.aveelon.internship.security.AuthRequest;
import org.aveelon.internship.security.AuthResponse;
import org.aveelon.internship.services.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthService service;

    @PostMapping("/register")
    public String register(@RequestBody AuthRequest req) {
        return service.register(req.getUsername(), req.getPassword());
    }

    @PostMapping("/login")
    public AuthResponse login(@RequestBody AuthRequest req) {
        String token = service.login(req.getUsername(), req.getPassword());
        AuthResponse res = new AuthResponse();
        res.setToken(token);
        return res;
    }

    @DeleteMapping("/delete")
    public String delete(HttpServletRequest req) {
        String username = (String) req.getAttribute("username");
        service.delete(username);
        return "Account deleted";
    }
}
