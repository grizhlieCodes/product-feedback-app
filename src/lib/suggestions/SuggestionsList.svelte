<script>
	//Svelte
	import { flip } from 'svelte/animate';

	//Data
	import uiStore from '$lib/stores/ui-state.js';
	import suggestions from '$lib/stores/suggestions.js'

	//Functions
	$: suggestions.filterSuggestions($uiStore.category)
</script>

<div class="">
	{#each $suggestions.list as { title, description, upvotes, id, category, comments } (id)}
		<div animate:flip={{ duration: 350 }}>
			<p>{category}</p>
		</div>
	{/each}
</div>

