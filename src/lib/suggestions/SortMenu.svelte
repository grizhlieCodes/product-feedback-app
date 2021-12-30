<script>
	//Svelte
	import { fly } from 'svelte/transition';
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();

	//Data
	export let sortMenuOptions;
    import suggestions from '$lib/stores/suggestions.js'

	//Components
	import SortButton from '$lib/suggestions/SortButton.svelte';

	//Variables
	let mounted = false;

	//Functions

	const dispatchCloseSortMenu = (e) => {
		if (e.key === 'Escape') {
			dispatch('closeSortMenu');
		}
	};

	onMount(() => {
		mounted = true;
		if (mounted) window.addEventListener('keydown', dispatchCloseSortMenu);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', dispatchCloseSortMenu);
	});

</script>

<div
	transition:fly={{ y: -50 }}
	class=" absolute min-w-[25.5rem] h-max rounded-[1rem] bg-white top-[calc(100%+4.2rem)] left-0
	shadow-xl">
	{#each sortMenuOptions as { name, option }}
		<SortButton {name} {option} />
	{/each}
</div>
