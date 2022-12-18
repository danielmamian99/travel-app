import { useState, useEffect } from "react";
import { Itinerary } from "../interfaces";

export const useFetch = (): Itinerary[] | {} => {
  const [itinerary, setItinerary] = useState({});

  useEffect(() => {
    fetch("/src/api/data.json")
      .then((response) => response.json())
      .then((data) => setItinerary(data));
  }, []);

  return itinerary;
};
