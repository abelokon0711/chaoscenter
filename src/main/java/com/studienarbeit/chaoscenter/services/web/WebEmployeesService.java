package com.studienarbeit.chaoscenter.services.web;

import com.studienarbeit.chaoscenter.services.shared.entities.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

/**
 * Hide the access to the microservice inside this local service.
 *
 * based on https://github.com/paulc4/microservices-demo
 */
@Service
public class WebEmployeesService {

    @Autowired
    @LoadBalanced
    protected RestTemplate restTemplate;

    protected String serviceUrl;

    public WebEmployeesService(String serviceUrl) {
        this.serviceUrl = serviceUrl.startsWith("http") ? serviceUrl  : "http://" + serviceUrl;
    }

    public List<Employees> fetchEmployees(String limit) {
        Employees[] employees = null;
        employees =  restTemplate.getForObject(serviceUrl + "/employees?size={number}", Employees[].class, limit);
        return Arrays.asList(employees);
    }
}