"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, PlayCircle, Lock, File } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Section {
  id: number
  title: string
  lectures: number
  duration: string
  expanded?: boolean
  lectures_list?: Lecture[]
}

interface Lecture {
  id: number
  title: string
  duration: string
  preview: boolean
  type: "video" | "article"
}

const sections: Section[] = [
  {
    id: 1,
    title: "INTRODUCTION TO COINBASE TO BUY BITCOIN",
    lectures: 3,
    duration: "10min",
    expanded: true,
    lectures_list: [
      { id: 1, title: "Introduction to Coinbase", duration: "3:45", preview: true, type: "video" },
      { id: 2, title: "What is Bitcoin?", duration: "4:20", preview: false, type: "video" },
      { id: 3, title: "Why use Coinbase?", duration: "2:15", preview: false, type: "article" },
    ],
  },
  {
    id: 2,
    title: "HOW TO REGISTER FOR FREE ON COINBASE",
    lectures: 2,
    duration: "8min",
    lectures_list: [
      { id: 4, title: "Creating your Coinbase account", duration: "5:10", preview: false, type: "video" },
      { id: 5, title: "Verifying your identity", duration: "3:20", preview: false, type: "video" },
    ],
  },
  {
    id: 3,
    title: "COINBASE EARN™ INTRODUCTION",
    lectures: 3,
    duration: "15min",
    lectures_list: [
      { id: 6, title: "What is Coinbase Earn™?", duration: "4:30", preview: false, type: "video" },
      { id: 7, title: "How to earn free crypto", duration: "6:15", preview: false, type: "video" },
      { id: 8, title: "Available earning opportunities", duration: "4:45", preview: false, type: "article" },
    ],
  },
  {
    id: 4,
    title: "BUYING YOUR FIRST BITCOIN",
    lectures: 4,
    duration: "22min",
    lectures_list: [
      { id: 9, title: "Setting up payment methods", duration: "5:30", preview: false, type: "video" },
      { id: 10, title: "Understanding fees", duration: "4:15", preview: false, type: "video" },
      { id: 11, title: "Making your first purchase", duration: "7:45", preview: false, type: "video" },
      { id: 12, title: "Security best practices", duration: "5:00", preview: false, type: "article" },
    ],
  },
  {
    id: 5,
    title: "ADVANCED COINBASE FEATURES",
    lectures: 3,
    duration: "18min",
    lectures_list: [
      { id: 13, title: "Coinbase Pro introduction", duration: "6:20", preview: false, type: "video" },
      { id: 14, title: "Setting up recurring buys", duration: "5:10", preview: false, type: "video" },
      { id: 15, title: "Price alerts and notifications", duration: "6:30", preview: false, type: "video" },
    ],
  },
]

export default function CourseContent() {
  const [expandedSections, setExpandedSections] = useState<number[]>([1])
  const [allExpanded, setAllExpanded] = useState(false)

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    )
  }

  const toggleAllSections = () => {
    if (allExpanded) {
      setExpandedSections([])
    } else {
      setExpandedSections(sections.map((section) => section.id))
    }
    setAllExpanded(!allExpanded)
  }

  // Calculate total course stats
  const totalLectures = sections.reduce((acc, section) => acc + section.lectures, 0)
  const totalMinutes = sections.reduce((acc, section) => {
    const [min] = section.duration.match(/\d+/) || ["0"]
    return acc + Number.parseInt(min, 10)
  }, 0)

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold mb-4">Course content</h2>
      <div className="flex flex-wrap justify-between items-center mb-4">
        <div className="text-sm">
          <span>
            {sections.length} sections • {totalLectures} lectures • {totalMinutes} min total length
          </span>
        </div>
        <Button variant="link" size="sm" onClick={toggleAllSections} className="text-purple-600">
          {allExpanded ? "Collapse all sections" : "Expand all sections"}
        </Button>
      </div>

      <div className="border border-gray-200 rounded-lg divide-y">
        {sections.map((section) => (
          <div key={section.id} className="divide-y">
            <div className="p-4 cursor-pointer hover:bg-gray-50" onClick={() => toggleSection(section.id)}>
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-sm">{section.title}</h3>
                <div className="flex items-center">
                  <span className="text-sm mr-2">
                    {section.lectures} lectures • {section.duration}
                  </span>
                  {expandedSections.includes(section.id) ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </div>
              </div>
            </div>

            {expandedSections.includes(section.id) && section.lectures_list && (
              <div className="bg-gray-50">
                {section.lectures_list.map((lecture) => (
                  <div key={lecture.id} className="p-4 pl-8 flex justify-between items-center">
                    <div className="flex items-center">
                      {lecture.type === "video" ? (
                        lecture.preview ? (
                          <PlayCircle className="w-4 h-4 mr-2 text-blue-600" />
                        ) : (
                          <Lock className="w-4 h-4 mr-2" />
                        )
                      ) : (
                        <File className="w-4 h-4 mr-2" />
                      )}
                      <span className="text-sm">{lecture.title}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      {lecture.preview && (
                        <Button variant="link" size="sm" className="mr-2 text-blue-600 p-0">
                          Preview
                        </Button>
                      )}
                      <span className="text-gray-500 text-xs">{lecture.duration}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

