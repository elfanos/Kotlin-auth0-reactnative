package org.jetbrains.kotlin.demo.user

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.data.mongodb.core.MongoTemplate
import org.springframework.data.mongodb.core.query.Criteria
import org.springframework.data.mongodb.core.query.Query
import org.springframework.data.mongodb.core.query.Update
import org.springframework.stereotype.Service

/**
 * Created by Rasmus on 2018-04-15.
 */

interface UserService {
    fun findUserWithName(username: String) : List<User>

    fun getAllUsers(): List<User>

    fun updateUserWithName(username: String, newUserName: String)

    fun saveUser(user: User): User

    fun getAllUserByUserName()
}
@Service("userService")
class SringUserService : UserService {
    @Autowired
    lateinit var userRepository : UserRepository

    @Autowired
    lateinit var mongoTemplate: MongoTemplate

    override fun findUserWithName(username: String): List<User> =
        userRepository.findByUserName(username)

    override fun getAllUsers(): List<User> =
            userRepository.findAll()

    override fun updateUserWithName(username: String,
                                    newUserName: String) {
        val query = Query(Criteria("userName").`is`(username))
        val update  = Update().set("userName", newUserName)
        mongoTemplate.updateFirst(query,update,User::class.java)
    }

    override fun getAllUserByUserName() {
        this.getAllUsers().forEach{
            println("awraw $it")
        }
    }


     override fun saveUser(user: User): User {
        userRepository.save(user)
        return user
    }

}