<script>
    import uiStore from '$lib/stores/ui-state.js'
    import suggestions from '$lib/stores/suggestions.js'

    export let badgeText;
    const clickBadge = () => {
        uiStore.updateCategory(badgeText)
        suggestions.filterSuggestions(badgeText)
        // Below is inefficient I think. Actually.
        //I think Svelte doesn't rerender the HTML because of the below sort
        //suggestions function. I think it instead just changes the order of
        //things in HTML somehow???? idk.
        suggestions.sortSuggestions($uiStore.sort)
    };

    $: badgeIsActive = badgeText.toLowerCase() === $uiStore.category.toLowerCase()

</script>

<button on:click={clickBadge} class="rounded-[1rem] px-[1.6rem] py-[0.5rem] grid
place-items-center hover:cursor-pointer transition-colors
{badgeIsActive ? 'bg-blue-500 text-white' : 'text-blue-500 bg-blue-100 hover:bg-blue-200'}">
    <span class="text-[1.3rem] font-semibold">{badgeText}</span>
</button>