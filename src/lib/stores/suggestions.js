import { writable, get } from 'svelte/store';
import data from '$lib/data/data.json'
import uiStore from '$lib/stores/ui-state.js'

const suggestions = writable({ list: [...data.productRequests], count: data.productRequests.length })

const customSuggestions = {
    subscribe: suggestions.subscribe,

    filterSuggestions: (category) => {
        if (category.toLowerCase() === 'all') {
            suggestions.update(suggestionz => {
                suggestionz.list = [...data.productRequests]
                suggestionz.count = data.productRequests.length
                console.log(suggestionz)
                return suggestionz
            })
        } else if (category !== 'all') {
            let temporaryList = customSuggestions.getFilteredSuggestions(category)
            let temporaryCount = temporaryList.length
            suggestions.update(suggestionz => {
                suggestionz.list = [...temporaryList]
                suggestionz.count = temporaryCount
                console.log(suggestionz)
                return suggestionz
            })
        }
    },

    getFilteredSuggestions: (category) => {
        let temporaryList = [...data.productRequests]

        temporaryList = temporaryList.filter(listItem => {
            let suggestionCategory = listItem.category.toLowerCase()
            let sortValue = category.toLowerCase()
            let keepValue = suggestionCategory === sortValue
            return keepValue
        })

        return temporaryList
    },

    // Im braindead but my current thoughts are that I should rethink where all
    // the store logic is contained. At the moment i have multiple elements
    // controlling the store's values. 

    //Where shuld the below function be fired from for example? SuggestionsList?
    //SortMenu? I'm not sure.
    sortSuggestions: (sortValue) => {
        if(sortValue === 'most-upvotes'){
            suggestions.update(suggestionz => {
                suggestionz.list.sort(function(a,b) {
                    return a.upvotes - b.upvotes
                })                
                return suggestionz
            })
        }
    },

    consoleData: () => {
        console.log(get(suggestions))
    }


}

export default customSuggestions