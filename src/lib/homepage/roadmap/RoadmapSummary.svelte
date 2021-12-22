<script>
    export let gridColStart = '', gridRowStart = '', maxWidth = ''
    import Block from '$lib/ui/Block.svelte';
    let roadmapItems = [{name: 'Planned', count: 2},{name: 'In-Progress', count: 3},{name: 'Live', count: 1},]
    import RoadmapListItem from '$lib/homepage/roadmap/RoadmapListItem.svelte';

</script>

<Block {gridColStart} {gridRowStart} {maxWidth}>
    <div class="w-full flex flex-col gap-[2.4rem]">
        <div class="flex justify-between items-center">
            <span class="text-[1.8rem] tracking-[-0.025rem] font-bold text-blue-700">Roadmap</span>
            <a href="/" class="font-semibold text-[1.3rem] text-blue-500 underline">View</a>
        </div>
        <ul class="flex flex-col">
            {#each roadmapItems as {name, count}, i}
                <RoadmapListItem {name} {count} />
            {/each}
        </ul>
    </div>
</Block>