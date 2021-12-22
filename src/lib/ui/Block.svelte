<script>
    export let gridColStart, gridRowStart, maxWidth

</script>

<div class="bg-white p-[2.4rem] grid place-items-center w-full relative
rounded-[1rem] {gridColStart} {gridRowStart} {maxWidth}">
    <slot/>
</div>