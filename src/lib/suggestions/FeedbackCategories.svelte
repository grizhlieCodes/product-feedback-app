<script>
	export let gridColStart = '', gridRowStart = '', maxWidth = ''
	import Block from '$lib/ui/Block.svelte';
	import FeedbackBadge from '$lib/suggestions/FeedbackBadge.svelte';
	let badges = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
</script>

<Block {gridColStart} {gridRowStart} {maxWidth}>
	<div id="badges" class="w-full h-max flex flex-wrap gap-x-[1.4rem] gap-y-[0.8rem]">
		{#each badges as badge}
			<FeedbackBadge badgeText={badge} />
		{/each}
	</div>
</Block>