"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
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
import { Edit, Search, Trash2, UserPlus } from "lucide-react"

// Datos de ejemplo
const initialUsers = [
  {
    id: "1",
    name: "Jane Doe",
    email: "jane.doe@company.com",
    role: "administrator",
    team: "Team Alpha",
    status: "active",
  },
  {
    id: "2",
    name: "John Smith",
    email: "john.smith@company.com",
    role: "superuser",
    team: "Team Beta",
    status: "active",
  },
  {
    id: "3",
    name: "Emily Johnson",
    email: "emily.johnson@company.com",
    role: "manager",
    team: "Team Alpha",
    status: "active",
  },
  {
    id: "4",
    name: "Michael Brown",
    email: "michael.brown@company.com",
    role: "basic",
    team: "Team Gamma",
    status: "inactive",
  },
  {
    id: "5",
    name: "Sarah Wilson",
    email: "sarah.wilson@company.com",
    role: "basic",
    team: "Team Delta",
    status: "active",
  },
]

const teams = [
  { id: "1", name: "Team Alpha" },
  { id: "2", name: "Team Beta" },
  { id: "3", name: "Team Gamma" },
  { id: "4", name: "Team Delta" },
]

const roles = [
  { id: "administrator", name: "Administrador", description: "Acceso completo al sistema" },
  { id: "superuser", name: "Superusuario", description: "Acceso a la mayoría de funciones administrativas" },
  { id: "manager", name: "Gerente/Líder", description: "Gestión de equipos y miembros" },
  { id: "basic", name: "Usuario Básico", description: "Acceso limitado a funciones básicas" },
]

export function UserManagement() {
  const [users, setUsers] = useState(initialUsers)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    role: "basic",
    team: "",
    password: "",
    confirmPassword: "",
  })

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.team.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddUser = () => {
    if (newUser.password !== newUser.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }

    const id = (users.length + 1).toString()
    setUsers([...users, { ...newUser, id, status: "active" }])
    setNewUser({
      name: "",
      email: "",
      role: "basic",
      team: "",
      password: "",
      confirmPassword: "",
    })
    setIsAddDialogOpen(false)
  }

  const handleEditUser = () => {
    if (currentUser) {
      setUsers(users.map((user) => (user.id === currentUser.id ? currentUser : user)))
      setIsEditDialogOpen(false)
      setCurrentUser(null)
    }
  }

  const handleDeleteUser = (id: string) => {
    if (window.confirm("¿Está seguro de que desea eliminar este usuario?")) {
      setUsers(users.filter((user) => user.id !== id))
    }
  }

  const getRoleBadgeVariant = (role: string) => {
    switch (role) {
      case "administrator":
        return "destructive"
      case "superuser":
        return "default"
      case "manager":
        return "secondary"
      default:
        return "outline"
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar usuarios..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <UserPlus className="mr-2 h-4 w-4" />
              Añadir Usuario
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Usuario</DialogTitle>
              <DialogDescription>Complete los detalles para crear un nuevo usuario en el sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  value={newUser.name}
                  onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="email" className="text-right">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={newUser.email}
                  onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="role" className="text-right">
                  Rol
                </Label>
                <Select value={newUser.role} onValueChange={(value) => setNewUser({ ...newUser, role: value })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleccionar rol" />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role.id} value={role.id}>
                        {role.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="team" className="text-right">
                  Equipo
                </Label>
                <Select value={newUser.team} onValueChange={(value) => setNewUser({ ...newUser, team: value })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleccionar equipo" />
                  </SelectTrigger>
                  <SelectContent>
                    {teams.map((team) => (
                      <SelectItem key={team.id} value={team.name}>
                        {team.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="password" className="text-right">
                  Contraseña
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={newUser.password}
                  onChange={(e) => setNewUser({ ...newUser, password: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="confirmPassword" className="text-right">
                  Confirmar
                </Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={newUser.confirmPassword}
                  onChange={(e) => setNewUser({ ...newUser, confirmPassword: e.target.value })}
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddUser}>Crear Usuario</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Rol</TableHead>
            <TableHead>Equipo</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Badge variant={getRoleBadgeVariant(user.role)}>
                  {roles.find((r) => r.id === user.role)?.name || user.role}
                </Badge>
              </TableCell>
              <TableCell>{user.team}</TableCell>
              <TableCell>
                <Badge variant={user.status === "active" ? "success" : "secondary"}>
                  {user.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setCurrentUser(user)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  {currentUser && (
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Editar Usuario</DialogTitle>
                        <DialogDescription>Actualice los detalles del usuario seleccionado.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-name" className="text-right">
                            Nombre
                          </Label>
                          <Input
                            id="edit-name"
                            value={currentUser.name}
                            onChange={(e) => setCurrentUser({ ...currentUser, name: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-email" className="text-right">
                            Email
                          </Label>
                          <Input
                            id="edit-email"
                            type="email"
                            value={currentUser.email}
                            onChange={(e) => setCurrentUser({ ...currentUser, email: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-role" className="text-right">
                            Rol
                          </Label>
                          <Select
                            value={currentUser.role}
                            onValueChange={(value) => setCurrentUser({ ...currentUser, role: value })}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Seleccionar rol" />
                            </SelectTrigger>
                            <SelectContent>
                              {roles.map((role) => (
                                <SelectItem key={role.id} value={role.id}>
                                  {role.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-team" className="text-right">
                            Equipo
                          </Label>
                          <Select
                            value={currentUser.team}
                            onValueChange={(value) => setCurrentUser({ ...currentUser, team: value })}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Seleccionar equipo" />
                            </SelectTrigger>
                            <SelectContent>
                              {teams.map((team) => (
                                <SelectItem key={team.id} value={team.name}>
                                  {team.name}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-status" className="text-right">
                            Estado
                          </Label>
                          <Select
                            value={currentUser.status}
                            onValueChange={(value) => setCurrentUser({ ...currentUser, status: value })}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Seleccionar estado" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="active">Activo</SelectItem>
                              <SelectItem value="inactive">Inactivo</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>
                          Cancelar
                        </Button>
                        <Button onClick={handleEditUser}>Guardar Cambios</Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteUser(user.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
