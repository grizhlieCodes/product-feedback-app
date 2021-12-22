<script>
	import '../app.css';
	import Body from '$lib/base/Body.svelte';
	import Size from '$lib/size/SizeObserver.svelte'
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
