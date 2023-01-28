# ChaosCenter

The project ChaosCenter aims for the goal to demonstrate the functionality of [Chaos Monkey for Spring Boot](https://github.com/codecentric/chaos-monkey-spring-boot) within a project containing multiple microservices.
This project originates from the study project commissioned by M. Haeussler at the University of Applied Sciences Hochschule Esslingen.

## Getting Started

### Setup on local machine

Clone the project via git:

```sh
git clone https://github.com/abelokon955/chaoscenter.git
cd ./chaoscenter
```

Initialize the sample database submodule:

```sh
git submodule sync; git submodule update --init --recursive
```

Import the sample database into your MySQL server:

```sh
cd test_db
mysql -t < employees.sql
```

After the application was imported into the IntelliJ IDE, the configurations for RegistrationServer, EmployeesServer, DepartmentsServer, and WebServer must be added. Finally the application can be launched by starting all the just configured Spring Boots Applications.

The application can be reached by directing to `localhost:8080` in the browser.

### Configuration

The configurations for all applications can be found within `src/main/resources`. The settings for Chaos Monkey are set in `web-server.yml`.

The applications can be reached under the following URLs:

<pre>
RegistrationServer: http://localhost:8761
EmployeesServer:    http://localhost:8085
DepartmentsServer:  http://localhost:8090
WebServer:          http://localhost:8080
</pre>

## How integrate Chaos Monkey into your project?

First the dependency needs to be added into the `pom.xml`:

```sh
<dependency>
  <groupId>de.codecentric</groupId>
  <artifactId>chaos-monkey-spring-boot</artifactId>
  <version>2.0.2-SNAPSHOT</version>
</dependency>
```

Afterwards the following configuration can be added to the YAML of the project we want to interfere:

<pre>
chaos:
  monkey:
    enabled: true
    watcher:
      component: false
      controller: false
      repository: false
      rest-controller: true
      service: true
    assaults:
      level: 5
      latencyActive: true
      exceptionsActive: true
      killApplicationActive: false
</pre>

With the `enable` property we tell our application to also start Chaos Monkey when being launched.
The properties under the `watcher` section are all annotations Chaos Monkey is able to assault. 
The `level` value in the `assaults` section says that 1 in 5 requests will be interfered. 
The last three configuration points are the assault types supported by Chaos Monkey.

Additionally it is possible to configure the latency range and exception type. For more information
regarding the configuration of chaos monkey, check  of the Chaos
Monkey documentation here: [Chaos Monkey Version 2.0.2](https://codecentric.github.io/chaos-monkey-spring-boot/2.0.2/#_properties).
