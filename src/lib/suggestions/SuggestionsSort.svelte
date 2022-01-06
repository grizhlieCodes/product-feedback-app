<script>
	//Svelte
	import { slide, fly } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//Components
	import DropdownMenu from '$lib/ui/DropdownMenu.svelte';
	import size from '$lib/size/sizeStore.js'

	//Data
	import suggestions from '$lib/stores/suggestions.js';
	import uiStore from '$lib/stores/ui-state.js'
	let showSortMenu = false;

	const dropdownMenuOptions = [
		{ name: 'Most Upvotes', option: 'most-upvotes' },
		{ name: 'Least Upvotes', option: 'least-upvotes' },
		{ name: 'Most Comments', option: 'most-comments' },
		{ name: 'Least Comments', option: 'least-comments' }
	];

	//Functions
	const toggleDropdownMenu = () => (showSortMenu = !showSortMenu);

	const updateSortOption = (e) => {
		let option = e.detail
		uiStore.updateSort(option)
		uiStore.updateSort(option)
		suggestions.sortSuggestions(option)
		activeButton = option
	}

	const dispatchAddSuggestion = () => {
		dispatch('addSuggestion')
	};

	//Variables
	$: sortOption = dropdownMenuOptions.find(o => o.option === $uiStore.sort).name
	let activeButton = $uiStore.sort;
</script>

<div class="bg-blue-800 py-[0.8rem] tablet:py-[1.4rem] px-[2.4rem] w-full h-max
flex justify-between tablet:justify-start tablet:gap-[3.8rem] tablet:rounded-[1rem]">

	<!-- Suggestions counter -->
	{#if $size !== 'mobile'}
		 <div in:slide class="flex items-center gap-[1.6rem]">
			 <img src="./images/suggestions/icon-suggestions.svg" alt="" />
			 <div class="font-semibold text-white text-[1.8rem]
			 tracking-[-0.025rem]">
			 {#key $suggestions.count}
				 <span class="inline-block" in:fly={{y: -10}}>{$suggestions.count}</span>
			 {/key}
				 <span>Suggestions</span>
			 </div>
		 </div>
	{/if}

	<!-- Sort Menu Toggle -->
	<div class="relative flex items-center">

		<button class="text-white text-[1.4rem] flex items-center gap-[0.4rem]" on:click={toggleDropdownMenu}>
			<span>Sort By</span>
			<span>:</span>
			{#key sortOption}
				<span in:fly={{y: -5}}>
					{sortOption}
				</span>
			{/key}
			<div class="">
				<img src="./images/shared/arrow-down.svg" alt=""
				class="ml-[0.4rem] transition-transform {showSortMenu ?
				'rotate-180': ''}">
			</div>
		</button>
		{#if showSortMenu}
			<DropdownMenu {activeButton} {dropdownMenuOptions} {showSortMenu}
			on:closeDropdownMenu={toggleDropdownMenu} on:updateDropdownOption={updateSortOption} />
		{/if}
	</div>

	<!-- Add Feedback Btn -->
	<button class="rounded-[1rem] text-white font-bold bg-violet 
	px-[1.7rem] py-[1.05rem] text-[1.3rem] ml-auto" 
	on:click={dispatchAddSuggestion}>
		+ Add Feedback
	</button>
</div>
