"use client"

import { useState } from "react"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

interface RatingData {
  stars: number
  percentage: number
  count: number
}

const ratings: RatingData[] = [
  { stars: 5, percentage: 76, count: 93 },
  { stars: 4, percentage: 16, count: 20 },
  { stars: 3, percentage: 5, count: 6 },
  { stars: 2, percentage: 2, count: 3 },
  { stars: 1, percentage: 1, count: 1 },
]

const reviews = [
  {
    id: 1,
    name: "John D.",
    rating: 5,
    date: "2 weeks ago",
    comment:
      "This course was exactly what I needed to get started with Coinbase. The instructions were clear and easy to follow. I was able to buy my first Bitcoin within an hour of starting the course!",
    helpful: 24,
    isHelpful: false,
  },
  {
    id: 2,
    name: "Sarah M.",
    rating: 4,
    date: "1 month ago",
    comment:
      "Very informative course that covers all the basics. I would have liked a bit more detail on some of the advanced features, but overall it was great for beginners.",
    helpful: 18,
    isHelpful: false,
  },
  {
    id: 3,
    name: "Robert K.",
    rating: 5,
    date: "3 months ago",
    comment:
      "The section on Coinbase Earn was particularly valuable. I've already earned some free crypto by following the instructor's advice. Highly recommended!",
    helpful: 32,
    isHelpful: false,
  },
]

export default function CourseRatings() {
  const [helpfulReviews, setHelpfulReviews] = useState<number[]>([])
  const [showAllReviews, setShowAllReviews] = useState(false)

  const toggleHelpful = (reviewId: number) => {
    setHelpfulReviews((prev) => (prev.includes(reviewId) ? prev.filter((id) => id !== reviewId) : [...prev, reviewId]))
  }

  const displayedReviews = showAllReviews ? reviews : reviews.slice(0, 2)

  // Calculate average rating
  const totalRatings = ratings.reduce((acc, curr) => acc + curr.count, 0)
  const weightedSum = ratings.reduce((acc, curr) => acc + curr.stars * curr.count, 0)
  const averageRating = (weightedSum / totalRatings).toFixed(1)

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Student feedback</h2>

      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3 bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center">
          <div className="text-4xl font-bold text-amber-500">{averageRating}</div>
          <div className="flex my-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${star <= Math.round(Number.parseFloat(averageRating)) ? "fill-amber-500 text-amber-500" : "fill-gray-300 text-gray-300"}`}
              />
            ))}
          </div>
          <div className="text-sm text-gray-600">Course Rating</div>
        </div>

        <div className="md:w-2/3">
          {ratings.map((rating) => (
            <div key={rating.stars} className="flex items-center mb-2">
              <div className="flex items-center w-20">
                <span className="mr-1">{rating.stars}</span>
                <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
              </div>
              <Progress value={rating.percentage} className="h-2 flex-1 mx-2" />
              <div className="w-12 text-right text-sm text-gray-600">{rating.percentage}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-bold mb-4">Reviews</h3>

        <div className="space-y-6">
          {displayedReviews.map((review) => (
            <div key={review.id} className="border-b pb-4">
              <div className="flex items-center mb-2">
                <div className="bg-gray-100 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700 mr-2">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold">{review.name}</div>
                  <div className="flex items-center">
                    <div className="flex mr-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-3 h-3 ${star <= review.rating ? "fill-amber-500 text-amber-500" : "fill-gray-300 text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </div>

              <p className="text-sm mb-2">{review.comment}</p>

              <div className="flex items-center text-xs">
                <Button variant="ghost" size="sm" className="text-xs h-6 px-2" onClick={() => toggleHelpful(review.id)}>
                  <span className={helpfulReviews.includes(review.id) ? "text-purple-600" : ""}>
                    Helpful ({review.helpful + (helpfulReviews.includes(review.id) ? 1 : 0)})
                  </span>
                </Button>
                <span className="mx-2">•</span>
                <Button variant="ghost" size="sm" className="text-xs h-6 px-2">
                  Report
                </Button>
              </div>
            </div>
          ))}
        </div>

        {!showAllReviews && reviews.length > 2 && (
          <Button variant="outline" className="mt-4" onClick={() => setShowAllReviews(true)}>
            Show all reviews
          </Button>
        )}
      </div>
    </section>
  )
}

