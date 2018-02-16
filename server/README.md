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