"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

interface FAQ {
  id: number
  question: string
  answer: string
  expanded?: boolean
}

const faqs: FAQ[] = [
  {
    id: 1,
    question: "Do I need any prior knowledge of cryptocurrency to take this course?",
    answer:
      "No, this course is designed for complete beginners. We'll start with the basics and gradually build your knowledge of Coinbase and cryptocurrency.",
  },
  {
    id: 2,
    question: "Is Coinbase available in my country?",
    answer:
      "Coinbase is available in over 100 countries worldwide. You can check if your country is supported by visiting the Coinbase website or during the course where we cover regional availability.",
  },
  {
    id: 3,
    question: "Will I need to invest real money to follow along with the course?",
    answer:
      "No, you can create a Coinbase account and follow most of the course without making any purchases. However, if you want to actually buy cryptocurrency or use certain features, you will need to add funds to your account.",
  },
  {
    id: 4,
    question: "How long do I have access to the course materials?",
    answer:
      "Once you purchase the course, you have lifetime access to all the materials, including any future updates we make to keep the content current with Coinbase's features.",
  },
  {
    id: 5,
    question: "Is there a certificate upon completion?",
    answer:
      "Yes, you'll receive a Udemy certificate of completion once you finish the course, which you can share on your LinkedIn profile or resume.",
  },
]

export default function CourseFAQ() {
  const [expandedFAQs, setExpandedFAQs] = useState<number[]>([])

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQs((prev) => (prev.includes(faqId) ? prev.filter((id) => id !== faqId) : [...prev, faqId]))
  }

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>

      <div className="border border-gray-200 rounded-lg divide-y">
        {faqs.map((faq) => (
          <div key={faq.id}>
            <div
              className="p-4 cursor-pointer hover:bg-gray-50 flex justify-between items-center"
              onClick={() => toggleFAQ(faq.id)}
            >
              <h3 className="font-bold">{faq.question}</h3>
              {expandedFAQs.includes(faq.id) ? (
                <ChevronUp className="w-5 h-5 flex-shrink-0" />
              ) : (
                <ChevronDown className="w-5 h-5 flex-shrink-0" />
              )}
            </div>

            {expandedFAQs.includes(faq.id) && (
              <div className="p-4 pt-0 bg-gray-50">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

