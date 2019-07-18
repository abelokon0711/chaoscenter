package com.studienarbeit.chaoscenter.services.web;

import com.studienarbeit.chaoscenter.services.shared.entities.Employees;
import com.studienarbeit.chaoscenter.services.web.resources.EmployeesResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Collection;

@Service
public class WebEmployeesService {
    @Autowired
    protected RestTemplate restTemplate;

    protected String serviceUrl;

    public WebEmployeesService(String serviceUrl) {
        this.serviceUrl = serviceUrl.startsWith("http") ? serviceUrl  : "http://" + serviceUrl;
    }

    public Collection<Employees> fetchEmployees(int limit) {
        final ResponseEntity<EmployeesResources> employeesResponse
                = restTemplate.getForEntity(serviceUrl + "/employees?size={number}", EmployeesResources.class, 10);
        return employeesResponse.getBody().getContent();
    }
}