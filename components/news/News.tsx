import { Paper } from "@mui/material"
import { NewsItem } from "./NewsItem"
import styles from './news.module.scss'
import { Box } from "@mui/system"
import Carousel from "react-material-ui-carousel"
import { ImportContacts } from "@mui/icons-material"

interface NewsItemProps {
    _id: string,
    title: string,
    content: string,
    created_at: string,
    updated_at: string,
    image: string
}

interface NewsProps {
    items: NewsItemProps[]
}

export const News: React.FC<NewsProps> = ({items}) => {
    const sliceImage = (oldPath: string, newPath: string) => {
        const array = oldPath.split('/')
        array[2] = newPath
        let newImage = array.join('/')
        return newImage
    }
    console.log(items)
    return (
        <>
        <Carousel   
            animation="slide"
            NextIcon={<ImportContacts />}
            PrevIcon={<ImportContacts />}>

            {items && items.data?.map((item: NewsItemProps, key: number) => 
                    <Paper key={key} elevation={6} classes={{root: styles.paper}}>
                        <NewsItem {...item} newImages={sliceImage(item.image, 'cb37-83-234-174-21.eu.ngrok.io')} />
                    </Paper>
                
            )}
        </Carousel>
            
        </>
    )
}