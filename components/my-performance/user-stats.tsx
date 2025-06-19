"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, CheckCircle2, Code2, GitPullRequest, TicketCheck } from "lucide-react"
import { METRIC_COLORS } from "@/lib/colors"

export function UserStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <Award className={`h-8 w-8 ${METRIC_COLORS.points.text} mb-2`} />
          <div className="text-2xl font-bold">1,250</div>
          <p className="text-xs text-muted-foreground">Puntos Totales</p>
          <p className="text-xs text-green-500 mt-1">+120 este mes</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <CheckCircle2 className={`h-8 w-8 ${METRIC_COLORS.buildSuccess.text} mb-2`} />
          <div className="text-2xl font-bold">96%</div>
          <p className="text-xs text-muted-foreground">Tasa de Éxito de Compilación</p>
          <p className="text-xs text-green-500 mt-1">+2% del promedio</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <Code2 className={`h-8 w-8 ${METRIC_COLORS.codeQuality.text} mb-2`} />
          <div className="text-2xl font-bold">A+</div>
          <p className="text-xs text-muted-foreground">Puntuación de Calidad de Código</p>
          <p className="text-xs text-green-500 mt-1">Top 5% del equipo</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <GitPullRequest className={`h-8 w-8 ${METRIC_COLORS.sprintCompletion.text} mb-2`} />
          <div className="text-2xl font-bold">92%</div>
          <p className="text-xs text-muted-foreground">Finalización de Sprint</p>
          <p className="text-xs text-green-500 mt-1">+5% del último sprint</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-6 flex flex-col items-center justify-center text-center">
          <TicketCheck className={`h-8 w-8 ${METRIC_COLORS.ticketResolution.text} mb-2`} />
          <div className="text-2xl font-bold">28</div>
          <p className="text-xs text-muted-foreground">Tickets Resueltos</p>
          <p className="text-xs text-green-500 mt-1">+3 del promedio</p>
        </CardContent>
      </Card>
    </div>
  )
}
