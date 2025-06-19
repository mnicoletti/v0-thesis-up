import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Overview } from "@/components/dashboard/overview"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { Leaderboard } from "@/components/dashboard/leaderboard"
import { KpiCards } from "@/components/dashboard/kpi-cards"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Panel Principal</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">Todos los Datos</TabsTrigger>
              <TabsTrigger value="last-week">Última Semana</TabsTrigger>
              <TabsTrigger value="last-month">Último Mes</TabsTrigger>
              <TabsTrigger value="last-year">Último Año</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>
      <KpiCards />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Resumen de Rendimiento</CardTitle>
            <CardDescription>Métricas del equipo en todas las herramientas DevOps integradas</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Tabla de Clasificación</CardTitle>
            <CardDescription>Mejores rendimientos este mes</CardDescription>
          </CardHeader>
          <CardContent>
            <Leaderboard />
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-1">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>Últimos logros y puntos otorgados</CardDescription>
          </CardHeader>
          <CardContent>
            <RecentActivity />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
