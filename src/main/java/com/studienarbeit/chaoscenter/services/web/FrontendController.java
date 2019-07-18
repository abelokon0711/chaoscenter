package com.studienarbeit.chaoscenter.services.web;

import com.google.gson.Gson;
import com.studienarbeit.chaoscenter.services.shared.entities.Departments;
import com.studienarbeit.chaoscenter.services.shared.entities.Employees;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.Collection;

@RestController
public class FrontendController {
    @Autowired
    protected WebEmployeesService employeesService;

    @Autowired
    protected WebDepartmentsService departmentsService;

    public FrontendController(WebEmployeesService employeesService, WebDepartmentsService departmentsService) {
        this.employeesService = employeesService;
        this.departmentsService = departmentsService;
    }

    @RequestMapping(value = "/api/employees")
    public String employees() {
        Collection<Employees> resultCollection = this.employeesService.fetchEmployees(10);

        Gson gson = new Gson();
        return gson.toJson(resultCollection);
    }

    @RequestMapping(value = "/api/departments")
    public String departments(){
        Collection<Departments> resultCollection = this.departmentsService.fetchDepartments(10);

        Gson gson = new Gson();
        return gson.toJson(resultCollection);
    }
}