import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BadgeSettings } from "@/components/gamification/badge-settings"
import { PointSettings } from "@/components/gamification/point-settings"
import { LeaderboardSettings } from "@/components/gamification/leaderboard-settings"

export default function GamificationPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Configuración de Gamificación</h2>
      </div>

      <Tabs defaultValue="badges" className="space-y-4">
        <TabsList className="w-[400px]">
          <TabsTrigger value="badges">Insignias</TabsTrigger>
          <TabsTrigger value="points">Puntos</TabsTrigger>
          <TabsTrigger value="leaderboard">Tabla de Clasificación</TabsTrigger>
        </TabsList>

        <TabsContent value="badges" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gestión de Insignias</CardTitle>
              <CardDescription>Crear y gestionar insignias de logros</CardDescription>
            </CardHeader>
            <CardContent>
              <BadgeSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="points" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Puntos</CardTitle>
              <CardDescription>Configurar valores de puntos y caducidad</CardDescription>
            </CardHeader>
            <CardContent>
              <PointSettings />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="leaderboard" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Tabla de Clasificación</CardTitle>
              <CardDescription>Personalizar visualización y frecuencia de actualización</CardDescription>
            </CardHeader>
            <CardContent>
              <LeaderboardSettings />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
