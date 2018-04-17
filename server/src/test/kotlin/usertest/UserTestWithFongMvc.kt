package usertest

import org.junit.Ignore
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc
import org.springframework.test.web.servlet.MockMvc

/**
 * Created by Rasmus on 2018-04-15.
 */
@Ignore
@AutoConfigureMockMvc
abstract class UserTestWithFongMvc(initializeTestData: Boolean = true) :
    UserRepositoryTest(initializeTestData) {
    @Autowired
    lateinit var mvc: MockMvc
}
