"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function Description() {
  const [expanded, setExpanded] = useState(false)

  const shortDescription = (
    <>
      <p>Have you always wanted to learn how to buy Bitcoin and other cryptocurrencies on Coinbase?</p>
      <p>
        This course is a complete guide to using Coinbase, one of the world's most popular cryptocurrency exchanges.
        You'll learn how to create an account, secure your investments, buy Bitcoin and other cryptocurrencies, and even
        earn free crypto through Coinbase Earn™.
      </p>
      <p>
        Whether you're a complete beginner or have some experience with cryptocurrencies, this course will guide you
        through every step of the process.
      </p>
    </>
  )

  const fullDescription = (
    <>
      {shortDescription}
      <p>In this course, you'll discover:</p>
      <ul className="list-disc pl-5 space-y-1">
        <li>How to create and secure your Coinbase account</li>
        <li>The step-by-step process to buy your first Bitcoin</li>
        <li>How to earn free cryptocurrency through Coinbase Earn™</li>
        <li>Tips for securing your digital assets</li>
        <li>How to use Coinbase Wallet for more advanced crypto storage</li>
        <li>The differences between various cryptocurrencies available on Coinbase</li>
      </ul>
      <p>
        By the end of this course, you'll have the confidence to navigate the Coinbase platform, make informed
        investment decisions, and take advantage of all the features Coinbase has to offer.
      </p>
      <p>Join thousands of students who have already taken this course and started their cryptocurrency journey!</p>
    </>
  )

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Description</h2>
      <div className="space-y-4 text-gray-700">
        {expanded ? fullDescription : shortDescription}
        <div className="pt-2">
          <Button variant="link" className="p-0" onClick={() => setExpanded(!expanded)}>
            {expanded ? "Show less" : "Show more"}
          </Button>
        </div>
      </div>
    </section>
  )
}

