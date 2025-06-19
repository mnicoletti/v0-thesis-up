"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { CalendarIcon, Filter } from "lucide-react"
import { format } from "date-fns"
import { useState } from "react"

export function TeamFilters() {
  const [date, setDate] = useState<Date>()

  return (
    <Card>
      <CardContent className="p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div className="grid gap-2">
            <Label htmlFor="project">Project</Label>
            <Select defaultValue="all">
              <SelectTrigger id="project">
                <SelectValue placeholder="Select project" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Projects</SelectItem>
                <SelectItem value="project-a">Project Alpha</SelectItem>
                <SelectItem value="project-b">Project Beta</SelectItem>
                <SelectItem value="project-c">Project Gamma</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="metric">Metric</Label>
            <Select defaultValue="all">
              <SelectTrigger id="metric">
                <SelectValue placeholder="Select metric" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Metrics</SelectItem>
                <SelectItem value="build">Build Success</SelectItem>
                <SelectItem value="quality">Code Quality</SelectItem>
                <SelectItem value="sprint">Sprint Completion</SelectItem>
                <SelectItem value="tickets">Ticket Resolution</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-2">
            <Label>Date Range</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant={"outline"} className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {date ? format(date, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex items-end gap-2">
            <Button className="flex-1">
              <Filter className="mr-2 h-4 w-4" />
              Apply Filters
            </Button>
            <Button variant="outline">Reset</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
