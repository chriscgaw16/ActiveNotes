"use client";
import * as React from "react"
import 'regenerator-runtime/runtime'
import { Card, CardContent } from "@/components/Card"
import {
  Carousel,
  CarouselContent,
  CarouselDictaphone,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselSet,
} from "@/components/Carousel"
import { useState, useEffect } from "react";

export default function CarouselDemo() {
  // Initialize state with an empty string
  const [keywords, setKeywords] = useState<(string | null)[]>([null, null, null, null, null]);

  const [status, setStatus] = useState(true)

  // Function to handle changes in the textarea
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newKeywords = [...keywords]
    newKeywords[index] = event.target.value;
    setKeywords(newKeywords)
  };

  useEffect(() => {
    console.log("Keywords is ", keywords)
  }, [keywords])

  return (
    <div className="w-screen h-screen content-center justify-center flex-wrap flex">
        <Carousel className="w-full max-w-[86vw]">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index}>
                    <div className="p-1">
                    <Card className="h-[92vh] w-[85vw]">
                        <CardContent className="flex h-full content-center items-center justify-center p-6">
                        <div>
                          <textarea className="h-[85vh] w-[82vw] pb-[83vh] resize-none overflow-hidden outline-none"
                          />
                          <div className="text-right">
                            <label>Keywords: </label>
                            <input className="border-2" type="text"
                             onChange={(event) => handleChange(event, index)}
                             disabled={!status}/>
                          </div>
                        </div>
                        </CardContent>
                    </Card>
                    </div>
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <CarouselDictaphone keywords={keywords} setStatus={setStatus}/>
        </Carousel>
    </div>
  )
}
