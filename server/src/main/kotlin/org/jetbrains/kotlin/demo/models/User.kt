package org.jetbrains.kotlin.demo.models

import com.fasterxml.jackson.annotation.JsonCreator
import org.springframework.data.annotation.Id
/**
 * Created by Rasmus on 2018-02-15.
 */

data class User (
    @Id private val Id: String? = null,

    val userName: String? = null,
    val password: String? = null
)
// New data class for incoming comments
data class NewUser @JsonCreator constructor(
        val userName: String? = null,
        val password: String? = null
)