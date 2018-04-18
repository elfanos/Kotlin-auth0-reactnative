package org.jetbrains.kotlin.demo.controller

import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

/**
 * Created by Rasmus on 2018-04-18.
 */
@RestController
class SpotifyController {

    @RequestMapping("https://accounts.spotify.com/authorize?")
    fun authUri(){

    }

}