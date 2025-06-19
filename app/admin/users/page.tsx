import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AdminHeader } from "@/components/admin/admin-header"
import { UserManagement } from "@/components/admin/user-management"

export default function UsersPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <AdminHeader title="Gestión de Usuarios" description="Crear, editar y gestionar usuarios del sistema" />

      <Card>
        <CardHeader>
          <CardTitle>Usuarios</CardTitle>
          <CardDescription>Gestiona los usuarios y sus roles en el sistema</CardDescription>
        </CardHeader>
        <CardContent>
          <UserManagement />
        </CardContent>
      </Card>
    </div>
  )
}
