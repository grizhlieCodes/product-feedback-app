<script>
	//Svelte
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	//Components
	import DropdownMenu from '$lib/ui/DropdownMenu.svelte';
	import DropdownButton from '$lib/ui/DropdownButton.svelte';

	//Data
	let dropdownMenuOptions = [
		{ name: 'Feature', option: 'feature' },
		{ name: 'UI', option: 'ui' },
		{ name: 'UX', option: 'ux' },
		{ name: 'Enhancement', option: 'enhancement' },
		{ name: 'Bug', option: 'bug' }
	];
	let activeButton = dropdownMenuOptions[0].option;
    let chosenCategory = dropdownMenuOptions[0].name;
	let showDropdownMenu = false;

	//Functions
	const toggleDropdownMenu = () => {
		showDropdownMenu = !showDropdownMenu;
	};

    const handleSelection = (e) => {
        const {name, option} = e.detail
        chosenCategory = name
        activeButton = option
        console.log({name, option})
    }

</script>

<div class="relative flex items-center w-full ">

	<button
		class="w-full bg-blue-50 rounded-lg text-2xl text-blue-700 px-[2.4rem] cursor-pointer
		py-[1.3rem] transition-all text-left"
		on:click={() => (showDropdownMenu = !showDropdownMenu)}>
		{chosenCategory}
	</button>

	{#if showDropdownMenu}
		<DropdownMenu {dropdownMenuOptions} {activeButton} on:closeDropdownMenu={toggleDropdownMenu} on:updateDropdownOption={handleSelection} />
	{/if}

</div>
