import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin/admin-header"
import { RoleManagement } from "@/components/admin/role-management"

export default function RolesPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <AdminHeader title="Gestión de Roles" description="Configurar roles y permisos del sistema" />

      <Card>
        <CardHeader>
          <CardTitle>Roles</CardTitle>
          <CardDescription>Gestiona los roles y sus permisos en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <RoleManagement />
        </CardContent>
      </Card>
    </div>
  )
}
