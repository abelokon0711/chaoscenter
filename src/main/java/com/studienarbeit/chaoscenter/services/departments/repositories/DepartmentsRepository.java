package com.studienarbeit.chaoscenter.services.departments.repositories;

import com.studienarbeit.chaoscenter.services.shared.entities.Departments;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "employees", collectionResourceRel =  "employees")
public interface DepartmentsRepository  extends PagingAndSortingRepository<Departments, Integer> {

}