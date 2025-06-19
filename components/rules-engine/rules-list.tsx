"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CheckCircle2, Code2, GitPullRequest, Plus, Search, TicketCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"

const rulesData = [
  {
    id: 1,
    name: "Compilación Exitosa",
    category: "Compilación",
    points: 25,
    enabled: true,
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    id: 2,
    name: "Calidad de Código A+",
    category: "Calidad de Código",
    points: 50,
    enabled: true,
    icon: Code2,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    name: "Finalización de Sprint",
    category: "Sprint",
    points: 75,
    enabled: true,
    icon: GitPullRequest,
    iconColor: "text-violet-500",
  },
  {
    id: 4,
    name: "Ticket de Alta Prioridad",
    category: "Ticket",
    points: 30,
    enabled: true,
    icon: TicketCheck,
    iconColor: "text-orange-500",
  },
  {
    id: 5,
    name: "Participación en Revisión de Código",
    category: "Calidad de Código",
    points: 15,
    enabled: false,
    icon: Code2,
    iconColor: "text-blue-500",
  },
]

export function RulesList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar reglas..." className="pl-8" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Regla
        </Button>
      </div>

      <div className="space-y-2">
        {rulesData.map((rule) => (
          <div
            key={rule.id}
            className={`flex items-center justify-between p-3 rounded-lg border ${rule.enabled ? "bg-background" : "bg-muted/50"}`}
          >
            <div className="flex items-center space-x-3">
              <div className={`rounded-full p-2 ${rule.enabled ? "bg-muted/50" : "bg-muted"}`}>
                <rule.icon className={`h-4 w-4 ${rule.iconColor}`} />
              </div>
              <div>
                <p className="text-sm font-medium">{rule.name}</p>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline" className="text-xs">
                    {rule.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">+{rule.points} points</span>
                </div>
              </div>
            </div>
            <Switch checked={rule.enabled} />
          </div>
        ))}
      </div>
    </div>
  )
}
