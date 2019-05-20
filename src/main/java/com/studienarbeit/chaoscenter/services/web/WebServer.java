package com.studienarbeit.chaoscenter.services.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class WebServer {

    public static void main(String[] args) {
        // Tell server to look for registration.properties or registration.yml
        System.setProperty("spring.config.name", "web-server");

        SpringApplication.run(com.studienarbeit.chaoscenter.services.departments.DepartmentsServer.class, args);
    }

}
