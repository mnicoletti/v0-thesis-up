import type React from "react"
import type { Metadata } from "next/dist/lib/metadata/types/metadata-interface"
import { Inter } from "next/font/google"
import "./globals.css"
import { Sidebar } from "@/components/sidebar"
import { ThemeProvider } from "@/components/theme-provider"
import { RBACProvider } from "@/components/admin/rbac-provider"
import { AuthGuard } from "@/components/auth/auth-guard"
import { Toaster } from "@/components/ui/toaster"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Panel de Gamificación DevOps",
  description: "Un panel gamificado para equipos DevOps",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <AuthGuard>
            <RBACProvider initialRole="administrator">
              <div className="flex min-h-screen">
                <Sidebar />
                <div className="flex-1 overflow-auto">{children}</div>
              </div>
            </RBACProvider>
          </AuthGuard>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
