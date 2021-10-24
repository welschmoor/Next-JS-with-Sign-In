import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"

import Spinner from "../components/Spinner.js"
import Navbar from "../components/Navbar.js"

export default function Home() {
  return (
    <div>
      <Spinner on={false} />
      
    </div>
  )
}



//className={styles.container}  old style
