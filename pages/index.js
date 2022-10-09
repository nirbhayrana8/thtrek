import Image from "next/image"
import titleImage from "../public/images/test.jpg"
import adventureImage from "../public/images/adventure-image.jpg"
import campImage from "../public/images/camp-image.jpg"
import houseImage from "../public/images/house.jpg"
import styles from "../styles/Home.module.css"
import Navbar from "../components/Navbar"


export default function Home() {
  return (
    <>
      <div className={styles.header_component_root}>
        <div className={styles.banner_component_root}>
          <div className={styles.banner_component_content_container}>
            <span className={styles.banner_component_title}>Feel free to call with any questions here</span>
            <span>+91-9459210765</span>
          </div>
        </div>
        <div className={styles.header_component_container}>
          <Navbar isDarkTheme={false}/>
        </div>
      </div>
      <div>
        <Image src={titleImage} alt="Picture of our campsite" layout="responsive"/>
      </div>

      <div className={styles.container}>
        <section>
          <div className={styles.header}>
            <h2>Our Story</h2>
          </div>
          <hr />
          <div className={styles.sectionContainer}>
            <div className={styles.sectionDescription}>
              <p>
                With over 20 years in the hotel industry, and franchises in multiple locations, we built Thatharna Camps with one goal in mind: to provide an unparalleled outdoor experience. Operational since <ins>2018</ins>, we annualy host hundreds of explorers looking to find a peaceful sanctuary.
              </p>
            </div>

            <div className={styles.sectionImage}>
              <Image src={adventureImage} alt="View from the top of Thatharna" layout="responsive"/>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.header}>
            <h2>Why Thatharna</h2>
          </div>
          <hr />
          <div className={styles.sectionContainer}>
            <div className={styles.sectionImage}>
              <Image src={campImage} alt="View from the top of Thatharna" layout="responsive"/>
            </div>
            <div className={styles.sectionDescription}>
              <p>
                Located in the Kangra valley, in the laps of the Dhauladhar range, Thatharna is a yet untouched trekking haven. Lush green meadows surrounded by the imposing Dhauladhar range make this a must visit spot for anyone looking to explore Dharamshala. Not as commercialized as it&apos;s sister trek (Triund), one gets the surety of serenity, calm and peace.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className={styles.header}>
            <h2>Our Spaces</h2>
          </div>
          <hr />
          <div className={styles.sectionContainer}>
            <div className={styles.sectionDescription}>
              <p>
                As our property was built in the 80&apos;s, we have smaller rooms built in traditional himachali style. However if camping is more your style, then fret not for we offer tents and a place to pitch them too. Menu options might be constrained considering the distance from civilization but it will still be the most fullfilling meal of your life.
              </p>
            </div>

            <div className={styles.sectionImage}>
              <Image src={houseImage} alt="View from the top of Thatharna" layout="responsive"/>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
