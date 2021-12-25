<script>
    export let name, count
    let bgCol = name === 'Planned' ? 'bg-orange' : name === "In-Progress" ? 'bg-violet' : 'bg-blue-500'
</script>

<li class="flex items-center gap-[1.6rem]">
    <span class="w-[0.8rem] h-[0.8rem] block {bgCol} rounded-full"></span>
    <span class="text-[1.6rem] text-blue-600 font-normal">{name}</span>
    <span class="ml-auto text-[1.6rem] text-blue-600 font-bold">{count}</span>
</li>