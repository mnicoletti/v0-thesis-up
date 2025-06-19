"use client"

import { Progress } from "@/components/ui/progress"

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
                    ? "text-green-500"
                    : goal.status === "Necesita Atención"
                      ? "text-amber-500"
                      : goal.status === "En Riesgo"
                        ? "text-red-500"
                        : "text-blue-500"
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
                ? "bg-green-100"
                : goal.status === "Necesita Atención"
                  ? "bg-amber-100"
                  : goal.status === "En Riesgo"
                    ? "bg-red-100"
                    : "bg-blue-100"
            }`}
          />
        </div>
      ))}
    </div>
  )
}
