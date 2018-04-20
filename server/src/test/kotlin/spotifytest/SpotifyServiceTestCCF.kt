package spotifytest
import org.jetbrains.kotlin.demo.service.InitSpotifyCCFSerivce
import org.junit.FixMethodOrder
import org.junit.Test
import org.junit.runners.MethodSorters
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import kotlin.test.assertNotNull

/**
 * Created by Rasmus on 2018-04-18.
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class SpotifyServiceTestCCF {

    var spotifiyService: InitSpotifyCCFSerivce = InitSpotifyCCFSerivce()
    //var spotifyACFService: InitSpotifyACFService = InitSpotifyACFService();

    @Test
    fun testAAuthorizationToken(){
        logger.info("Begin testing authorization test")
        val authorization = spotifiyService.clientCredentialsSync()
        println(" hola?:  " + authorization)
        assertNotNull(authorization)
        logger.info("end authorization test")
    }

    @Test
    fun testBAuthorizationTokenACFService(){
       /* logger.info("Begin testing authorization test ACF")
        val authorization = spotifyACFService.authorizationCodeUriSync();
        println("hola: acf: " + authorization)
        assertNotNull(authorization)
        logger.info("end testing authorization test ACF")*/

    }
    @Test
    fun testCRefreshTokenAuthorization(){

    }
    companion object {
        val logger: Logger =
                LoggerFactory.getLogger(SpotifyServiceTestCCF::class.java)
    }
}