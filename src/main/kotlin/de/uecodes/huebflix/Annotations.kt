package de.uecodes.huebflix

/**
 * A marker annotation for the Huebflix's DSL (Domain-Specific Language) builders.
 *
 * @since 0.1.0
 */
@Target(AnnotationTarget.CLASS)
@Retention(AnnotationRetention.SOURCE)
@MustBeDocumented
@DslMarker
annotation class HuebflixDSL
