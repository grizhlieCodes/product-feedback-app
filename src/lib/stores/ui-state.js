import {writable, get} from 'svelte/store';

const uiStore = writable({category: 'all', sort: 'most-upvotes'})

const customUiStore = {
    subscribe: uiStore.subscribe,
    updateCategory: (category) => {
        uiStore.update(store => {
            store.category = category
            return store
        })
        // console.log(get(uiStore))
    },
    updateSort: (sort) => {
        uiStore.update(store => {
            store.sort = sort
            return store
        })
        // console.log(get(uiStore))
    },
}

export default customUiStore


