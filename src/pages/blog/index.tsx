import Link from "next/link";

export default function Blog() {
  return (
    <div>
      <Link href={{ pathname: "/" }}>Home</Link>
      <Link
        href={{
          pathname: "/blog",
          query: { id: "1" },
        }}
      >
        Blog ID: 1
      </Link>
      <Link
        href={{
          pathname: "/blog",
          query: { id: "2" },
        }}
      >
        Blog ID: 2
      </Link>
    </div>
  );
}
