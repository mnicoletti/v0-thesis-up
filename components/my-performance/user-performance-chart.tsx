"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { CHART_CONFIG, METRIC_COLORS } from "@/lib/colors"

const data = [
  {
    name: "Semana 1",
    "Éxito de Compilación": 92,
    "Calidad de Código": 85,
    "Finalización de Sprint": 88,
    "Resolución de Tickets": 82,
  },
  {
    name: "Semana 2",
    "Éxito de Compilación": 94,
    "Calidad de Código": 87,
    "Finalización de Sprint": 90,
    "Resolución de Tickets": 85,
  },
  {
    name: "Semana 3",
    "Éxito de Compilación": 93,
    "Calidad de Código": 90,
    "Finalización de Sprint": 89,
    "Resolución de Tickets": 88,
  },
  {
    name: "Semana 4",
    "Éxito de Compilación": 96,
    "Calidad de Código": 92,
    "Finalización de Sprint": 92,
    "Resolución de Tickets": 90,
  },
]

export function UserPerformanceChart() {
  return (
    <ChartContainer config={CHART_CONFIG} className="h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="Éxito de Compilación" stroke={METRIC_COLORS.buildSuccess.primary} />
          <Line type="monotone" dataKey="Calidad de Código" stroke={METRIC_COLORS.codeQuality.primary} />
          <Line type="monotone" dataKey="Finalización de Sprint" stroke={METRIC_COLORS.sprintCompletion.primary} />
          <Line type="monotone" dataKey="Resolución de Tickets" stroke={METRIC_COLORS.ticketResolution.primary} />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
