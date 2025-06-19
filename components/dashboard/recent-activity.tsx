"use client"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Award, CheckCircle2, Code2, GitPullRequest, Star, TicketCheck } from "lucide-react"

const activityData = [
  {
    user: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    action: "ganó insignia",
    target: "Campeón de Calidad de Código",
    icon: Code2,
    iconColor: "text-blue-500",
    timestamp: "hace 2 minutos",
  },
  {
    user: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    action: "ganó",
    target: "150 puntos",
    icon: Star,
    iconColor: "text-yellow-500",
    timestamp: "hace 15 minutos",
  },
  {
    user: {
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EJ",
    },
    action: "completó hito",
    target: "100 Compilaciones Exitosas",
    icon: CheckCircle2,
    iconColor: "text-green-500",
    timestamp: "hace 1 hora",
  },
  {
    user: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    action: "ganó insignia",
    target: "Maestro de Sprint",
    icon: GitPullRequest,
    iconColor: "text-violet-500",
    timestamp: "hace 3 horas",
  },
  {
    user: {
      name: "Sarah Wilson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "SW",
    },
    action: "ganó insignia",
    target: "Resolutor de Tickets",
    icon: TicketCheck,
    iconColor: "text-orange-500",
    timestamp: "hace 5 horas",
  },
  {
    user: {
      name: "Equipo Alpha",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "TA",
    },
    action: "alcanzó la cima de la tabla",
    target: "Clasificación de Equipos",
    icon: Award,
    iconColor: "text-indigo-500",
    timestamp: "hace 1 día",
  },
]

export function RecentActivity() {
  return (
    <div className="space-y-8">
      {activityData.map((activity, index) => (
        <div key={index} className="flex items-center">
          <Avatar className="h-9 w-9">
            <AvatarImage src={activity.user.avatar || "/placeholder.svg"} alt={activity.user.name} />
            <AvatarFallback>{activity.user.initials}</AvatarFallback>
          </Avatar>
          <div className="ml-4 space-y-1">
            <p className="text-sm font-medium leading-none">
              <span className="font-semibold">{activity.user.name}</span> {activity.action}{" "}
              <Badge variant="outline" className="ml-1">
                <activity.icon className={`h-3 w-3 mr-1 ${activity.iconColor}`} />
                {activity.target}
              </Badge>
            </p>
            <p className="text-sm text-muted-foreground">{activity.timestamp}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
