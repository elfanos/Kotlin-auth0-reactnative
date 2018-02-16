package org.jetbrains.kotlin.demo.models

import org.springframework.data.annotation.Id

class Person {

    @Id private val id: String? = null

    var firstName: String? = null
    var lastName: String? = null
}