import type { ReactNode } from 'react'

type CardVariations = 'gradient'

const styles: {
  [K in CardVariations]: string
} = {
  gradient: 'card gradient'
}

interface CardProps {
  variation: CardVariations
  render: (style: string) => ReactNode
}

export default function Card({ variation, render }: CardProps) {
  return render(styles[variation])
}
