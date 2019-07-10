package com.studienarbeit.chaoscenter.services.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableDiscoveryClient
@EntityScan(basePackages = {"com.studienarbeit.chaoscenter.services.shared.entities"})
@ComponentScan(useDefaultFilters = false) // Disable component scanner
public class WebServer {
    public static void main(String[] args) {
        // Tell server to look for web-server.properties or web-server.yml
        System.setProperty("spring.config.name", "web-server");

        SpringApplication.run(WebServer.class, args);
    }

    @LoadBalanced
    @Bean
    RestTemplate restTemplate() {
        return new RestTemplate();
    }

    @Bean
    public WebEmployeesService employeesService() {
        return new WebEmployeesService("http://localhost:8080");
    }

    @Bean
    public WebDepartmentsService departmentsService() {
        return new WebDepartmentsService("http://localhost:8080");
    }

    @Bean
    public FrontendController frontendController() {
        return new FrontendController(employeesService(), departmentsService());
    }
}
