package org.jetbrains.kotlin.demo.service.spotify.userdata
import com.wrapper.spotify.exceptions.SpotifyWebApiException
import com.wrapper.spotify.model_objects.specification.User;
import org.jetbrains.kotlin.demo.service.InitSpotifyAuthorization
import java.io.IOException

/**
 * Created by Rasmus on 2018-05-07.
 */
interface UserDataService {
    fun currentUserProfileAsync(accessToken: String?): User?
}

class UserDataServiceCurrentUser: UserDataService {
    private val requestAuthorization = InitSpotifyAuthorization()


    override fun currentUserProfileAsync(accessToken: String?): User? {
        val currentUserProfile = requestAuthorization.requestAuthorization(accessToken).
                currentUsersProfile.build()
        try {
            return currentUserProfile.execute();
        }catch (e: IOException){
            println("error " + e.localizedMessage)

        }catch (e: Throwable){
            println("Spotify web exception: " + e.localizedMessage)
        }
        return null
    }

}