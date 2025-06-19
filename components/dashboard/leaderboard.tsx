"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award } from "lucide-react"

const leaderboardData = [
  {
    name: "Jane Doe",
    role: "Desarrollador Líder",
    points: 1250,
    badges: 8,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JD",
  },
  {
    name: "John Smith",
    role: "Ingeniero DevOps",
    points: 1120,
    badges: 7,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "JS",
  },
  {
    name: "Emily Johnson",
    role: "Desarrollador Backend",
    points: 980,
    badges: 6,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "EJ",
  },
  {
    name: "Michael Brown",
    role: "Desarrollador Frontend",
    points: 920,
    badges: 5,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "MB",
  },
  {
    name: "Sarah Wilson",
    role: "Ingeniero QA",
    points: 850,
    badges: 4,
    avatar: "/placeholder.svg?height=40&width=40",
    initials: "SW",
  },
]

export function Leaderboard() {
  return (
    <div className="space-y-8">
      {leaderboardData.map((user, index) => (
        <div key={index} className="flex items-center">
          <div className="flex items-center justify-center h-9 w-9 rounded-full bg-muted">
            {index < 3 ? (
              <Award
                className={`h-5 w-5 ${index === 0 ? "text-yellow-500" : index === 1 ? "text-gray-400" : "text-amber-700"}`}
              />
            ) : (
              <span className="text-sm font-medium">{index + 1}</span>
            )}
          </div>
          <div className="ml-4 space-y-1">
            <div className="flex items-center gap-2">
              <Avatar className="h-9 w-9">
                <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                <AvatarFallback>{user.initials}</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-sm font-medium leading-none">{user.name}</p>
                <p className="text-sm text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </div>
          <div className="ml-auto flex flex-col items-end">
            <p className="text-sm font-medium">{user.points} pts</p>
            <div className="flex items-center">
              <Badge variant="secondary" className="text-xs">
                {user.badges} insignias
              </Badge>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
