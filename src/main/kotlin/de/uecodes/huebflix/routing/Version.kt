package de.uecodes.huebflix.routing

import io.ktor.server.application.Application
import io.ktor.server.routing.Route
import io.ktor.server.routing.route
import io.ktor.server.routing.routing

fun Application.apiRouting(version: String, routes: Route.() -> Unit) {
    routing {
        route("/api/$version") {
            routes()
        }
    }
}
