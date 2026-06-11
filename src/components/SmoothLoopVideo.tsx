import { useRef, useState } from 'react'
import { POSTER } from './media'

// Remote clips rarely end on the frame they start on, so a native loop jumps.
// This masks the seam: ease into the espresso tint just before the end and
// back out as the clip restarts.
const SEAM_WINDOW_S = 0.7

export default function SmoothLoopVideo({
  src,
  className = '',
}: {
  src: string
  className?: string
}) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [dimmed, setDimmed] = useState(false)

  const handleTimeUpdate = () => {
    const v = videoRef.current
    if (!v || !Number.isFinite(v.duration)) return
    const nearEnd = v.duration - v.currentTime < SEAM_WINDOW_S
    if (nearEnd !== dimmed) setDimmed(nearEnd)
  }

  return (
    <>
      <video
        ref={videoRef}
        className={className}
        src={src}
        poster={POSTER}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        onTimeUpdate={handleTimeUpdate}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-espresso transition-opacity duration-700 ease-in-out"
        style={{ opacity: dimmed ? 1 : 0 }}
      />
    </>
  )
}
