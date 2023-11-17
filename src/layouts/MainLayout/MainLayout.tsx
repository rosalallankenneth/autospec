import React from "react";
import scss from "./MainLayout.module.scss";
import AppDrawer from "@/components/AppDrawer";

const MainLayout = (props: any) => {
	return (
		<main className={scss.main}>
			<AppDrawer>{props.children}</AppDrawer>
		</main>
	);
};

export default MainLayout;
