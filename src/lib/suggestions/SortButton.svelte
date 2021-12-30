<script>
	//Svelte
	import { fly, fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//Data
	export let option = '', name = '';
	import uiStore from '$lib/stores/ui-state.js';

	//Variables
	$: buttonActive = $uiStore.sort.toLowerCase() === option.toLowerCase();
	$: buttonCol = buttonActive ? 'text-violet' : 'text-blue-600';

	//Functions
	
	const updateSortOption = (sortOption) => uiStore.updateSort(sortOption);
</script>

<button
	on:click={() => {
		updateSortOption(option);
		dispatch('closeSortMenu');
		dispatch('updateSortOption', option)
	}}
	class=" flex justify-between items-center h-[4.8rem] w-full text-[1.6rem] py-[1.2rem] px-[2.4rem]
	text-left transition-colors border-0 border-b border-b-blue-800 border-solid border-opacity-[0.15]
	last:border-b-0 hover:text-violet {buttonCol}">

	<span>{name}</span>

	{#if buttonActive}
		<div in:fly={{ y: -20, duration: 200 }} out:fade={{ duration: 150 }}>
			<svg xmlns="http://www.w3.org/2000/svg" width="13" height="11">
				<path fill="none" stroke="#AD1FEA" stroke-width="2" d="M1 5.233L4.522 9 12 1" />
			</svg>
		</div>
	{/if}

</button>
