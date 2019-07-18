package com.studienarbeit.chaoscenter.services.employees;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication(scanBasePackages={"com.studienarbeit.chaoscenter.services.employees"})
@EnableDiscoveryClient
@EntityScan(basePackages = {"com.studienarbeit.chaoscenter.services.shared.entities"})
public class EmployeesServer {

	public static void main(String[] args) {
		// Tell server to look for employees-serve.properties or employees-serve.yml
		System.setProperty("spring.config.name", "employees-server");

		SpringApplication.run(EmployeesServer.class, args);
	}

}
