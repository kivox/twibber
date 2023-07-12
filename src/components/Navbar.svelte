<script>
import NavLink from "~/components/NavLink.svelte";

</script>

<div class="col-span-2 p-4 ">
    <a class="flex flex-col justify-center items-center rounded-md bg-gray-900 transition hover:text-gray-300 sticky top-4" href="/static">
        <div class="py-4 rounded-full w-full text-center text-4xl">twibber</div>
        <hr class="w-full border-gray-800">
        <div class="flex flex-col gap-2 p-2 w-full">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/trending">Trending</NavLink>
            <NavLink href="/notification">Notifications</NavLink>
            <NavLink href="/messages">Messages</NavLink>
            <NavLink href="/me/saved">Saved</NavLink>
            <NavLink href="/me/saved">Saved</NavLink>
            <NavLink href="/me/saved">Profile</NavLink>
        </div>
        <hr class="w-full border-gray-800">
        <div class="p-2 w-full">
            <button class="w-full p-2 bg-blue-600 hover:bg-opacity-75 rounded text-xl">
                Tweeb
            </button>
        </div>
    </a>
</div>