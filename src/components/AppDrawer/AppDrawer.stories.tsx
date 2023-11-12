import React from "react";
import AppDrawer from "./AppDrawer";

export default {
	children: "",
	title: "Component/AppDrawer",
	component: AppDrawer,
};

const Template = (args: any) => {
	return <AppDrawer {...args} />;
};

const props = {
	defaultProps: () => ({}),
};

export const AppDrawerStory: any = Template.bind({
	storyName: "App Drawer",
	args: { ...props.defaultProps() },
});
