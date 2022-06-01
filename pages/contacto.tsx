import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <div className=" bg-gray-100">
      <div className='bg-blue-800 w-full'>
        <div className="container mx-auto text-center py-16">
          <p className='text-white text-4xl'>Solicita una cotización o pide más información sobre nuestros productos. Estaremos felices de atenderte.</p>
        </div>
      </div>
      <div className="container mx-auto flex my-24">
        <div className="w-2/3 p-8">
          <div className="flex gap-3">
            <input type="text" placeholder='Tu nombre' className="p-3 w-1/2" />
            <input type="email" placeholder='Tu email' className="p-3 w-1/2" />
          </div>
          <input type="text" placeholder='Asunto' className="block w-full my-3 p-3" />
          <textarea placeholder='Tu mensaje' className="block w-full p-3" />
          <div className="w-64 mt-3 py-4 text-center uppercase text-white bg-blue-900 rounded-xl cursor-pointer">
            <span>Enviar mensaje</span>
          </div>
        </div>
        <div className="w-1/3 p-8 text-gray-500">
          <p>722 215750 / 722 2157364</p>
          <p>contacto@grupodistext.com</p>
        </div>
      </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5625.45839906826!2d-99.65385401938758!3d19.26102835935743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85cd89087b6c664b%3A0xfc9c4830ff0a2e2f!2sGral.%20Abelardo%20L.%20Rodr%C3%ADguez%20811%2C%20Ocho%20Cedros%2C%2050170%20Toluca%20de%20Lerdo%2C%20M%C3%A9x.!5e0!3m2!1sen!2smx!4v1654101201622!5m2!1sen!2smx" className='w-full h-48' allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Contact
