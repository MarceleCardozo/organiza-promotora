"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Início" },
    { href: "/clients", label: "Clientes" },
    { href: "/credit-proposal", label: "Propostas" },
    { href: "/contracts", label: "Contratos" },
    { href: "/custumer-portal", label: "Portal" },
    { href: "/reports", label: "Relatórios" },
    { href: "/configs", label: "Configurações" },
  ];

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Organiza Promotora"
              width={40}
              height={40}
              className="mix-blend-multiply"
              priority
            />
            <span
              className="text-2xl font-bold hidden sm:block"
              style={{ color: "#BEA04A" }}
            >
              Organiza Promotora
            </span>
          </Link>

          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg transition-colors font-medium`}
                  style={{
                    backgroundColor: isActive ? "#BEA04A" : "transparent",
                    color: isActive ? "#FFFFFF" : "#414140",
                  }}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button className="md:hidden" style={{ color: "#414140" }}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
