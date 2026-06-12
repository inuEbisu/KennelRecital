export type ProfileConfig = {
	avatar?: string;
	displayName?: string;
	name: string;
	bio?: string;
	links: {
		name: string;
		url: string;
		icon: string;
		showName?: boolean;
	}[];
};
