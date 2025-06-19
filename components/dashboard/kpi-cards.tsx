"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, Code2, GitPullRequest, TicketCheck } from "lucide-react"
import { METRIC_COLORS } from "@/lib/colors"

export function KpiCards() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tasa de Éxito de Compilación</CardTitle>
          <CheckCircle2 className={`h-4 w-4 ${METRIC_COLORS.buildSuccess.text}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">94.2%</div>
          <p className="text-xs text-muted-foreground">+2.1% desde el mes pasado</p>
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className={`${METRIC_COLORS.buildSuccess.bg} h-1 rounded-full`} style={{ width: "94.2%" }}></div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Puntuación de Calidad de Código</CardTitle>
          <Code2 className={`h-4 w-4 ${METRIC_COLORS.codeQuality.text}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">A+</div>
          <p className="text-xs text-muted-foreground">Mejorado desde A</p>
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className={`${METRIC_COLORS.codeQuality.bg} h-1 rounded-full`} style={{ width: "92%" }}></div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Finalización de Sprint</CardTitle>
          <GitPullRequest className={`h-4 w-4 ${METRIC_COLORS.sprintCompletion.text}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">87%</div>
          <p className="text-xs text-muted-foreground">+5% desde el último sprint</p>
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className={`${METRIC_COLORS.sprintCompletion.bg} h-1 rounded-full`} style={{ width: "87%" }}></div>
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Tickets Resueltos</CardTitle>
          <TicketCheck className={`h-4 w-4 ${METRIC_COLORS.ticketResolution.text}`} />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">142</div>
          <p className="text-xs text-muted-foreground">+12 desde el mes pasado</p>
          <div className="mt-4 h-1 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className={`${METRIC_COLORS.ticketResolution.bg} h-1 rounded-full`} style={{ width: "78%" }}></div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
