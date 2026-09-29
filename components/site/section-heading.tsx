import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  id?: string
  align?: 'left' | 'center'
  tone?: 'default' | 'light'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  id,
  align = 'left',
  tone = 'default',
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <p
        className={cn(
          'mb-3 inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] uppercase',
          tone === 'light' ? 'text-brand' : 'text-muted-foreground',
        )}
      >
        <span aria-hidden="true" className="size-2 rotate-45 rounded-[2px] bg-brand" />
        {eyebrow}
      </p>
      <h2
        id={id}
        className={cn(
          'text-3xl leading-tight font-bold tracking-tight md:text-4xl',
          tone === 'light' ? 'text-ink-foreground' : 'text-foreground',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed text-pretty md:text-lg',
            tone === 'light' ? 'text-ink-foreground/75' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function ReviewBadge({ label = 'Confirmar antes de publicar' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-amber-600/60 bg-amber-50 px-2 py-0.5 text-[11px] font-medium text-amber-900">
      {label}
    </span>
  )
}
