package spotifytest
import org.jetbrains.kotlin.demo.service.InitiSpotifySerivce
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
class SpotifyServiceTest {

   var spotifiyService: InitiSpotifySerivce = InitiSpotifySerivce()

    @Test
    fun testAAuthorizationToken(){
        logger.info("Begin testing authorization test")
        val authorization = spotifiyService.clientCredentialsSync()
        println(" hola?:  " + authorization)
        assertNotNull(authorization)
        logger.info("end authorization test")
    }

    @Test
    fun testB(){

    }
    @Test
    fun testCRefreshTokenAuthorization(){

    }
    companion object {
        val logger: Logger =
                LoggerFactory.getLogger(SpotifyServiceTest::class.java)
    }
}