# ChaosCenter

The project ChaosCenter aims for the goal to demonstrate the functionality of [Chaos Monkey for Spring Boot](https://github.com/codecentric/chaos-monkey-spring-boot) within a project containing multiple microservices.
This project originates from the study project commissioned by M. Haeussler at the University of Applied Sciences Hochschule Esslingen.

## Getting Started

These instruction will briefly explain how to setup the project on a local machine.

### Setup on local machine

Clone the project via git:

```sh
git clone https://github.com/abelokon955/chaoscenter.git
cd ./chaoscenter
```

Init its sample database submodule:

```sh
git submodule sync; git submodule update --init --recursive
```

Import the sample database into your MySQL server:

```sh
cd test_db
mysql -t < employees.sql
```

After the application was imported into the IntelliJ IDE, the configurations for RegistrationServer, EmployeesServer, DepartmentsServer, and WebServer must be added. Finally the application can be launched by starting all the just configured Spring Boots Applications and directing to `localhost:8080` in the browser.

### Configuration

The configurations for all applications can be found within `src/main/resources`. The settings for Chaos Monkey are set in `web-server.yml`.

The applications can reached under the following URLs:

<pre>
RegistrationServer: http://localhost:8761
EmployeesServer:    http://localhost:8085
DepartmentsServer:  http://localhost:8090
WebServer:          http://localhost:8080
</pre>
