import { useState, useEffect } from "react"
import { useDebounce } from "use-debounce"

const useEventFetchRequest = (queryObject) => {
    const [events, setEvents] = useState([])
    const [queryObjectDebounce] = useDebounce(queryObject, 1000)
    useEffect(() => {
        const querySearchParams = new URLSearchParams({
            apikey: 'O7mgiEMxAiHANcefL8qVSA6ab9XSrdZK',
            ...queryObjectDebounce
        })
        fetch(`https://app.ticketmaster.com/discovery/v2/events?${querySearchParams}`, {
        })
        .then(response => {
            return response.json()
        })
        .then(data => {
          setEvents(data?._embedded?.events ?? [])
        })
    }, [queryObjectDebounce?.keyword])
    return events
}

export default useEventFetchRequest