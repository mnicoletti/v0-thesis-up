"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { BarChart3, Users, User, Award, GitBranch, Cog, Home, LogOut, Shield, UserCog } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useToast } from "@/hooks/use-toast"
import { useEffect, useState } from "react"

const routes = [
  {
    label: "Panel Principal",
    icon: Home,
    href: "/",
    color: "text-sky-500",
  },
  {
    label: "Rendimiento del Equipo",
    icon: Users,
    href: "/team-performance",
    color: "text-violet-500",
  },
  {
    label: "Mi Rendimiento",
    icon: User,
    href: "/my-performance",
    color: "text-pink-700",
  },
]

const adminRoutes = [
  {
    label: "Gestión de Usuarios",
    icon: UserCog,
    href: "/admin/users",
    color: "text-red-500",
  },
  {
    label: "Gestión de Equipos",
    icon: Users,
    href: "/admin/teams",
    color: "text-amber-500",
  },
  {
    label: "Gestión de Roles",
    icon: Shield,
    href: "/admin/roles",
    color: "text-indigo-500",
  },
  {
    label: "Motor de Reglas",
    icon: Cog,
    href: "/rules-engine",
    color: "text-orange-500",
  },
  {
    label: "Gamificación",
    icon: Award,
    href: "/gamification",
    color: "text-emerald-500",
  },
  {
    label: "Integraciones",
    icon: GitBranch,
    href: "/integrations",
    color: "text-blue-500",
  },
]

export function Sidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { toast } = useToast()
  const [userName, setUserName] = useState("Usuario")
  const [userRole, setUserRole] = useState("basic")

  useEffect(() => {
    // Obtener información del usuario del localStorage
    const storedUserName = localStorage.getItem("userName")
    const storedUserRole = localStorage.getItem("userRole")

    if (storedUserName) {
      setUserName(storedUserName)
    }

    if (storedUserRole) {
      setUserRole(storedUserRole)
    }
  }, [])

  const handleLogout = () => {
    // Eliminar información de sesión
    localStorage.removeItem("isLoggedIn")
    localStorage.removeItem("userRole")
    localStorage.removeItem("userName")

    toast({
      title: "Sesión cerrada",
      description: "Has cerrado sesión correctamente",
    })

    // Redirigir a la página de inicio de sesión
    router.push("/auth/login")
  }

  // Determinar si el usuario es administrador
  const isAdmin = userRole === "administrator" || userRole === "superuser"

  // Obtener las iniciales del nombre de usuario
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2)
  }

  // Obtener el rol en español
  const getRoleInSpanish = (role: string) => {
    switch (role) {
      case "administrator":
        return "Administrador"
      case "superuser":
        return "Superusuario"
      case "manager":
        return "Gerente"
      default:
        return "Usuario"
    }
  }

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/" className="flex items-center pl-3 mb-10">
          <div className="relative w-8 h-8 mr-4">
            <BarChart3 className="h-8 w-8 text-indigo-500" />
          </div>
          <h1 className="text-2xl font-bold">
            DevOps<span className="text-indigo-500">Score</span>
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-slate-800 rounded-lg transition",
                pathname === route.href ? "text-white bg-slate-800" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}

          {isAdmin && (
            <>
              <Separator className="my-4 bg-slate-700" />
              <div className="px-3 py-2">
                <h2 className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-2">Administración</h2>
                {adminRoutes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-slate-800 rounded-lg transition",
                      pathname === route.href ? "text-white bg-slate-800" : "text-zinc-400",
                    )}
                  >
                    <div className="flex items-center flex-1">
                      <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                      {route.label}
                    </div>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      <div className="px-3 py-2 border-t border-slate-700">
        <div className="flex items-center gap-3 px-3 py-2">
          <Avatar>
            <AvatarImage src="/placeholder.svg?height=32&width=32" />
            <AvatarFallback>{getInitials(userName)}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col flex-1">
            <span className="text-sm font-medium">{userName}</span>
            <span className="text-xs text-zinc-400">{getRoleInSpanish(userRole)}</span>
            <Link href="/settings" className="text-xs text-indigo-400 hover:text-indigo-300 transition-colors">
              Configuración
            </Link>
          </div>
          <Button variant="ghost" size="icon" className="ml-auto text-zinc-400" onClick={handleLogout}>
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  )
}
