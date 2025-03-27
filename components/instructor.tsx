"use client"

import { useState } from "react"
import { Star, Award, PlayCircle, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageWithFallback from "@/components/image-with-fallback"

export default function Instructor() {
  const [expanded, setExpanded] = useState(false)

  const shortBio = (
    <p>
      Paolo Trentini is a cryptocurrency expert with over 5 years of experience in the blockchain industry. He has
      helped thousands of students understand the complexities of cryptocurrency in simple, easy-to-follow steps.
    </p>
  )

  const fullBio = (
    <>
      {shortBio}
      <p className="mt-2">
        With a background in finance and computer science, Paolo brings a unique perspective to cryptocurrency
        education. He started investing in Bitcoin in 2015 and has since expanded his knowledge to cover all aspects of
        blockchain technology.
      </p>
      <p className="mt-2">
        Paolo's teaching style focuses on practical, actionable advice that beginners can implement immediately. His
        courses have helped students from over 50 countries start their cryptocurrency journey with confidence.
      </p>
      <p className="mt-2">
        When he's not teaching, Paolo works as a consultant for blockchain startups and contributes to open-source
        cryptocurrency projects.
      </p>
    </>
  )

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Instructor</h2>
      <div className="flex">
        <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden mr-4 flex-shrink-0 bg-gray-100">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&h=120&fit=crop&crop=faces&auto=format"
            alt="Paolo Trentini"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">Paolo Trentini</h3>
          <p className="text-gray-500 mb-2">Cryptocurrency Expert & Educator</p>
          <div className="flex items-center space-x-4 text-sm mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 mr-1 text-[#f69c08]" />
              <span>4.7 Instructor Rating</span>
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-1" />
              <span>1,234 Reviews</span>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center">
              <PlayCircle className="w-4 h-4 mr-1" />
              <span>10 Courses</span>
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              <span>5,678 Students</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 text-gray-700">
        {expanded ? fullBio : shortBio}
        <div className="pt-2">
          <Button variant="link" className="p-0" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </section>
  )
}

