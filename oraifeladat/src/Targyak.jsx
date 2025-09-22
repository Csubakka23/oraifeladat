function Targyak(){
    const tomb = ["Vegas", "Roobet", "Rainbet"]
    return (
        <>  
            <ul>
                { tomb.map( (elem) => <li> {elem} </li>) }
            </ul>
        </>
    )
}


export default Targyak