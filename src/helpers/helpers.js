const getUniqueObjects = (arr) => {
    const grouped = Object.values(arr.reduce((acc, n) => {
        (acc[n.name] = acc[n.name] || { ...n, qty: 0 }).qty++;
        return acc;
    }, {}));
    return grouped;
};


const sortByName = (a, b) => {
    const nameA = a.name.toLowerCase(), nameB = b.name.toLowerCase();
    if (nameA < nameB){
        return -1;
    }
    if (nameA > nameB){
        return 1;
    }
    return 0;
};


const sortByAge = (a, b) => {
    const ageA = a.age.toLowerCase(), ageB = b.age.toLowerCase();
    if (ageA < ageB){
        return -1;
    }
    if (ageA > ageB){
        return 1;
    }
    return 0;
};



export { getUniqueObjects, sortByName, sortByAge };