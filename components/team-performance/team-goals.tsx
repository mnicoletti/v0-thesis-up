"use client"

import { Progress } from "@/components/ui/progress"
import { METRIC_COLORS } from "@/lib/colors"

const goalsData = [
  {
    name: "Reducir Fallos de Compilación",
    target: "< 5%",
    progress: 85,
    status: "En Camino",
  },
  {
    name: "Mejorar Cobertura de Código",
    target: "> 90%",
    progress: 78,
    status: "Necesita Atención",
  },
  {
    name: "Velocidad de Sprint",
    target: "Aumentar en 15%",
    progress: 92,
    status: "En Camino",
  },
  {
    name: "Tiempo de Resolución de Tickets",
    target: "< 2 días",
    progress: 65,
    status: "En Riesgo",
  },
  {
    name: "Cero Errores Críticos",
    target: "0 en producción",
    progress: 100,
    status: "Logrado",
  },
]

export function TeamGoals() {
  return (
    <div className="space-y-8">
      {goalsData.map((goal, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between">
            <div>
              <p className="text-sm font-medium">{goal.name}</p>
              <p className="text-xs text-muted-foreground">Target: {goal.target}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium">{goal.progress}%</p>
              <p
                className={`text-xs ${
                  goal.status === "En Camino"
                    ? METRIC_COLORS.buildSuccess.text
                    : goal.status === "Necesita Atención"
                      ? METRIC_COLORS.ticketResolution.text
                      : goal.status === "En Riesgo"
                        ? "text-red-500"
                        : METRIC_COLORS.codeQuality.text
                }`}
              >
                {goal.status}
              </p>
            </div>
          </div>
          <Progress
            value={goal.progress}
            className={`h-2 ${
              goal.status === "En Camino"
                ? METRIC_COLORS.buildSuccess.light
                : goal.status === "Necesita Atención"
                  ? METRIC_COLORS.ticketResolution.light
                  : goal.status === "En Riesgo"
                    ? "bg-red-100"
                    : METRIC_COLORS.codeQuality.light
            }`}
          />
        </div>
      ))}
    </div>
  )
}
