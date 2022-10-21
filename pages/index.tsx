import { Divider } from '@mui/material'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { News } from '../components/news/News'
import { Question } from '../components/question/Question'
import { MainLayout } from '../layouts/MainLayout'
import styles from '../styles/Home.module.scss'

const testArray = [
  {
    title: 'Something',
    body: 'Body',
    category: 'Love',
    createdAt: '23.10.2022'
  },
  {
    title: 'Something',
    body: 'Body',
    category: 'LoveLove',
    createdAt: '22.10.2022'
  },
  {
    title: 'Something',
    body: 'Body',
    category: 'LoveLove',
    createdAt: '22.10.2022'
  },
  {
    title: 'SomethingLove',
    body: 'Body',
    category: 'Love',
    createdAt: '22.10.2022'
  },
  {
    title: 'SomethingLove',
    body: 'Body',
    category: 'Love',
    createdAt: '22.10.2022'
  },
  {
    title: 'Something',
    body: 'Body',
    category: 'Love',
    createdAt: '22.10.2022'
  },
  {
    title: 'Something',
    body: 'Body',
    category: 'Love',
    createdAt: '22.10.2022'
  },
]

const Home: NextPage = () => {
  return (
    <>
      <MainLayout>
        <News items={testArray} />
        <Divider />
        <Question />
      </MainLayout>
    </>
  )
}

export default Home
