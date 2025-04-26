import { Button } from "@/components/ui/button"
import { Play, Info } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] w-full">
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="relative h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                Willkommen bei{" "}
                <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-600 bg-clip-text text-transparent">
                  Huebflix
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Entdecke die Welt rund um Huebi mit exklusiven Inhalten und mehr.
              </p>
              <div className="flex gap-4">
                <Button size="lg">
                  <Play className="mr-2 h-5 w-5" />
                  Abspielen
                </Button>
                <Button size="lg" variant="secondary">
                  <Info className="mr-2 h-5 w-5" />
                  Mehr Infos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Beliebte Kategorien</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-lg bg-muted hover:scale-105 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Now */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-6">Trending Now</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="aspect-video rounded-lg bg-muted hover:scale-105 transition-transform cursor-pointer"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
