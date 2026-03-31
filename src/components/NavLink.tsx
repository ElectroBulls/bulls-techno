"use client"
import { useRouter } from "next/navigation"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

export default function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onClick?.()
    router.push(href)
  }

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  )
}
