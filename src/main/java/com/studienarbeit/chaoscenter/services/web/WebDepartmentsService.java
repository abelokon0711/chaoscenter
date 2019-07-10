package com.studienarbeit.chaoscenter.services.web;

import com.studienarbeit.chaoscenter.services.shared.entities.Departments;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.client.loadbalancer.LoadBalanced;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;

public class WebDepartmentsService {
    @Autowired
    @LoadBalanced
    protected RestTemplate restTemplate;

    protected String serviceUrl;

    public WebDepartmentsService(String serviceUrl) {
        this.serviceUrl = serviceUrl.startsWith("http") ? serviceUrl  : "http://" + serviceUrl;
    }

    public List<Departments> fetchDepartments(String limit) {
        Departments[] departments = null;
        departments =  restTemplate.getForObject(serviceUrl + "/departments?size={number}", Departments[].class, limit);
        return Arrays.asList(departments);
    }
}
