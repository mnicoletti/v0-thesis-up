"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
    <ChartContainer
      config={{
        "Éxito de Compilación": {
          label: "Éxito de Compilación",
          color: "hsl(var(--chart-1))",
        },
        "Calidad de Código": {
          label: "Calidad de Código",
          color: "hsl(var(--chart-2))",
        },
        "Finalización de Sprint": {
          label: "Finalización de Sprint",
          color: "hsl(var(--chart-3))",
        },
        "Resolución de Tickets": {
          label: "Resolución de Tickets",
          color: "hsl(var(--chart-4))",
        },
      }}
      className="h-[300px]"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Bar dataKey="Éxito de Compilación" fill="var(--color-Éxito-de-Compilación)" />
          <Bar dataKey="Calidad de Código" fill="var(--color-Calidad-de-Código)" />
          <Bar dataKey="Finalización de Sprint" fill="var(--color-Finalización-de-Sprint)" />
          <Bar dataKey="Resolución de Tickets" fill="var(--color-Resolución-de-Tickets)" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
