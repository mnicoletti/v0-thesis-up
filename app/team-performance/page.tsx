import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TeamPerformanceChart } from "@/components/team-performance/team-performance-chart"
import { TeamComparisonTable } from "@/components/team-performance/team-comparison-table"
import { TeamGoals } from "@/components/team-performance/team-goals"
import { TeamFilters } from "@/components/team-performance/team-filters"

export default function TeamPerformancePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Rendimiento del Equipo</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">Todos los Equipos</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <TeamFilters />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Métricas de Rendimiento del Equipo</CardTitle>
            <CardDescription>Comparación de métricas clave entre equipos</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <TeamPerformanceChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Progreso de Objetivos del Equipo</CardTitle>
            <CardDescription>Progreso hacia los objetivos trimestrales</CardDescription>
          </CardHeader>
          <CardContent>
            <TeamGoals />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Comparación de Equipos</CardTitle>
          <CardDescription>Comparación detallada de métricas de equipos</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamComparisonTable />
        </CardContent>
      </Card>
    </div>
  )
}
