"use client"

import * as React from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import useEmblaCarousel from "embla-carousel-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function TestimonialCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [canScrollPrev, setCanScrollPrev] = React.useState(false)
  const [canScrollNext, setCanScrollNext] = React.useState(true)

  const scrollPrev = React.useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = React.useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

  const onSelect = React.useCallback((emblaApi: any) => {
    setCanScrollPrev(emblaApi.canScrollPrev())
    setCanScrollNext(emblaApi.canScrollNext())
  }, [])

  React.useEffect(() => {
    if (!emblaApi) return

    onSelect(emblaApi)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onSelect])

  const testimonials = [
    {
      quote: "A DI MI PA BÔS mudou minha vida. Hoje tenho uma casa digna para minha família.",
      author: "Maria Gomes",
      role: "Beneficiária",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: "Ver o sorriso no rosto das pessoas que ajudamos não tem preço.",
      author: "João Silva",
      role: "Voluntário",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      quote: "Graças ao programa de reabilitação, recuperei minha vida e minha família.",
      author: "Pedro Santos",
      role: "Beneficiário",
      image: "/placeholder.svg?height=200&width=200",
    },
  ]

  return (
    <section className="bg-muted py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Depoimentos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Histórias reais de pessoas que tiveram suas vidas transformadas.
          </p>
        </div>

        <div className="mt-16">
          <div className="relative">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]">
                    <Card>
                      <CardContent className="flex flex-col items-center p-6">
                        <div className="relative mb-4 h-24 w-24 overflow-hidden rounded-full">
                          <img
                            src={testimonial.image}
                            alt={testimonial.author}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <blockquote className="text-center text-muted-foreground">"{testimonial.quote}"</blockquote>
                        <div className="mt-4 text-center">
                          <p className="font-semibold text-foreground">{testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-8 flex justify-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Anterior</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                disabled={!canScrollNext}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
                <span className="sr-only">Próximo</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

