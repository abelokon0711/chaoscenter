package com.studienarbeit.chaoscenter.services.employees;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class FrontendController {

    @RequestMapping(value = "/")
    public String index() {
        return "index";
    }
}