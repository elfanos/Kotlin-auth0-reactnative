package org.jetbrains.kotlin.demo.controller

import jdk.nashorn.internal.parser.JSONParser
import org.jetbrains.kotlin.demo.service.InitSpotifyACFService
import org.jetbrains.kotlin.demo.service.SpotifyACFService
import org.springframework.beans.factory.annotation.Autowired
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

}