import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

export const friendsPageConfig: FriendsPageConfig = {
	title: "伙伴",
	description: "永远的小伙伴！",
	showCustomContent: true,
	showComment: true,
	randomizeSort: false,
};

export const friendsConfig: FriendLink[] = [
	{
		title: "roife",
		imgurl: "https://avatars.githubusercontent.com/u/17700217?s=240&v=4",
		desc: "roife 的魔法科见闻",
		siteurl: "https://roife.github.io/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "direwolf",
		imgurl: "https://unavatar.io/x/0x00F8",
		desc: "是 .direwolf 的小站——",
		siteurl: "https://blog.drwf.ink/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "捌拾壹",
		imgurl: "https://blog.konpoku.top/avatar.jpg",
		desc: "而那未曾谋面的故事仍在继续",
		siteurl: "https://blog.konpoku.top/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "阿方",
		imgurl: "/friends/fang-avatar.webp",
		desc: "这是一只啥都不会的屑阿方",
		siteurl: "https://fang.blog.miri.site/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "iceBear67",
		imgurl: "https://blog.0w0.ing/avatar.png",
		desc: "iceBear 的博客",
		siteurl: "https://blog.0w0.ing/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "5dbwat4",
		imgurl: "https://avatars.githubusercontent.com/u/94700906?s=240&v=4",
		desc: "有没有人来听我的呓语",
		siteurl: "https://5dbwat4.top/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "咸鱼暄",
		imgurl: "https://avatars.githubusercontent.com/u/116711696?s=240&v=4",
		desc: "咸鱼暄的代码空间！",
		siteurl: "https://xuan-insr.github.io/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "timetraveler314",
		imgurl: "https://avatars.githubusercontent.com/u/36299842?s=240&v=4",
		desc: "从类型学高塔一跃而下",
		siteurl: "https://chernoff.bond/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "megakite",
		imgurl: "https://avatars.githubusercontent.com/u/20639794?s=240&v=4",
		desc: "Blog of @megakite.",
		siteurl: "https://megakite.icu/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "玻狸",
		imgurl: "https://avatars.githubusercontent.com/u/60887958?s=240&v=4",
		desc: "玻狸的笔记本，全是水",
		siteurl: "https://note.glassfoxowo.com/",
		tags: ["Blog"],
		enabled: true,
	},
	{
		title: "tdiant",
		imgurl: "https://nyan.best/images/avatar.png",
		desc: "Dreaming nothing.",
		siteurl: "https://nyan.best/",
		tags: ["Blog"],
		enabled: true,
	},
];

export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends;
};
