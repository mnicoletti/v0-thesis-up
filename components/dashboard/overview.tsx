"use client"

import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

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

export function Overview() {
  return (
    <div className="w-full h-[300px] sm:h-[350px] md:h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 60,
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
          <Legend wrapperStyle={{ paddingTop: "20px", fontSize: "12px" }} iconType="rect" />
          <Bar
            dataKey="Éxito de Compilación"
            fill="#4ade80"
            radius={[2, 2, 0, 0]}
            animationDuration={800}
            animationBegin={0}
          />
          <Bar
            dataKey="Calidad de Código"
            fill="#60a5fa"
            radius={[2, 2, 0, 0]}
            animationDuration={800}
            animationBegin={200}
          />
          <Bar
            dataKey="Finalización de Sprint"
            fill="#a78bfa"
            radius={[2, 2, 0, 0]}
            animationDuration={800}
            animationBegin={400}
          />
          <Bar
            dataKey="Resolución de Tickets"
            fill="#fb923c"
            radius={[2, 2, 0, 0]}
            animationDuration={800}
            animationBegin={600}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
