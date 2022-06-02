// import Image from "next/image"
import Link from "next/link"

interface Props {
  id: number | string,
  title: string,
  image: string,
}

const Card = ({ id, title, image }: Props): JSX.Element => {
  return (
    <Link href={`/producto/${id}`}>
      <div className='cursor-pointer hover:bg-gray-200 rounded'>
        <img src={image} />
        {/* <Image src={image} className='bg-center h-48' alt="" width={320} height={210} /> */}
        <h3 className='font-bold my-4 px-4'>{title}</h3>
      </div>
    </Link>
  )
}

export default Card
