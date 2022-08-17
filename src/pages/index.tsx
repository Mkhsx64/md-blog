import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mb-3">Hello there!</h1>
      <p className="text-slate-700">Welcome to my new blog</p>
    </>
  )
}

export default Home
