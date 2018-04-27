package org.jetbrains.kotlin.demo.controller

import org.jetbrains.kotlin.demo.service.InitSpotifyACFService
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Rasmus on 2018-04-18.
 */
@RestController
class SpotifyController {

    val spotifyACFService = InitSpotifyACFService()

    @RequestMapping("/api/spotify/callback/uri")
    fun authorizationUri(): String? {
        return spotifyACFService.authorizationCodeUriSync()
    }

    @RequestMapping("api/spotify/token/{code}")
    fun authorizationToken(@PathVariable code: String): List<String>? {
        val authorizationCodeRequest =
                spotifyACFService.buildAuthorizationCode(code)
        return spotifyACFService.authorizationCodeSync(authorizationCodeRequest)
    }

}