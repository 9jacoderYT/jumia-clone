import Link from "next/link";

export default function Breadcrumbs({ category, brand, title }) {
  return (
    <div className="text-sm breadcrumbs m-2">
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href={`/category/${category}`}>{category}</Link>
        </li>
        <li>{brand}</li>
        <li>{title}</li>
      </ul>
    </div>
  );
}
