import de.uecodes.buildSrc.Project

plugins {
    `maven-publish`
}

publishing {
    publications {
        create<MavenPublication>("maven") {
            from(components["java"])

            pom {
                name = Project.NAME
                description = Project.DESCRIPTION
                inceptionYear = Project.INCEPTION_YEAR.toString()

                ciManagement {
                    name = Project.CI_NAME
                    url = Project.CI_URL
                }

                licenses {
                    license {
                        name = Project.LICENSE_NAME
                        url = Project.LICENSE_URL
                        distribution = Project.LICENSE_DISTRIBUTION
                    }
                }

                issueManagement {
                    name = Project.ISSUE_TRACKER
                    url = Project.ISSUE_TRACKER_URL
                }

                developers {
                    developer {
                        id = "redtronics"
                        name = "Nils Jaekel"
                        email = "nils.jaekel@redtronics.dev"
                        timezone = "UTC+1"
                    }

                    developer {
                        id = "seri"
                        name = "David Ernst"
                        email = "david.ernst@davils.net"
                        timezone = "UTC+1"
                    }

                    developer {
                        id = "craiy"
                        name = "Craiy"
                        email = "business@craiy.net"
                        timezone = "UTC+1"
                    }
                }

                scm {
                    name = Project.SCM_NAME
                    url = Project.SCM_URL
                }
            }
        }
    }
}
