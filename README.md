# Fleet Management System
This application helps users manage their large fleet of buses and ensure that they are operating efficiently and reducing costs.

## Initial set up
1) Clone the repository using Https or SSH key

# Database Set up
1) Install MySQL Community Server 8.0.25 [https://dev.mysql.com/downloads/mysql/]
2) Install MySQL Workbench by setting password for your user [https://dev.mysql.com/downloads/workbench/]
3) Start Workbench and open a file named create_database_query.sql from the cloned repository to create your schema [https://github.com/varadjos89/Sitetracker/blob/master/create_database_query.sql]

# Back-end Set up
1) Backend is built using Java and uses Spring Boot for web framework
2) Install Java 11 locally 
2) Open a project named fleet using IntelliJ/ Eclipse / NetBeans as a Maven project
3) Install all the dependencies from pom.xml using mvn install
4) Create a file named application.properties and paste following into it

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/fleet?createDatabaseIfNotExist=true
spring.datasource.username=
spring.datasource.password=
spring.datasource.driver-class-name=com.mysql.jdbc.Driver
spring.jpa.generate-ddl=true
```

4) Include your username and password that you used while installing workbench
5) Build and run the project

# Front-end Set up
1) The front is built using Angular
2) Install Angular: 11.0.9 and Angular CLI: 11.0.7 (https://angular.io/guide/setup-local)
3) Run a command npm install to download all the dependencies
4) Run a command ng serve to run the project
5) Open a link (http://localhost:4200/)







