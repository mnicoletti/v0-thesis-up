"use client"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Edit, Plus, Search, Trash2, Users } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Datos de ejemplo
const initialTeams = [
  {
    id: "1",
    name: "Team Alpha",
    description: "Equipo principal de desarrollo frontend",
    members: 8,
    lead: "Jane Doe",
    status: "active",
  },
  {
    id: "2",
    name: "Team Beta",
    description: "Equipo de desarrollo backend",
    members: 6,
    lead: "John Smith",
    status: "active",
  },
  {
    id: "3",
    name: "Team Gamma",
    description: "Equipo de DevOps y infraestructura",
    members: 7,
    lead: "Emily Johnson",
    status: "active",
  },
  {
    id: "4",
    name: "Team Delta",
    description: "Equipo de QA y testing",
    members: 5,
    lead: "Michael Brown",
    status: "inactive",
  },
]

const users = [
  { id: "1", name: "Jane Doe", role: "administrator" },
  { id: "2", name: "John Smith", role: "superuser" },
  { id: "3", name: "Emily Johnson", role: "manager" },
  { id: "4", name: "Michael Brown", role: "basic" },
  { id: "5", name: "Sarah Wilson", role: "basic" },
]

export function TeamManagement() {
  const [teams, setTeams] = useState(initialTeams)
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false)
  const [isViewMembersDialogOpen, setIsViewMembersDialogOpen] = useState(false)
  const [currentTeam, setCurrentTeam] = useState<any>(null)
  const [newTeam, setNewTeam] = useState({
    name: "",
    description: "",
    lead: "",
  })

  const filteredTeams = teams.filter(
    (team) =>
      team.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      team.lead.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleAddTeam = () => {
    const id = (teams.length + 1).toString()
    setTeams([...teams, { ...newTeam, id, members: 0, status: "active" }])
    setNewTeam({
      name: "",
      description: "",
      lead: "",
    })
    setIsAddDialogOpen(false)
  }

  const handleEditTeam = () => {
    if (currentTeam) {
      setTeams(teams.map((team) => (team.id === currentTeam.id ? currentTeam : team)))
      setIsEditDialogOpen(false)
      setCurrentTeam(null)
    }
  }

  const handleDeleteTeam = (id: string) => {
    if (window.confirm("¿Está seguro de que desea eliminar este equipo?")) {
      setTeams(teams.filter((team) => team.id !== id))
    }
  }

  // Datos de ejemplo para miembros del equipo
  const teamMembers = [
    {
      id: "1",
      name: "Jane Doe",
      role: "Líder de Equipo",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JD",
    },
    {
      id: "2",
      name: "John Smith",
      role: "Desarrollador Senior",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "JS",
    },
    {
      id: "3",
      name: "Emily Johnson",
      role: "Desarrollador Backend",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "EJ",
    },
    {
      id: "4",
      name: "Michael Brown",
      role: "Desarrollador Frontend",
      avatar: "/placeholder.svg?height=32&width=32",
      initials: "MB",
    },
  ]

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <div className="relative w-full max-w-sm">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Buscar equipos..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Añadir Equipo
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Añadir Nuevo Equipo</DialogTitle>
              <DialogDescription>Complete los detalles para crear un nuevo equipo en el sistema.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Nombre
                </Label>
                <Input
                  id="name"
                  value={newTeam.name}
                  onChange={(e) => setNewTeam({ ...newTeam, name: e.target.value })}
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                  Descripción
                </Label>
                <Textarea
                  id="description"
                  value={newTeam.description}
                  onChange={(e) => setNewTeam({ ...newTeam, description: e.target.value })}
                  className="col-span-3"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="lead" className="text-right">
                  Líder
                </Label>
                <Select value={newTeam.lead} onValueChange={(value) => setNewTeam({ ...newTeam, lead: value })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Seleccionar líder" />
                  </SelectTrigger>
                  <SelectContent>
                    {users.map((user) => (
                      <SelectItem key={user.id} value={user.name}>
                        {user.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancelar
              </Button>
              <Button onClick={handleAddTeam}>Crear Equipo</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nombre</TableHead>
            <TableHead>Descripción</TableHead>
            <TableHead>Miembros</TableHead>
            <TableHead>Líder</TableHead>
            <TableHead>Estado</TableHead>
            <TableHead className="text-right">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredTeams.map((team) => (
            <TableRow key={team.id}>
              <TableCell className="font-medium">{team.name}</TableCell>
              <TableCell>{team.description}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex items-center gap-1"
                  onClick={() => {
                    setCurrentTeam(team)
                    setIsViewMembersDialogOpen(true)
                  }}
                >
                  <Users className="h-4 w-4" />
                  {team.members}
                </Button>
              </TableCell>
              <TableCell>{team.lead}</TableCell>
              <TableCell>
                <Badge variant={team.status === "active" ? "success" : "secondary"}>
                  {team.status === "active" ? "Activo" : "Inactivo"}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
                  <DialogTrigger asChild>
                    <Button variant="ghost" size="icon" onClick={() => setCurrentTeam(team)}>
                      <Edit className="h-4 w-4" />
                    </Button>
                  </DialogTrigger>
                  {currentTeam && (
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Editar Equipo</DialogTitle>
                        <DialogDescription>Actualice los detalles del equipo seleccionado.</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-name" className="text-right">
                            Nombre
                          </Label>
                          <Input
                            id="edit-name"
                            value={currentTeam.name}
                            onChange={(e) => setCurrentTeam({ ...currentTeam, name: e.target.value })}
                            className="col-span-3"
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-description" className="text-right">
                            Descripción
                          </Label>
                          <Textarea
                            id="edit-description"
                            value={currentTeam.description}
                            onChange={(e) => setCurrentTeam({ ...currentTeam, description: e.target.value })}
                            className="col-span-3"
                            rows={3}
                          />
                        </div>
                        <div className="grid grid-cols-4 items-center gap-4">
                          <Label htmlFor="edit-lead" className="text-right">
                            Líder
                          </Label>
                          <Select
                            value={currentTeam.lead}
                            onValueChange={(value) => setCurrentTeam({ ...currentTeam, lead: value })}
                          >
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Seleccionar líder" />
                            </SelectTrigger>
                            <SelectContent>
                              {users.map((user) => (
                                <SelectItem key={user.id} value={user.name}>
                                  {user.name}
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
                            value={currentTeam.status}
                            onValueChange={(value) => setCurrentTeam({ ...currentTeam, status: value })}
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
                        <Button onClick={handleEditTeam}>Guardar Cambios</Button>
                      </DialogFooter>
                    </DialogContent>
                  )}
                </Dialog>
                <Button variant="ghost" size="icon" onClick={() => handleDeleteTeam(team.id)}>
                  <Trash2 className="h-4 w-4 text-red-500" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Diálogo para ver miembros del equipo */}
      <Dialog open={isViewMembersDialogOpen} onOpenChange={setIsViewMembersDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Miembros del Equipo {currentTeam?.name}</DialogTitle>
            <DialogDescription>Gestione los miembros asignados a este equipo.</DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <div className="flex justify-between mb-4">
              <div className="relative w-full max-w-sm">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar miembros..." className="pl-8" />
              </div>
              <Button>
                <Plus className="mr-2 h-4 w-4" />
                Añadir Miembro
              </Button>
            </div>
            <div className="space-y-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback>{member.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Editar Rol
                    </Button>
                    <Button variant="destructive" size="sm">
                      Eliminar
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <DialogFooter>
            <Button onClick={() => setIsViewMembersDialogOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
