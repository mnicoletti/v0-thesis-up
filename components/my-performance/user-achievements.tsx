"use client"

import { Badge } from "@/components/ui/badge"
import { CheckCircle2, Code2, GitPullRequest, Star, TicketCheck } from "lucide-react"
import { METRIC_COLORS } from "@/lib/colors"

// Actualizar los colores de los iconos en achievementsData:
const achievementsData = [
  {
    name: "Campeón de Calidad de Código",
    description: "Mantuvo calidad de código A+ durante 3 meses consecutivos",
    icon: Code2,
    iconColor: METRIC_COLORS.codeQuality.text,
    date: "15 de julio, 2023",
  },
  {
    name: "Maestro de Compilación",
    description: "Logró 100 compilaciones exitosas",
    icon: CheckCircle2,
    iconColor: METRIC_COLORS.buildSuccess.text,
    date: "22 de junio, 2023",
  },
  {
    name: "Superestrella de Sprint",
    description: "Completó todas las tareas de sprint durante 5 sprints consecutivos",
    icon: GitPullRequest,
    iconColor: METRIC_COLORS.sprintCompletion.text,
    date: "30 de mayo, 2023",
  },
  {
    name: "Resolutor de Tickets",
    description: "Resolvió 100 tickets",
    icon: TicketCheck,
    iconColor: METRIC_COLORS.ticketResolution.text,
    date: "12 de abril, 2023",
  },
  {
    name: "Coleccionista de Puntos",
    description: "Ganó más de 1000 puntos",
    icon: Star,
    iconColor: METRIC_COLORS.points.text,
    date: "5 de marzo, 2023",
  },
]

export function UserAchievements() {
  return (
    <div className="space-y-4">
      {achievementsData.map((achievement, index) => (
        <div key={index} className="flex items-start space-x-4 p-3 rounded-lg bg-muted/50">
          <div className="bg-background rounded-full p-2">
            <achievement.icon className={`h-5 w-5 ${achievement.iconColor}`} />
          </div>
          <div className="space-y-1">
            <div className="flex items-center">
              <h4 className="font-medium text-sm">{achievement.name}</h4>
              <Badge variant="outline" className="ml-2 text-xs">
                {achievement.date}
              </Badge>
            </div>
            <p className="text-xs text-muted-foreground">{achievement.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
