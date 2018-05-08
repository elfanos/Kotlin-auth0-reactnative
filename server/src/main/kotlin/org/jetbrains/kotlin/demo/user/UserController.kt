package org.jetbrains.kotlin.demo.user

import com.mashape.unirest.http.Unirest
import jdk.nashorn.internal.ir.RuntimeNode
import org.jetbrains.kotlin.demo.auth0.HTTPHandler
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.web.bind.annotation.*
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *@author Rasmus Dahlkvist
 */

class UserController {


    @RestController
    class UserGetController {

        @Autowired
        lateinit var userService: UserService
        /* Get the details of a user */
        @RequestMapping("api/user/{username}")
        fun getUserByName(@PathVariable username: String) : User? =
                userService.findUserWithName(username)[0]

        @RequestMapping("api/users/all")
        fun getAllUsers() : List<User> =
                userService.getAllUsers()

        @PostMapping(path = ["api/user"])
        fun postUserWithMail( @RequestBody user: NewUser): User {
            return User(
                    Id = "",
                    email = user.email

            )
        }

    }

    class UserPostController{

        @PostMapping(path = ["user"])
        fun postUser( @RequestBody user: NewUser): User {
            return User(
                    Id = "",
                    userName = user.userName,
                    password = user.password
            )
        }

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
