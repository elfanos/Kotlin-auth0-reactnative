package org.jetbrains.kotlin.demo.auth0
import org.jetbrains.kotlin.demo.user.UserRepository
import org.springframework.beans.factory.annotation.Autowired


/**
 * Created by Rasmus on 2018-02-16.
 */
class DBCommunication {
    @Autowired
    lateinit var userRepository: UserRepository

    fun allDem() {
        println("jaman=" + userRepository)
    }
}
