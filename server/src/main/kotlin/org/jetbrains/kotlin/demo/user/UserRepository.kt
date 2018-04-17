package org.jetbrains.kotlin.demo.user

import org.springframework.data.mongodb.repository.MongoRepository
import org.springframework.data.mongodb.repository.Query
import org.springframework.data.rest.core.annotation.RepositoryRestResource

//For visualization with out TOKEN auth

/**
 * Defines all the query using mongorepositiory sdk
 * All the func is a query to the mongodb database
 * */
@RepositoryRestResource(collectionResourceRel = "user", path = "user" )
interface UserRepository : MongoRepository<User, String> {

    //Find all user based on username
    fun findByUserName(username: String): List<User>

    fun deleteByUserName(username: String)

    @Query("{'userName':?0}")
    fun getUserOnlyByUserName(): List<User>


}

