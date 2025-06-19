"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { Loader2 } from "lucide-react"

interface AuthGuardProps {
  children: React.ReactNode
}

export function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    // Verificar si el usuario está autenticado
    const checkAuth = () => {
      const isLoggedIn = localStorage.getItem("isLoggedIn") === "true"
      setIsAuthenticated(isLoggedIn)
      setIsLoading(false)

      // Si no está autenticado y no está en una ruta de autenticación, redirigir al login
      if (!isLoggedIn && !pathname.startsWith("/auth/")) {
        router.push("/auth/login")
      }

      // Si está autenticado y está en una ruta de autenticación, redirigir al dashboard
      if (isLoggedIn && pathname.startsWith("/auth/")) {
        router.push("/")
      }
    }

    checkAuth()
  }, [pathname, router])

  // Mostrar pantalla de carga mientras se verifica la autenticación
  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-indigo-500" />
      </div>
    )
  }

  // Si está en una ruta de autenticación o está autenticado, mostrar el contenido
  if (pathname.startsWith("/auth/") || isAuthenticated) {
    return <>{children}</>
  }

  // Este return nunca debería ejecutarse debido a la redirección en el useEffect
  return null
}
