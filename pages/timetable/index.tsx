import { MainLayout } from '../../layouts/MainLayout'
import {Timetable as TimetableLessons} from '../../components/timetable/Timetable'
import { FullTable } from '../../components/timetable/FullTable'
const Timetable = () => {
    return (
        <MainLayout>
            <FullTable />
        </MainLayout>
    )
}

export default Timetable