import { useState } from "react";

function Urlap(){
    const [szoveg, setSzoveg] = useState('');
    return (
        <>
            <input type="text" value={szoveg} onChange = {event => setSzoveg(event.target.value)}/>
            <p>{szoveg}</p>
            <form>
                <fieldset>
                    <legend>Adatok</legend>
                    
                </fieldset>

            </form>
        </>
    )
}