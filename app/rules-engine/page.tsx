import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RulesList } from "@/components/rules-engine/rules-list"
import { RuleEditor } from "@/components/rules-engine/rule-editor"
import { RulePreview } from "@/components/rules-engine/rule-preview"

export default function RulesEnginePage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Motor de Reglas</h2>
        <div className="flex items-center space-x-2">
          <Tabs defaultValue="all" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="all">Todas las Reglas</TabsTrigger>
              <TabsTrigger value="build">Reglas de Compilación</TabsTrigger>
              <TabsTrigger value="code">Calidad de Código</TabsTrigger>
              <TabsTrigger value="sprint">Reglas de Sprint</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Lista de Reglas</CardTitle>
            <CardDescription>Gestionar reglas de asignación de puntos y logros</CardDescription>
          </CardHeader>
          <CardContent>
            <RulesList />
          </CardContent>
        </Card>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Editor de Reglas</CardTitle>
            <CardDescription>Configurar condiciones y acciones de reglas</CardDescription>
          </CardHeader>
          <CardContent>
            <RuleEditor />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Vista Previa de Reglas</CardTitle>
          <CardDescription>Ver cómo las reglas afectarán la distribución de puntos</CardDescription>
        </CardHeader>
        <CardContent>
          <RulePreview />
        </CardContent>
      </Card>
    </div>
  )
}
