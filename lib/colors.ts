// Configuración de colores consistente para toda la aplicación
export const METRIC_COLORS = {
  // Colores principales para métricas
  buildSuccess: {
    primary: "#4ade80", // green-400
    secondary: "#22c55e", // green-500
    light: "#dcfce7", // green-100
    dark: "#15803d", // green-700
    text: "text-green-500",
    bg: "bg-green-500",
    chart: "hsl(142, 76%, 36%)",
  },
  codeQuality: {
    primary: "#60a5fa", // blue-400
    secondary: "#3b82f6", // blue-500
    light: "#dbeafe", // blue-100
    dark: "#1d4ed8", // blue-700
    text: "text-blue-500",
    bg: "bg-blue-500",
    chart: "hsl(217, 91%, 60%)",
  },
  sprintCompletion: {
    primary: "#a78bfa", // violet-400
    secondary: "#8b5cf6", // violet-500
    light: "#ede9fe", // violet-100
    dark: "#6d28d9", // violet-700
    text: "text-violet-500",
    bg: "bg-violet-500",
    chart: "hsl(258, 90%, 66%)",
  },
  ticketResolution: {
    primary: "#fb923c", // orange-400
    secondary: "#f97316", // orange-500
    light: "#fed7aa", // orange-100
    dark: "#c2410c", // orange-700
    text: "text-orange-500",
    bg: "bg-orange-500",
    chart: "hsl(20, 95%, 55%)",
  },
  // Colores adicionales para otros elementos
  points: {
    primary: "#fbbf24", // amber-400
    secondary: "#f59e0b", // amber-500
    light: "#fef3c7", // amber-100
    dark: "#d97706", // amber-600
    text: "text-amber-500",
    bg: "bg-amber-500",
    chart: "hsl(45, 93%, 47%)",
  },
  badges: {
    primary: "#a855f7", // purple-500
    secondary: "#9333ea", // purple-600
    light: "#f3e8ff", // purple-100
    dark: "#7c3aed", // purple-700
    text: "text-purple-500",
    bg: "bg-purple-500",
    chart: "hsl(271, 91%, 65%)",
  },
} as const

// Mapeo de métricas a colores
export const METRIC_COLOR_MAP = {
  "Éxito de Compilación": METRIC_COLORS.buildSuccess,
  "Calidad de Código": METRIC_COLORS.codeQuality,
  "Finalización de Sprint": METRIC_COLORS.sprintCompletion,
  "Resolución de Tickets": METRIC_COLORS.ticketResolution,
  "Build Success": METRIC_COLORS.buildSuccess,
  "Code Quality": METRIC_COLORS.codeQuality,
  "Sprint Completion": METRIC_COLORS.sprintCompletion,
  "Ticket Resolution": METRIC_COLORS.ticketResolution,
} as const

// Función helper para obtener colores de métricas
export function getMetricColor(metricName: string) {
  return METRIC_COLOR_MAP[metricName as keyof typeof METRIC_COLOR_MAP] || METRIC_COLORS.buildSuccess
}

// Configuración de colores para gráficos
export const CHART_CONFIG = {
  "Éxito de Compilación": {
    label: "Éxito de Compilación",
    color: METRIC_COLORS.buildSuccess.chart,
  },
  "Calidad de Código": {
    label: "Calidad de Código",
    color: METRIC_COLORS.codeQuality.chart,
  },
  "Finalización de Sprint": {
    label: "Finalización de Sprint",
    color: METRIC_COLORS.sprintCompletion.chart,
  },
  "Resolución de Tickets": {
    label: "Resolución de Tickets",
    color: METRIC_COLORS.ticketResolution.chart,
  },
} as const
