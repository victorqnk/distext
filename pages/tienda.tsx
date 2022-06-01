import { NextPage } from 'next'
import Link from 'next/link'
import Sidebar from '../components/sidebar'
import {items} from '../items'

const Store: NextPage = () => {
  return (
    <div className="bg-gray-100 w-full text-gray-500">
      <div className="container mx-auto">
        <div className="flex justify-between text-sm py-3">
          <p>Tienda</p>
          <p>Mostrando {items.length} resultados</p>
        </div>
        <div className="flex">
          <div className="w-1/5">
            <Sidebar />
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-3 gap-2 pb-4">
              {
                items.map((item, i) => (
                  <Link href={`/producto/${item.id}`}>
                    <div className='cursor-pointer hover:bg-gray-200 rounded'>
                      <img src={`/images/${item.id}/1.png`} />
                      <h3 className='font-bold my-4 px-4'>{item.title}</h3>
                    </div>
                  </Link>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
