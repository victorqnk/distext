import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className='text-slate-500'>
      <Head>
        <title>Grupo Distext</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <div className="h-screen bg-white">
        <section className="w-full bg-blue-800 bg-hero-image bg-fixed bg-cover flex justify-center h-3/4">
          <div className="my-auto text-center font-normal">
            <p className='text-blue-500 md:text-7xl text-5xl'>Trabajamos para</p>
            <p className='text-white md:text-7xl text-5xl'>Uniformar a tu empresa</p>
            <div className="bg-blue-800 uppercase rounded-full w-48 my-10 block mx-auto p-3 cursor-pointer">
              <span className="text-lg text-white">saber más</span>
            </div>
            <span className="material-icons text-white" style={{ fontSize: '48px' }}>south</span>
          </div>
        </section>
      </div>

      <section className="container mx-auto text-center mb-48">
        <h1 className='text-5xl text-blue-900 mb-5'>Grupo Distext</h1>
        <p className='md:text-4xl text-3xl w-2/3 mx-auto font-light'>Somos una empresa mexicana dedicada a la fabricación de uniformes industriales, casuales, de seguridad, médicos y personalizados.</p>
      </section>

      <section className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center mb-12">
        <div>
          <span className="material-icons text-blue-600" style={{ fontSize: '72px' }}>published_with_changes</span>
          <h3 className='text-blue-900 font-bold text-xl my-2'>Personalización</h3>
          <p className='text-lg'>Contamos con servicios de bordado y estampado.</p>
        </div>
        <div>
          <span className="material-icons text-blue-600" style={{ fontSize: '72px' }}>view_stream</span>
          <h3 className='text-blue-900 font-bold text-xl my-2'>Variedad</h3>
          <p className='text-lg'>Uniformes para todo tipo de industrias y materiales.</p>
        </div>
        <div>
          <span className="material-icons text-blue-600" style={{ fontSize: '72px' }}>schedule</span>
          <h3 className='text-blue-900 font-bold text-xl my-2'>Entregas</h3>
          <p className='text-lg'>Tus uniformes terminados a tu planta u oficina.</p>
        </div>
        <div>
          <span className="material-icons text-blue-600" style={{ fontSize: '72px' }}>done</span>
          <h3 className='text-blue-900 font-bold text-xl my-2'>Satisfacción</h3>
          <p className='text-lg'>Productos de alta calidad y un excelente servicio.</p>
        </div>
      </section>

      <Link href='/contacto'>
        <div className="w-72 mx-auto hover:bg-black hover:text-white cursor-pointer mb-48 border-black border-2 px-8 py-4 text-center uppercase">
          <p>solicita una cotización</p>
        </div>
      </Link>

      <div className='bg-blue-800 w-full'>
        <div className="container mx-auto text-center py-16">
          <p className='text-white text-4xl'>Únete a nuestra lista de clientes satisfechos</p>
        </div>
      </div>

      <section className="container mx-auto flex h-64">

      </section>
    </div>
  )
}

export default Home
