package spotifytest

import org.jetbrains.kotlin.demo.service.InitSpotifyACFService
import org.junit.FixMethodOrder
import org.junit.Test
import org.junit.runners.MethodSorters
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import kotlin.test.assertNotNull

/**
 * Created by Rasmus on 2018-04-19.
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class SpotifyServiceTestACF {
    var spotifyACFService: InitSpotifyACFService = InitSpotifyACFService()
    @Test
    fun testBAuthorizationTokenACFService(){
        logger.info("Begin testing authorization test ACF")
         val authorization = spotifyACFService.authorizationCodeUriSync();
         println("hola: acf: " + authorization)
         assertNotNull(authorization)
         logger.info("end testing authorization test ACF")

    }
    companion object {
        val logger: Logger =
                LoggerFactory.getLogger(SpotifyServiceTestCCF::class.java)
    }
}