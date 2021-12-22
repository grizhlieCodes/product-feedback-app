<script>
    import {fly} from 'svelte/transition'
    import FeedbackCategories from '$lib/homepage/feedback-categories/FeedbackCategories.svelte'
    import RoadmapSummary from '$lib/homepage/roadmap/RoadmapSummary.svelte';
</script>

<div transition:fly={{x: 150, duration: 400}}
	id="modal"
	class="absolute min-w-[27.1rem] w-9/12 h-[calc(100vh-7.3rem)] top-[7.3rem] right-0 p-[2.4rem]
	bg-blue-50 gap-[2.4rem] flex flex-col z-[var(--z-mobile-menu)]">
	<FeedbackCategories/>
    <RoadmapSummary />
</div>
