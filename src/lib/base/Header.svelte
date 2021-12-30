<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();

    let mobileMenuClicked = false;

    const toggleMobileMenuClicked = () => {
        mobileMenuClicked = !mobileMenuClicked
        dispatch('mobileMenuClicked', mobileMenuClicked)
    };
</script>

<header class="w-full flex justify-between items-center px-[2.4rem] py-[1.6rem]
tablet:rounded-[1rem] tablet:items-end tablet:py-[2.4rem] relative
overflow-hidden tablet:min-h-[17.8rem] desktop:max-w-[25.5rem] desktop:min-h-[13.7rem]">

    <!-- Logo -->
    <div class="w-max flex flex-col flex-nowrap">
        <span class=" font-semibold text-[1.5rem] leading-9 text-white
        tracking-[-0.01875rem] tablet:text-[2rem] tablet:leading-[2.9rem] tablet:tracking-[-0.025rem]">Frontend Mentor</span>
        <span class=" font-medium text-[1.3rem] leading-[1.9rem] text-white
        opacity-75 tablet:text-[1.5rem] tablet:leading-[2.2rem]">Feedback Board</span>
    </div>

    <!-- Mobile menu button -->
    <button on:click={toggleMobileMenuClicked} class="w-[2rem] flex flex-col
    gap-[0.4rem] tablet:hidden">
        <span class="block w-full h-[0.3rem] bg-white transition-all origin-[0px_1px]
        {mobileMenuClicked ? 'rotate-45' : ''}"></span>
        <span class="block w-full h-[0.3rem] bg-white transition-all  origin-[0px_1px]
        {mobileMenuClicked ? 'scale-0 opacity-0' : ''}"></span>
        <span class="block w-full h-[0.3rem] bg-white transition-all  origin-[0px_1px]
        {mobileMenuClicked ? '-rotate-45' : ''}"></span>
    </button>

    <!-- Background color overlays -->
    <span class="hidden tablet:absolute tablet:block w-[16.8rem] h-[25rem]
    bg-blue-400 rounded-[100%] left-[-8.5rem] top-[-17.1rem] opacity-75
    mix-blend-normal blur-[2.2rem]"></span>

    <span class="hidden tablet:absolute tablet:block w-[16.8rem] h-[25rem]
    bg-orange rounded-[100%] right-[-8.5rem] bottom-[-17.1rem] opacity-75
    mix-blend-normal blur-[2.2rem]"></span>
</header>

<style>
	header {
		background: radial-gradient(
			128.88% 128.88% at 103.9% -10.39%,
			#e84d70 0%,
			#a337f6 53.09%,
			#28a7ed 100%
		);
	}
</style>
