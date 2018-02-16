package org.jetbrains.kotlin.demo.auth0

/**
 * Created by Rasmus on 2018-02-15.
 */
object HTTPHandler {
    private val SUCCESS = "200"
    private val AUTHORIZATION_PROBLEM = "401"
    private val NO_API_RESPONSE = "404"
    private val DEVELOPMENT = "http://localhost:8080/"
    private val PRODUCTION = "SOME PRODUCTION URL"

    fun checkResponse(response: String): String {
        when(response){
            HTTPHandler.SUCCESS -> return "Success"
            HTTPHandler.AUTHORIZATION_PROBLEM -> return "Authorization problem"
            HTTPHandler.NO_API_RESPONSE -> return  "No api response"
        }
        return ""
    }
    fun getHTTPSDevelopment(): String   {
        return HTTPHandler.DEVELOPMENT
    }
    fun getHTTPSProduction(): String {
        return HTTPHandler.PRODUCTION
    }
    fun getAUTH0Domain(): String {
        return ""
    }
}

