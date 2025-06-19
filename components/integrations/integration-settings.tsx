"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export function IntegrationSettings() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-3 p-4 rounded-lg bg-muted/50">
        <div className="w-12 h-12 rounded-md overflow-hidden">
          <img src="/placeholder.svg?height=48&width=48" alt="Jira" className="w-full h-full object-cover" />
        </div>
        <div>
          <h3 className="text-lg font-medium">Jira</h3>
          <p className="text-sm text-muted-foreground">Track issues and projects</p>
        </div>
      </div>

      <Tabs defaultValue="connection">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="connection">Conexión</TabsTrigger>
          <TabsTrigger value="data">Sincronización</TabsTrigger>
          <TabsTrigger value="advanced">Avanzado</TabsTrigger>
        </TabsList>

        <TabsContent value="connection" className="space-y-4 pt-4">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="jira-url">Jira URL</Label>
              <Input id="jira-url" defaultValue="https://company.atlassian.net" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jira-api-token">API Token</Label>
              <Input id="jira-api-token" type="password" defaultValue="••••••••••••••••" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jira-username">Username</Label>
              <Input id="jira-username" defaultValue="admin@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="jira-project">Default Project</Label>
              <Select defaultValue="DEV">
                <SelectTrigger id="jira-project">
                  <SelectValue placeholder="Select project" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="DEV">Development (DEV)</SelectItem>
                  <SelectItem value="OPS">Operations (OPS)</SelectItem>
                  <SelectItem value="QA">Quality Assurance (QA)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Button>Probar Conexión</Button>
            <Button variant="outline">Reiniciar</Button>
          </div>
        </TabsContent>

        <TabsContent value="data" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="jira-sync-frequency">Frecuencia de Sincronización</Label>
              <Select defaultValue="15">
                <SelectTrigger id="jira-sync-frequency">
                  <SelectValue placeholder="Seleccionar frecuencia" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">Cada 5 minutos</SelectItem>
                  <SelectItem value="15">Cada 15 minutos</SelectItem>
                  <SelectItem value="30">Cada 30 minutos</SelectItem>
                  <SelectItem value="60">Cada hora</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Data to Sync</Label>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Switch id="jira-sync-issues" defaultChecked />
                  <Label htmlFor="jira-sync-issues">Issues</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="jira-sync-sprints" defaultChecked />
                  <Label htmlFor="jira-sync-sprints">Sprints</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="jira-sync-users" defaultChecked />
                  <Label htmlFor="jira-sync-users">Users</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch id="jira-sync-comments" />
                  <Label htmlFor="jira-sync-comments">Comments</Label>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Button>Save Sync Settings</Button>
              <Button variant="outline">Sync Now</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="advanced" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="jira-webhook">Webhook URL</Label>
              <div className="flex space-x-2">
                <Input id="jira-webhook" defaultValue="https://devops-score.com/api/webhooks/jira" readOnly />
                <Button variant="outline">Copy</Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Use this URL to set up webhooks in Jira for real-time updates.
              </p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="jira-custom-fields">Custom Fields</Label>
              <Textarea
                id="jira-custom-fields"
                placeholder='{"story_points": "customfield_10024", "team": "customfield_10025"}'
                rows={3}
              />
              <p className="text-xs text-muted-foreground">JSON mapping of custom fields to track in Jira.</p>
            </div>

            <div className="flex items-center space-x-2">
              <Switch id="jira-debug-mode" />
              <Label htmlFor="jira-debug-mode">Debug Mode</Label>
            </div>

            <div className="flex justify-end space-x-2">
              <Button variant="destructive">Delete Integration</Button>
              <Button>Save Advanced Settings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
