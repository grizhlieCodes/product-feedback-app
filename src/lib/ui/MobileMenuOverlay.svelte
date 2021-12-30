<script>
    import {fade} from 'svelte/transition'
</script>

<div transition:fade={{duration: 350}} class="absolute bg-black z-[var(--z-mobile-overlay)] h-[calc(100vh-7.3rem)]
top-[7.3rem] left-0 w-screen opacity-50" />
