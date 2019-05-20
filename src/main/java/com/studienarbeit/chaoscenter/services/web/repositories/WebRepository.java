package com.studienarbeit.chaoscenter.services.web.repositories;


import com.studienarbeit.chaoscenter.services.shared.entities.Employees;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "api", collectionResourceRel = "Employees")
public interface WebRepository extends PagingAndSortingRepository<Employees, Integer> {

}