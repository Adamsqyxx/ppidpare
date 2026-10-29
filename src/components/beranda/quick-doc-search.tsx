"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Icon } from "@/components/ui/icon";
import { QUICK_DOCS } from "@/lib/data";

export function QuickDocSearch() {
  const [filter, setFilter] = useState("");

  const rows = useMemo(() => {
    const q = filter.trim().toLowerCase();
    if (!q) return QUICK_DOCS;
    return QUICK_DOCS.filter((doc) =>
      [doc.kode, doc.nama, doc.opd, doc.klasifikasi, doc.format]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [filter]);

  return (
    <section className="w-full bg-surface-container-low py-14 lg:py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
              Akses Langsung Berkas
            </span>
            <h2 className="font-headline text-headline-xl-mobile sm:text-headline-xl text-on-surface font-bold mt-1">
              Cari Dokumen Publik Tanpa Permohonan
            </h2>
            <p className="font-body text-body-md text-on-surface-variant">
              Sebagian besar dokumen kebijakan dan anggaran telah tersedia untuk
              diunduh langsung tanpa mengisi formulir.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="quick-doc-filter" className="sr-only">
              Cari dokumen cepat
            </label>
            <input
              id="quick-doc-filter"
              type="search"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              placeholder="Cari kata kunci (cth: APBD, RKA, RTRW)..."
              className="h-10 px-4 w-full md:w-80 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-tertiary-container font-body text-label-md focus:outline-none focus:ring-2 focus:ring-primary shadow-xs"
            />
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left font-body text-body-sm text-on-surface">
              <caption className="sr-only">
                Daftar dokumen informasi publik yang dapat diunduh langsung
              </caption>
              <thead className="bg-surface-container font-label-sm text-label-sm text-on-surface-variant uppercase">
                <tr>
                  <th className="py-3.5 px-6" scope="col">
                    Kode Dokumen
                  </th>
                  <th className="py-3.5 px-6" scope="col">
                    Nama Informasi Publik
                  </th>
                  <th className="py-3.5 px-6" scope="col">
                    Perangkat Daerah (OPD)
                  </th>
                  <th className="py-3.5 px-6" scope="col">
                    Klasifikasi
                  </th>
                  <th className="py-3.5 px-6 text-right" scope="col">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-surface-container-high/30">
                {rows.map((doc) => (
                  <tr key={doc.kode} className="hover:bg-surface-container-low/40 transition-colors">
                    <td className="py-4 px-6 font-body text-code-sm font-semibold text-primary whitespace-nowrap">
                      {doc.kode}
                    </td>
                    <td className="py-4 px-6 font-medium text-on-surface">{doc.nama}</td>
                    <td className="py-4 px-6 text-on-surface-variant">{doc.opd}</td>
                    <td className="py-4 px-6">
                      <span
                        className={`inline-flex items-center px-2 py-0.5 rounded font-label-sm text-label-sm font-semibold whitespace-nowrap ${
                          doc.klasifikasi === "Berkala"
                            ? "bg-primary/10 text-primary"
                            : "bg-surface-container text-tertiary"
                        }`}
                      >
                        {doc.klasifikasi}
                      </span>
                    </td>
                    <td className="py-4 px-6 text-right">
                      <a
                        href={doc.href}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-primary font-label-sm text-label-sm font-semibold transition-colors whitespace-nowrap"
                      >
                        <Icon name="download" size={16} />
                        <span>
                          {doc.format} ({doc.size})
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
                {rows.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="py-10 px-6 text-center text-on-surface-variant font-body text-body-sm"
                    >
                      Tidak ada dokumen yang cocok dengan kata kunci{" "}
                      <strong className="text-on-surface">“{filter}”</strong>.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="p-4 bg-surface-container flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between font-label-sm text-label-sm text-on-surface-variant">
            <span>
              Menampilkan {rows.length} dari {QUICK_DOCS.length} contoh dokumen —
              total 1.420+ dokumen terbitan resmi
            </span>
            <Link
              href="/daftar-informasi-publik"
              className="font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <span>Buka Seluruh Database Dokumen Publik</span>
              <Icon name="arrow_forward" size={14} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
