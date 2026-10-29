import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import { NavDesktop, NavFallback, NavMobile } from "@/components/layout/nav";
import { Icon } from "@/components/ui/icon";
import { SITE } from "@/lib/data";

export function SiteHeader() {
  return (
    <header className="fixed top-10 left-0 right-0 w-full z-40 bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src={SITE.logo}
            alt="Logo PPID Kota Parepare"
            width={46}
            height={66}
            className="h-8 w-auto object-contain"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="font-headline text-headline-sm font-bold text-primary tracking-tight">
              PPID KOTA PAREPARE
            </span>
            <span className="font-body text-label-sm text-on-surface-variant font-medium">
              {SITE.instansi}
            </span>
          </span>
        </Link>

        <Suspense fallback={<NavFallback />}>
          <NavDesktop />
        </Suspense>

        <div className="flex items-center gap-3 shrink-0">
          <Link
            href="/masuk-petugas"
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-surface-container-low hover:bg-surface-container text-secondary font-body text-label-md font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
          >
            <Icon name="lock" size={18} />
            <span className="hidden sm:inline">Masuk Petugas</span>
            <span className="sr-only sm:hidden">Masuk Petugas</span>
          </Link>
          <div
            aria-hidden="true"
            className="hidden sm:flex w-8 h-8 rounded-full bg-primary items-center justify-center"
          >
            <Icon name="person" size={18} className="text-on-primary" />
          </div>
          <Suspense
            fallback={<div className="xl:hidden w-10 h-10" aria-hidden="true" />}
          >
            <NavMobile />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
