package com.smartinvite.smart_invite_backend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class TestController {

    @GetMapping("/endpoint")
    public Map<String, String> testApi() {
        return Map.of("message", "Backend connected successfully!");
    }
}

