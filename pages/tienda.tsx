import { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useState } from 'react'
import Card from '../components/card'
import Sidebar from '../components/sidebar'
import { items } from '../items'

const Store: NextPage = () => {
  function chunkArray(myArray: any[], chunk_size: number) {
    var index = 0;
    var arrayLength = myArray.length;
    var tempArray = [];

    for (index = 0; index < arrayLength; index += chunk_size) {
      let myChunk = myArray.slice(index, index + chunk_size);
      // Do something if you want with the group
      tempArray.push(myChunk);
    }

    return tempArray;
  }

  const router = useRouter()
  const [current, setCurrent] = useState(0)
  const products = chunkArray(items, 12)

  return (
    <div className="bg-gray-100 w-full text-gray-500">
      <div className="container mx-auto">
        <div className="flex justify-between text-sm py-3">
          <p>Tienda</p>
          <p>Mostrando {products[current].length} de {items.length} resultados</p>
        </div>
        <div className="flex">
          <div className="w-1/5 border-r">
            <Sidebar />
          </div>
          <div className="w-4/5">
            <div className="grid grid-cols-3 gap-2 pb-4">
              {
                products[current].map((item, i) => {
                  // const image = item.images.split(', ') ?? 'https://via.placeholder.com/150'
                  return <Card id={item.id} title={item.title} image={`/images/${item.id}/1.png`} key={i} />
                })
              }
            </div>
            <div className="text-center mb-6">
              <span className="font-bold">{'<'}</span>
              <span className={`${current === 0 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(0)}>
                  1
              </span>
              <span className={`${current === 1 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(1)}>
                  2
              </span>
              <span className={`${current === 2 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(2)}>
                  3
              </span>
              <span className={`${current === 3 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(3)}>
                  4
              </span>
              <span className={`${current === 4 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(4)}>
                  5
              </span>
              <span className={`${current === 5 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(5)}>
                  6
              </span>
              <span className={`${current === 6 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(6)}>
                  7
              </span>
              <span className={`${current === 7 ? 'text-blue-800 font-bold' : ''} mx-3 cursor-pointer`}
                onClick={() => setCurrent(7)}>
                  8
              </span>
              <span className="font-bold">{'>'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store
