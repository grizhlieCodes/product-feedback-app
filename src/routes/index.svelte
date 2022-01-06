<script>
	// Components
	import AddSuggestion from '$lib/suggestions/add-suggestion/AddSuggestion.svelte';
	import MainPageItems from '$lib/ui/MainPageItems.svelte';

	// State
	let currentState = 'home';

	// Variables

	//Functions
	const setState = (e) => {
		currentState = e.detail
	}
</script>

{#if currentState === 'home'}
	<MainPageItems on:addSuggestion={() => (currentState = 'addSuggestion')} />
{:else if currentState === 'addSuggestion'}
	<AddSuggestion on:home={setState}/>
{/if}
