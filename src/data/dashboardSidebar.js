import { LayoutDashboard, Home, Grid, } from "lucide-react";

const navbar = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
        link: '/dashboard',
    },
    {
        title: 'Home',
        icon: Home,
        link: '/'
    },
    {
        title: 'Create Notes',
        icon: Grid,
        link: '/create'
    }
]

export default navbar