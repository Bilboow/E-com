import type React from "react";
import { Link } from "react-router-dom"

interface BookCardType{
    id:string;
    title:string;
    image:string;
    price:number;
}

const BookCard : React.FC<BookCardType> = ({id,title,image,price}) => {
  return (
    <div className="border p-4 rounded">
        <Link to={`/product/${id}`}>
            <img src={image} alt={title} className="w-full h-32 object-cover mb-2" />
        </Link>

        <h2 className="font-bold">{title}</h2>
        <p>${price}</p>
    </div>
  )
}

export default BookCard