<script>

	//svelte
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//Components
	import AddTitle from "$lib/suggestions/add-suggestion/AddTitle.svelte";
	import Category from '$lib/suggestions/add-suggestion/Category.svelte'

	let titleData;

	$: console.log(titleData)
</script>

<div id="wrapper" class="w-full max-w-[54rem] py-[3.4rem] px-[2.4rem] flex
flex-col gap-[5.5rem] tablet:col-start-1 tablet:col-end-4 justify-self-center">
	<button class="flex gap-6 items-center w-max" on:click={()=>
	dispatch('home', 'home')}>

		<svg
			class="stroke-blue-500 rotate-90"
			width="9"
			height="7"
			viewBox="0 0 9 7"
			fill="none"
			xmlns="http://www.w3.org/2000/svg">
			<path d="M1 1L5 5L9 1" stroke-width="2" />
		</svg>

		<span class="text-blue-600 font-bold text-[1.3rem]">Go Back</span>
	</button>

	<div class="bg-white w-full h-max rounded-2xl flex flex-col relative
	py-[4.4rem] px-[2.4rem] gap-[2.4rem]">
		<div
			id="badge"
			class=" absolute w-16 h-16 rounded-full grid place-items-center top-0 -translate-y-1/2">
			<img src="./images/shared/icon-plus.svg" alt="" class=" w-5 h-5" />
		</div>

		<h2 class=" text-3xl text-blue-700 font-bold tracking-[-0.025rem] ">Create New Feedback</h2>

		<!-- Input -->
		<AddTitle bind:titleData={titleData}/>

		<!-- custom select -->
		<Category />

		<!-- detail -->
		

	</div>
</div>

<style>
	#badge {
		background: radial-gradient(
			128.88% 128.88% at 103.9% -10.39%,
			#e84d70 0%,
			#a337f6 53.09%,
			#28a7ed 100%
		);
	}
</style>
