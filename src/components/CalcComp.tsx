import { useState, useRef, useEffect } from "react";
import "./CalcComp.css";



const CalcComp: React.FC = () => {
    const [inp1, setInp1] = useState<number | string>("");
    const [inp2, setInp2] = useState<number | string>("");
    const [calc, setCalc] = useState<number | string>("");
    const [op, setOp] = useState<string>("");
    const [history, setHistory] = useState<string[]>([]);

    const inp1Ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        console.log("szíja")
    }, [calc]);

    function calculate(e: React.ChangeEvent) {
        e.preventDefault();
        
        if( inp1 === ""){
            alert("kérem minden adatot adjon meg")
            inp1Ref.current?.focus();
            return;
        }

        if( inp2 === ""){
            alert("kérem minden adatot adjon meg")
            inp1Ref.current?.focus();
            return;
        }
        let result: number;

        switch(op){
            case "+": 
                result = Number(inp1) + Number(inp2)
                break;
            case "-": 
                result = Number(inp1) - Number(inp2)
                break;
            case "*": 
                result = Number(inp1) * Number(inp2)
                break;
            case "/": 
                if(inp2 === 0) {
                    alert("nem osztunk nullával")
                }
                result = Number(inp1) / Number(inp2)
                break
            default: alert("válaszs")
            return
        }
        setCalc(result);
        setInp1("");
        setInp2("");
        inp1Ref.current?.focus();
    }

    useEffect (() => {
        inp1Ref.current?.focus();
    }, [])
    return (
        <form onSubmit={calculate} className="bg-zinc-400 p-3 flex flex-col items-center gap-1">
            <article>
                <input type="number" name="n1" 
                    onChange={e => setInp1(e.target.value !== "" ? Number(e.target.value): "")}
                    value={inp1}
                    ref={inp1Ref}
                />
                <select className="text-center" name="op" id="" onChange={e => setOp(e.target.value)}>
                    <option value="+">+</option>
                    <option value="-">-</option>
                    <option value="*">*</option>
                    <option value="/">/</option>
                    <option value="" selected hidden
                    >Művelet</option> {/*hidden - nem választható!*/}
                </select>
                <input type="number" name="n2" id="" 
                    onChange={e => setInp2(e.target.value !== "" ? Number(e.target.value): "")}
                    value={inp2}
                />
                <input type="number" name="result" id=""
                    value={calc}
                />
            </article>
            <button className="bg-amber-300 pt-0.5 pb-0.5 pl-1 pr-1 rounded-lg" type="submit">Számol</button>
        </form>
    )
}

export default CalcComp;