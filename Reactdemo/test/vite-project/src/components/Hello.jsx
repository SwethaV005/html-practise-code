function Hello(){
    let text="swetha"  
    function displayname(){
        return 'React'
    }  
    return (
        <h1>Hello from hello component  {10+20}  {text} {displayname()}</h1>
    )
}

export default Hello