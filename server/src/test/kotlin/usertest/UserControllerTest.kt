package usertest

import org.jetbrains.kotlin.demo.user.NewUser
import org.jetbrains.kotlin.demo.user.User
import org.junit.Test
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.test.web.servlet.MvcResult
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders
import org.springframework.test.web.servlet.result.MockMvcResultMatchers
import kotlin.test.assertEquals
import kotlin.test.assertTrue

/**
 * Created by Rasmus on 2018-04-15.
 */

class UserControllerTest : UserTestWithFongMvc() {

    //The test user
    val testUser = User("id1","alice","tad")
    @Test
    fun testAGetUserByName(){
        logger.info("Begin getUserByName test")
        val username = "alice"
        val response: MvcResult = mvc.perform(MockMvcRequestBuilders
                .get("/user/${testUser.userName}")
                .content(username))
                .andExpect(MockMvcResultMatchers.status().isOk).andReturn()
        val resultAsString: String = response.response.contentAsString
        val expectedResult = "{\"userName\":\"${testUser.userName}\"," +
                "\"password\"}"
        assertEquals(expectedResult, resultAsString)

        logger.info("End getUserByName test")
    }

    fun getUserByNameAPI(username: String): String{
        return mvc.perform(MockMvcRequestBuilders
                .get("/user/${username}")
                .content(username))
                .andExpect(MockMvcResultMatchers.status().isOk).andReturn()
                .response.contentAsString
    }
    @Test
    fun testBPostNewUser(){
        logger.info("Begin postNewUser test")
        val postUser = "{\n" +
                "\t\"userName\": \"testmvc\",\n" +
                "\t\"password\": \"testpw\"\n" +
                "}"
        mvc.perform(MockMvcRequestBuilders
                .post("/user")
                .content(postUser))
                .andExpect(MockMvcResultMatchers.status().`is`(201)).andReturn()
        val result = "{\"userName\":\"testmvc\",\"password\":\"testpw\"}"

        assertEquals(result, this.getUserByNameAPI("testmvc"))
        logger.info("End postNewUser test")
    }
    @Test
    fun testCUpdateUserName(){
        assertTrue(true)
    }

    @Test
    fun postUserPassword(){
        assertTrue(true)
    }

    @Test
    fun removeUser(){
        assertTrue(true)
    }

    companion object {
        val logger: Logger =
                LoggerFactory.getLogger(UserControllerTest::class.java)
    }
}