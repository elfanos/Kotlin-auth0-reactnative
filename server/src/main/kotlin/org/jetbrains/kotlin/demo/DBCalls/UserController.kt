package org.jetbrains.kotlin.demo.DBCalls

import org.jetbrains.kotlin.demo.models.NewUser
import org.jetbrains.kotlin.demo.models.User
import org.springframework.data.annotation.Id
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.PostMapping



/**
 * Created by Rasmus on 2018-02-15.
 */


class UserController {
    fun addUser(){
        /*val response = Unirest.post("http://localhost:8080/people/1")
                .header("content-type", "application/json")
                .body("{  \"firstName\" : \"Frodo\",  \"lastName\" : \"Baggins\" }")
                .asString()*/
    }

    /** Get the details of a user */
    /*@RequestMapping("/user")
    fun getUser() : User {
       // val user = User(userName = "grahamcox";
        val user = User(Id = "",userName = "string", password = "")
        return user
    }*/

    @PostMapping( path = arrayOf("/user") )
    fun postUser( @RequestBody user: NewUser ): User {
        return User (
                Id = "",
                userName = user.userName,
                password = user.password
        )
    }

}
