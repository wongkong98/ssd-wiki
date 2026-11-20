"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react";
import { menus } from "./menu";
import Link from "next/link";

export function AppSidebar() {
  const { toggleSidebar } = useSidebar();

  return (
    <Sidebar
      className="md:hidden"
      variant="inset"
    >
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem className="flex justify-between items-center px-2">
            <p>Menu</p>

            <Button variant="ghost" size="icon" onClick={toggleSidebar}>
              <X />
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {menus.map((menu) => (
              <SidebarMenuItem key={menu.id}>
                <Collapsible defaultOpen={true}>
                  <SidebarMenuButton render={<CollapsibleTrigger />}>
                    {menu.name}
                  </SidebarMenuButton>

                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {menu.children.map((submenu) => (
                        <SidebarMenuSubItem key={submenu.id}>
                          <SidebarMenuSubButton render={<Link href={submenu.url} />}>
                            {submenu.name}
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </Collapsible>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}