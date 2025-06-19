import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IntegrationsList } from "@/components/integrations/integrations-list"
import { IntegrationSettings } from "@/components/integrations/integration-settings"
import { IntegrationStatus } from "@/components/integrations/integration-status"

export default function IntegrationsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Integraciones</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">Todas</TabsTrigger>
              <TabsTrigger value="active">Activas</TabsTrigger>
              <TabsTrigger value="pending">Pendientes</TabsTrigger>
              <TabsTrigger value="inactive">Inactivas</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Integraciones Disponibles</CardTitle>
            <CardDescription>Conecta con tus herramientas DevOps</CardDescription>
          </CardHeader>
          <CardContent>
            <IntegrationsList />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Configuración de Integración</CardTitle>
            <CardDescription>Configurar detalles de conexión</CardDescription>
          </CardHeader>
          <CardContent>
            <IntegrationSettings />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Estado de Integración</CardTitle>
          <CardDescription>Monitorea la salud de tus integraciones</CardDescription>
        </CardHeader>
        <CardContent>
          <IntegrationStatus />
        </CardContent>
      </Card>
    </div>
  )
}
