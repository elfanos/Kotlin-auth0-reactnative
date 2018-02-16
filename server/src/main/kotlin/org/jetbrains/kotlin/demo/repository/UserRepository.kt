package org.jetbrains.kotlin.demo.repository

import org.jetbrains.kotlin.demo.models.User
import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource

//For visualization with out TOKEN auth
@RepositoryRestResource(collectionResourceRel = "user", path = "user" )
interface UserRepository : MongoRepository<User, String>{

    //Find all user based on username
    fun findByUserName(@Param("username") username: String): List<String>
}

