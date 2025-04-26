package de.uecodes.huebflix.config

data class Settings(
    val serverSettings: ServerSettings,
    val databaseSettings: DatabaseSettings
)

data class ServerSettings(
    val host: String,
    val port: Int
)

data class DatabaseSettings(
    val host: String,
    val port: Int,
    val database: String,
    val user: String,
    val password: String,
)