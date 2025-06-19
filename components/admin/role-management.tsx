"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Edit, Plus, Search, Shield, Trash2 } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Datos de ejemplo
const initialRoles = [
  {
    id: "administrator",
    name: "Administrador",
    description: "Acceso completo al sistema",
    users: 1,
    permissions: {
      dashboard: ["view", "edit"],
      users: ["view", "create", "edit", "delete"],
      teams: ["view", "create", "edit", "delete"],
      roles: ["view", "create", "edit", "delete"],
      rules: ["view", "create", "edit", "delete"],
      gamification: ["view", "create", "edit", "delete"],
      integrations: ["view", "create", "edit", "delete"],
      settings: ["view", "edit"],
    },
  },
  {
    id: "superuser",
    name: "Superusuario",
    description: "Acceso a la mayoría de funciones administrativas",
    users: 1,
    permissions: {
      dashboard: ["view", "edit"],
      users: ["view", "create", "edit"],
      teams: ["view", "create", "edit"],
      roles: ["view"],
      rules: ["view", "create", "edit"],
      gamification: ["view", "create", "edit"],
      integrations: ["view", "create", "edit"],
      settings: ["view", "edit"],
    },
  },
  {
    id: "manager",
    name: "Gerente/Líder",
    description: "Gestión de equipos y miembros",
    users: 1,
    permissions: {
      dashboard: ["view"],
      users: ["view"],
      teams: ["view", "edit"],
      roles: [],
      rules: ["view"],
      gamification: ["view"],
      integrations: ["view"],
      settings: ["view"],
    },
  },
  {
    id: "basic",
    name: "Usuario Básico",
    description: "Acceso limitado a funciones básicas",
    users: 2,
    permissions: {
      dashboard: ["view"],
      users: [],
      teams: [],
      roles: [],
      rules: [],
      gamification: ["view"],
      integrations: [],
      settings: ["view"],
    },
  },
]

const permissionModules = [
  { id: "dashboard", name: "Panel Principal" },
  { id: "users", name: "Usuarios" },
  { id: "teams", name: "Equipos" },
  { id: "roles", name: "Roles" },
  { id: "rules", name: "Motor de Reglas" },
  { id: "gamification", name: "Gamificación" },
  { id: "integrations", name: "Integraciones" },
  { id: "settings", name: "Configuración" },
]

const permissionActions = [
  { id: "view", name: "Ver" },
  { id: "create", name: "Crear" },
  { id: "edit", name: "Editar" },
  { id: "delete", name: "Eliminar" },
]

