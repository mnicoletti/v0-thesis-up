"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { CheckCircle2, Code2, GitPullRequest, Plus, Search, TicketCheck } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const badgesData = [
  {
    id: 1,
    name: "Maestro de Compilación",
    description: "Logró 100 compilaciones exitosas",
    category: "Compilación",
    points: 200,
    icon: CheckCircle2,
    iconColor: "text-green-500",
  },
  {
    id: 2,
    name: "Campeón de Calidad de Código",
    description: "Mantuvo calidad de código A+ durante 3 meses consecutivos",
    category: "Calidad de Código",
    points: 300,
    icon: Code2,
    iconColor: "text-blue-500",
  },
  {
    id: 3,
    name: "Superestrella de Sprint",
    description: "Completó todas las tareas de sprint durante 5 sprints consecutivos",
    category: "Sprint",
    points: 250,
    icon: GitPullRequest,
    iconColor: "text-violet-500",
  },
  {
    id: 4,
    name: "Resolutor de Tickets",
    description: "Resolvió 100 tickets",
    category: "Ticket",
    points: 200,
    icon: TicketCheck,
    iconColor: "text-orange-500",
  },
]

export function BadgeSettings() {
  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Buscar insignias..." className="pl-8" />
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Nueva Insignia
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {badgesData.map((badge) => (
          <div key={badge.id} className="border rounded-lg p-4 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="bg-muted rounded-full p-3">
                <badge.icon className={`h-6 w-6 ${badge.iconColor}`} />
              </div>
              <div>
                <h3 className="font-medium">{badge.name}</h3>
                <div className="flex items-center space-x-2">
                  <Badge variant="outline">{badge.category}</Badge>
                  <span className="text-xs text-muted-foreground">{badge.points} points</span>
                </div>
              </div>
            </div>

            <p className="text-sm text-muted-foreground">{badge.description}</p>

            <div className="flex justify-end space-x-2">
              <Button variant="outline" size="sm">
                Editar
              </Button>
              <Button variant="destructive" size="sm">
                Eliminar
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="border rounded-lg p-6 space-y-4">
        <h3 className="text-lg font-medium">Editar Insignia</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="badge-name">Badge Name</Label>
            <Input id="badge-name" defaultValue="Build Master" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge-category">Category</Label>
            <Select defaultValue="build">
              <SelectTrigger id="badge-category">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="build">Build</SelectItem>
                <SelectItem value="code">Code Quality</SelectItem>
                <SelectItem value="sprint">Sprint</SelectItem>
                <SelectItem value="ticket">Ticket</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge-points">Points Value</Label>
            <Input id="badge-points" type="number" defaultValue="200" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="badge-icon">Icon</Label>
            <Select defaultValue="check-circle">
              <SelectTrigger id="badge-icon">
                <SelectValue placeholder="Select icon" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="check-circle">Check Circle</SelectItem>
                <SelectItem value="code">Code</SelectItem>
                <SelectItem value="git-pull-request">Git Pull Request</SelectItem>
                <SelectItem value="ticket">Ticket</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="badge-description">Description</Label>
            <Textarea id="badge-description" defaultValue="Achieved 100 successful builds" rows={3} />
          </div>

          <div className="flex items-center space-x-2 md:col-span-2">
            <Switch id="badge-enabled" defaultChecked />
            <Label htmlFor="badge-enabled">Badge Enabled</Label>
          </div>
        </div>

        <div className="flex justify-end space-x-2 pt-4">
          <Button variant="outline">Cancelar</Button>
          <Button>Guardar Insignia</Button>
        </div>
      </div>
    </div>
  )
}
