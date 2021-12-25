import {writable, get} from 'svelte/store';

const uiStore = writable({category: 'all', sort: 'most-upvotes'})

const customUiStore = {
    subscribe: uiStore.subscribe,
}

export default customUiStore