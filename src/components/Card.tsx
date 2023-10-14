import type { ReactNode } from 'react'

type CardVariations = 'gradient'

const variants: {
  [K in CardVariations]: string
} = {
  gradient: 'gradient'
}

interface CardProps {
  variation?: CardVariations
  render: (variation?: string) => ReactNode
}

export default function Card({ variation, render }: CardProps) {
  if (!variation) return render()
  return render(variants[variation])
}
