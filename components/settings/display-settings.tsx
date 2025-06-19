"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function DisplaySettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Configuración de Tema</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Modo de Tema</Label>
              <RadioGroup defaultValue="system" className="flex space-x-4">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="light" id="theme-light" />
                  <Label htmlFor="theme-light">Claro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="dark" id="theme-dark" />
                  <Label htmlFor="theme-dark">Oscuro</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="system" id="theme-system" />
                  <Label htmlFor="theme-system">Sistema</Label>
                </div>
              </RadioGroup>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accent-color">Accent Color</Label>
              <Select defaultValue="indigo">
                <SelectTrigger id="accent-color">
                  <SelectValue placeholder="Select accent color" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="indigo">Indigo</SelectItem>
                  <SelectItem value="blue">Blue</SelectItem>
                  <SelectItem value="green">Green</SelectItem>
                  <SelectItem value="violet">Violet</SelectItem>
                  <SelectItem value="orange">Orange</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Dashboard Layout</h3>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="default-view">Default View</Label>
              <Select defaultValue="dashboard">
                <SelectTrigger id="default-view">
                  <SelectValue placeholder="Select default view" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dashboard">Dashboard Overview</SelectItem>
                  <SelectItem value="team">Team Performance</SelectItem>
                  <SelectItem value="individual">My Performance</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="compact-view">Compact View</Label>
                <p className="text-xs text-muted-foreground">Display more information in less space</p>
              </div>
              <Switch id="compact-view" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="animations">Animations</Label>
                <p className="text-xs text-muted-foreground">Enable animations throughout the dashboard</p>
              </div>
              <Switch id="animations" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Accessibility</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="high-contrast">High Contrast</Label>
                <p className="text-xs text-muted-foreground">Increase contrast for better visibility</p>
              </div>
              <Switch id="high-contrast" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="reduce-motion">Reduce Motion</Label>
                <p className="text-xs text-muted-foreground">Minimize animations and transitions</p>
              </div>
              <Switch id="reduce-motion" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="font-size">Font Size</Label>
              <Select defaultValue="medium">
                <SelectTrigger id="font-size">
                  <SelectValue placeholder="Select font size" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">Small</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="large">Large</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="outline">Reset to Default</Button>
              <Button>Save Display Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
