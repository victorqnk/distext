import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import Link from 'next/link'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <header className='md:container md:mx-auto md:px-0 px-4 h-24'>
        <div className="flex justify-between mt-2">
          <Link href='/'>
            <Image src='/logo-distext.jpg' className='cursor-pointer' width={100} height={80} />
          </Link>
          <nav className='flex gap-6 my-auto text-slate-500'>
            <Link href='/'>Inicio</Link>
            <Link href='/tienda'>Tienda</Link>
            <Link href='/contacto'>Contacto</Link>
          </nav>
        </div>
      </header>
      <Component {...pageProps} />
      <footer className='bg-blue-800 w-full px-4'>
        <div className="container mx-auto flex justify-between py-10">
          <p className='text-blue-400'>{new Date().getFullYear()} Grupo Distext</p>
          <p className='text-blue-400'>💻 Desarrollado por <span className="text-white font-bold">hazmiapp</span></p>
        </div>
      </footer>
    </>
  )
}

export default MyApp
