import { useState } from "react"

const categories = [
  {
    category: 'Casual',
    subcategories: ['Camisas', 'Pantalones', 'Playeras', 'Polos',]
  },
  {
    category: 'Chamarras y chalecos',
    subcategories: ['Chalecos', 'Chamarras', 'Sudaderas',]
  },
  {
    category: 'Deportivos',
    subcategories: ['Sudaderas']
  },
  {
    category: 'Industrial',
    subcategories: ['Batas', 'Camisas Racing', 'Camisolas', 'Overoles', 'Pantalones', 'Personalizado']
  },
  {
    category: 'Médicos',
    subcategories: ['Batas', 'Filipinas', 'Overoles', 'Pantalón',]
  },
  {
    category: 'Novedades',
    subcategories: ['Batas', 'Camisas Racing', 'Camisolas', 'Overoles', 'Pantalones', 'Personalizado']
  },
  {
    category: 'Personalizados',
    subcategories: ['Bordado', 'Conjuntos completos', 'Estampado', 'Vinil',]
  },
  {
    category: 'Seguridad',
    subcategories: ['Chalecos']
  },
]

const Sidebar = (): JSX.Element => {
  const [selected, setSelected] = useState(-1)

  return (
    <section className="sidebar cursor-pointer">
      <ul className="text-sm list-disc">
        {
          categories.map((category, i) => (
            <>
              <li onMouseOver={() => setSelected(i)}>{category.category}</li>
              <ul className={`list-disc ${selected === i ? '' : 'hidden'}`}>
                {
                  category.subcategories.map(subcat => (
                    <li className="ml-4">{subcat}</li>
                  ))
                }
              </ul>
            </>
          ))
        }
      </ul>
    </section>
  )
}

export default Sidebar
