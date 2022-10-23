import { Divider } from '@mui/material'
import type { GetServerSideProps, GetServerSidePropsContext, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Api } from 'utils/api'
import { News } from '../components/news/News'
import { Question } from '../components/question/Question'
import { MainLayout } from '../layouts/MainLayout'
import styles from '../styles/Home.module.scss'

interface PostProps {
  post: any
}

const Home: NextPage = ({post}: any) => {
  
  return (
    <>
      <MainLayout>
        <News items={post} />
        <Divider />
        <Question />
      </MainLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const data = await Api().post.getPost()
    console.log("data", data)

    return {
      props: {post: data}
    }
  } catch (error) {
    return {
      props: {post: null}
    }
  }
}

export default Home
