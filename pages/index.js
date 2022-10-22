import Image from "next/image"
import titleImage from "../public/images/test.jpg"
import adventureImage from "../public/images/adventure-image.jpg"
import campImage from "../public/images/camp-image.jpg"
import houseImage from "../public/images/house.jpg"
import HeaderComponent from "../components/HeaderComponent"
import DescriptionComponent from "../components/DescriptionComponent"
import styles from "../styles/Home.module.css"


export default function Home() {

  let items = require("../public/content.json")

  return (
    <>
      <HeaderComponent hasBanner={true} />
      <Image src={titleImage} alt="Picture of our campsite" layout="responsive"/>

      <div className={styles.container}>
        {items.map((item, index) => <DescriptionComponent key={index} index={index} title={item.title} content={item.content} image={item.image} />)}
      </div>
    </>
  )
}
