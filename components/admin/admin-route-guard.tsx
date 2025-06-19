"use client"

import type React from "react"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useRBAC } from "./rbac-provider"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface AdminRouteGuardProps {
  children: React.ReactNode
}

export function AdminRouteGuard({ children }: AdminRouteGuardProps) {
  const { isAdmin } = useRBAC()
  const router = useRouter()

  useEffect(() => {
    // En una aplicación real, podríamos redirigir automáticamente
    // Si no queremos mostrar el mensaje de error
    // if (!isAdmin) {
    //   router.push("/")
    // }
  }, [isAdmin, router])

  if (!isAdmin) {
    return (
      <div className="flex-1 p-8 flex flex-col items-center justify-center">
        <Alert variant="destructive" className="max-w-md">
          <AlertTriangle className="h-4 w-4" />
          <AlertTitle>Acceso Restringido</AlertTitle>
          <AlertDescription>
            No tienes permisos para acceder a esta sección administrativa. Esta área está reservada para administradores
            del sistema.
          </AlertDescription>
        </Alert>
        <Button className="mt-4" onClick={() => router.push("/")}>
          Volver al Panel Principal
        </Button>
      </div>
    )
  }

  return <>{children}</>
}
