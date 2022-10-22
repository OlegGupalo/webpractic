import { UserProfile } from "components/profile/UserProfile"
import { MainLayout } from "layouts/MainLayout"
import { GetStaticProps, GetStaticPropsContext } from "next"

const Profile = ({profile}: any) => {
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