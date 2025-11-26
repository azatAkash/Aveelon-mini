package org.aveelon.internship.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http, JwtFilter jwtFilter) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // отключаем CSRF
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll() // разрешаем все запросы к /auth/**
                        .anyRequest().authenticated() // остальные требуют аутентификацию
                )
                .sessionManagement(session -> session
                        .sessionCreationPolicy(SessionCreationPolicy.STATELESS) // без сессий
                )
                .httpBasic(httpBasic -> httpBasic.disable()) // отключаем HTTP Basic
                .addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class); // добавляем фильтр JWT

        return http.build();
    }
}
