import * as React from "react";
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CarRepairIcon from "@mui/icons-material/CarRepair";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HistoryIcon from "@mui/icons-material/History";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import { useMediaQuery } from "@mui/material";

import { useSession, signIn, signOut } from "next-auth/react";

import ThemeToggleButton from "../ThemeToggleButton";
import { ThemeToggleButtonProps } from "../ThemeToggleButton/ThemeToggleButton";
import Dashboard from "../../pages/dashboard";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
	width: drawerWidth,
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
	transition: theme.transitions.create("width", {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: "hidden",
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up("sm")]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled("div")(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	justifyContent: "flex-end",
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open }) => ({
	zIndex: theme.zIndex.drawer + 1,
	transition: theme.transitions.create(["width", "margin"], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	...(open && {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(["width", "margin"], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	}),
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: "nowrap",
	boxSizing: "border-box",
	...(open && {
		...openedMixin(theme),
		"& .MuiDrawer-paper": openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		"& .MuiDrawer-paper": closedMixin(theme),
	}),
}));

const AppDrawer = (props: ThemeToggleButtonProps) => {
	const { ColorModeContext } = props;
	const theme = useTheme();
	const mobileCheck = useMediaQuery("(min-width: 900px)");
	const [open, setOpen] = React.useState(false);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	// state related to session
	const { data: session } = useSession();
	const userAvatar = session?.user?.image as string;
	const userFullName = session?.user?.name as string;

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleUserLogout = () => {
		handleCloseUserMenu();
		signOut();
	};

	const handleUserLogin = () => {
		handleCloseUserMenu();
		signIn();
	};

	const menuList = [
		{
			route: "dashboard",
			label: "Dashboard",
			icon: <DashboardIcon />,
		},
		{
			route: "inspections",
			label: "Inspections",
			icon: <CarRepairIcon />,
		},
		{
			route: "schedules",
			label: "Schedules",
			icon: <CalendarMonthIcon />,
		},
		{
			route: "transactions",
			label: "Transactions",
			icon: <HistoryIcon />,
		},
		{
			route: "settings",
			label: "Settings",
			icon: <SettingsIcon />,
		},
	];

	return (
		<Box sx={{ display: "flex" }}>
			<CssBaseline />
			<AppBar
				position="fixed"
				open={open}
			>
				<Toolbar>
					{mobileCheck && (
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							sx={{
								marginRight: 5,
								...(open && { display: "none" }),
							}}
						>
							<MenuIcon />
						</IconButton>
					)}

					<Typography
						color="inherit"
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: !open ? "flex" : { xs: "flex", md: "none" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						Autospec
					</Typography>

					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "end",
							alignItems: "center",
							gap: 3,
						}}
					>
						<ThemeToggleButton ColorModeContext={ColorModeContext} />

						<Tooltip title="Profile settings">
							<IconButton
								onClick={handleOpenUserMenu}
								sx={{ p: 0 }}
							>
								<Avatar
									alt={userFullName}
									src={userAvatar}
								/>
							</IconButton>
						</Tooltip>

						<Menu
							sx={{ mt: "45px" }}
							id="menu-appbar"
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "right",
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{session ? (
								<div>
									<MenuItem onClick={handleCloseUserMenu}>
										<Typography textAlign="center">Profile</Typography>
									</MenuItem>

									<MenuItem onClick={handleUserLogout}>
										<Typography textAlign="center">Logout</Typography>
									</MenuItem>
								</div>
							) : (
								<MenuItem onClick={handleUserLogin}>
									<Typography textAlign="center">Login</Typography>
								</MenuItem>
							)}
						</Menu>
					</Box>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="permanent"
				open={open}
			>
				<DrawerHeader sx={{ display: "flex" }}>
					<Typography
						color="inherit"
						variant="h5"
						noWrap
						component="a"
						href="#app-bar-with-responsive-menu"
						sx={{
							mr: 2,
							display: open ? "flex" : { xs: "none", md: "flex" },
							flexGrow: 1,
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".3rem",
							color: "inherit",
							backgroundColor: "inherit",
							textDecoration: "none",
							justifyContent: "end",
						}}
					>
						Autospec
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === "rtl" ? (
							<ChevronRightIcon />
						) : (
							<ChevronLeftIcon />
						)}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{menuList.map((menu) => (
						<ListItem
							key={menu.route}
							disablePadding
							sx={{ display: "block" }}
						>
							<ListItemButton
								sx={{
									minHeight: 48,
									justifyContent: open ? "initial" : "center",
									px: 2.5,
								}}
							>
								<ListItemIcon
									sx={{
										minWidth: 0,
										mr: open ? 3 : "auto",
										justifyContent: "center",
									}}
								>
									{menu.icon}
								</ListItemIcon>
								<ListItemText
									primary={menu.label}
									sx={{ opacity: open ? 1 : 0 }}
								/>
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Box
				component="main"
				sx={{ flexGrow: 1, p: 3 }}
			>
				<DrawerHeader />
				<Dashboard />
			</Box>
		</Box>
	);
};

export default AppDrawer;
