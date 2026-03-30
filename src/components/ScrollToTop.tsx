"use client"
import { useEffect } from "react"
import { usePathname } from "next/navigation"

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      window.scrollTo(0, 0)
    }
    scrollToTop()
    const timer = setTimeout(scrollToTop, 50)
    return () => clearTimeout(timer)
  }, [pathname])

  return null
}
