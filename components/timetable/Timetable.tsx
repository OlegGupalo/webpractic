import { useState } from "react"
import ExcelImport from "./Excelmport"

export const Timetable = () => {

    const [state, setState] = useState([])
    return (
        <>
            <ExcelImport uploadHandler={setState} />
        </>
    )
}