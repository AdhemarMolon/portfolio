import * as React from "react"
import type { VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
// 1. Importa as variantes do arquivo novo
import { badgeVariants } from "./badge.variants" 

// A interface pode ser exportada sem problemas
export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

// 2. Exporta APENAS o componente
export { Badge }