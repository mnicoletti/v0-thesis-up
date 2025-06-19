"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

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

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900">{`${label}`}</p>
        {payload.map((entry: any, index: number) => (
          <p key={index} className="text-sm" style={{ color: entry.color }}>
            {`${entry.dataKey}: ${entry.value}%`}
          </p>
        ))}
      </div>
    )
  }
  return null
}

export function TeamPerformanceChart() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 80,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" opacity={0.5} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 11, fill: "#6b7280" }}
            angle={-45}
            textAnchor="end"
            height={80}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={{ stroke: "#d1d5db" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={{ stroke: "#d1d5db" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "11px" }} iconType="rect" />
          <Bar
            dataKey="Éxito de Compilación"
            fill="#4ade80"
            radius={[3, 3, 0, 0]}
            animationDuration={1000}
            animationBegin={0}
          />
          <Bar
            dataKey="Calidad de Código"
            fill="#60a5fa"
            radius={[3, 3, 0, 0]}
            animationDuration={1000}
            animationBegin={250}
          />
          <Bar
            dataKey="Finalización de Sprint"
            fill="#a78bfa"
            radius={[3, 3, 0, 0]}
            animationDuration={1000}
            animationBegin={500}
          />
          <Bar
            dataKey="Resolución de Tickets"
            fill="#fb923c"
            radius={[3, 3, 0, 0]}
            animationDuration={1000}
            animationBegin={750}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
