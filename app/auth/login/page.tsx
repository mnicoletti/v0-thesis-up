"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { BarChart3, Eye, EyeOff, Lock, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rememberMe: false,
  })
  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })
  const router = useRouter()
  const { toast } = useToast()

  const validateForm = () => {
    const newErrors = {
      username: "",
      password: "",
    }
    let isValid = true

    if (!formData.username.trim()) {
      newErrors.username = "El nombre de usuario es obligatorio"
      isValid = false
    }

    if (!formData.password) {
      newErrors.password = "La contraseña es obligatoria"
      isValid = false
    } else if (formData.password.length < 6) {
      newErrors.password = "La contraseña debe tener al menos 6 caracteres"
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors({
        ...errors,
        [name]: "",
      })
    }
  }

  const handleCheckboxChange = (checked: boolean) => {
    setFormData({
      ...formData,
      rememberMe: checked,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      // Simulación de autenticación
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Credenciales de demostración
      if (formData.username === "admin" && formData.password === "password") {
        // Guardar información de sesión (en una aplicación real, esto sería un token JWT)
        localStorage.setItem("userRole", "administrator")
        localStorage.setItem("isLoggedIn", "true")
        localStorage.setItem("userName", "Jane Doe")

        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido al Panel de Gamificación DevOps",
        })

        // Redirigir al dashboard
        router.push("/")
      } else {
        toast({
          variant: "destructive",
          title: "Error de inicio de sesión",
          description: "Nombre de usuario o contraseña incorrectos",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error de inicio de sesión",
        description: "Ocurrió un error al intentar iniciar sesión",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 dark:bg-slate-900 p-4">
      <div className="w-full max-w-md">
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <BarChart3 className="h-10 w-10 text-indigo-500 mr-2" />
            <h1 className="text-3xl font-bold">
              DevOps<span className="text-indigo-500">Score</span>
            </h1>
          </div>
        </div>

        <Card className="border-slate-200 dark:border-slate-800">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold text-center">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">Ingresa tus credenciales para acceder al panel</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Nombre de Usuario</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="username"
                    name="username"
                    placeholder="Ingresa tu nombre de usuario"
                    className="pl-10"
                    value={formData.username}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                </div>
                {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Contraseña</Label>
                  <Link
                    href="/auth/forgot-password"
                    className="text-sm text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
                  >
                    ¿Olvidaste tu contraseña?
                  </Link>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    className="pl-10 pr-10"
                    value={formData.password}
                    onChange={handleChange}
                    disabled={isLoading}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-3 text-muted-foreground"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onCheckedChange={handleCheckboxChange}
                  disabled={isLoading}
                />
                <Label htmlFor="rememberMe" className="text-sm font-normal">
                  Recordarme
                </Label>
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Iniciando sesión..." : "Iniciar Sesión"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link
                href="/auth/register"
                className="text-indigo-500 hover:text-indigo-600 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                Regístrate
              </Link>
            </div>
            <div className="text-center text-xs text-muted-foreground">
              <p>Credenciales de demostración:</p>
              <p>Usuario: admin | Contraseña: password</p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
