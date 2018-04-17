package usertest
import com.github.fakemongo.junit.FongoRule
import org.jetbrains.kotlin.demo.Application
import org.jetbrains.kotlin.demo.user.User
import org.jetbrains.kotlin.demo.user.UserRepository
import org.junit.Before
import org.junit.Ignore
import org.junit.Rule
import org.junit.runner.RunWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.boot.jdbc.EmbeddedDatabaseConnection
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase
import org.springframework.boot.test.context.SpringBootTest
import org.springframework.test.context.junit4.SpringRunner

/**
 * Created by Rasmus on 2018-04-15.
 */
@Ignore
@RunWith(SpringRunner::class)
@SpringBootTest(classes = arrayOf(Application::class),
        webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class UserRepositoryTest(val initializeTestData: Boolean = true) {
    @get:Rule
    val fongoRule = FongoRule()

    //private val listOfUser = mutableListOf<User>()

    @Autowired
    lateinit var userRepository: UserRepository

    @Before
    fun setupTestDatabase() {
        //resetOldData()
        if (initializeTestData) {
            this.resetOldData()
            userRepository.save(TEST_PLAYER_1)
            userRepository.save(TEST_PLAYER_2)
            userRepository.save(TEST_PLAYER_3)
            userRepository.save(TEST_PLAYER_4)
            userRepository.save(TEST_PLAYER_5)
        }
    }
    fun resetOldData(){
        val oldData =  userRepository.findAll().intersect(addToListOfUser())
        for(data: User in oldData){
            println(data)
            userRepository.deleteByUserName(data.userName.toString())
        }
    }

    fun addToListOfUser (): List<User> {
        val listOfUser = mutableListOf<User>()
        listOfUser.add(0, TEST_PLAYER_1)
        listOfUser.add(1, TEST_PLAYER_2)
        listOfUser.add(2, TEST_PLAYER_3)
        listOfUser.add(3, TEST_PLAYER_4)
        listOfUser.add(4, TEST_PLAYER_5)

        return listOfUser
    }

    companion object {
        val TEST_PLAYER_1 = User("id1", "ted1", "pass1")
        val TEST_PLAYER_2 = User("id2", "ted2", "pass2")
        val TEST_PLAYER_3 = User("id3", "ted3", "pass3")
        val TEST_PLAYER_4 = User("id4", "ted4", "pass4")
        val TEST_PLAYER_5 = User("id5", "ted5", "pass5")

    }
}