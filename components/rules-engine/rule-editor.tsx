"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RuleEditor() {
  return (
    <div className="space-y-4">
      <Tabs defaultValue="basic">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="basic">Básico</TabsTrigger>
          <TabsTrigger value="conditions">Condiciones</TabsTrigger>
          <TabsTrigger value="actions">Acciones</TabsTrigger>
        </TabsList>

        <TabsContent value="basic" className="space-y-4 pt-4">
          <div className="grid gap-2">
            <Label htmlFor="name">Nombre de la Regla</Label>
            <Input id="name" defaultValue="Compilación Exitosa" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="category">Categoría</Label>
            <Select defaultValue="build">
              <SelectTrigger id="category">
                <SelectValue placeholder="Seleccionar categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="build">Compilación</SelectItem>
                <SelectItem value="code">Calidad de Código</SelectItem>
                <SelectItem value="sprint">Sprint</SelectItem>
                <SelectItem value="ticket">Ticket</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="description">Descripción</Label>
            <Textarea
              id="description"
              defaultValue="Otorgar puntos cuando una compilación se despliega exitosamente a producción."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="enabled" defaultChecked />
            <Label htmlFor="enabled">Regla Habilitada</Label>
          </div>
        </TabsContent>

        <TabsContent value="conditions" className="space-y-4 pt-4">
          <div className="grid gap-2">
            <Label htmlFor="event">Evento Desencadenante</Label>
            <Select defaultValue="build_success">
              <SelectTrigger id="event">
                <SelectValue placeholder="Seleccionar evento" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="build_success">Compilación Exitosa</SelectItem>
                <SelectItem value="build_failure">Fallo de Compilación</SelectItem>
                <SelectItem value="code_review">Revisión de Código Completada</SelectItem>
                <SelectItem value="sprint_completed">Sprint Completado</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="condition">Condición</Label>
            <Select defaultValue="env_prod">
              <SelectTrigger id="condition">
                <SelectValue placeholder="Seleccionar condición" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="env_prod">Entorno es Producción</SelectItem>
                <SelectItem value="env_staging">Entorno es Staging</SelectItem>
                <SelectItem value="branch_main">Rama es Main</SelectItem>
                <SelectItem value="any">Cualquier Entorno</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="frequency">Límite de Frecuencia</Label>
            <Select defaultValue="once_per_day">
              <SelectTrigger id="frequency">
                <SelectValue placeholder="Seleccionar frecuencia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="unlimited">Ilimitado</SelectItem>
                <SelectItem value="once_per_day">Una Vez Por Día</SelectItem>
                <SelectItem value="once_per_week">Una Vez Por Semana</SelectItem>
                <SelectItem value="once_per_sprint">Una Vez Por Sprint</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button>Añadir Condición</Button>
        </TabsContent>

        <TabsContent value="actions" className="space-y-4 pt-4">
          <div className="grid gap-2">
            <Label htmlFor="points">Puntos a Otorgar</Label>
            <Input id="points" type="number" defaultValue="25" />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="badge">Insignia a Otorgar</Label>
            <Select defaultValue="none">
              <SelectTrigger id="badge">
                <SelectValue placeholder="Seleccionar insignia" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Ninguna</SelectItem>
                <SelectItem value="build_master">Maestro de Compilación</SelectItem>
                <SelectItem value="code_quality">Campeón de Calidad de Código</SelectItem>
                <SelectItem value="sprint_superstar">Superestrella de Sprint</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="notification">Mensaje de Notificación</Label>
            <Textarea
              id="notification"
              defaultValue="¡Felicidades! Has ganado 25 puntos por un despliegue de compilación exitoso."
              rows={3}
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch id="notify" defaultChecked />
            <Label htmlFor="notify">Enviar Notificación</Label>
          </div>
        </TabsContent>
      </Tabs>

      <div className="flex justify-end space-x-2 pt-4">
        <Button variant="outline">Cancelar</Button>
        <Button>Guardar Regla</Button>
      </div>
    </div>
  )
}
