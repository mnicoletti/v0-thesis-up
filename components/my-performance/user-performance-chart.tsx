"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Legend />
          <Line type="monotone" dataKey="Éxito de Compilación" stroke="var(--color-Éxito-de-Compilación)" />
          <Line type="monotone" dataKey="Calidad de Código" stroke="var(--color-Calidad-de-Código)" />
          <Line type="monotone" dataKey="Finalización de Sprint" stroke="var(--color-Finalización-de-Sprint)" />
          <Line type="monotone" dataKey="Resolución de Tickets" stroke="var(--color-Resolución-de-Tickets)" />
        </LineChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
