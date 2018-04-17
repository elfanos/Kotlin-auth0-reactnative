package usertest

import com.github.fakemongo.Fongo
import com.mongodb.MongoClient
import org.junit.Ignore
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Configuration
import org.springframework.core.env.Environment
import org.springframework.data.mongodb.config.AbstractMongoConfiguration

/**
 * Created by Rasmus on 2018-04-15.
 */
@Ignore
@Configuration
class TestConfiguration : AbstractMongoConfiguration() {
    @Autowired
    lateinit var env: Environment

    override fun getDatabaseName() =
            env.getProperty("mongo.db.name", "test")

    override fun mongoClient(): MongoClient {
        logger.info("Instantiating Fongo with name $databaseName.")
        return Fongo(databaseName).mongo
    }

    companion object {

        val logger: Logger =
                LoggerFactory.getLogger(TestConfiguration::class.java)
    }
}