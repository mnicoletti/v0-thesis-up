"use client"

import type React from "react"

import { createContext, useContext, type ReactNode, useState, useEffect } from "react"

type Role = "administrator" | "superuser" | "manager" | "basic"

type Permission = "view" | "create" | "edit" | "delete"

type Module = "dashboard" | "users" | "teams" | "roles" | "rules" | "gamification" | "integrations" | "settings"

interface RBACContextType {
  userRole: Role
  hasPermission: (module: Module, permission: Permission) => boolean
  isAdmin: boolean
}

const RBACContext = createContext<RBACContextType | undefined>(undefined)

// Datos de ejemplo para permisos
const rolePermissions: Record<Role, Record<Module, Permission[]>> = {
  administrator: {
    dashboard: ["view", "edit"],
    users: ["view", "create", "edit", "delete"],
    teams: ["view", "create", "edit", "delete"],
    roles: ["view", "create", "edit", "delete"],
    rules: ["view", "create", "edit", "delete"],
    gamification: ["view", "create", "edit", "delete"],
    integrations: ["view", "create", "edit", "delete"],
    settings: ["view", "edit"],
  },
  superuser: {
    dashboard: ["view", "edit"],
    users: ["view", "create", "edit"],
    teams: ["view", "create", "edit"],
    roles: ["view"],
    rules: ["view", "create", "edit"],
    gamification: ["view", "create", "edit"],
    integrations: ["view", "create", "edit"],
    settings: ["view", "edit"],
  },
  manager: {
    dashboard: ["view"],
    users: ["view"],
    teams: ["view", "edit"],
    roles: [],
    rules: ["view"],
    gamification: ["view"],
    integrations: ["view"],
    settings: ["view"],
  },
  basic: {
    dashboard: ["view"],
    users: [],
    teams: [],
    roles: [],
    rules: [],
    gamification: ["view"],
    integrations: [],
    settings: ["view"],
  },
}

interface RBACProviderProps {
  children: ReactNode
  initialRole?: Role
}

export function RBACProvider({ children, initialRole = "basic" }: RBACProviderProps) {
  const [userRole, setUserRole] = useState<Role>(initialRole)

  // En una aplicación real, esto se cargaría desde una API o contexto de autenticación
  useEffect(() => {
    // Simulamos cargar el rol del usuario desde algún lugar (localStorage, API, etc.)
    const storedRole = localStorage.getItem("userRole") as Role | null
    if (storedRole && Object.keys(rolePermissions).includes(storedRole)) {
      setUserRole(storedRole)
    }
  }, [])

  const hasPermission = (module: Module, permission: Permission): boolean => {
    return rolePermissions[userRole][module]?.includes(permission) || false
  }

  const isAdmin = userRole === "administrator" || userRole === "superuser"

  return <RBACContext.Provider value={{ userRole, hasPermission, isAdmin }}>{children}</RBACContext.Provider>
}

export function useRBAC() {
  const context = useContext(RBACContext)
  if (context === undefined) {
    throw new Error("useRBAC must be used within a RBACProvider")
  }
  return context
}

export function withPermission(Component: React.ComponentType, module: Module, permission: Permission) {
  return function ProtectedComponent(props: any) {
    const { hasPermission } = useRBAC()

    if (!hasPermission(module, permission)) {
      return <div>No tienes permiso para acceder a esta funcionalidad.</div>
    }

    return <Component {...props} />
  }
}
