package com.studienarbeit.chaoscenter.services.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {
    @Autowired
    protected WebEmployeesService employeesService;

    @Autowired
    protected WebDepartmentsService departmentsService;

    public FrontendController(WebEmployeesService employeesService, WebDepartmentsService departmentsService) {
        this.employeesService = employeesService;
        this.departmentsService = departmentsService;
    }

    @RequestMapping(value = "/api")
    public String index() {
        return "index";
    }
}