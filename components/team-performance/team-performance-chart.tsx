"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CHART_CONFIG, METRIC_COLORS } from "@/lib/colors"

const data = [
  {
    name: "Equipo Alpha",
    "Éxito de Compilación": 94,
    "Calidad de Código": 92,
    "Finalización de Sprint": 87,
    "Resolución de Tickets": 88,
  },
  {
    name: "Equipo Beta",
    "Éxito de Compilación": 91,
    "Calidad de Código": 88,
    "Finalización de Sprint": 82,
    "Resolución de Tickets": 85,
  },
  {
    name: "Equipo Gamma",
    "Éxito de Compilación": 89,
    "Calidad de Código": 90,
    "Finalización de Sprint": 85,
    "Resolución de Tickets": 80,
  },
  {
    name: "Equipo Delta",
    "Éxito de Compilación": 92,
    "Calidad de Código": 85,
    "Finalización de Sprint": 80,
    "Resolución de Tickets": 82,
  },
]

export function TeamPerformanceChart() {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Éxito de Compilación" fill={METRIC_COLORS.buildSuccess.primary} />
          <Bar dataKey="Calidad de Código" fill={METRIC_COLORS.codeQuality.primary} />
          <Bar dataKey="Finalización de Sprint" fill={METRIC_COLORS.sprintCompletion.primary} />
          <Bar dataKey="Resolución de Tickets" fill={METRIC_COLORS.ticketResolution.primary} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
