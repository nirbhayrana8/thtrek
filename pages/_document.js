import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <script src="https://kit.fontawesome.com/cd41540c86.js" crossOrigin="anonymous" async></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerPolicy="no-referrer" />
	  	<link rel="preconnect" href="https://fonts.googleapis.com" />
		  <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
		  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap" 	rel="stylesheet" />
	  </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
