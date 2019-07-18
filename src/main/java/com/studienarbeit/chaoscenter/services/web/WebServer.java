package com.studienarbeit.chaoscenter.services.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.web.client.RestTemplateBuilder;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.hateoas.MediaTypes;
import org.springframework.hateoas.hal.Jackson2HalModule;
import org.springframework.http.converter.json.MappingJackson2HttpMessageConverter;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.util.Arrays;

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

    @Bean
    RestTemplate restTemplate(RestTemplateBuilder builder) {
        ObjectMapper mapper = new ObjectMapper();
            mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES,
                false);
            mapper.registerModule(new Jackson2HalModule());

        MappingJackson2HttpMessageConverter converter = new MappingJackson2HttpMessageConverter();
            converter.setSupportedMediaTypes(Arrays.asList(MediaTypes.HAL_JSON));
            converter.setObjectMapper(mapper);

        return builder.messageConverters(converter).build();
    }

    @Bean
    public WebEmployeesService employeesService() {
        return new WebEmployeesService("http://localhost:8085/api");
    }

    @Bean
    public WebDepartmentsService departmentsService() {
        return new WebDepartmentsService("http://localhost:8090/api");
    }

    @Bean
    public FrontendController frontendController() {
        return new FrontendController(employeesService(), departmentsService());
    }
}
