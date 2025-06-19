"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield, ArrowLeft } from "lucide-react"
import Link from "next/link"

interface RouteGuardProps {
  children: React.ReactNode
}

export function RouteGuard({ children }: RouteGuardProps) {
  const [userRole, setUserRole] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const pathname = usePathname()

  useEffect(() => {
    const role = localStorage.getItem("userRole")
    setUserRole(role)
    setIsLoading(false)
  }, [])

  // Define restricted routes for test users
  const restrictedRoutes = ["/admin", "/rules-engine", "/gamification", "/integrations"]

  // Check if current path is restricted for test users
  const isRestrictedRoute = restrictedRoutes.some((route) => pathname.startsWith(route))

  // If loading, show nothing
  if (isLoading) {
    return null
  }

  // If test user trying to access restricted route, show access denied
  if (userRole === "test" && isRestrictedRoute) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] p-4">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-400" />
            </div>
            <CardTitle className="text-xl font-semibold">Acceso Denegado</CardTitle>
            <CardDescription>
              No tienes permisos para acceder a esta sección. Esta área está restringida para administradores.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <Link href="/">
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Panel Principal
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  // Otherwise, render children normally
  return <>{children}</>
}
