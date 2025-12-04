package com.smartinvite.smart_invite_backend.service;

import com.smartinvite.smart_invite_backend.dto.LoginRequest;
import com.smartinvite.smart_invite_backend.dto.LoginResponse;
import com.smartinvite.smart_invite_backend.dto.RegisterRequest;
import com.smartinvite.smart_invite_backend.entity.User;
import com.smartinvite.smart_invite_backend.enums.Role;
import com.smartinvite.smart_invite_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.crypto.bcrypt.BCrypt;



@Service
public class AuthService {

    @Autowired
    private UserRepository userRepo;

    public String register(RegisterRequest req) {

        if (userRepo.findByEmail(req.getEmail()).isPresent()) {
            return "Email already exists";
        }

        User user = User.builder()
                .name(req.getName())
                .email(req.getEmail())
                .passwordHash(BCrypt.hashpw(req.getPassword(), BCrypt.gensalt()))
                .role(Role.USER)
                .build();

        userRepo.save(user);
        return "Registered successfully";
    }

    public LoginResponse login(LoginRequest req) {

        User user = userRepo.findByEmail(req.getEmail()).orElse(null);

        if (user == null || !BCrypt.checkpw(req.getPassword(), user.getPasswordHash())) {
            return LoginResponse.builder()
                    .status("error")
                    .message("Invalid credentials")
                    .build();
        }

        return LoginResponse.builder()
                .status("success")
                .message("Login successful")
                .userId(user.getUserId())
                .name(user.getName())
                .role(user.getRole().name())
                .build();
    }
}
