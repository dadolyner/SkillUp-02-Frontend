const Distance = (distance: number) => {
    distance = distance * 1000;
    if(distance < 1000) { return `${distance.toFixed(0)} m` }
    return `${(distance / 1000).toFixed(2)} km`
}

export default Distance;