import { useState } from "react"

export const useFilter = (dataType) => {
    const [filterValue, setFilterValue] = useState(null);

    const filterRanking = (item, intendedRanking) => {
        return item.ranking === intendedRanking;
    }

    const filterDate = (item, intendedDayDiff) => {
        const today = new Date();
        const order_date = new Date(item.date);
        const milisecondDiff = today - order_date;
        const dayDiff = Math.floor(milisecondDiff / (1000 * 60 * 60 * 24));
        return dayDiff <= intendedDayDiff;
    }

    const filterCondition = item => {
        if (!filterValue) return true;
        if (dataType == 'customer') return filterRanking(item, filterValue);
        if (dataType == 'order' || dataType == 'import') return filterDate(item, filterValue);
        return true;
    }
    return [setFilterValue, filterCondition];
}