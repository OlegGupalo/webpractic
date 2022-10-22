import { Box } from "@mui/material"
import { useState } from "react"
import ExcelImport from "./Excelmport"
import styles from './Timetable.module.scss'

export const Timetable = () => {

    const [state, setState] = useState([])
    return (
        <>
            {/* <ExcelImport uploadHandler={setState} /> */}
            <Box className={styles.day}>
                Среда
            </Box>
        </>
    )
}