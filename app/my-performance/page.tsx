import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserPerformanceChart } from "@/components/my-performance/user-performance-chart"
import { UserAchievements } from "@/components/my-performance/user-achievements"
import { UserPointsHistory } from "@/components/my-performance/user-points-history"
import { UserRecommendations } from "@/components/my-performance/user-recommendations"
import { UserStats } from "@/components/my-performance/user-stats"

export default function MyPerformancePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Mi Rendimiento</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="month" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="week">Esta Semana</TabsTrigger>
              <TabsTrigger value="month">Este Mes</TabsTrigger>
              <TabsTrigger value="quarter">Este Trimestre</TabsTrigger>
              <TabsTrigger value="year">Este Año</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <UserStats />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Métricas de Rendimiento</CardTitle>
            <CardDescription>Tu rendimiento en métricas clave</CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <UserPerformanceChart />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Logros</CardTitle>
            <CardDescription>Insignias e hitos ganados</CardDescription>
          </CardHeader>
          <CardContent>
            <UserAchievements />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Historial de Puntos</CardTitle>
            <CardDescription>Puntos ganados recientemente</CardDescription>
          </CardHeader>
          <CardContent>
            <UserPointsHistory />
          </CardContent>
        </Card>
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Recomendaciones</CardTitle>
            <CardDescription>Sugerencias de mejora personalizadas</CardDescription>
          </CardHeader>
          <CardContent>
            <UserRecommendations />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
