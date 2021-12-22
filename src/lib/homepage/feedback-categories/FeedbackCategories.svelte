<script>
	export let gridColStart = '', gridRowStart = '', maxWidth = ''
	import Block from '$lib/ui/Block.svelte';
	import Badge from '$lib/homepage/feedback-categories/Badge.svelte';
	let badges = ['All', 'UI', 'UX', 'Enhancement', 'Bug', 'Feature'];
	let chosenBadge = 'All';
	const activateBadge = (e) => {
		let clickedBadge = e.detail;
		chosenBadge = clickedBadge;
	};
</script>

<Block {gridColStart} {gridRowStart} {maxWidth}>
	<div id="badges" class="w-full h-max flex flex-wrap gap-x-[1.4rem] gap-y-[0.8rem]">
		{#each badges as badge}
			<Badge badgeText={badge} {chosenBadge} on:activateBadge={activateBadge} />
		{/each}
	</div>
</Block>
