package com.studienarbeit.chaoscenter.services.web;

import com.studienarbeit.chaoscenter.services.shared.entities.Departments;
import com.studienarbeit.chaoscenter.services.web.resources.DepartmentsResources;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.util.Collection;

@Service
public class WebDepartmentsService {
    @Autowired
    protected RestTemplate restTemplate;

    protected String serviceUrl;

    public WebDepartmentsService(String serviceUrl) {
        this.serviceUrl = serviceUrl.startsWith("http") ? serviceUrl  : "http://" + serviceUrl;
    }

    public Collection<Departments> fetchDepartments(int limit) {
        final ResponseEntity<DepartmentsResources> employeesResponse
                = restTemplate.getForEntity(serviceUrl + "/departments?size={number}", DepartmentsResources.class, 10);
        return employeesResponse.getBody().getContent();
    }
}
