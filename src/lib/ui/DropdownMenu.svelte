<script>
	//Svelte
	import { fly } from 'svelte/transition';
	import { createEventDispatcher, onMount, onDestroy } from 'svelte';
	const dispatch = createEventDispatcher();

	//Data
	export let dropdownMenuOptions, activeButton;

	//Components
	import DropdownButton from '$lib/ui/DropdownButton.svelte';

	//Variables
	let mounted = false;

	//Functions
	const dispatchCloseDropdownMenu = (e) => {
		if (e.key === 'Escape') {
			dispatch('closeDropdownMenu');
		}
	};



	onMount(() => {
		mounted = true;
		if (mounted) window.addEventListener('keydown', dispatchCloseDropdownMenu);
	});

	onDestroy(() => {
		window.removeEventListener('keydown', dispatchCloseDropdownMenu);
	});
</script>

<div
	transition:fly={{ y: -50 }}
	class=" z-[var(--sort-menu)] absolute w-full min-w-[25.5rem] h-max rounded-[1rem] bg-white
	top-[calc(100%+4.2rem)] left-0 shadow-xl">

	{#each dropdownMenuOptions as { name, option }}
		<DropdownButton {activeButton} {name} {option} on:closeDropdownMenu on:updateDropdownOption />
	{/each}

</div>

