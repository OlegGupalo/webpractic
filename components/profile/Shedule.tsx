import { ConstructionOutlined } from '@mui/icons-material'
import { FullTable } from 'components/timetable/FullTable'
import React from 'react'
import styles from './UserProfile.module.scss'

interface SheduleProps {
    shedule: any[]
}

export const Shedule: React.FC<SheduleProps> = ({shedule}) => {
    const week = {
        monday: 1,
        tuesday: 2,
        wednesday: 3,
        thursday: 4,
        friday: 5,
        saturday: 6,
        sunday: 7
    }

    return (
        <>
        <div className={styles.myShedule}>
            <h1>Моё расписание</h1>
            <div>
                <div style={{
                    textAlign: 'left'
                }}>
                    {!!shedule
                        ? <><h2>Понедельник</h2>
                        <div className={styles.block}>
                            1. {shedule['Понедельник'][0]['8:30-10:05']} 8:30-10:05
                            <br />2. {shedule['Понедельник'][1]['10:15-11:50']} <span className={styles.span}>10:15-11:50</span>
                            <br />3. {shedule['Понедельник'][2]['12:00-13:35']} <span className={styles.span}>12:00-13:35</span>
                            <br />4. {shedule['Понедельник'][3]['14:15-15:50']} <span className={styles.span}>14:15-15:50</span>
                            <br />5. {shedule['Понедельник'][4]['16:00-17:35']} <span className={styles.span}>16:00-17:35</span>
                        </div>
                        <h2>Вторник</h2>
                        <div className={styles.block}>
                            1. {shedule['Вторник'][0]['8:30-10:05']} 8:30-10:05
                            <br />2. {shedule['Вторник'][1]['10:15-11:50']} <span className={styles.span}>10:15-11:50</span>
                            <br />3. {shedule['Вторник'][2]['12:00-13:35']} <span className={styles.span}>12:00-13:35</span>
                            <br />4. {shedule['Вторник'][3]['14:15-15:50']} <span className={styles.span}>14:15-15:50</span>
                            <br />5. {shedule['Вторник'][4]['16:00-17:35']} <span className={styles.span}>16:00-17:35</span>
                        </div>
                        <h2>Среда</h2>
                        <div className={styles.block}>
                            1. {shedule['Среда'][0]['8:30-10:05']} 8:30-10:05
                            <br />2. {shedule['Среда'][1]['10:15-11:50']} <span className={styles.span}>10:15-11:50</span>
                            <br />3. {shedule['Среда'][2]['12:00-13:35']} <span className={styles.span}>12:00-13:35</span>
                            <br />4. {shedule['Среда'][3]['14:15-15:50']} <span className={styles.span}>14:15-15:50</span>
                            <br />5. {shedule['Среда'][4]['16:00-17:35']} <span className={styles.span}>16:00-17:35</span>
                        </div>
                        <h2>Четверг</h2>
                        <div className={styles.block}>
                            1. {shedule['Четверг'][0]['8:30-10:05']} 8:30-10:05
                            <br />2. {shedule['Четверг'][1]['10:15-11:50']} <span className={styles.span}>10:15-11:50</span>
                            <br />3. {shedule['Четверг'][2]['12:00-13:35']} <span className={styles.span}>12:00-13:35</span>
                            <br />4. {shedule['Четверг'][3]['14:15-15:50']} <span className={styles.span}>14:15-15:50</span>
                            <br />5. {shedule['Четверг'][4]['16:00-17:35']} <span className={styles.span}>16:00-17:35</span>
                        </div>
                        <h2>Пятница</h2>
                        <div className={styles.block}>
                            1. {shedule['Пятница'][0]['8:30-10:05']} 8:30-10:05
                            <br />2. {shedule['Пятница'][1]['10:15-11:50']} <span className={styles.span}>10:15-11:50</span>
                            <br />3. {shedule['Пятница'][2]['12:00-13:35']} <span className={styles.span}>12:00-13:35</span>
                            <br />4. {shedule['Пятница'][3]['14:15-15:50']} <span className={styles.span}>14:15-15:50</span>
                            <br />5. {shedule['Пятница'][4]['16:00-17:35']} <span className={styles.span}>16:00-17:35</span>
                        </div></>
                        : <></>
                    }
                    
                </div>
            </div>
            <FullTable />
        </div>
        </>)
}