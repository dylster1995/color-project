const str = (...classes) =>{
    return classes.reduce( (acc, c) => acc += (' ' + c), '' )
}

export { str };