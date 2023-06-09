import NumberFormat from "react-number-format";
import Link from "next/link";

export default function Post({ title, image, price, id }) {
  return (
    <>
      <div className="carousel-item  flex flex-col w-[120px] md:w-[200px] p-2">
        <img
          src={image}
          className="mx-2 w-[100%] h-[120px] md:h-[200px]"
          alt={title}
        />
        <Link href={`/product/${id}`}  className="hover:underline">
          <span className="justify-center text-center line-clamp-2">
            {title}
          </span>
          <h2 className="font-bold text-center">{price}</h2>
        </Link>
      </div>
    </>
  );
}
