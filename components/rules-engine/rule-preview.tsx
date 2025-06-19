"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const previewData = [
  {
    event: "Compilación Exitosa",
    user: {
      name: "Jane Doe",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    points: 25,
    badge: null,
    timestamp: "2023-07-25T10:30:00Z",
  },
  {
    event: "Calidad de Código A+",
    user: {
      name: "John Smith",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    points: 50,
    badge: "Campeón de Calidad de Código",
    timestamp: "2023-07-24T15:45:00Z",
  },
  {
    event: "Finalización de Sprint",
    user: {
      name: "Emily Johnson",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EJ",
    },
    points: 75,
    badge: null,
    timestamp: "2023-07-23T09:15:00Z",
  },
  {
    event: "Ticket de Alta Prioridad",
    user: {
      name: "Michael Brown",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
    points: 30,
    badge: null,
    timestamp: "2023-07-22T14:20:00Z",
  },
]

export function RulePreview() {
  return (
    <div className="space-y-4">
      <Card>
        <CardContent className="p-4">
          <div className="text-sm text-muted-foreground">
            Esta vista previa muestra cómo la configuración actual de reglas afectaría la distribución de puntos y
            premios de insignias basados en eventos recientes.
          </div>
        </CardContent>
      </Card>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Evento</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Puntos</TableHead>
            <TableHead>Insignia</TableHead>
            <TableHead>Fecha y Hora</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {previewData.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.event}</TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={item.user.avatar || "/placeholder.svg"} alt={item.user.name} />
                    <AvatarFallback>{item.user.initials}</AvatarFallback>
                  </Avatar>
                  <span>{item.user.name}</span>
                </div>
              </TableCell>
              <TableCell className="font-medium">+{item.points}</TableCell>
              <TableCell>
                {item.badge ? (
                  <Badge variant="outline">{item.badge}</Badge>
                ) : (
                  <span className="text-muted-foreground">Ninguna</span>
                )}
              </TableCell>
              <TableCell>{new Date(item.timestamp).toLocaleString()}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
