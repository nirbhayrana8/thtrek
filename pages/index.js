import HeaderComponent from "../components/HeaderComponent"
import DescriptionComponent from "../components/DescriptionComponent"
import styles from "../styles/Home.module.css"
import { NavbarThemeContextProvider } from "../contexts/NavbarThemeContext.js"
import HeroComponent from "../components/HeroComponent"
import Head from "next/head"


export default function Home() {

  let items = require("../public/content.json")

  return (
    <NavbarThemeContextProvider>
      <Head>
        <title>Thatharna Camping</title>
        <meta property="og:title" content="Thatharna Camping: The experience you've been missing so far" />
        <meta property="og:url" content="https://ahrefs.com/blog/open-graph-meta-tags/" />
        <meta property="og:image" content="https://ahrefs.com/blog/wp-content/uploads/2020/01/fb-open-graph-1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Learn what makes us an experience worth your time." />
        <meta property="og:locale" content="en_IN" />
      </Head>
      <HeaderComponent hasBanner={true} isDarkTheme={false}/>
      <HeroComponent />
      <div className={styles.container}>
        {items.map((item, index) => <DescriptionComponent key={index} index={index} title={item.title} content={item.content} image={item.image} />)}
      </div>
    </NavbarThemeContextProvider>
  )
}
