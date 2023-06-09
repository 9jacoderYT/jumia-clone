import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Link from "next/link";

export default function Shoppingcart({ items }) {
  return (
    <Link href="/cart">
      <span>
        <ShoppingCartIcon className="h-12" />
        <span className=" badge badge-warning text-white mr-5">{items}</span>
      </span>
    </Link>
  );
}
