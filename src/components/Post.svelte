<script lang="ts">
	import sanitizeHtml from 'sanitize-html';
	import {marked} from 'marked';

	export let post: {
		id: string,

		type: string,
		content: string,
		quote_id: string,
		quote: string,

		user: {
			id: string,

			name: string,
			username: string,
			email: string,
			image: string,

			admin: string,
		},

		created_at: Date,
		updated_at: Date,
	}

	function timeSince(date: Date): string {
		const currentTime = new Date().getTime();
		let elapsedSeconds = Math.floor((currentTime - date.getTime()) / 1000);

		const intervals = [
			{seconds: 31536000, name: "y"},
			{seconds: 2592000, name: "mo"},
			{seconds: 86400, name: "d"},
			{seconds: 3600, name: "h"},
			{seconds: 60, name: "m"},
			{seconds: 1, name: "s"},
		]

        for (const interval of intervals) {
            if (elapsedSeconds >= interval.seconds) {
                return Math.floor(elapsedSeconds / interval.seconds) + interval.name;
            }
        }
	}
</script>

<div class="flex flex-col w-full bg-gray-950 rounded">
    <div class="flex flex-row items-center gap-4 h-16 p-3">
        <img class="w-10 h-10 rounded-full"
             src={post.user.image}
             alt={post.user.name}>
        <div class="flex flex-col">
            <div class="text-white">{post.user.name}</div>
            <div class="text-gray-400 text-xs">@{post.user.username}</div>
        </div>
        <div class="flex-grow"></div>
        <div class="text-gray-400 text-xs h-full">{timeSince(post.created_at)}</div>
    </div>
    <hr class="border-gray-800">
    <div class="p-4 text-sm font-normal text-font">
        {@html marked(sanitizeHtml(post.content).replace(/\n/g, '<br/>'), {
			headerIds: false,
            mangle: false,
        })}
    </div>
</div>