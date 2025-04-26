package de.uecodes.huebflix

import de.uecodes.huebflix.routing.apiRouting
import de.uecodes.huebflix.routing.auth.authProviders
import de.uecodes.huebflix.routing.openApi
import io.ktor.server.application.Application
import io.ktor.server.engine.embeddedServer
import io.ktor.server.netty.Netty

fun main() {
    val server = embeddedServer(Netty, port = 8080, host = "localhost", module = Application::huebflix)
    server.start(wait = true)
}

fun Application.huebflix() {
    apiRouting("v1") {
        openApi()
        authProviders()
    }
}
