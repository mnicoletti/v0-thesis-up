"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function LeaderboardSettings() {
  return (
    <div className="space-y-6">
      <Tabs defaultValue="individual">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="individual">Tabla Individual</TabsTrigger>
          <TabsTrigger value="team">Tabla de Equipos</TabsTrigger>
        </TabsList>

        <TabsContent value="individual" className="space-y-4 pt-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-medium">Configuración de Visualización</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="individual-entries">Número de Entradas</Label>
                  <Input id="individual-entries" type="number" defaultValue="10" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="individual-refresh">Frecuencia de Actualización</Label>
                  <Select defaultValue="daily">
                    <SelectTrigger id="individual-refresh">
                      <SelectValue placeholder="Seleccionar frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="realtime">Tiempo real</SelectItem>
                      <SelectItem value="hourly">Cada hora</SelectItem>
                      <SelectItem value="daily">Diariamente</SelectItem>
                      <SelectItem value="weekly">Semanalmente</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="individual-timeframe">Timeframe</Label>
                  <Select defaultValue="month">
                    <SelectTrigger id="individual-timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Weekly</SelectItem>
                      <SelectItem value="month">Monthly</SelectItem>
                      <SelectItem value="quarter">Quarterly</SelectItem>
                      <SelectItem value="year">Yearly</SelectItem>
                      <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="individual-visibility">Visibility</Label>
                  <Select defaultValue="all">
                    <SelectTrigger id="individual-visibility">
                      <SelectValue placeholder="Select visibility" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="team">Team Only</SelectItem>
                      <SelectItem value="department">Department Only</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="individual-show-badges" defaultChecked />
                <Label htmlFor="individual-show-badges">Show Badges</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="individual-show-points" defaultChecked />
                <Label htmlFor="individual-show-points">Show Points</Label>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-medium">Notification Settings</h3>

              <div className="flex items-center space-x-2">
                <Switch id="individual-notify-changes" defaultChecked />
                <Label htmlFor="individual-notify-changes">Notify on Leaderboard Changes</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="individual-notify-achievements" defaultChecked />
                <Label htmlFor="individual-notify-achievements">Notify on New Achievements</Label>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button>Save Individual Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="team" className="space-y-4 pt-4">
          <Card>
            <CardContent className="p-6 space-y-4">
              <h3 className="text-lg font-medium">Display Settings</h3>

              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="team-entries">Number of Entries</Label>
                  <Input id="team-entries" type="number" defaultValue="5" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-refresh">Refresh Frequency</Label>
                  <Select defaultValue="weekly">
                    <SelectTrigger id="team-refresh">
                      <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Daily</SelectItem>
                      <SelectItem value="weekly">Weekly</SelectItem>
                      <SelectItem value="monthly">Monthly</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-timeframe">Timeframe</Label>
                  <Select defaultValue="quarter">
                    <SelectTrigger id="team-timeframe">
                      <SelectValue placeholder="Select timeframe" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="month">Monthly</SelectItem>
                      <SelectItem value="quarter">Quarterly</SelectItem>
                      <SelectItem value="year">Yearly</SelectItem>
                      <SelectItem value="all">All Time</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="team-calculation">Point Calculation</Label>
                  <Select defaultValue="average">
                    <SelectTrigger id="team-calculation">
                      <SelectValue placeholder="Select calculation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="total">Total Points</SelectItem>
                      <SelectItem value="average">Average Points</SelectItem>
                      <SelectItem value="median">Median Points</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="team-show-members" defaultChecked />
                <Label htmlFor="team-show-members">Show Team Members</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Switch id="team-show-metrics" defaultChecked />
                <Label htmlFor="team-show-metrics">Show Team Metrics</Label>
              </div>

              <div className="flex justify-end space-x-2 pt-4">
                <Button>Save Team Settings</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
