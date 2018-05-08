package org.jetbrains.kotlin.demo.user

import com.fasterxml.jackson.annotation.JsonCreator
import org.springframework.data.annotation.Id
import org.springframework.data.mongodb.core.mapping.Document

/**
 * Created by Rasmus on 2018-02-15.
 */


//@Document(collection="user")
data class User (
    @Id private val Id: String? = null,

    var userName: String? = null,
    private var password: String? = null,
    private var email: String? = null
)
// New data class for incoming comments
data class NewUser @JsonCreator constructor(
        var userName: String? = null,
        var password: String? = null,
        var email: String? = null
)