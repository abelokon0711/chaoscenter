package com.studienarbeit.chaoscenter.services.departments;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
@EntityScan(basePackages = {"com.studienarbeit.chaoscenter.services.shared.entities"})
public class DepartmentsServer {

    public static void main(String[] args) {
        // Tell server to look for departments-server.properties or departments-server.yml
        System.setProperty("spring.config.name", "departments-server");

        SpringApplication.run(DepartmentsServer.class, args);
    }

}
