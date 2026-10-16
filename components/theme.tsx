"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function Theme() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    function handleTheme(e : React.ChangeEvent<HTMLSelectElement>){
        const value = e.target.value
        setTheme(value)
    }

    return (
        <select value={theme} onChange={handleTheme} className="select select-bordered">
            <option value="light">light</option>
            <option value="dark">dark</option>
            <option value="system">system</option>
        </select>
    )
    
}