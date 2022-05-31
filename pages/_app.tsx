import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className='container mx-auto h-24'>
        <div className="flex justify-between mt-2">
          <Image src='/logo-distext.jpg' width={100} height={80} />
          <nav className='flex gap-6 my-auto'>
            <Link href='/'>Inicio</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/contacto'>Contacto</Link>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className='bg-blue-800 w-full'>
        <div className="container mx-auto flex justify-between py-10">
          <p className='text-blue-400'>{new Date().getFullYear()} Grupo Distext</p>
          <p className='text-blue-400'>💻 Desarrollado por <span className="text-white font-bold">hazmiapp</span></p>
        </div>
      </footer>
    </>
  )
}

export default MyApp
