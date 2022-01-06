<script>
	//svelte
	import { slide } from 'svelte/transition';

	//Data from parent
	export let title = 'title',
		description = 'description',
		name = 'name',
		valid = true,
		value = 'value',
		type = 'input';

	let touched = false;

	$: invalid = touched && !valid;

	const errorEmpty = "Can't be empty";

	$: outlines = invalid
		? 'outline outline-red outline-1 focus-within:outline-red'
		: 'focus-within:outline outline-none focus-within:outline-blue-500 focus-within:outline-1';

	export let input;
</script>

<!-- INPUT -->
<div class="w-full flex flex-col gap-[1.6rem]">

	<div class="flex flex-col w-full gap-[0.2rem]">
		<h3 class="text-[1.4rem] text-blue-700 font-bold tracking-[-0.019rem]">{title}</h3>
		<label for={name} class=" text-blue-600 text-[1.4rem] font-normal">{description}</label>
	</div>

	<div class="flex flex-col w-full gap-[0.4rem]">

		{#if type === 'input'}
			<!-- content here -->
			<input
				type="text"
				{name}
				{value}
				id={name}
				on:blur={() => (touched = true)}
				on:input
				bind:this={input}
				class=" w-full bg-blue-50 rounded-lg text-2xl text-blue-700 px-[2.4rem] cursor-pointer
				py-[1.3rem] transition-all {outlines}" />
		{:else}
			<textarea
			rows="4"
				{name}
				{value}
				id={name}
				on:blur={() => (touched = true)}
				on:input
				bind:this={input}
				class=" w-full bg-blue-50 rounded-lg text-2xl text-blue-700 px-[2.4rem] cursor-pointer
				py-[1.3rem] transition-all {outlines} resize-none" />
			<!-- else content here -->
		{/if}

		{#if invalid}
			<span transition:slide={{ duration: 500 }} class="text-[1.4rem] text-red font-normal">
				{errorEmpty}
			</span>
		{/if}

	</div>
</div>
