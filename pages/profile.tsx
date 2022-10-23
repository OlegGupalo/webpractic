import { UserProfile } from "components/profile/UserProfile"
import { MainLayout } from "layouts/MainLayout"
import { GetStaticProps, GetStaticPropsContext } from "next"
import dynamic from "next/dynamic"
import { parseCookies } from "nookies"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { fetchCurrentUser } from "redux/slices/user"


const Profile = ({profile}: any) => {
    const dispatch = useDispatch()
    const cookie = parseCookies().pepper
    useEffect(() => {
        dispatch(fetchCurrentUser(cookie))
    }, [])
    return (
        <MainLayout>
            <UserProfile {...profile} />
        </MainLayout>
    )
}



export const getStaticProps: GetStaticProps = async (context: GetStaticPropsContext) => {
    return {
        props: {profile: {
            username: 'Гупало Олег Александрович',
            email: 'gupaloo26@gmail.com',
            role: 'student'
        }
    }}
}

export default Profile