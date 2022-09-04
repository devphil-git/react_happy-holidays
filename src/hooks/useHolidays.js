import { useState, useEffect } from "react";
import { URI_API } from "../const/const";

export const useHolidays = () => {
   const [holidays, setHolidays] = useState({})

   // Хук useEffect говорит сделать что-то после рендера
   // React запомнит переданную функцию и вызовет её после всех изменений в DOM
   useEffect(() => {
      fetch(URI_API)
         .then(response => {
            if (response.status !== 200) {
               throw new Error(response.status)
            }
            return response.json()
         })
         .then(data => setHolidays(data))
         .catch(err => console.error(err));
   }, [setHolidays]);

   return [holidays];
}