'use client'

import createGlobe, { type COBEOptions } from 'cobe'
import { useCallback, useEffect, useRef } from 'react'

import { cn } from '@/lib/utils'

export function Globe({
  className,
  config,
}: {
  className?: string
  config: Omit<COBEOptions, 'onRender'>
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const widthRef = useRef(0)
  const phiRef = useRef(0)
  const rotationRef = useRef(0)
  const pointerInteracting = useRef<number | null>(null)
  const pointerInteractionMovement = useRef(0)

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value === null ? 'grab' : 'grabbing'
    }
  }

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current
      pointerInteractionMovement.current = delta
      rotationRef.current = delta / 200
    }
  }

  const onRender = useCallback((state: Record<string, number>) => {
    if (pointerInteracting.current === null) phiRef.current += 0.005
    state.phi = phiRef.current + rotationRef.current
    state.width = widthRef.current * 2
    state.height = widthRef.current * 2
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const onResize = () => {
      widthRef.current = canvas.offsetWidth
    }

    window.addEventListener('resize', onResize)
    onResize()

    const globe = createGlobe(canvas, {
      ...config,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      onRender,
    })

    const revealTimer = window.setTimeout(() => {
      canvas.style.opacity = '1'
    }, 80)

    return () => {
      window.clearTimeout(revealTimer)
      window.removeEventListener('resize', onResize)
      globe.destroy()
    }
  }, [config, onRender])

  return (
    <div
      className={cn(
        'absolute inset-0 mx-auto aspect-square w-full max-w-[600px]',
        className,
      )}
      aria-label="Globo com os estados atendidos pela SMX Inventários"
      role="img"
    >
      <canvas
        ref={canvasRef}
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        onPointerDown={(event) =>
          updatePointerInteraction(
            event.clientX - pointerInteractionMovement.current,
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerCancel={() => updatePointerInteraction(null)}
        onPointerLeave={() => updatePointerInteraction(null)}
        onPointerMove={(event) => updateMovement(event.clientX)}
      />
    </div>
  )
}

