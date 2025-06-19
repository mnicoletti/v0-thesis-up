"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

export function UserProfile() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <Card className="md:w-1/3">
          <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
            <Avatar className="h-24 w-24">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Jane Doe" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-medium text-lg">Jane Doe</h3>
              <p className="text-sm text-muted-foreground">Lead Developer</p>
            </div>
            <div className="flex flex-col space-y-2 w-full">
              <Button variant="outline" size="sm">
                Change Avatar
              </Button>
              <Button variant="ghost" size="sm">
                Remove Avatar
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 flex-1">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" defaultValue="Jane" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" defaultValue="Doe" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="jane.doe@company.com" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="role">Role</Label>
              <Select defaultValue="lead">
                <SelectTrigger id="role">
                  <SelectValue placeholder="Select role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="lead">Lead Developer</SelectItem>
                  <SelectItem value="senior">Senior Developer</SelectItem>
                  <SelectItem value="mid">Mid-level Developer</SelectItem>
                  <SelectItem value="junior">Junior Developer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="team">Team</Label>
              <Select defaultValue="alpha">
                <SelectTrigger id="team">
                  <SelectValue placeholder="Select team" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="alpha">Team Alpha</SelectItem>
                  <SelectItem value="beta">Team Beta</SelectItem>
                  <SelectItem value="gamma">Team Gamma</SelectItem>
                  <SelectItem value="delta">Team Delta</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <Input id="location" defaultValue="San Francisco, CA" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Bio</Label>
            <Textarea
              id="bio"
              defaultValue="Lead Developer with 8+ years of experience in full-stack development and DevOps practices."
              rows={3}
            />
          </div>

          <div className="flex justify-end space-x-2">
            <Button variant="outline">Cancelar</Button>
            <Button>Guardar Cambios</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
