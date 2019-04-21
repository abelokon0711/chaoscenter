package com.studienarbeit.chaoscenter.entities;

import javax.persistence.*;
import java.sql.Date;
import java.util.Objects;

@Entity
@IdClass(SalariesPK.class)
public class Salaries {
    private Date fromDate;
    private int empNo;
    private Integer salary;
    private Date toDate;

    @Id
    @Column(name = "from_date")
    public Date getFromDate() {
        return fromDate;
    }

    public void setFromDate(Date fromDate) {
        this.fromDate = fromDate;
    }

    @Id
    @Column(name = "emp_no")
    public int getEmpNo() {
        return empNo;
    }

    public void setEmpNo(int empNo) {
        this.empNo = empNo;
    }

    @Basic
    @Column(name = "salary")
    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    @Basic
    @Column(name = "to_date")
    public Date getToDate() {
        return toDate;
    }

    public void setToDate(Date toDate) {
        this.toDate = toDate;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Salaries salaries = (Salaries) o;
        return empNo == salaries.empNo &&
                Objects.equals(fromDate, salaries.fromDate) &&
                Objects.equals(salary, salaries.salary) &&
                Objects.equals(toDate, salaries.toDate);
    }

    @Override
    public int hashCode() {
        return Objects.hash(fromDate, empNo, salary, toDate);
    }
}
