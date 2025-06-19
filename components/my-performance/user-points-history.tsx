"use client"

import { CheckCircle2, Code2, GitPullRequest, TicketCheck } from "lucide-react"
import { METRIC_COLORS } from "@/lib/colors"

const pointsHistoryData = [
  {
    action: "Despliegue de compilación exitoso",
    points: 25,
    date: "Hoy, 10:30 AM",
    icon: CheckCircle2,
    iconColor: METRIC_COLORS.buildSuccess.text,
  },
  {
    action: "Revisión de código con calidad A+",
    points: 50,
    date: "Ayer, 3:15 PM",
    icon: Code2,
    iconColor: METRIC_COLORS.codeQuality.text,
  },
  {
    action: "Tareas de sprint completadas temprano",
    points: 75,
    date: "20 Jul, 2023",
    icon: GitPullRequest,
    iconColor: METRIC_COLORS.sprintCompletion.text,
  },
  {
    action: "Resolvió 5 tickets de alta prioridad",
    points: 100,
    date: "18 Jul, 2023",
    icon: TicketCheck,
    iconColor: METRIC_COLORS.ticketResolution.text,
  },
  {
    action: "Ayudó a compañero de equipo con depuración",
    points: 30,
    date: "15 Jul, 2023",
    icon: Code2,
    iconColor: METRIC_COLORS.codeQuality.text,
  },
]

export function UserPointsHistory() {
  return (
    <div className="space-y-4">
      {pointsHistoryData.map((item, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-muted rounded-full p-2">
              <item.icon className={`h-4 w-4 ${item.iconColor}`} />
            </div>
            <div>
              <p className="text-sm font-medium">{item.action}</p>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          </div>
          <div className="text-sm font-medium text-green-500">+{item.points} pts</div>
        </div>
      ))}
    </div>
  )
}
