"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, Code2, GitPullRequest, TicketCheck } from "lucide-react"

const recommendationsData = [
  {
    title: "Mejorar Cobertura de Pruebas",
    description: "Tu calidad de código es excelente, pero la cobertura de pruebas podría mejorarse.",
    action: "Ver Guía de Pruebas",
    icon: Code2,
    iconColor: "text-blue-500",
  },
  {
    title: "Planificación de Sprint",
    description: "Considera dividir tareas más grandes para una mejor estimación.",
    action: "Leer Mejores Prácticas",
    icon: GitPullRequest,
    iconColor: "text-violet-500",
  },
  {
    title: "Documentación de Tickets",
    description: "Añade más detalles a tus resoluciones de tickets para mejor compartir conocimiento.",
    action: "Ver Ejemplos",
    icon: TicketCheck,
    iconColor: "text-orange-500",
  },
  {
    title: "Aprender Pipelines CI/CD",
    description: "Mejora tus habilidades DevOps aprendiendo más sobre pipelines CI/CD.",
    action: "Comenzar Aprendizaje",
    icon: BookOpen,
    iconColor: "text-green-500",
  },
]

export function UserRecommendations() {
  return (
    <div className="space-y-4">
      {recommendationsData.map((recommendation, index) => (
        <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
          <div className="bg-background rounded-full p-2 mt-1">
            <recommendation.icon className={`h-4 w-4 ${recommendation.iconColor}`} />
          </div>
          <div className="space-y-2 flex-1">
            <div>
              <h4 className="font-medium text-sm">{recommendation.title}</h4>
              <p className="text-xs text-muted-foreground">{recommendation.description}</p>
            </div>
            <Button variant="outline" size="sm" className="w-full text-xs">
              {recommendation.action}
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
