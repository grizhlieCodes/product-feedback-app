<script>
	import Header from '$lib/base/Header.svelte';
	let mobileMenuClicked = false;
	import MobileMenu from '$lib/homepage/MobileMenu.svelte';
	import MobileMenuOverlay from '$lib/homepage/MobileMenuOverlay.svelte';
	import sizeStore from '$lib/size/sizeStore.js';
	import FeedbackCategories from '$lib/homepage/feedback-categories/FeedbackCategories.svelte';
	import RoadmapSummary from '$lib/homepage/roadmap/RoadmapSummary.svelte';
</script>

<Header on:mobileMenuClicked={() => (mobileMenuClicked = !mobileMenuClicked)} />

{#if mobileMenuClicked && $sizeStore === 'mobile'}
	<MobileMenu />
	<MobileMenuOverlay />
{:else if $sizeStore !== 'mobile'}
	<FeedbackCategories gridColStart="desktop:col-start-1" maxWidth="desktop:max-w-[25.5rem]" />
	<RoadmapSummary gridColStart="desktop:col-start-1" maxWidth="desktop:max-w-[25.5rem]" />
{/if}
