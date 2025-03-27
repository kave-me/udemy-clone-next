import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageWithFallback from "@/components/image-with-fallback"

interface RelatedCourse {
  id: number
  title: string
  rating: number
  reviewCount: number
  price: number
  image: string
}

const courses: RelatedCourse[] = [
  {
    id: 1,
    title: "Complete Ethereum Development Bootcamp",
    rating: 4.8,
    reviewCount: 1245,
    price: 12.99,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?w=200&h=120&fit=crop&auto=format",
  },
  {
    id: 2,
    title: "NFT Masterclass: Create and Sell Digital Art",
    rating: 4.6,
    reviewCount: 987,
    price: 14.99,
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?w=200&h=120&fit=crop&auto=format",
  },
  {
    id: 3,
    title: "DeFi: Decentralized Finance Explained",
    rating: 4.7,
    reviewCount: 1532,
    price: 11.99,
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=200&h=120&fit=crop&auto=format",
  },
]

export default function RelatedCourses() {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">More Courses by Paolo Trentini</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {courses.map((course) => (
          <div key={course.id} className="border rounded-lg overflow-hidden">
            <div className="relative h-32 w-full bg-gray-100">
              <ImageWithFallback
                src={course.image || "/placeholder.svg"}
                alt={course.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="font-bold text-sm line-clamp-2 mb-1">{course.title}</h3>
              <div className="flex items-center text-xs mb-1">
                <span className="mr-1">{course.rating}</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-3 h-3 ${star <= Math.floor(course.rating) ? "fill-[#f69c08] text-[#f69c08]" : "fill-muted stroke-muted-foreground"}`}
                    />
                  ))}
                </div>
                <span className="ml-1">({course.reviewCount})</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="font-bold">${course.price.toFixed(2)}</span>
                <Button size="sm" variant="outline">
                  Details
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

