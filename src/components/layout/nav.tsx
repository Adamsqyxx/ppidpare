"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { NAV_ITEMS } from "@/lib/data";

function isActivePath(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

/** Navigasi desktop dengan penanda halaman aktif. */
export function NavDesktop() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Navigasi Utama Portal PPID"
      className="hidden xl:flex items-center gap-1.5"
    >
      {NAV_ITEMS.map((item) => {
        const active = isActivePath(pathname, item.href);
        return (
          <Link
            key={item.path}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={`px-3 py-2 rounded-lg font-body text-label-md transition-all ${
              active
                ? "bg-primary-container text-on-primary-container font-semibold shadow-sm"
                : "text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

/** Tombol menu + drawer untuk mobile/tablet. */
export function NavMobile() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup drawer saat route berubah
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        aria-label="Buka menu navigasi"
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((v) => !v)}
        className="xl:hidden inline-flex items-center justify-center w-10 h-10 rounded-xl hover:bg-surface-container text-on-surface transition-colors"
      >
        <Icon name={open ? "close" : "menu"} size={24} />
      </button>

      <div
        id="mobile-nav"
        hidden={!open}
        className="xl:hidden absolute left-0 right-0 top-full border-t border-outline-variant/40 bg-surface max-h-[calc(100vh-7.5rem)] overflow-y-auto shadow-md"
      >
        <nav aria-label="Navigasi Seluler" className="px-6 py-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.path}
                href={item.href}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
                className={`block px-3 py-3 rounded-xl font-body text-label-md transition-colors ${
                  active
                    ? "bg-primary-container text-on-primary-container font-semibold"
                    : "text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}

/** Fallback statis (tanpa penanda aktif) selama pathname belum tersedia. */
export function NavFallback() {
  return (
    <nav
      aria-label="Navigasi Utama Portal PPID"
      className="hidden xl:flex items-center gap-1.5"
    >
      {NAV_ITEMS.map((item) => (
        <Link
          key={item.path}
          href={item.href}
          className="px-3 py-2 rounded-lg font-body text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
