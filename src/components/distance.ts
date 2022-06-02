const Distance = (distance: number) => {
    if(distance < 1000) { return `${distance} m` }
    return `${(distance / 1000).toFixed(2)} km`
}

export default Distance;