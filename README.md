# Fleet Management System
This application helps users manage their large fleet of buses and ensure that they are operating efficiently and reducing costs.

## Initial set up
1) Clone the repository using HTTPS or SSH key

# Database Set up
1) Install [MySQL Community Server 8.0.25](https://dev.mysql.com/downloads/mysql/)
2) Install [MySQL Workbench](https://dev.mysql.com/downloads/workbench/) by setting username and password for your user 
3) Start Workbench and open a file named [create_database_query.sql](https://github.com/varadjos89/Sitetracker/blob/master/create_database_query.sql) from the cloned repository and run commands in it to create your schema 

# Back-end Set up
1) The Backend is built using Java and uses Spring Boot as a web framework.
2) Install Java 11 locally 
2) Open a project named fleet using IntelliJ/ Eclipse / NetBeans as a Maven project.
3) Install all the dependencies from [pom.xml](https://github.com/varadjos89/Sitetracker/blob/master/fleet/pom.xml) using mvn install.
4) Create a file named application.properties inside resources folder and paste following details in it

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/fleet?createDatabaseIfNotExist=true
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.generate-ddl=true
```

4) Include your username and password that you used while installing workbench
5) Build and run the project
6) Run commands from second script named [First_set_of_queries.sql](https://github.com/varadjos89/Sitetracker/blob/master/First_set_of_queries.sql)

# Front-end Set up
1) The front is built using Angular
2) Install Angular: 11.0.9 and Angular CLI: 11.0.7 (https://angular.io/guide/setup-local)
3) Run a command npm install to download all the dependencies
4) Run a command ng serve to run the project
5) Open a [link](http://localhost:4200/)







