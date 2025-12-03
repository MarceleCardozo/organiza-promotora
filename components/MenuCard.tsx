import Link from "next/link";

export function MenuCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div
        className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer h-full border-l-4"
        style={{ borderColor: "#BEA04A" }}
      >
        <h3 className="text-xl font-bold mb-2" style={{ color: "#414140" }}>
          {title}
        </h3>
        <p style={{ color: "#414140" }}>{description}</p>
      </div>
    </Link>
  );
}
