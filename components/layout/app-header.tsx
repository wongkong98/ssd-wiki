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
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { motion, useAnimationFrame, useMotionValue } from "motion/react"
import { useState } from "react";
import { menus } from "./menu";
import { TextAlignJustify } from "lucide-react";

export function Header() {
    const { toggleSidebar } = useSidebar();
    const [isHovered, setIsHovered] = useState(false);

    const rotate = useMotionValue(0);
    const speed = useMotionValue(20); // Base speed: 180 degrees/sec

    const MAX_SPEED = 20000;    // Maximum degrees per second to prevent visual glitching
    const ACCELERATION = 600;  // How much speed is added per second of hover
    const DECELERATION = 600;  // How quickly it brakes back down to base speed

    useAnimationFrame((_time, delta) => {
        const dt = delta / 1000;
        let currentSpeed = speed.get();

        if (isHovered) {
            currentSpeed = Math.min(MAX_SPEED, currentSpeed + ACCELERATION * dt);
        } else {
            currentSpeed = Math.max(10, currentSpeed - DECELERATION * dt);
        }
        speed.set(currentSpeed);
        rotate.set(rotate.get() + currentSpeed * dt);
    });

    return (
        <div className="h-16 items-center justify-between flex px-6 sticky top-0 z-10 backdrop-blur-lg">
            <NavigationMenu className={"hidden md:flex"}>
                <NavigationMenuList>
                    {menus.map((menu) => (
                        <NavigationMenuItem key={menu.id}>
                            <NavigationMenuTrigger>
                                <Link href={menu.url} className="flex-row items-center gap-2">{menu.name}</Link>
                            </NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid">
                                    <li>
                                        {menu.children.map((submenu) => (
                                            <NavigationMenuLink key={submenu.id} render={<Link href={submenu.url} className="flex-row items-center gap-2">{submenu.name}</Link>} />
                                        ))}
                                    </li>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <Button className="md:hidden p-1.5" variant="outline" size="icon" onClick={toggleSidebar}>
                <TextAlignJustify />
            </Button>

            <div className="flex items-center gap-2">
                <motion.img
                    style={{ rotate }}
                    className="h-4 w-4"
                    src={"/icons/earth.ico"}
                    onHoverStart={() => setIsHovered(true)}
                    onHoverEnd={() => setIsHovered(false)}
                />

                <Tabs defaultValue="en">
                    <TabsList>
                        <TabsTrigger value="en">English</TabsTrigger>
                        <TabsTrigger value="jp">日本語</TabsTrigger>
                    </TabsList>
                </Tabs>
            </div>
        </div>
    )
}
