package de.uecodes.huebflix

/**
 * Huebflix DSL marker.
 *
 * This annotation is used to mark DSL elements in the Huebflix project.
 * It helps to prevent name clashes in DSL builders.
 *
 * @since 0.1.0
 */
@Target(AnnotationTarget.CLASS)
@Retention(AnnotationRetention.SOURCE)
@MustBeDocumented
@DslMarker
annotation class HuebflixDSL
