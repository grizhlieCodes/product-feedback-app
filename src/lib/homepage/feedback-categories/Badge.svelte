<script>

    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    export let badgeText, chosenBadge;
    const activateBadge = () => {
        dispatch('activateBadge', badgeText)
    };
</script>

<button on:click={activateBadge} class="rounded-[1rem] bg-blue-100 px-[1.6rem] py-[0.5rem] grid
place-items-center hover:cursor-pointer transition-colors
{chosenBadge === badgeText ? 'bg-blue-500 text-white' : 'text-blue-500 hover:bg-blue-200'}" >
    <span class="text-[1.3rem] font-semibold">{badgeText}</span>
</button>