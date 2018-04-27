package org.jetbrains.kotlin.demo.service

import com.wrapper.spotify.SpotifyApi
import com.wrapper.spotify.SpotifyHttpManager;
import com.wrapper.spotify.exceptions.SpotifyWebApiException
import com.wrapper.spotify.model_objects.credentials.AuthorizationCodeCredentials
import com.wrapper.spotify.model_objects.credentials.ClientCredentials
import com.wrapper.spotify.requests.authorization.authorization_code.AuthorizationCodeRequest
import com.wrapper.spotify.requests.authorization.client_credentials.ClientCredentialsRequest
import java.io.IOException
import java.net.URI
import java.util.concurrent.ExecutionException
import java.util.concurrent.Future

/**
 * Created by Rasmus on 2018-04-18.
 */

interface SpotifyCCFService {

    fun clientCredentialsSync(): String?

    fun clientCredentialsAsync(): Future<ClientCredentials>?


}

class InitSpotifyCCFSerivce : SpotifyCCFService {

    private val clientId = "895c15fc5b3149d3891fe73d65b30422"
    private val clientSecret = "2eee232ddedd4a5abc3bb43cace2a64e"

    val spotifyApi = SpotifyApi.builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .build()

    val clientCredentialRequest = spotifyApi.clientCredentials().build()

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

interface SpotifyACFService{

    fun authorizationCodeUriSync(): String?
    fun buildAuthorizationCode(code: String): AuthorizationCodeRequest
    fun authorizationCodeSync(authorizationCodeRequest:
                              AuthorizationCodeRequest): List<String>?
}


class InitSpotifyACFService : SpotifyACFService {

    private val clientId = "895c15fc5b3149d3891fe73d65b30422"
    private val clientSecret = "2eee232ddedd4a5abc3bb43cace2a64e"
    private val redirectUri = SpotifyHttpManager.
    makeUri("http://localhost:3000/auth/spotify/callback")

    val spotifyApi = SpotifyApi.builder()
            .setClientId(clientId)
            .setClientSecret(clientSecret)
            .setRedirectUri(redirectUri)
            .build()

    private val authorizationCodeUriRequest = spotifyApi.authorizationCodeUri()
            .state("x4xkmn9pu3j6ukrs8n")
            .scope("user-read-birthdate,user-read-email")
            .show_dialog(true)
            .build()

    override fun authorizationCodeUriSync(): String? {
        try {
            return authorizationCodeUriRequest.execute().toString()
        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: SpotifyWebApiException){
            println("Spotify web exception: " + e.localizedMessage)
        }
        return null
    }

    override fun buildAuthorizationCode(code: String): AuthorizationCodeRequest
            = spotifyApi.authorizationCode(code)
                .build()

    override fun authorizationCodeSync(authorizationCodeRequest:
                                       AuthorizationCodeRequest): List<String>? {
        try {
            val authorizationCodeCredentials = authorizationCodeRequest.execute()
            spotifyApi.accessToken = authorizationCodeCredentials.accessToken
            spotifyApi.refreshToken = authorizationCodeCredentials.refreshToken
            return listOf<String>(spotifyApi.accessToken,spotifyApi.refreshToken)

        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: SpotifyWebApiException){
            println("Spotify web exception: " + e.localizedMessage)
        }
        return null
    }

}