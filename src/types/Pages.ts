import { ComponentType, ReactElement, ReactNode } from "react";
import { NextPage } from "next";

export type Page<P = {}> = NextPage<P> & {
	// You can disable whichever you don't need
	getLayout?: (page: ReactElement) => ReactNode;
	layout?: ComponentType;
};
