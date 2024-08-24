import {SidebarItemsType} from "./types";
import {Users, Sliders, DollarSign, UserCheck, File, Bell, Gift} from "react-feather";
import {PermissionsRead} from "../../constants";

const pagesSection = [
    {
        href: "root",
        icon: Sliders,
        title: "sidebar.dashboard",
        regexpPath: "/",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "news",
        icon: Bell,
        title: "widgets.news",
        regexpPath: "/news(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "users",
        icon: Users,
        title: "widgets.users",
        regexpPath: "/users(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "projects",
        icon: Gift,
        title: "widgets.projects",
        regexpPath: "/projects(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "account",
        icon: UserCheck,
        title: "widgets.accounts",
        regexpPath: "/account(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "wallet",
        icon: DollarSign,
        title: "widgets.wallets",
        regexpPath: "/wallet(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    {
        href: "resources",
        icon: File,
        title: "widgets.resources",
        regexpPath: "/resource(.*)",
        permissions: [PermissionsRead.DASHBOARD],
    },
    // {
    //     href: "bindings",
    //     icon: Link,
    //     title: "Bindings",
    //     regexpPath: "/binding(.*)",
    //     permissions: [PermissionsRead.DASHBOARD],
    // },
] as SidebarItemsType[];

const navItems = [
    {
        title: "",
        pages: pagesSection,
    },
];

export default navItems;
