import { Globe, Heart, PlayCircle, Share2, FileText, Download, InfinityIcon, Trophy, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import ImageWithFallback from "@/components/image-with-fallback"

export default function CourseSidebar() {
  return (
    <div className="border border-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-[200px] bg-gray-100">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=600&h=400&fit=crop&auto=format"
          alt="Course Preview"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
          <PlayCircle className="w-16 h-16 text-white opacity-80" />
        </div>
      </div>
      <div className="p-6 space-y-6">
        <div>
          <div className="flex items-center justify-between">
            <span className="text-3xl font-bold">$10.99</span>
            <span className="line-through text-gray-500">$84.99</span>
          </div>
          <span className="text-sm text-gray-700">87% off</span>
          <div className="mt-1 text-xs text-red-600 font-medium">
            <Clock className="inline-block w-3 h-3 mr-1" />
            <span>2 days left at this price!</span>
          </div>
        </div>
        <div className="space-y-2">
          <Button className="w-full bg-purple-600 hover:bg-purple-700">Buy now</Button>
          <Button variant="outline" className="w-full">
            Add to cart
          </Button>
        </div>
        <p className="text-xs text-center">30-Day Money-Back Guarantee</p>

        <div className="space-y-4 pt-4">
          <h3 className="font-bold">This course includes:</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center">
              <PlayCircle className="w-4 h-4 mr-2 text-gray-500" />
              <span>2.5 hours on-demand video</span>
            </li>
            <li className="flex items-center">
              <FileText className="w-4 h-4 mr-2 text-gray-500" />
              <span>12 articles</span>
            </li>
            <li className="flex items-center">
              <Download className="w-4 h-4 mr-2 text-gray-500" />
              <span>15 downloadable resources</span>
            </li>
            <li className="flex items-center">
              <InfinityIcon className="w-4 h-4 mr-2 text-gray-500" />
              <span>Full lifetime access</span>
            </li>
            <li className="flex items-center">
              <Globe className="w-4 h-4 mr-2 text-gray-500" />
              <span>Access on mobile and TV</span>
            </li>
            <li className="flex items-center">
              <Trophy className="w-4 h-4 mr-2 text-gray-500" />
              <span>Certificate of completion</span>
            </li>
          </ul>
        </div>

        <div className="flex justify-between pt-4">
          <Button variant="link" size="sm" className="p-0 text-gray-700">
            <Share2 className="w-4 h-4 mr-1" />
            Share
          </Button>
          <Button variant="link" size="sm" className="p-0 text-gray-700">
            <Heart className="w-4 h-4 mr-1" />
            Wishlist
          </Button>
          <Button variant="link" size="sm" className="p-0 text-gray-700">
            Gift
          </Button>
        </div>

        <div className="pt-4">
          <h3 className="font-bold mb-2">Training 5 or more people?</h3>
          <p className="text-sm mb-2">Get your team access to 25,000+ top Udemy courses anytime, anywhere.</p>
          <Button variant="outline" className="w-full">
            Try Udemy Business
          </Button>
        </div>

        <div className="pt-4 text-center">
          <Button variant="link" size="sm" className="text-xs text-gray-700">
            Apply Coupon
          </Button>
        </div>
      </div>
    </div>
  )
}

