import Link from 'next/link';

export default function Item({product,index}) {
  return (
    <Link href={{pathname:"/product", query: {id:index}}}>
      <div className="h-80 w-80 px-4 border rounded-lg flex justify-center items-center mx-5 my-10 mr-16 hover:bg-gray-50 hover:cursor-pointer">
        <div className="py-2 w-full flex flex-col">
            <div className="flex justify-center h-56 items-center">
              <img
                className="w-auto max-w-[10vw] h-auto max-h-48 mb-4 items-center"
                src={`/img/products/${product.id}.jpg`}>
              </img>
            </div>
            <div className="text-left mx-4">
              <span className="text-sky-950 font-semibold text-lg leading-tight mb-2">{product.product}</span>
              <p className="text-yellow-600">P{product.price}</p>
            </div>
        </div>
     </div>  
    </Link>
  )
}
