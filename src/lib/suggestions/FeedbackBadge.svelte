<script>
    import uiStore from '$lib/stores/ui-state.js'

    export let badgeText;
    const clickBadge = () => {
        uiStore.updateCategory(badgeText)
    };

    $: badgeIsActive = badgeText.toLowerCase() === $uiStore.category.toLowerCase()

</script>

<button on:click={clickBadge} class="rounded-[1rem] px-[1.6rem] py-[0.5rem] grid
place-items-center hover:cursor-pointer transition-colors
{badgeIsActive ? 'bg-blue-500 text-white' : 'text-blue-500 bg-blue-100 hover:bg-blue-200'}">
    <span class="text-[1.3rem] font-semibold">{badgeText}</span>
</button>