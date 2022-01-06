<script>
    import Input from '$lib/ui/Input.svelte';

    export let titleData = {    
        title: 'Feedback Title',
        description: 'Add a short, descriptive headline',
        name: 'feedback-title',
        valid: false,
        value: '',
        type: 'input'
    }

    const validateInput = (val) => {
        if(val.split('').length > 0){
            titleData.valid = true
        } else {
            titleData.valid = false
        }
    };

    const handleInput = () => {
        let value = input.value
        validateInput(value)
        titleData.value = value
    };

    export let input;


</script>

<Input {...titleData} on:input={handleInput} bind:input={input} />