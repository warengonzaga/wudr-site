import '../scss/style.scss'

export default function MyApp({ Component, pageProps, router }) {

  return (
    <Component {...pageProps} key={router.pathname} />
  ) 
}
