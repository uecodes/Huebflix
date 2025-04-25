package de.uecodes.huebflix

import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty


fun main() {
    val server = embeddedServer(Netty, port = 8080, host = "localhost") {}
    server.start(wait = true)
}
