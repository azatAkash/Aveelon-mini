package org.aveelon.internship.services;

import org.aveelon.internship.models.User;
import org.aveelon.internship.repositories.UserRepository;
import org.aveelon.internship.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private JwtUtil jwtUtil;

    private final BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();

    public String register(String username, String password) {
        User u = new User();
        u.setUsername(username);
        u.setPassword(encoder.encode(password));
        userRepository.save(u);
        return "OK";
    }

    public String login(String username, String password) {
        User u = userRepository.findByUsername(username)
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!encoder.matches(password, u.getPassword())) {
            throw new RuntimeException("Invalid password");
        }

        return jwtUtil.generateToken(username);
    }

    public void delete(String username) {
        User u = userRepository.findByUsername(username)
                .orElseThrow();
        userRepository.delete(u);
    }
}
