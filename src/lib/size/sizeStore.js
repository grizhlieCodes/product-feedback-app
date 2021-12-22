import {writable, get} from 'svelte/store'

const sizeStore = writable('')

const customSizeStore = {
    subscribe: sizeStore.subscribe,

    updateStore: (size) => {
        sizeStore.set(size)
    },
}

export default customSizeStore