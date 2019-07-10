package com.studienarbeit.chaoscenter.services.departments.repositories;

import com.studienarbeit.chaoscenter.services.shared.entities.Departments;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "departments", collectionResourceRel =  "departments")
public interface DepartmentsRepository  extends PagingAndSortingRepository<Departments, Integer> {

}