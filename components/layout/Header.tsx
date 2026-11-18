"use client"

import Link from "next/link"

import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Header() {
    return (
        <div className="h-16 flex align-middle px-6 sticky top-0 bg-white z-10">
            <NavigationMenu>
                <NavigationMenuList>
                    {/* Monsters tab */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Link href="/monster" className="flex-row items-center gap-2">Monsters</Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-50">
                                <li>
                                    <NavigationMenuLink render={<Link href="/monster?filter=arcfiends" className="flex-row items-center gap-2">Arcfiends</Link>} />
                                    <NavigationMenuLink render={<Link href="/monster?filter=grunts" className="flex-row items-center gap-2">Grunts</Link>} />
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Offerings tab */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Link href="/offering" className="flex-row items-center gap-2">Offerings</Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-50">
                                <li>
                                    <NavigationMenuLink render={<Link href="/offering?filter=offensive" className="flex-row items-center gap-2">Attack</Link>} />
                                    <NavigationMenuLink render={<Link href="/offering?filter=support" className="flex-row items-center gap-2">Support</Link>} />
                                    <NavigationMenuLink render={<Link href="/offering?filter=special" className="flex-row items-center gap-2">Special</Link>} />
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Quests tab */}
                    <NavigationMenuItem>
                        <NavigationMenuTrigger>
                            <Link href="/quest" className="flex-row items-center gap-2">Quests</Link>
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                            <ul className="grid w-50">
                                <li>
                                    <NavigationMenuLink render={<Link href="/quest?filter=main" className="flex-row items-center gap-2">Main Storyline Quests</Link>} />
                                    <NavigationMenuLink render={<Link href="/quest?filter=revised" className="flex-row items-center gap-2">Revised: The Memories Remain</Link>} />
                                    <NavigationMenuLink render={<Link href="/quest?filter=deeds" className="flex-row items-center gap-2">Sorcerous Deeds</Link>} />
                                    <NavigationMenuLink render={<Link href="/quest?filter=maze" className="flex-row items-center gap-2">Alice's Eternal Maze</Link>} />
                                </li>
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </div>
    )
}
