"use client"

import { Line, LineChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

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

export function UserPerformanceChart() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 20,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e7ff" opacity={0.5} />
          <XAxis
            dataKey="name"
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={{ stroke: "#d1d5db" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#6b7280" }}
            axisLine={{ stroke: "#d1d5db" }}
            tickLine={{ stroke: "#d1d5db" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }} iconType="line" />
          <Line
            type="monotone"
            dataKey="Éxito de Compilación"
            stroke="#4ade80"
            strokeWidth={3}
            dot={{ fill: "#4ade80", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#4ade80", strokeWidth: 2, fill: "#4ade80" }}
            animationDuration={1200}
            animationBegin={0}
          />
          <Line
            type="monotone"
            dataKey="Calidad de Código"
            stroke="#60a5fa"
            strokeWidth={3}
            dot={{ fill: "#60a5fa", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#60a5fa", strokeWidth: 2, fill: "#60a5fa" }}
            animationDuration={1200}
            animationBegin={300}
          />
          <Line
            type="monotone"
            dataKey="Finalización de Sprint"
            stroke="#a78bfa"
            strokeWidth={3}
            dot={{ fill: "#a78bfa", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#a78bfa", strokeWidth: 2, fill: "#a78bfa" }}
            animationDuration={1200}
            animationBegin={600}
          />
          <Line
            type="monotone"
            dataKey="Resolución de Tickets"
            stroke="#fb923c"
            strokeWidth={3}
            dot={{ fill: "#fb923c", strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: "#fb923c", strokeWidth: 2, fill: "#fb923c" }}
            animationDuration={1200}
            animationBegin={900}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
