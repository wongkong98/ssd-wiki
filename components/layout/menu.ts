type Menu = {
    id: string,
    name: string,
    url: string,
    children: SubMenu[]
};

type SubMenu = {
    id: string,
    name: string,
    url: string
};

export const menus: Menu[] = [
    {
        id: "1",
        name: "Monsters",
        url: "/monster",
        children: [
            {
                id: "1_1",
                name: "Archfiends",
                url: "/monster?filter=archfiends"
            },
            {
                id: "1_2",
                name: "Grunts",
                url: "/monster?filter=grunts"
            },
        ]
    },
    {
        id: "2",
        name: "Offerings",
        url: "/offering",
        children: [
            {
                id: "2_1",
                name: "Attack",
                url: "/offering?filter=archfiends"
            },
            {
                id: "2_2",
                name: "Support",
                url: "/offering?filter=grunts"
            },
            {
                id: "2_3",
                name: "Other",
                url: "/offering?filter=grunts"
            }
        ]
    },
    {
        id: "3",
        name: "Quests",
        url: "/quest",
        children: [
            {
                id: "3_1",
                name: "Main Storyline Quests",
                url: "/quest?filter=main"
            },
            {
                id: "3_2",
                name: "Revised: The Memories Remain",
                url: "/quest?filter=revised"
            },
            {
                id: "3_3",
                name: "Sorcerous Deeds",
                url: "/quest?filter=deeds"
            },
            {
                id: "3_4",
                name: "Alice's Eternal Maze",
                url: "/quest?filter=maze"
            }
        ]
    }
];