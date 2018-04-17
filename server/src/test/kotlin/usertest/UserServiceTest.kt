package usertest

import org.jetbrains.kotlin.demo.user.User
import org.jetbrains.kotlin.demo.user.UserService
import org.junit.Before
import org.junit.FixMethodOrder
import org.junit.Ignore
import org.junit.Test
import org.junit.runners.MethodSorters
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.transaction.annotation.Transactional
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull
import kotlin.test.assertTrue

/**
 * Created by Rasmus on 2018-04-15.
 */
@FixMethodOrder(MethodSorters.NAME_ASCENDING)
class UserServiceTest : UserRepositoryTest() {
    @Autowired
    lateinit var userService: UserService

    @Test
    fun testACheckRepository() {
        logger.info("Begin testing checkRepository")
        assertNotNull(userRepository)
        logger.info("After testing checkRepository")
        //test.checkIfMongo();
    }

    /*Right now 10 just to check if connection is working with
    * database*/
    @Ignore
    @Test
    fun testBCheckMongoListLength(){
        logger.info("Begin testing mongolist length")
        assertEquals(11, userRepository.findAll().size)
        logger.info("End testing mongolist length")
    }

    @Test
    fun testCFindUserByName(){
        logger.info("Begin testing findUserByName")
        val newUser: User? = userRepository.findAll().getOrNull(0)
        assertEquals(newUser, userRepository.findByUserName("alice").
                getOrNull(0))
        logger.info("End testing findUserByName")
    }

    @Test
    fun testDPostNewUser(){
        assertTrue(true)
    }

    @Test
    fun testEAddTestUpdateUserToDataBase(){
        logger.info("Begin testing addTestUpdateUser")
        userRepository.save(UPDATE_USER)
        assertEquals("firstname",
                userRepository.findByUserName("firstname")[0].userName)
        logger.info("End testing addTestUpdateUser")
    }
    @Test
    fun testFUpdateUserWithNewUserName(){
        logger.info("Begin testing updateUserWithNewUserName")
        val currentUserName = "firstname"
        val newUserName = "newname"
        userService.updateUserWithName(currentUserName, newUserName)
        assertEquals(newUserName,
                userRepository.findByUserName(newUserName)[0].userName)
        logger.info("End testing updateUserWithNewUserName")
    }

    @Test
    fun testGDeleteUpdateUserFromDatabase(){
        logger.info("Begin testing deleteUpdateUserFromDatabase")
        val before = userRepository.findAll().size
        val user  = userRepository.findByUserName("newname")[0]
        println(user.userName)
        userRepository.deleteByUserName(user.userName.toString())
        assertEquals((before-1), userRepository.findAll().size)
        logger.info("End testing deleteUpdateUserFromDatabase")
    }

    @Test
    fun testHGetUserByTheUserName(){
        logger.info("Begin getUserByName")
        userRepository.findAll().forEach {
            logger.info("value? $it")
        }
        logger.info("End testing getUserByName")
    }
    @Test
    fun testHPostUserPassword(){
        assertTrue(true)
    }

    @Test
    fun testIremoveUser(){
        assertTrue(true)
    }

    companion object {
        val logger: Logger =
                LoggerFactory.getLogger(UserRepositoryTest::class.java)
        const val TEST_PLAYER_HANDLE = "testPlayer"
        var UPDATE_USER = User("id255", "firstname", "pw")
    }
}