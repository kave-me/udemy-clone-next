import Image from "next/image"
import { Star, Clock, Globe, PlayCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import StudentReviews from "@/components/student-reviews"
import Instructor from "@/components/instructor"
import WhatYouWillLearn from "@/components/what-you-will-learn"
import CourseContent from "@/components/course-content"
import Requirements from "@/components/requirements"
import Description from "@/components/description"
import RelatedCourses from "@/components/related-courses"
import CourseSidebar from "@/components/course-sidebar"
import CourseRatings from "@/components/course-ratings"
import CourseFAQ from "@/components/course-faq"
import ImageWithFallback from "@/components/image-with-fallback"

export default function CoursePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center flex-1">
            {/* Use a direct image instead of SVG */}
            <Image
              src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
              alt="Udemy"
              width={91}
              height={34}
              className="mr-4"
              priority
            />
            <div className="hidden md:flex items-center flex-1 mx-4">
              <div className="relative flex-1 max-w-2xl">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full py-2 px-4 border border-gray-300 rounded-full bg-gray-50 text-sm"
                />
              </div>
            </div>
            <nav className="hidden lg:flex space-x-4 text-sm">
              <a href="#" className="hover:text-primary whitespace-nowrap">
                Udemy Business
              </a>
              <a href="#" className="hover:text-primary whitespace-nowrap">
                Teach on Udemy
              </a>
              <a href="#" className="hover:text-primary whitespace-nowrap">
                My learning
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-600 hover:text-gray-900 lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hidden md:block">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
            <Button variant="ghost" size="sm" className="hidden lg:flex">
              Log in
            </Button>
            <Button variant="outline" size="sm" className="hidden lg:flex">
              Sign up
            </Button>
            <Button size="sm" variant="outline" className="hidden lg:flex">
              <Globe className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </header>

      {/* Course Hero Section */}
      <div className="bg-[#1c1d1f] text-white py-8">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 space-y-4">
            <nav className="text-xs text-gray-400 mb-2">
              <ol className="flex flex-wrap">
                <li className="after:content-['>'] after:mx-1">Development</li>
                <li className="after:content-['>'] after:mx-1">Cryptocurrency & Blockchain</li>
                <li>Bitcoin</li>
              </ol>
            </nav>
            <h1 className="text-2xl md:text-3xl font-bold">Coinbase How to Buy Bitcoin and Earn™</h1>
            <p className="text-lg">
              How to Use the Coinbase App to Buy Bitcoin | Coinbase Tutorial | Coinbase Earn™ | Coinbase Wallet
            </p>

            <div className="flex items-center space-x-2 text-sm">
              <div className="flex items-center">
                <span className="text-[#f69c08] mr-1">4.7</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-[#f69c08] text-[#f69c08]" />
                  ))}
                </div>
              </div>
              <span className="text-[#cec0fc]">(123 ratings)</span>
              <span>1,234 students</span>
            </div>

            <div className="text-sm">
              <span>
                Created by{" "}
                <a href="#" className="text-[#cec0fc]">
                  Paolo Trentini
                </a>
              </span>
            </div>

            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>Last updated 3/2023</span>
              </div>
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-1" />
                <span>English</span>
              </div>
            </div>
          </div>

          {/* Course Card (visible on mobile, hidden on desktop) */}
          <div className="md:hidden bg-white text-black p-4 rounded-lg shadow-lg">
            <div className="relative w-full h-[200px] rounded-lg mb-4 overflow-hidden bg-gray-100">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?w=320&h=200&fit=crop&auto=format"
                alt="Course Preview"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <PlayCircle className="w-16 h-16 text-white opacity-80" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">$10.99</span>
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
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 bg-white">
        <div className="container mx-auto px-4 py-8 grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            {/* What You'll Learn */}
            <WhatYouWillLearn />

            {/* Course Content */}
            <CourseContent />

            {/* Requirements */}
            <Requirements />

            {/* Description */}
            <Description />

            {/* Student Ratings and Reviews */}
            <CourseRatings />

            {/* FAQ Section */}
            <CourseFAQ />

            {/* Student Reviews - Using the component */}
            <StudentReviews />

            {/* Instructor - Using the component */}
            <Instructor />

            {/* Related Courses */}
            <RelatedCourses />
          </div>

          {/* Sidebar - Course Card (hidden on mobile, visible on desktop) */}
          <div className="hidden md:block sticky top-24 h-fit">
            <CourseSidebar />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#1c1d1f] text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between mb-8">
            <div className="mb-6 md:mb-0 max-w-xl">
              <h3 className="font-bold mb-4">
                Top companies choose <span className="text-[#cec0fc]">Udemy Business</span> to build in-demand career
                skills.
              </h3>
              <div className="flex flex-wrap gap-6">
                {/* Use direct image URLs for company logos */}
                <Image
                  src="https://s.udemycdn.com/partner-logos/v4/nasdaq-light.svg"
                  alt="Nasdaq"
                  width={80}
                  height={30}
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src="https://s.udemycdn.com/partner-logos/v4/volkswagen-light.svg"
                  alt="Volkswagen"
                  width={36}
                  height={36}
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src="https://s.udemycdn.com/partner-logos/v4/box-light.svg"
                  alt="Box"
                  width={80}
                  height={30}
                  className="h-8 w-auto object-contain"
                />
                <Image
                  src="https://s.udemycdn.com/partner-logos/v4/netapp-light.svg"
                  alt="NetApp"
                  width={80}
                  height={30}
                  className="h-8 w-auto object-contain"
                />
              </div>
            </div>
            <div className="flex items-center">
              <Button variant="footerLanguage" size="sm" className="transition-colors">
                <Globe className="w-4 h-4 mr-2" />
                English
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 py-6 border-t border-gray-700">
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Udemy Business
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Teach on Udemy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Get the app
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Help and Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Affiliate
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Investors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:underline">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie settings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Sitemap
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Accessibility statement
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-700">
            <div>
              {/* Use direct image URL for Udemy logo in footer */}
              <Image
                src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg"
                alt="Udemy"
                width={91}
                height={32}
                className="h-8 w-auto"
              />
            </div>
            <div className="text-sm mt-4 md:mt-0">© 2023 Udemy, Inc.</div>
          </div>
        </div>
      </footer>
    </div>
  )
}

