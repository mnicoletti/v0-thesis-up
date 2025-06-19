import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin/admin-header"
import { TeamManagement } from "@/components/admin/team-management"

export default function TeamsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <AdminHeader title="Gestión de Equipos" description="Crear, editar y gestionar equipos del sistema" />

      <Card>
        <CardHeader>
          <CardTitle>Equipos</CardTitle>
          <CardDescription>Gestiona los equipos y sus miembros</CardDescription>
        </CardHeader>
        <CardContent>
          <TeamManagement />
        </CardContent>
      </Card>
    </div>
  )
}
