"use client"

import { useState } from "react"
import { Star, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageWithFallback from "@/components/image-with-fallback"

interface CourseReview {
  id: number
  title: string
  rating: number
  reviewCount: number
  hours: number
  lectures: number
  level: string
  price: number
  image: string
}

// Replace the course images with reliable Unsplash images
const relatedCourses: CourseReview[] = [
  {
    id: 1,
    title: "Bitcoin and Cryptocurrency Masterclass",
    rating: 4.6,
    reviewCount: 2345,
    hours: 6.5,
    lectures: 75,
    level: "All Levels",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1591994843349-f415893b3a6b?w=60&h=60&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "Blockchain and Bitcoin Fundamentals",
    rating: 4.8,
    reviewCount: 1789,
    hours: 5.5,
    lectures: 62,
    level: "Beginner",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=60&h=60&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "Cryptocurrency Trading for Beginners",
    rating: 4.5,
    reviewCount: 3210,
    hours: 8.0,
    lectures: 95,
    level: "Beginner to Intermediate",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1590283603385-c1c9cfd24fd6?w=60&h=60&fit=crop&auto=format",
  },
  {
    id: 4,
    title: "Complete Crypto Wallet Guide",
    rating: 4.7,
    reviewCount: 1456,
    hours: 4.5,
    lectures: 48,
    level: "All Levels",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=60&h=60&fit=crop&auto=format",
  },
]

export default function StudentReviews() {
  const [wishlist, setWishlist] = useState<number[]>([])

  const toggleWishlist = (courseId: number) => {
    setWishlist((prev) => (prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]))
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Students also bought</h2>
      <div className="space-y-4">
        {relatedCourses.map((course) => (
          <div key={course.id} className="flex border-b pb-4">
            <div className="relative w-[60px] h-[60px] rounded mr-4 bg-gray-100">
              <ImageWithFallback
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                width={60}
                height={60}
                className="rounded object-cover"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-sm">{course.title}</h3>
              <div className="flex items-center text-xs">
                <span className="mr-1">{course.rating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${star <= Math.floor(course.rating) ? "fill-[#f69c08] text-[#f69c08]" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="ml-1">({course.reviewCount.toLocaleString()})</span>
              </div>
              <div className="text-xs">
                {course.hours} total hours • {course.lectures} lectures • {course.level}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="font-bold">${course.price.toFixed(2)}</span>
              <Button variant="ghost" size="sm" className="text-xs" onClick={() => toggleWishlist(course.id)}>
                <Heart className={`w-3 h-3 mr-1 ${wishlist.includes(course.id) ? "fill-red-500 text-red-500" : ""}`} />
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

