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

4) Include your username and password that you used while creating user for MySQL
5) Build and run the project
6) Open a file named second script named [First_set_of_queries.sql](https://github.com/varadjos89/Sitetracker/blob/master/First_set_of_queries.sql) in Workbench and run commands from it to insert data related to buses

# Front-end Set up
1) The front is built using Angular
2) Install Angular: 11.0.9 and Angular CLI: 11.0.7 (https://angular.io/guide/setup-local)
3) Run a command npm install to download all the dependencies
4) Run a command ng serve to run the project
5) Open a [link](http://localhost:4200/) in your browser to see the website

## ER Diagram

![ER_Diagram](https://user-images.githubusercontent.com/48415852/125890045-84b9d355-20cb-48f6-98fa-3cdceaaa83ad.png)

## The process for updating bus details
![image](https://user-images.githubusercontent.com/48415852/126228057-6e518def-3e26-47b7-97a6-30ee93768bda.png)

![image](https://user-images.githubusercontent.com/48415852/126228134-fe8a71fd-953c-483c-9c0f-4647e04a4ca3.png)

![image](https://user-images.githubusercontent.com/48415852/126228268-9a314258-59ed-419e-991c-bf65c529f326.png)

![image](https://user-images.githubusercontent.com/48415852/126228699-007efb4d-0f17-4395-9f07-fdc524447368.png)

![image](https://user-images.githubusercontent.com/48415852/126228787-a41a9970-88f2-4f7d-a00c-68460b525224.png)

![image](https://user-images.githubusercontent.com/48415852/126228866-7373c051-6e67-46cb-9abb-59cebf4efb4b.png)


## If bus is not ready to use
![image](https://user-images.githubusercontent.com/48415852/126227955-37e9f2b8-4133-49ed-a3bb-f3f958ea06cd.png)







