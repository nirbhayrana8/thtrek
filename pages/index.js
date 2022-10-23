import HeaderComponent from "../components/HeaderComponent"
import DescriptionComponent from "../components/DescriptionComponent"
import styles from "../styles/Home.module.css"
import HeroComponent from "../components/HeroComponent"


export default function Home() {

  let items = require("../public/content.json")

  return (
    <>
      <HeaderComponent hasBanner={true} />
      <HeroComponent />
      <div className={styles.container}>
        {items.map((item, index) => <DescriptionComponent key={index} index={index} title={item.title} content={item.content} image={item.image} />)}
      </div>
    </>
  )
}
