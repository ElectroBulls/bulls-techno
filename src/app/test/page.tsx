"use client"
import { useEffect, useState } from "react"

export default function TestPage() {
  const [data, setData] = useState<any>(null)

  useEffect(() => {
    const header = document.querySelector('header')
    const main = document.querySelector('main')
    const body = document.body
    const html = document.documentElement

    setData({
      headerOffsetHeight: header?.offsetHeight,
      headerClientHeight: header?.clientHeight,
      headerBoundingTop: header?.getBoundingClientRect().top,
      headerBoundingBottom: header?.getBoundingClientRect().bottom,
      mainOffsetTop: (main as HTMLElement)?.offsetTop,
      mainBoundingTop: main?.getBoundingClientRect().top,
      firstChildOfMain: main?.firstElementChild?.tagName,
      firstChildOffsetTop: (main?.firstElementChild as HTMLElement)?.offsetTop,
      firstChildBoundingTop: main?.firstElementChild?.getBoundingClientRect().top,
      bodyScrollTop: body.scrollTop,
      htmlScrollTop: html.scrollTop,
      windowScrollY: window.scrollY,
      headerComputedHeight: window.getComputedStyle(header!).height,
      mainComputedPaddingTop: window.getComputedStyle(main!).paddingTop,
      firstChildComputedPaddingTop: window.getComputedStyle(main?.firstElementChild as Element).paddingTop,
    })
  }, [])

  return (
    <div style={{ padding: '20px', marginTop: '200px', background: 'white', color: 'black' }}>
      <h1>Diagnostic Data</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
