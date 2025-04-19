plugins {
    `huebflix-core`
    `huebflix-publish`
}

dependencies {
    // Ktor server
    implementation(libs.ktor.server.core)
    implementation(libs.ktor.server.netty)
    implementation(libs.ktor.server.call.logging)
    implementation(libs.ktor.server.status.pages)
    implementation(libs.ktor.server.cors)
    implementation(libs.ktor.server.compression)
    implementation(libs.ktor.server.rate.limit)
    implementation(libs.ktor.server.content.negotiation)
    implementation(libs.ktor.server.resources)

    // Ktor common
    implementation(libs.ktor.common.kotlinx.serialization.json)

    // Logging
    implementation(libs.logback.classic)

    // Testing
    testImplementation(libs.ktor.server.test)
    testImplementation(libs.kotest.assertion.core)
    testImplementation(libs.kotest.property)
    testImplementation(libs.kotest.runner.junit5)
}
