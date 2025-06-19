"use client"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const integrationsData = [
  {
    id: 1,
    name: "Jira",
    description: "Seguimiento de problemas y proyectos",
    status: "active",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    name: "Git",
    description: "Gestión de código fuente",
    status: "active",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    name: "Jenkins",
    description: "Integración y entrega continua",
    status: "active",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    name: "SonarQube",
    description: "Calidad y seguridad del código",
    status: "pending",
    icon: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    name: "Slack",
    description: "Comunicación del equipo",
    status: "inactive",
    icon: "/placeholder.svg?height=40&width=40",
  },
]

export function IntegrationsList() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Buscar integraciones..." className="pl-8" />
      </div>

      <div className="space-y-2">
        {integrationsData.map((integration) => (
          <div
            key={integration.id}
            className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 cursor-pointer"
          >
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-md overflow-hidden">
                <img
                  src={integration.icon || "/placeholder.svg"}
                  alt={integration.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">{integration.name}</p>
                <p className="text-xs text-muted-foreground">{integration.description}</p>
              </div>
            </div>
            <Badge
              variant={
                integration.status === "active" ? "success" : integration.status === "pending" ? "outline" : "secondary"
              }
            >
              {integration.status === "active" ? "activa" : integration.status === "pending" ? "pendiente" : "inactiva"}
            </Badge>
          </div>
        ))}
      </div>
    </div>
  )
}
