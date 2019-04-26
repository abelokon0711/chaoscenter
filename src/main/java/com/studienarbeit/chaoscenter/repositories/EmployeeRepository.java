package com.studienarbeit.chaoscenter.repositories;

import com.studienarbeit.chaoscenter.entities.Employees;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "employees")
public interface EmployeeRepository extends PagingAndSortingRepository<Employees, Integer> {

}