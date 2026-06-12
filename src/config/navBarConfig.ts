import {
	type NavBarConfig,
	type NavBarLink,
	type NavBarSearchConfig,
	NavBarSearchMethod,
} from "../types/navBarConfig";

const getDynamicNavBarConfig = (): NavBarConfig => {
	const links: NavBarLink[] = [
		LinkPresets.Home,
		LinkPresets.Articles,
		LinkPresets.Friends,
	];

	return { links } as NavBarConfig;
};

export const navBarSearchConfig: NavBarSearchConfig = {
	method: NavBarSearchMethod.PageFind,
};

export const LinkPresets: Record<string, NavBarLink> = {
	Home: {
		name: "首页",
		url: "/",
		icon: "material-symbols:home",
	},
	Articles: {
		name: "文章",
		url: "/articles/",
		icon: "material-symbols:article",
	},
	Friends: {
		name: "伙伴",
		url: "/friends/",
		icon: "material-symbols:group",
	},
};

export const navBarConfig: NavBarConfig = getDynamicNavBarConfig();
