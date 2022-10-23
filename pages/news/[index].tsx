import { FullPost } from "components/news/FullPost"
import { MainLayout } from "layouts/MainLayout"
import { GetServerSideProps, GetServerSidePropsContext } from "next"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchCurrentPost, setPost } from "redux/slices/post"
import { Api } from "utils/api"

const FullNews = ({post}: any) => {
    // const router = useRouter()
    // const {index} = router.query
    // console.log(index)
    // const dispatch = useDispatch()
    // const selector = useSelector(state => state.post)
    // dispatch(fetchCurrentPost(index))

    // let CONST = 'https://cb37-83-234-174-21.eu.ngrok.io/'

    // const sliceImage = (oldPath: string, newPath: string) => {
    //     const array = oldPath.split('/')
    //     array[2] = newPath
    //     let newImage = array.join('/')
    //     return newImage
    // }
    // console.log(sliceImage(selector.post.image, CONST))
    
    return (
        <>
            <MainLayout>
                <FullPost post={post} />
            </MainLayout>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async(context: GetServerSidePropsContext) => {
    const {index} = context.params
    const response = await fetch(`https://cb37-83-234-174-21.eu.ngrok.io/news/${index}`)
    const data = await response.json()

    return {
        props: {post: data}
    }
}

export default FullNews