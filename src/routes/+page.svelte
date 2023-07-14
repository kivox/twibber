<script>
	import Box from "~/components/Box.svelte";
	import Post from "~/components/Post.svelte";

	export let data;
</script>

<Box title="Home" user={data.user} bind:dataForm={data.form}>
    {#each data.posts as post (post.id)}
        <Post post={post}/>
    {/each}
</Box>