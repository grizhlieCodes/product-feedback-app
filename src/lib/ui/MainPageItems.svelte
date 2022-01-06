<script>
	import Header from '$lib/base/Header.svelte';
	let mobileMenuClicked = false;
	import MobileMenu from '$lib/ui/MobileMenu.svelte';
	import MobileMenuOverlay from '$lib/ui/MobileMenuOverlay.svelte';
	import sizeStore from '$lib/size/sizeStore.js';
	import FeedbackCategories from '$lib/suggestions/FeedbackCategories.svelte';
	import RoadmapSummary from '$lib/roadmap/RoadmapSummary.svelte';
	import SuggestionsSort from '$lib/suggestions/SuggestionsSort.svelte';
	import SuggestionsList from '$lib/suggestions/SuggestionsList.svelte';
</script>

<Header on:mobileMenuClicked={() => (mobileMenuClicked = !mobileMenuClicked)} />

{#if mobileMenuClicked && $sizeStore === 'mobile'}
	<MobileMenu />
	<MobileMenuOverlay />
{:else if $sizeStore !== 'mobile'}
	<FeedbackCategories gridColStart="desktop:col-start-1" maxWidth="desktop:max-w-[25.5rem]" />
	<RoadmapSummary gridColStart="desktop:col-start-1" maxWidth="desktop:max-w-[25.5rem]" />
{/if}


<div class="flex flex-col gap-[3.2rem] tablet:gap-[2.4rem] tablet:col-span-3
desktop:col-span-1 desktop:col-start-2 desktop:row-start-1 desktop:row-span-4">
	<SuggestionsSort on:addSuggestion />
	<SuggestionsList />
</div>
