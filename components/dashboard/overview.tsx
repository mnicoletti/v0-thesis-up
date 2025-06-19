"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const data = [
  {
    name: "Ene",
    "Éxito de Compilación": 89,
    "Calidad de Código": 78,
    "Finalización de Sprint": 72,
    "Resolución de Tickets": 65,
  },
  {
    name: "Feb",
    "Éxito de Compilación": 90,
    "Calidad de Código": 80,
    "Finalización de Sprint": 75,
    "Resolución de Tickets": 70,
  },
  {
    name: "Mar",
    "Éxito de Compilación": 91,
    "Calidad de Código": 82,
    "Finalización de Sprint": 78,
    "Resolución de Tickets": 75,
  },
  {
    name: "Abr",
    "Éxito de Compilación": 92,
    "Calidad de Código": 85,
    "Finalización de Sprint": 80,
    "Resolución de Tickets": 78,
  },
  {
    name: "May",
    "Éxito de Compilación": 93,
    "Calidad de Código": 87,
    "Finalización de Sprint": 82,
    "Resolución de Tickets": 82,
  },
  {
    name: "Jun",
    "Éxito de Compilación": 94,
    "Calidad de Código": 90,
    "Finalización de Sprint": 85,
    "Resolución de Tickets": 85,
  },
  {
    name: "Jul",
    "Éxito de Compilación": 94.2,
    "Calidad de Código": 92,
    "Finalización de Sprint": 87,
    "Resolución de Tickets": 88,
  },
]

export function Overview() {
  return (
    <ChartContainer
      config={{
        "Éxito de Compilación": {
          label: "Éxito de Compilación",
          color: "#4ade80", // verde
        },
        "Calidad de Código": {
          label: "Calidad de Código",
          color: "#60a5fa", // azul
        },
        "Finalización de Sprint": {
          label: "Finalización de Sprint",
          color: "#a78bfa", // violeta
        },
        "Resolución de Tickets": {
          label: "Resolución de Tickets",
          color: "#fb923c", // naranja
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
          <Bar dataKey="Éxito de Compilación" fill="#4ade80" />
          <Bar dataKey="Calidad de Código" fill="#60a5fa" />
          <Bar dataKey="Finalización de Sprint" fill="#a78bfa" />
          <Bar dataKey="Resolución de Tickets" fill="#fb923c" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  )
}
