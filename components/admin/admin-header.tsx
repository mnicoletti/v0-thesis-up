import { AlertTriangle } from "lucide-react"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

interface AdminHeaderProps {
  title: string
  description: string
}

export function AdminHeader({ title, description }: AdminHeaderProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>
      <Alert variant="destructive" className="bg-red-500/10 border-red-500/20 text-red-500">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>Sección Administrativa</AlertTitle>
        <AlertDescription>
          Esta sección está restringida a usuarios con privilegios administrativos. Los cambios realizados aquí
          afectarán a todo el sistema.
        </AlertDescription>
      </Alert>
    </div>
  )
}
