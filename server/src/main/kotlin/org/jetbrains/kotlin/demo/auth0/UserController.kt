package org.jetbrains.kotlin.demo.auth0

import com.mashape.unirest.http.Unirest
import org.jetbrains.kotlin.demo.models.User

/**
 *@author Rasmus Dahlkvist
 */
class UserController {
    private val httpsDomain: String = getHttpsDomain("development")
    fun addUser(user: User){
        val test: String = "rallmoe"
        val response =  Unirest.post(httpsDomain + userMapping("post"))
                .header("content-type", "application/json")
                .header("cache-control", "no-cache")
                .body("{\n\t\"userName\": \"${user.userName}\",\n\t\"password\": \"${user.password}\"\n}")
                .asString()


        //curl -i -X POST -H "Content-Type:application/json" -d "{  \"firstName\" : \"Frodo\",  \"lastName\" : \"Baggins\" }" http://localhost:8080/people

    }
    fun deleteUser( id: String? ) {
        //Curl command
       // curl -X DELETE http://localhost:8080/people/1
    }
    fun putUser( user: User ) {
        val response = Unirest.put(httpsDomain + userMapping("put"))
                .header("content-type", "application/json")
                .body("{\n\t\"userName\": \"${user.userName}\",\n\t\"password\": \"${user.password}\"\n}")
                .asString()
    }
    fun patchUser() {
        //Curl command for path user
        // /curl -X PATCH -H "Content-Type:application/json" -d "{ \"firstName\": \"Bilbo Jr.\" }" http://localhost:8080/people/1
    }
    fun findAllUsers() {
        //Curl command
       // curl http://localhost:8080/people
    }
    fun getHttpsDomain( domain: String ): String {
        when(domain){
            "development" -> return HTTPHandler.getHTTPSDevelopment()
            "production" -> return HTTPHandler.getHTTPSProduction()
        }
        return ""
    }
    fun userMapping( case: String ): String {
        when( case ){
            "put" -> return "/user/"
            "post" -> return "/user"
            "patch" -> return "/user/"
            "user" -> return  "/user"
        }
        return ""
    }
}
