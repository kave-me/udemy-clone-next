"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function LoadingSplash() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide splash screen after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center transition-opacity duration-500">
      <div className="w-24 h-24 relative mb-4">
        <Image
          src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"
          alt="Udemy"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="w-16 h-1 bg-gray-200 rounded-full overflow-hidden">
        <div className="h-full bg-purple-600 animate-loading-progress"></div>
      </div>
    </div>
  )
}

