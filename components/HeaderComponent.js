import MainHeader from "./MainHeader"
import HeaderContainer from "./HeaderContainer"
import dynamic from 'next/dynamic'

const BannerComponent = dynamic(() => import('../components/BannerComponent'))

export default function HeaderComponent({ hasBanner, isDarkTheme }) {

  return (
    <HeaderContainer hasBanner={hasBanner}>
      {hasBanner && <BannerComponent />}
      <MainHeader isDarkTheme={isDarkTheme}/>
    </HeaderContainer>
  )
}
