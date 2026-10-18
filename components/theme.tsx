"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { SunMedium, Moon, Monitor } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Theme() {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    const themes = [
        { value: "light", icon: SunMedium },
        { value: "dark", icon: Moon },
        { value: "system", icon: Monitor },
    ]

    let ActiveIcon = Monitor

    if (theme === "light") {
        ActiveIcon = SunMedium
    } else if (theme === "dark") {
        ActiveIcon = Moon
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger>

                <ActiveIcon />

            </DropdownMenuTrigger>

            <DropdownMenuContent >
                <DropdownMenuItem onClick={() => setTheme("light")}>  <SunMedium /> Light </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}> <Moon /> Dark </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}> <Monitor /> System </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )

}