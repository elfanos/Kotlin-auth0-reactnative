package org.jetbrains.kotlin.demo.controller.spotify.userdata

import com.wrapper.spotify.model_objects.specification.User
import org.jetbrains.kotlin.demo.service.spotify.userdata.UserDataServiceCurrentUser
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Rasmus on 2018-05-08.
 */
@RestController
class UserDataController{
    private val userDataService = UserDataServiceCurrentUser()

    @RequestMapping("/api/spotify/user/{token}")
    fun currentUserData(@PathVariable token: String?): User? {
        return userDataService.currentUserProfileAsync(token)
    }
}