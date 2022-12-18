import { useState, useEffect } from 'react';
import { data } from '../api/data';
import { Itinerary } from '../interfaces';

export const useFetch = ():Itinerary[] | {} => {
    const [itinerary, setItinerary] = useState({})
    setItinerary(data) //Because in production we cannot consume local api
    // useEffect(() => {
    //     fetch("/src/api/data.json")
    //     .then((response) => response.json())
    //     .then((data) => setItinerary(data))
    //     .catch(() => setItinerary(data)) 
    // }, [])
    
    return itinerary;
}