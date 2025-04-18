import org.gradle.api.tasks.testing.logging.TestExceptionFormat
import org.gradle.api.tasks.testing.logging.TestLogEvent

plugins {
    org.jetbrains.kotlin.jvm
}

repositories {
    mavenCentral()
}

val targetJavaVersion: JavaVersion = JavaVersion.VERSION_21
java {
    targetCompatibility = targetJavaVersion
    sourceCompatibility = targetJavaVersion

    toolchain {
        languageVersion.set(JavaLanguageVersion.of(targetJavaVersion.majorVersion))
    }
    withJavadocJar()
    withSourcesJar()
}

kotlin {
    compilerOptions {
        allWarningsAsErrors = true
    }
    jvmToolchain(targetJavaVersion.majorVersion.toInt())
}

tasks {
    withType<JavaCompile> {
        options.encoding = "UTF-8"
    }

    withType<Test> {
        useJUnitPlatform()
        reports.junitXml.required = true
        systemProperty("gradle.build.dir", layout.buildDirectory.get().asFile.absolutePath)

        filter {
            isFailOnNoMatchingTests = false
        }

        testLogging {
            showExceptions = true
            showStandardStreams = true
            events = setOf(TestLogEvent.FAILED, TestLogEvent.PASSED, TestLogEvent.SKIPPED)
            exceptionFormat = TestExceptionFormat.FULL
        }
    }
}