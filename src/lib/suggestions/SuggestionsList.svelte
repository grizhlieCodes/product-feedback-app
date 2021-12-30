<script>
	//Svelte
	import { flip } from 'svelte/animate';
	import { onMount } from 'svelte';

	//Components
	import Block from '$lib/ui/Block.svelte';

	//Data
	import uiStore from '$lib/stores/ui-state.js';
	import suggestions from '$lib/stores/suggestions.js';

	//Functions
	onMount(() => {
		suggestions.sortSuggestions($uiStore.sort);
	});

	const handleCategoryClick = (category) => {
		uiStore.updateCategory(category);
		suggestions.filterSuggestions(category);
		suggestions.sortSuggestions($uiStore.sort);
	};
</script>

<div
	class="flex flex-col gap-[1.6rem] desktop:gap-[2rem] w-[87.2%] tablet:w-full m-auto tablet:m-0">
	{#each $suggestions.list as { title, description, upvotes, id, category, comments } (id)}
		<div animate:flip={{ duration: 350 }} class="w-full">

			<Block>
				<div
					class="w-full grid grid-cols-1 tablet:grid-cols-[max-content_max-content_1fr] items-start
					gap-[1.6rem] tablet:gap-[4rem] tablet:py-[0.4rem] tablet:px-[0.8rem]">

					<!-- Upvotes -->
					<button
						class="w-max flex tablet:flex-col gap-[1rem] tablet:gap-[0.8rem] bg-blue-50 py-[0.7rem]
						px-[1.4rem] tablet:pt-[1.4rem] tablet:px-[0.9rem] tablet:pb-[0.8rem] desktop:px-[1.1rem]
						rounded-[1rem] items-center transition-all hover:cursor-pointer hover:bg-blue-200
						active:bg-blue-500 group row-start-2 tablet:row-start-1">
						<svg
							class="rotate-180 stroke-blue-500 group-active:stroke-white transition-colors
							select-none"
							width="9"
							height="7"
							viewBox="0 0 9 7"
							fill="none"
							xmlns="http://www.w3.org/2000/svg">
							<path d="M1 1L5 5L9 1" stroke-width="2" />
						</svg>
						<span
							class="text-[1.3rem] font-semibold tracking-[-0.018rem] text-blue-700
							group-active:text-white transition-colors select-none">
							{upvotes}
						</span>
					</button>

					<!-- TextContainer - Heading, Description, Category -->
					<div class="flex flex-col gap-[0.8rem] tablet:gap-[0.4rem]">

						<h3
							class="text-[1.3rem] font-semibold mb-[0.1rem] tablet:mb-0 tracking-[-0.018rem]
							text-blue-700 tablet:text-[1.8rem] tablet:tracking-[-0.025rem] ">
							{title}
						</h3>

						<p class="text-[1.3rem] text-blue-600 tablet:text-[1.6rem]">
							{description}
						</p>

						<button
							class="py-[0.6rem] px-[1.6rem] bg-blue-100 w-min rounded-[1rem] text-blue-500
							first-letter:uppercase font-semibold text-[1.3rem] tablet:mt-[0.8rem]
							transition-colors hover:text-white hover:bg-blue-500"
							on:click={() => handleCategoryClick(category)}>
							{category}
						</button>
						
					</div>
					<!-- Comments Count -->
					<div
						class="flex gap-2 tablet:gap-3 items-center self-center justify-self-end row-start-2
						tablet:row-start-1 tablet:col-start-3">
						<img class="w-[1.8rem] h-[1.6rem]" src="./images/shared/icon-comments.svg" alt="" />
						<span class="text-[1.3rem] tablet:text-[1.6rem] text-blue-800 font-semibold ">
							{suggestions.getCommentsLength(comments)}
						</span>
					</div>

				</div>
			</Block>
		</div>
	{/each}
</div>
