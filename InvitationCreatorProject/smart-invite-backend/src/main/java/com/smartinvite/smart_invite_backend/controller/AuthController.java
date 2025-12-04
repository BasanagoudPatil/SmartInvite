package com.smartinvite.smart_invite_backend.controller;


import com.smartinvite.smart_invite_backend.dto.LoginRequest;
import com.smartinvite.smart_invite_backend.dto.LoginResponse;
import com.smartinvite.smart_invite_backend.dto.RegisterRequest;
import com.smartinvite.smart_invite_backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest req) {
        return authService.register(req);
    }

    @PostMapping("/login")
    public LoginResponse login(@RequestBody LoginRequest req) {
        return authService.login(req);
    }
}
