"use client"

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"

export function NotificationSettings() {
  return (
    <div className="space-y-6">
      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Notificaciones por Email</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-points">Premios de Puntos</Label>
                <p className="text-xs text-muted-foreground">Recibir emails cuando ganes puntos</p>
              </div>
              <Switch id="email-points" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-badges">Badge Achievements</Label>
                <p className="text-xs text-muted-foreground">Receive emails when you earn badges</p>
              </div>
              <Switch id="email-badges" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-leaderboard">Leaderboard Updates</Label>
                <p className="text-xs text-muted-foreground">Receive emails about leaderboard changes</p>
              </div>
              <Switch id="email-leaderboard" />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="email-digest">Weekly Digest</Label>
                <p className="text-xs text-muted-foreground">Receive a weekly summary of your performance</p>
              </div>
              <Switch id="email-digest" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">In-App Notifications</h3>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-points">Point Awards</Label>
                <p className="text-xs text-muted-foreground">Show notifications when you earn points</p>
              </div>
              <Switch id="app-points" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-badges">Badge Achievements</Label>
                <p className="text-xs text-muted-foreground">Show notifications when you earn badges</p>
              </div>
              <Switch id="app-badges" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-leaderboard">Leaderboard Updates</Label>
                <p className="text-xs text-muted-foreground">Show notifications about leaderboard changes</p>
              </div>
              <Switch id="app-leaderboard" defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="app-team">Team Activity</Label>
                <p className="text-xs text-muted-foreground">Show notifications about team achievements</p>
              </div>
              <Switch id="app-team" defaultChecked />
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-6 space-y-4">
          <h3 className="text-lg font-medium">Notification Frequency</h3>

          <div className="space-y-4">
            <div className="grid gap-2">
              <Label htmlFor="frequency">Email Frequency</Label>
              <Select defaultValue="daily">
                <SelectTrigger id="frequency">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="realtime">Real-time</SelectItem>
                  <SelectItem value="daily">Daily Digest</SelectItem>
                  <SelectItem value="weekly">Weekly Digest</SelectItem>
                  <SelectItem value="never">Never</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex justify-end space-x-2">
              <Button>Save Notification Settings</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
