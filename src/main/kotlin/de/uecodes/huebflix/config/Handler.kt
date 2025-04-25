package de.uecodes.huebflix.config

import de.uecodes.huebflix.HuebflixDSL

@HuebflixDSL
class EnvironmentHandlerBuilder {
    fun getEnvOrNull(key: String): String? = System.getenv(key)

    fun getEnvOrThrow(key: String): String = System.getenv(key) ?: throw IllegalStateException("Environment variable '$key' not set")
}

fun <T> environment(builder: EnvironmentHandlerBuilder.() -> T): T {
    val environmentHandlerBuilder = EnvironmentHandlerBuilder()
    return environmentHandlerBuilder.builder()
}