package de.uecodes.huebflix.routing

import io.ktor.server.plugins.openapi.openAPI
import io.ktor.server.plugins.swagger.swaggerUI
import io.ktor.server.routing.Route
import io.swagger.codegen.v3.generators.html.StaticHtmlCodegen

fun Route.openApi() {
    openAPI("openapi", swaggerFile = "api/openapi.yaml") {
        codegen = StaticHtmlCodegen()
    }

    swaggerUI("swagger", swaggerFile = "api/openapi.yaml")
}
