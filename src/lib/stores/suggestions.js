import { writable, get } from 'svelte/store';
import data from '$lib/data/data.json'

const suggestions = writable({ list: [...data.productRequests], count: data.productRequests.length })

const customSuggestions = {
    subscribe: suggestions.subscribe,

    filterSuggestions: (category) => {
        // console.trace('Running FilterSuggestions: ' + category)
        if (category.toLowerCase() === 'all') {
            suggestions.update(suggestionz => {
                suggestionz.list = [...data.productRequests]
                suggestionz.count = data.productRequests.length
                // console.log(suggestionz)
                return suggestionz
            })
        } else if (category !== 'all') {
            let temporaryList = customSuggestions.getFilteredSuggestions(category)
            let temporaryCount = temporaryList.length
            suggestions.update(suggestionz => {
                suggestionz.list = [...temporaryList]
                suggestionz.count = temporaryCount
                // console.log(suggestionz)
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

    sortSuggestions: (sortValue) => {
        if(sortValue === 'most-upvotes'){
            suggestions.update(suggestionz => {
                suggestionz.list.sort(function(a,b) {
                    return b.upvotes - a.upvotes
                })               
                return suggestionz
            })
        }
        if(sortValue === 'least-upvotes'){
            suggestions.update(suggestionz => {
                suggestionz.list.sort(function(a,b) {
                    return a.upvotes - b.upvotes
                })               
                return suggestionz
            })
        }
        if(sortValue === 'most-comments'){
            suggestions.update(suggestionz => {
                suggestionz.list.sort(function(a,b) {
                    let bCommentsCount = customSuggestions.getCommentsLength(b.comments)
                    let aCommentsCount = customSuggestions.getCommentsLength(a.comments)
                    return bCommentsCount - aCommentsCount
                })               
                return suggestionz
            })
        }
        if(sortValue === 'least-comments'){
            suggestions.update(suggestionz => {
                suggestionz.list.sort(function(a,b) {
                    let aCommentsCount = customSuggestions.getCommentsLength(a.comments)
                    let bCommentsCount = customSuggestions.getCommentsLength(b.comments)
                    return aCommentsCount - bCommentsCount
                })               
                return suggestionz
            })
        }
    },

    getCommentsLength: (comments) => {
        let count = 0
        comments.forEach(comment => {
            if(comment.replies && comment.replies.length){
                let replyCount = customSuggestions.getCommentsLength(comment.replies)
                count = count + replyCount
            }
            count++
        })
        return count
    },

    consoleData: () => {
        console.log(get(suggestions))
    }


}

export default customSuggestions