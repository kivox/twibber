<script lang="ts">
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
		const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);

		let interval = seconds / 31536000;

		if (interval > 1) {
			return Math.floor(interval) + "y";
		}
		interval = seconds / 2592000;
		if (interval > 1) {
			return Math.floor(interval) + "mo";
		}
		interval = seconds / 86400;
		if (interval > 1) {
			return Math.floor(interval) + "d";
		}
		interval = seconds / 3600;
		if (interval > 1) {
			return Math.floor(interval) + "h";
		}
		interval = seconds / 60;
		if (interval > 1) {
			return Math.floor(interval) + "m";
		}
		return Math.floor(seconds) + "s";
	}

	$: console.log(post)
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
    <div class="p-4 text-sm font-normal">
        {post.content}
    </div>
</div>