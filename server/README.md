## Spring Boot Example

This is a basic example of how to use Kotlin in a Spring Boot application. See the [accompanying tutorial](http://kotlinlang.org/docs/tutorials/spring-boot-restful.html)
for more information.

To run:

```
//Starts mongo database
$ mongod

//Starts tomcat server
$ ./gradlew bootRun
```

Curl Commands for auth0


SignUp
```
curl -H "Content-Type: application/json" -X POST -d '{
 "client_id": "YOUR-CLIENT-ID",
 "email": "user@test2.com",   
 "password": "123123",
 "connection": "YOUR-DATABASE-CONNECTION"
}' https://YOUR-AUTH0-DOMAIN/dbconnections/signup
```

GET toke for a created user:
username: user@test2.com
password: 123123
```
curl -H "Content-Type: application/json" -X POST -d '{
 "grant_type":"password",
 "username": "user@test2.com",
 "password": "123123",
 "audience": "YOUR-ENDPOINT",
 "client_id": "YOUR-CLIENT-ID",
 "client_secret": "YOUR-CLIENT-SECRET"
}' https://YOUR-AUTH0-DOAMIN/oauth/token
```

Remember to use a physical local ip instead of 
localhost since emaluators use local service as well as physical
phones like Iphone 6.

May cause a network error when fetching data in the frontend
```
http://localhost:8080'
```

Is not going to cause a error if the IP is correct
```
http://192.168.1.YOUR-IP:8080'
```

Mongo commands
```
    Start mongo in terminal by writing: mongo
    Check all collcetions: show collections
    Some usefull commands:
    mongo db."selected collection".findAll()
    mong db."selected collection".find()
```

Gradle tests:
```
    ./gradlew test //run all test
    ./gradlew test --test package.testclass //for individual tests
```