import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import { items } from "../../items"

const Item = (): JSX.Element => {
  const router = useRouter()
  const { id } = router.query
  const item = items.find(item => item.id === Number(id))
  const images = item?.images.split(', ') ?? ['https://via.placeholder.com/150']

  return (
    <div className="bg-gray-100 w-full text-gray-500 pb-12">
      <Head>
        <title>{item?.title}</title>
        <meta name="description" content={item?.description} />
      </Head>
      <div className="container mx-auto">
        <p className="text-xs py-3 text-gray-400">Tienda / {`${item?.category} / ${item?.title}`}</p>
        <div className="flex">
          <div className="w-1/2">
            <Image src={`/images/${id}/1.png`} className='cursor-pointer' alt="" width={640} height={420} />
            <div className="grid grid-cols-3 gap-2">
              {
                images.map((image, index) => (
                  <Image src={`/images/${id}/${index + 1}.png`} className='cursor-pointer' alt="" width={320} height={210} key={index} />
                ))
              }
            </div>
          </div>
          <div className="w-1/2 px-12">
            <h1 className="font-bold text-lg">{item?.title}</h1>
            <p className="my-6">{item?.description}</p>
            <p><b>Colores:</b> {item?.colors}</p>
            <p><b>Tallas:</b> {item?.sizes}</p>
          </div>
        </div>
        <div className="">
          <h3 className="font-bold mt-12 mb-4 uppercase">Productos relacionados</h3>
          <div className="grid grid-cols-4 gap-4">
            {/* <Card id={item.id + 1} title={item.title} />
            <Card id={item.id + 2} title={item.title} />
            <Card id={item.id + 3} title={item.title} />
            <Card id={item.id + 4} title={item.title} /> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
