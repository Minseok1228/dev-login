import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { CardWithForm } from "./FrontCard"
import { PasswordForm } from "./BackCard"

export function CarouselDemo() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <CardWithForm/>
    </CarouselItem>
      <CarouselItem className="md:basis-1/2 lg:basis-1/3">
        <PasswordForm/>
    </CarouselItem>

      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
