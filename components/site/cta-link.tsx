import type { AnchorHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

const variants = {
  brand:
    'bg-brand text-brand-foreground hover:bg-brand/85 shadow-sm',
  dark: 'bg-ink text-ink-foreground hover:bg-ink/85',
  outline:
    'border border-foreground/20 bg-background/60 text-foreground hover:bg-foreground/5',
  outlineLight: 'border border-ink-foreground/30 text-ink-foreground hover:bg-ink-foreground/10',
} as const

const sizes = {
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-6 text-base',
} as const

type CtaLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof variants
  size?: keyof typeof sizes
  external?: boolean
}

export function CtaLink({
  variant = 'brand',
  size = 'md',
  external,
  className,
  children,
  ...props
}: CtaLinkProps) {
  return (
    <a
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-semibold whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
        variants[variant],
        sizes[size],
        className,
      )}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  )
}
