export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="max-w-2xl">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs font-medium text-primary">{eyebrow}</span>
        <span className="h-px w-10 bg-primary/50" aria-hidden />
      </div>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance sm:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{subtitle}</p> : null}
    </div>
  )
}
