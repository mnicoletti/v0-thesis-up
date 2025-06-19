"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { RBACProvider } from "@/components/admin/rbac-provider"
import { AuthGuard } from "@/components/auth/auth-guard"
import { Toaster } from "@/components/ui/toaster"
import { usePathname } from "next/navigation"
import { RouteGuard } from "@/components/auth/route-guard"

const inter = Inter({ subsets: ["latin"] })

function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const isAuthPage = pathname?.startsWith("/auth/")

  if (isAuthPage) {
    return <>{children}</>
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto">
        <RouteGuard>{children}</RouteGuard>
      </div>
    </div>
  )
}

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AuthGuard>
        <RBACProvider initialRole="basic">
          <LayoutContent>{children}</LayoutContent>
        </RBACProvider>
      </AuthGuard>
      <Toaster />
    </ThemeProvider>
  )
}
