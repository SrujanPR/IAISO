"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

function GeometricPaths() {
  const gridSize = 40
  const paths: { id: string; d: string; delay: number }[] = []

  for (let x = 0; x < 20; x++) {
    for (let y = 0; y < 12; y++) {
      if (Math.random() > 0.7) {
        paths.push({
          id: `grid-${x}-${y}`,
          d: `M${x * gridSize},${y * gridSize} L${(x + 1) * gridSize},${y * gridSize} L${(x + 1) * gridSize},${(y + 1) * gridSize} L${x * gridSize},${(y + 1) * gridSize} Z`,
          delay: Math.random() * 5,
        })
      }
    }
  }

  return (
    <svg className="absolute inset-0 h-full w-full opacity-20" viewBox="0 0 800 480">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.6, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 8,
            delay: path.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

function FlowPaths() {
  const flowPaths = Array.from({ length: 12 }, (_, i) => {
    const amplitude = 50 + i * 10
    const frequency = 0.01 + i * 0.002
    const offset = i * 60

    return {
      id: `flow-${i}`,
      d: `M-100,${200 + offset} Q200,${200 + offset - amplitude} 500,${200 + offset} T900,${200 + offset}`,
      strokeWidth: 1 + i * 0.3,
      opacity: 0.1 + i * 0.05,
      delay: i * 0.8,
      frequency,
    }
  })

  return (
    <svg className="absolute inset-0 h-full w-full opacity-30" viewBox="0 0 800 800">
      {flowPaths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          fill="none"
          stroke="currentColor"
          strokeWidth={path.strokeWidth}
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0.8, 0],
            opacity: [0, path.opacity, path.opacity * 0.7, 0],
          }}
          transition={{
            duration: 15,
            delay: path.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

function NeuralPaths() {
  const nodes = Array.from({ length: 50 }, (_, i) => ({
    x: Math.random() * 800,
    y: Math.random() * 600,
    id: `node-${i}`,
  }))

  const connections: { id: string; d: string; delay: number }[] = []
  nodes.forEach((node, i) => {
    const nearbyNodes = nodes.filter((other, j) => {
      if (i === j) return false
      const distance = Math.sqrt(
        Math.pow(node.x - other.x, 2) + Math.pow(node.y - other.y, 2)
      )
      return distance < 120 && Math.random() > 0.6
    })

    nearbyNodes.forEach((target) => {
      connections.push({
        id: `conn-${i}-${target.id}`,
        d: `M${node.x},${node.y} L${target.x},${target.y}`,
        delay: Math.random() * 10,
      })
    })
  })

  return (
    <svg className="absolute inset-0 h-full w-full opacity-15" viewBox="0 0 800 600">
      {connections.map((conn) => (
        <motion.path
          key={conn.id}
          d={conn.d}
          stroke="currentColor"
          strokeWidth="0.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 6,
            delay: conn.delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
      {nodes.map((node) => (
        <motion.circle
          key={node.id}
          cx={node.x}
          cy={node.y}
          r="2"
          fill="currentColor"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1.2, 1],
            opacity: [0, 0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  )
}

function SpiralPaths() {
  const spirals = Array.from({ length: 8 }, (_, i) => {
    const centerX = 400 + ((i % 4) - 1.5) * 200
    const centerY = 300 + Math.floor(i / 4 - 0.5) * 200
    const radius = 80 + i * 15
    const turns = 3 + i * 0.5

    let path = `M${centerX + radius},${centerY}`
    for (let angle = 0; angle <= turns * 360; angle += 5) {
      const radian = (angle * Math.PI) / 180
      const currentRadius = radius * (1 - angle / (turns * 360))
      const x = centerX + currentRadius * Math.cos(radian)
      const y = centerY + currentRadius * Math.sin(radian)
      path += ` L${x},${y}`
    }

    return {
      id: `spiral-${i}`,
      d: path,
      delay: i * 1.2,
    }
  })

  return (
    <svg className="absolute inset-0 h-full w-full opacity-25" viewBox="0 0 800 600">
      {spirals.map((spiral) => (
        <motion.path
          key={spiral.id}
          d={spiral.d}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{
            pathLength: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            pathLength: {
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            },
            rotate: {
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
            delay: spiral.delay,
          }}
        />
      ))}
    </svg>
  )
}

export default function ModernBackgroundPaths({
  title = "Neural Dynamics",
  description = "Experience the future of interactive design with dynamic pattern generation",
  ctaLabel = "Explore Patterns",
  ctaHref,
  ctaVariant = "ghost",
  ctaClassName,
  titleGradientClassName = "bg-gradient-to-br from-foreground via-foreground/80 to-rooman-orange",
  className,
}: {
  title?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  ctaVariant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  ctaClassName?: string
  titleGradientClassName?: string
  className?: string
}) {
  const [currentPattern, setCurrentPattern] = useState(0)
  const patterns = ["neural", "flow", "geometric", "spiral"]
  const words = title.split(" ")

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPattern((prev) => (prev + 1) % patterns.length)
    }, 12000)
    return () => clearInterval(interval)
  }, [])

  const renderPattern = () => {
    switch (currentPattern) {
      case 0:
        return <NeuralPaths />
      case 1:
        return <FlowPaths />
      case 2:
        return <GeometricPaths />
      case 3:
        return <SpiralPaths />
      default:
        return <NeuralPaths />
    }
  }

  return (
    <div
      className={cn(
        "relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-background via-background to-secondary",
        className
      )}
    >
      <div className="absolute inset-0 text-foreground/40">
        <motion.div
          key={currentPattern}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2 }}
        >
          {renderPattern()}
        </motion.div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/60" />

      <div className="absolute right-8 top-8 z-20 flex gap-2">
        {patterns.map((_, i) => (
          <motion.div
            key={i}
            className={cn(
              "h-2 w-2 rounded-full transition-colors duration-300",
              i === currentPattern ? "bg-rooman-orange" : "bg-foreground/20"
            )}
            animate={{
              scale: i === currentPattern ? 1.2 : 1,
              opacity: i === currentPattern ? 1 : 0.5,
            }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </div>

      <div className="relative z-10 flex min-h-screen w-full items-center justify-center">
        <div className="container mx-auto px-4 text-center md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mx-auto max-w-5xl"
          >
            <div className="mb-8">
              <h1 className="mb-4 text-6xl font-black leading-none tracking-tighter sm:text-8xl md:text-9xl">
                {words.map((word, wordIndex) => (
                  <span key={wordIndex} className="mr-6 inline-block last:mr-0">
                    {word.split("").map((letter, letterIndex) => (
                      <motion.span
                        key={`${wordIndex}-${letterIndex}`}
                        initial={{ y: 100, opacity: 0, rotateX: -90 }}
                        animate={{ y: 0, opacity: 1, rotateX: 0 }}
                        transition={{
                          delay: wordIndex * 0.15 + letterIndex * 0.05,
                          type: "spring",
                          stiffness: 100,
                          damping: 20,
                          duration: 0.8,
                        }}
                        className={cn(
                          "inline-block cursor-default text-transparent transition-all duration-700 [background-clip:text]",
                          titleGradientClassName,
                          "hover:from-rooman-orange hover:to-rooman-orange"
                        )}
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mx-auto max-w-2xl text-xl font-light tracking-wide text-muted-foreground md:text-2xl"
              >
                {description}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
              className="group inline-block"
            >
              <div className="relative rounded-2xl bg-gradient-to-r from-rooman-orange via-rooman-orange to-rooman-orange p-[2px] transition-all duration-300">
                <Button
                  asChild={Boolean(ctaHref)}
                  variant={ctaVariant}
                  size="lg"
                  className={cn(
                    "relative rounded-[14px] border-0 bg-background px-12 py-6 text-lg font-semibold text-foreground backdrop-blur-sm transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl hover:bg-background",
                    ctaClassName
                  )}
                >
                  {ctaHref ? (
                    <Link to={ctaHref}>
                      <motion.span
                        className="flex items-center gap-3"
                        whileHover={{ x: 2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="relative">
                          {ctaLabel}
                          <motion.span
                            className="absolute -bottom-1 left-0 h-0.5 w-0 bg-rooman-orange transition-all duration-300 group-hover:w-full"
                            initial={{ width: 0 }}
                            whileHover={{ width: "100%" }}
                          />
                        </span>
                        <motion.span
                          animate={{ x: [0, 4, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "easeInOut",
                          }}
                          className="text-xl"
                        >
                          →
                        </motion.span>
                      </motion.span>
                    </Link>
                  ) : (
                    <motion.span
                      className="flex items-center gap-3"
                      whileHover={{ x: 2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    >
                      <span className="relative">
                        {ctaLabel}
                        <motion.span
                          className="absolute -bottom-1 left-0 h-0.5 w-0 bg-rooman-orange transition-all duration-300 group-hover:w-full"
                          initial={{ width: 0 }}
                          whileHover={{ width: "100%" }}
                        />
                      </span>
                      <motion.span
                        animate={{ x: [0, 4, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="text-xl"
                      >
                        →
                      </motion.span>
                    </motion.span>
                  )}
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute left-1/4 top-1/4 h-4 w-4 rounded-full bg-rooman-orange/20 blur-sm"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-1/3 top-3/4 h-6 w-6 rounded-full bg-rooman-orange/20 blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -15, 0],
          scale: [1, 0.8, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  )
}
