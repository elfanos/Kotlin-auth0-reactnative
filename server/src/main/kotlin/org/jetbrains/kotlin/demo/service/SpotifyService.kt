package org.jetbrains.kotlin.demo.service

import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.exceptions.SpotifyWebApiException
import com.wrapper.spotify.model_objects.credentials.ClientCredentials
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest
import java.io.IOException
import java.net.URI
import java.util.concurrent.Future

/**
 * Created by Rasmus on 2018-04-18.
 */

interface SpotifyService {

    fun authorizationCodeUriSync(): URI

    fun authorizationCodeUriAsync(): Future<URI>

    fun clientCredentialsSync(): String?

    fun clientCredentialsAsync(): Future<ClientCredentials>?


}

class InitiSpotifySerivce: SpotifyService {

    private val clientId = "895c15fc5b3149d3891fe73d65b30422"
    private val clientSecret = "2eee232ddedd4a5abc3bb43cace2a64e"

    val spotifyApi = SpotifyApi.builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .build()

    val clientCredentialRequest = spotifyApi.clientCredentials().build()

    val authorizationCodeUriRequest = null

    override fun authorizationCodeUriSync(): URI {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }

    override fun authorizationCodeUriAsync(): Future<URI> {
        TODO("not implemented") //To change body of created functions use File | Settings | File Templates.
    }


    override fun clientCredentialsSync(): String? {
        try {
            val clientCredential =  clientCredentialRequest.execute()
            return clientCredential.accessToken
        }catch (e: SpotifyWebApiException){
            println("Spotify web exception: " + e.localizedMessage)
        }catch (e: IOException){
            println("IOExcepetion: " + e.localizedMessage)
        }
        return null
    }

    override fun clientCredentialsAsync(): Future<ClientCredentials>? {
        try {
            return clientCredentialRequest.executeAsync()
        }catch (e: SpotifyWebApiException){
            println("Spotify web exception: " + e.localizedMessage)
        }catch (e: IOException){
            println("IOExcepetion: " + e.localizedMessage)
        }
        return null
    }
}