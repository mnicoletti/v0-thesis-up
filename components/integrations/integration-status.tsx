"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"

const statusData = [
  {
    integration: "Jira",
    status: "healthy",
    lastSync: "2023-07-25T10:30:00Z",
    dataPoints: 1250,
    latency: "120ms",
    errors: 0,
  },
  {
    integration: "Git",
    status: "healthy",
    lastSync: "2023-07-25T10:25:00Z",
    dataPoints: 3420,
    latency: "85ms",
    errors: 0,
  },
  {
    integration: "Jenkins",
    status: "healthy",
    lastSync: "2023-07-25T10:15:00Z",
    dataPoints: 780,
    latency: "150ms",
    errors: 0,
  },
  {
    integration: "SonarQube",
    status: "degraded",
    lastSync: "2023-07-25T09:45:00Z",
    dataPoints: 320,
    latency: "350ms",
    errors: 2,
  },
  {
    integration: "Slack",
    status: "offline",
    lastSync: "2023-07-24T15:30:00Z",
    dataPoints: 0,
    latency: "N/A",
    errors: 1,
  },
]

export function IntegrationStatus() {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <p className="text-sm text-muted-foreground">Última actualización: 25 de julio, 2023 10:35 AM</p>
        <Button variant="outline" size="sm">
          <RefreshCw className="mr-2 h-4 w-4" />
          Actualizar Estado
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Integración</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead>Última Sincronización</TableHead>
            <TableHead>Puntos de Datos</TableHead>
            <TableHead>Latencia</TableHead>
            <TableHead>Errores</TableHead>
            <TableHead>Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {statusData.map((item) => (
            <TableRow key={item.integration}>
              <TableCell className="font-medium">{item.integration}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    item.status === "healthy" ? "success" : item.status === "degraded" ? "warning" : "destructive"
                  }
                >
                  {item.status === "healthy" ? "saludable" : item.status === "degraded" ? "degradado" : "desconectado"}
                </Badge>
              </TableCell>
              <TableCell>{item.status !== "offline" ? new Date(item.lastSync).toLocaleString() : "N/A"}</TableCell>
              <TableCell>{item.dataPoints}</TableCell>
              <TableCell>{item.latency}</TableCell>
              <TableCell>{item.errors}</TableCell>
              <TableCell>
                <Button variant="ghost" size="sm">
                  {item.status === "offline" ? "Reconectar" : "Ver Registros"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
