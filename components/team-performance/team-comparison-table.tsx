"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { METRIC_COLORS } from "@/lib/colors"

const teamData = [
  {
    name: "Equipo Alpha",
    members: 8,
    buildSuccess: "94%",
    codeQuality: "A+",
    sprintCompletion: "87%",
    ticketResolution: "88%",
    points: 1250,
    trend: "up",
  },
  {
    name: "Equipo Beta",
    members: 6,
    buildSuccess: "91%",
    codeQuality: "A",
    sprintCompletion: "82%",
    ticketResolution: "85%",
    points: 1120,
    trend: "up",
  },
  {
    name: "Equipo Gamma",
    members: 7,
    buildSuccess: "89%",
    codeQuality: "A",
    sprintCompletion: "85%",
    ticketResolution: "80%",
    points: 980,
    trend: "down",
  },
  {
    name: "Equipo Delta",
    members: 5,
    buildSuccess: "92%",
    codeQuality: "B+",
    sprintCompletion: "80%",
    ticketResolution: "82%",
    points: 920,
    trend: "up",
  },
]

export function TeamComparisonTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Equipo</TableHead>
          <TableHead>Miembros</TableHead>
          <TableHead>Éxito de Compilación</TableHead>
          <TableHead>Calidad de Código</TableHead>
          <TableHead>Finalización de Sprint</TableHead>
          <TableHead>Resolución de Tickets</TableHead>
          <TableHead>Puntos Totales</TableHead>
          <TableHead>Tendencia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {teamData.map((team) => (
          <TableRow key={team.name}>
            <TableCell className="font-medium">{team.name}</TableCell>
            <TableCell>{team.members}</TableCell>
            <TableCell>{team.buildSuccess}</TableCell>
            <TableCell>{team.codeQuality}</TableCell>
            <TableCell>{team.sprintCompletion}</TableCell>
            <TableCell>{team.ticketResolution}</TableCell>
            <TableCell>{team.points}</TableCell>
            <TableCell>
              <Badge
                variant={team.trend === "up" ? "default" : "destructive"}
                className={team.trend === "up" ? METRIC_COLORS.buildSuccess.text : "text-red-500"}
              >
                {team.trend === "up" ? "↑" : "↓"}
              </Badge>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
