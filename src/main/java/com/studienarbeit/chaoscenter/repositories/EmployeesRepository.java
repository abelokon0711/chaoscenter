package com.studienarbeit.chaoscenter.repositories;

import com.studienarbeit.chaoscenter.entities.Employees;
import org.springframework.data.repository.CrudRepository;

public interface EmployeesRepository extends CrudRepository<Employees, Integer> {

}