import { useMemo, useState } from "react";

export default {
    title: 'useMemo'
}

export const Example = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(3)

    let resultA = 1;
    let resultB = 1;


    resultA = useMemo(() => {
        let resultA = 1;
        for (let i = 1; i <= a; i++) {
            resultA = resultA * i
        }
        return resultA
    }, [a])

    resultB = useMemo(() => {
        let resultB = 1;
        for (let i = 1; i <= b; i++) {
            resultB = resultB * i
        }
        return resultB
    }, [b])


    return (
        <>
            <input value={a} onChange={(e) => { setA(+e.currentTarget.value) }} />
            <input value={b} onChange={(e) => { setB(+e.currentTarget.value) }} />
            <hr></hr>
            <div> Result for a: {resultA}</div>
            <div> Result for a: {resultB}</div>
        </>
    )
}