import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

export const friendsPageConfig: FriendsPageConfig = {
	title: "伙伴",
	description: "",
	showCustomContent: true,
	showComment: true,
	randomizeSort: false,
};

export const friendsConfig: FriendLink[] = [
	{
		title: "direwolf",
		imgurl: "https://www.google.com/s2/favicons?domain=blog.drwf.ink&sz=128",
		desc: "伙伴",
		siteurl: "https://blog.drwf.ink/",
		tags: ["Blog"],
		weight: 11,
		enabled: true,
	},
	{
		title: "捌拾壹",
		imgurl: "https://www.google.com/s2/favicons?domain=blog.konpoku.top&sz=128",
		desc: "伙伴",
		siteurl: "https://blog.konpoku.top/",
		tags: ["Blog"],
		weight: 10,
		enabled: true,
	},
	{
		title: "roife",
		imgurl: "https://www.google.com/s2/favicons?domain=roife.github.io&sz=128",
		desc: "伙伴",
		siteurl: "https://roife.github.io/",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "阿方",
		imgurl: "https://www.google.com/s2/favicons?domain=fang.blog.miri.site&sz=128",
		desc: "伙伴",
		siteurl: "https://fang.blog.miri.site/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "iceBear67",
		imgurl: "https://www.google.com/s2/favicons?domain=blog.0w0.ing&sz=128",
		desc: "伙伴",
		siteurl: "https://blog.0w0.ing/",
		tags: ["Blog"],
		weight: 7,
		enabled: true,
	},
	{
		title: "5dbwat4",
		imgurl: "https://www.google.com/s2/favicons?domain=5dbwat4.top&sz=128",
		desc: "伙伴",
		siteurl: "https://5dbwat4.top/",
		tags: ["Blog"],
		weight: 6,
		enabled: true,
	},
	{
		title: "咸鱼暄",
		imgurl: "https://www.google.com/s2/favicons?domain=xuan-insr.github.io&sz=128",
		desc: "伙伴",
		siteurl: "https://xuan-insr.github.io/",
		tags: ["Blog"],
		weight: 5,
		enabled: true,
	},
	{
		title: "timetraveler314",
		imgurl: "https://www.google.com/s2/favicons?domain=chernoff.bond&sz=128",
		desc: "伙伴",
		siteurl: "https://chernoff.bond/",
		tags: ["Blog"],
		weight: 4,
		enabled: true,
	},
	{
		title: "megakite",
		imgurl: "https://www.google.com/s2/favicons?domain=megakite.icu&sz=128",
		desc: "伙伴",
		siteurl: "https://megakite.icu/",
		tags: ["Blog"],
		weight: 3,
		enabled: true,
	},
	{
		title: "玻狸",
		imgurl: "https://www.google.com/s2/favicons?domain=note.glassfoxowo.com&sz=128",
		desc: "伙伴",
		siteurl: "https://note.glassfoxowo.com/",
		tags: ["Blog"],
		weight: 2,
		enabled: true,
	},
	{
		title: "tdiant",
		imgurl: "https://www.google.com/s2/favicons?domain=nyan.best&sz=128",
		desc: "伙伴",
		siteurl: "https://nyan.best/",
		tags: ["Blog"],
		weight: 1,
		enabled: true,
	},
];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