export function RoleManagement() {
  const [roles, setRoles] = useState(initialRoles)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentRole, setCurrentRole] = useState<any>(null)
  const [newRole, setNewRole] = useState({
    id: "",
    name: "",
    description: "",
    permissions: {} as Record<string, string[]>,
  })

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddRole = () => {
    if (!newRole.id) {
      newRole.id = newRole.name.toLowerCase().replace(/\s+/g, "_")
    }
    setRoles([...roles, { ...newRole, users: 0 }])
    setNewRole({
      id: "",
      name: "",
      description: "",
      permissions: {},
    })
    setIsAddDialogOpen(false)
  }

  const handleEditRole = () => {
    if (currentRole) {
      setRoles(roles.map((role) => (role.id === currentRole.id ? currentRole : role)))
      setIsEditDialogOpen(false)
      setCurrentRole(null)
    }
  }

  const handleDeleteRole = (id: string) => {
    if (window.confirm("¿Está seguro de que desea eliminar este rol?")) {
      setRoles(roles.filter((role) => role.id !== id))
    }
  }

  const handlePermissionChange = (
    roleState: any,
    setRoleState: React.Dispatch<React.SetStateAction<any>>,
    module: string,
    action: string,
    checked: boolean,
  ) => {
    const updatedPermissions = { ...roleState.permissions }

    if (!updatedPermissions[module]) {
      updatedPermissions[module] = []
    }

    if (checked) {
      updatedPermissions[module] = [...updatedPermissions[module], action]
    } else {
      updatedPermissions[module] = updatedPermissions[module].filter((a) => a !== action)
    }

    setRoleState({
      ...roleState,
      permissions: updatedPermissions,
    })
  }

  const hasPermission = (rolePermissions: Record<string, string[]>, module: string, action: string) => {
    return rolePermissions[module]?.includes(action) || false
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar roles..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Añadir Rol
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[700px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Rol</DialogTitle>
              <DialogDescription>
                Complete los detalles y permisos para crear un nuevo rol en el sistema.
              </DialogDescription>
            </DialogHeader>
            <Tabs defaultValue="details" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="details">Detalles</TabsTrigger>
                <TabsTrigger value="permissions">Permisos</TabsTrigger>
              </TabsList>
              <TabsContent value="details" className="space-y-4 py-4">
                <div className="grid gap-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Nombre
                    </Label>
                    <Input
                      id="name"
                      value={newRole.name}
                      onChange={(e) => setNewRole({ ...newRole, name: e.target.value })}
                      className="col-span-3"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="id" className="text-right">
                      ID
                    </Label>
                    <Input
                      id="id"
                      value={newRole.id}
                      onChange={(e) => setNewRole({ ...newRole, id: e.target.value })}
                      className="col-span-3"
                      placeholder="Generado automáticamente si se deja en blanco"
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="description" className="text-right">
                      Descripción
                    </Label>
                    <Textarea
                      id="description"
                      value={newRole.description}
                      onChange={(e) => setNewRole({ ...newRole, description: e.target.value })}
                      className="col-span-3"
                      rows={3}
                    />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="permissions" className="py-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {permissionModules.map((module) => (
                      <Card key={module.id}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg">{module.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid grid-cols-2 gap-2">
                            {permissionActions.map((action) => (
                              <div key={action.id} className="flex items-center space-x-2">
                                <Checkbox
                                  id={`${module.id}-${action.id}`}
                                  checked={hasPermission(newRole.permissions, module.id, action.id)}
                                  onCheckedChange={(checked) =>
                                    handlePermissionChange(
                                      newRole,
                                      setNewRole,
                                      module.id,
                                      action.id,
                                      checked as boolean,
                                    )
                                  }
                                />
                                <Label htmlFor={`${module.id}-${action.id}`}>{action.name}</Label>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddRole}>Crear Rol</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Usuarios</TableHead>
            <TableHead>Permisos</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredRoles.map((role) => (
            <TableRow key={role.id}>
              <TableCell className="font-medium">
                <div className="flex items-center gap-2">
                  <Shield
                    className={`h-4 w-4 ${role.id === "administrator" ? "text-red-500" : role.id === "superuser" ? "text-blue-500" : role.id === "manager" ? "text-amber-500" : "text-gray-500"}`}
                  />
                  {role.name}
                </div>
              </TableCell>
              <TableCell>{role.description}</TableCell>
              <TableCell>{role.users}</TableCell>
              <TableCell>
                <div className="flex flex-wrap gap-1">
                  {Object.entries(role.permissions).map(([module, actions]) =>
                    actions.length > 0 ? (
                      <Badge key={module} variant="outline" className="text-xs">
                        {permissionModules.find((m) => m.id === module)?.name}: {actions.length}
                      </Badge>
                    ) : null,
                  )}
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setCurrentRole(role)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  {currentRole && (
                    <DialogContent className="sm:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>Editar Rol</DialogTitle>
                        <DialogDescription>Actualice los detalles y permisos del rol seleccionado.</DialogDescription>
                      </DialogHeader>
                      <Tabs defaultValue="details" className="w-full">
                        <TabsList className="grid w-full grid-cols-2">
                          <TabsTrigger value="details">Detalles</TabsTrigger>
                          <TabsTrigger value="permissions">Permisos</TabsTrigger>
                        </TabsList>
                        <TabsContent value="details" className="space-y-4 py-4">
                          <div className="grid gap-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-name" className="text-right">
                                Nombre
                              </Label>
                              <Input
                                id="edit-name"
                                value={currentRole.name}
                                onChange={(e) => setCurrentRole({ ...currentRole, name: e.target.value })}
                                className="col-span-3"
                              />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-id" className="text-right">
                                ID
                              </Label>
                              <Input id="edit-id" value={currentRole.id} disabled className="col-span-3 opacity-50" />
                            </div>
                            <div className="grid grid-cols-4 items-center gap-4">
                              <Label htmlFor="edit-description" className="text-right">
                                Descripción
                              </Label>
                              <Textarea
                                id="edit-description"
                                value={currentRole.description}
                                onChange={(e) => setCurrentRole({ ...currentRole, description: e.target.value })}
                                className="col-span-3"
                                rows={3}
                              />
                            </div>
                          </div>
                        </TabsContent>
                        <TabsContent value="permissions" className="py-4">
                          <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {permissionModules.map((module) => (
                                <Card key={module.id}>
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-lg">{module.name}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="grid grid-cols-2 gap-2">
                                      {permissionActions.map((action) => (
                                        <div key={action.id} className="flex items-center space-x-2">
                                          <Checkbox
                                            id={`edit-${module.id}-${action.id}`}
                                            checked={hasPermission(currentRole.permissions, module.id, action.id)}
                                            onCheckedChange={(checked) =>
                                              handlePermissionChange(
                                                currentRole,
                                                setCurrentRole,
                                                module.id,
                                                action.id,
                                                checked as boolean,
                                              )
                                            }
                                          />
                                          <Label htmlFor={`edit-${module.id}-${action.id}`}>{action.name}</Label>
                                        </div>
                                      ))}
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                          Cancelar
                        </Button>
                        <Button onClick={handleEditRole}>Guardar Cambios</Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleDeleteRole(role.id)}
                  disabled={role.id === "administrator" || role.users > 0}
                >
                  <Trash2
                    className={`h-4 w-4 ${role.id === "administrator" || role.users > 0 ? "text-gray-300" : "text-red-500"}`}
                  />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
