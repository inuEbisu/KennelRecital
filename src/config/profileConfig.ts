import type { ProfileConfig } from "../types/profileConfig";

export const profileConfig: ProfileConfig = {
	avatar: "/favicon/favicon.ico",
	name: "inuEbisu",
	bio: "And miles to go before I sleep",
	links: [
		{
			name: "GitHub",
			icon: "fa7-brands:github",
			url: "https://github.com/inuEbisu",
			showName: false,
		},
		{
			name: "Email",
			icon: "fa7-solid:envelope",
			url: "mailto:inuebisu@outlook.com",
			showName: false,
		},
		{
			name: "Telegram",
			icon: "fa7-brands:telegram",
			url: "https://t.me/inuEbisu",
			showName: false,
		},
		{
			name: "Notebook",
			icon: "mdi:notebook",
			url: "https://note.inuebisu.cn",
			showName: false,
		},
		{
			name: "RSS",
			icon: "fa7-solid:rss",
			url: "/rss/",
			showName: false,
		},
	],
};
