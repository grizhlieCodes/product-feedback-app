<script>
	const calcRealSize = (winWidth) => {
		let result;
		if (winWidth >= 1110) {
			result = 'desktop';
		} else if (winWidth >= 768) {
			result = 'tablet';
		} else {
			result = 'mobile';
		}/*  */
		return result;
	};
	import sizeStore from '$lib/size/sizeStore.js';
	export let showDescription = false;
	let innerWidth;
	$: realWidth = innerWidth - 10;
	$: sizeStore.updateStore(calcRealSize(realWidth));
</script>

<svelte:window bind:innerWidth />

{#if showDescription}
	<p class="text-3xl text-gray-600 dark:text-gray-200">Size store is: {$sizeStore}</p>
{/if}
