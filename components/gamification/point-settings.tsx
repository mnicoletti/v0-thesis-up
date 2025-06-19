"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { Card, CardContent } from "@/components/ui/card"

export function PointSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Valores de Puntos</h3>

          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="build-points">Puntos por Compilación Exitosa</Label>
                <Input id="build-points" type="number" defaultValue="25" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="code-points">Puntos por Calidad de Código (A+)</Label>
                <Input id="code-points" type="number" defaultValue="50" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="sprint-points">Puntos por Finalización de Sprint</Label>
                <Input id="sprint-points" type="number" defaultValue="75" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ticket-points">Puntos por Resolución de Tickets</Label>
                <Input id="ticket-points" type="number" defaultValue="30" />
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Restablecer Valores</Button>
              <Button>Guardar Valores de Puntos</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Caducidad de Puntos</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="expiration-enabled" />
              <Label htmlFor="expiration-enabled">Habilitar Caducidad de Puntos</Label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="expiration-period">Expiration Period</Label>
                <Select defaultValue="quarterly">
                  <SelectTrigger id="expiration-period">
                    <SelectValue placeholder="Select period" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monthly">Monthly</SelectItem>
                    <SelectItem value="quarterly">Quarterly</SelectItem>
                    <SelectItem value="yearly">Yearly</SelectItem>
                    <SelectItem value="never">Never</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="expiration-percentage">Expiration Percentage</Label>
                <div className="pt-2">
                  <Slider defaultValue={[25]} max={100} step={5} />
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0%</span>
                  <span>25%</span>
                  <span>50%</span>
                  <span>75%</span>
                  <span>100%</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button>Save Expiration Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Point Multipliers</h3>

          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Switch id="multipliers-enabled" defaultChecked />
              <Label htmlFor="multipliers-enabled">Enable Point Multipliers</Label>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="streak-multiplier">Streak Multiplier</Label>
                <Input id="streak-multiplier" type="number" defaultValue="1.5" step="0.1" />
                <p className="text-xs text-muted-foreground">Applied after 5 consecutive days of activity</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="weekend-multiplier">Weekend Multiplier</Label>
                <Input id="weekend-multiplier" type="number" defaultValue="2.0" step="0.1" />
                <p className="text-xs text-muted-foreground">Applied for activity on weekends</p>
              </div>
            </div>

            <div className="flex justify-end space-x-2">
              <Button>Save Multiplier Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
