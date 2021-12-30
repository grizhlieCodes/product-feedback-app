<script>
	//Svelte
	import {onMount} from 'svelte';
	import '../app.css';
	import Body from '$lib/base/Body.svelte';
	import Size from '$lib/size/SizeObserver.svelte'
	import {initialiseFirebase} from '$lib/firebase/firebase.js'
	onMount(() => initialiseFirebase())
	import uiStore from '$lib/stores/ui-state.js'
</script>

<Size/>

<Body>
	<slot />
</Body>

<style>
	:global(*) {
		font-family: 'Jost', sans-serif;
	}
</style>
