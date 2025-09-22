function Hello() {
    const sayHello = () => {
        window.alert("Szniasz");
    }
    const sayHelloVki = (nev) => {
        window.alert('Szius'+nev);
    }
    return ( 
        <>
            <button onClick={ sayHello}>Helló</button>
            <button onClick={ ()=>{sayHelloVki(' Fos Talicska')}}>Helló világ</button>
        </>
    )
}
export default Hello