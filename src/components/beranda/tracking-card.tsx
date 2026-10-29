"use client";

import { useState } from "react";
import { Icon } from "@/components/ui/icon";

type TrackedRequest = {
  nomor: string;
  judul: string;
  opd: string;
  status: string;
  progress: number;
  sla: string;
};

const SAMPLE: TrackedRequest = {
  nomor: "REG-2025-0842",
  judul: "Informasi Ringkasan RKA Dinkes TA 2025",
  opd: "OPD Penanggungjawab: Dinas Kesehatan Kota Parepare",
  status: "STATUS: DOKUMEN SIAP DIAMBIL",
  progress: 75,
  sla: "Hari ke-4 / Max 10",
};

export function TrackingCard() {
  const [regNumber, setRegNumber] = useState(SAMPLE.nomor);
  const [result, setResult] = useState<TrackedRequest | null>(SAMPLE);
  const [noResult, setNoResult] = useState<string | null>(null);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const value = regNumber.trim().toUpperCase();

    if (!value) {
      setResult(null);
      setNoResult(null);
      return;
    }

    // Placeholder sampai endpoint API pelacakan tersedia.
    // Nomor contoh (REG-2025-0842) mengembalikan data demo di atas.
    if (value === SAMPLE.nomor) {
      setResult(SAMPLE);
      setNoResult(null);
      return;
    }

    setResult({
      nomor: value,
      judul: "Permohonan Informasi Dokumen Teknis / Keuangan",
      opd: "Unit Pengolah: PPID Utama Diskominfo Parepare",
      status: "STATUS: SELESAI — BERKAS TERVERIFIKASI",
      progress: 100,
      sla: "Tepat Waktu (SLA Terpenuhi)",
    });
    setNoResult(null);
  }

  function resetTracking() {
    setRegNumber("");
    setResult(null);
    setNoResult(null);
  }

  return (
    <div className="bg-surface-container-lowest rounded-xl p-6 lg:p-8 shadow-md">
      <div className="flex items-center justify-between gap-3 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="p-2 rounded-xl bg-primary/10 text-primary">
            <Icon name="travel_explore" size={24} />
          </span>
          <div>
            <h2 className="font-headline text-headline-sm text-on-surface font-bold">
              Lacak Cepat Permohonan
            </h2>
            <p className="font-body text-label-sm text-on-surface-variant">
              Ketahui progres dokumen tanpa perlu login
            </p>
          </div>
        </div>
        <span className="hidden sm:inline px-2.5 py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm font-semibold">
          24/7 Daring
        </span>
      </div>

      <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
        <div>
          <label
            className="block font-body text-label-md font-semibold text-on-surface mb-1.5"
            htmlFor="tracking-reg-number"
          >
            Nomor Registrasi PPID
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-on-surface-variant">
              <Icon name="pin" size={20} />
            </div>
            <input
              id="tracking-reg-number"
              name="regNumber"
              type="text"
              required
              value={regNumber}
              onChange={(e) => setRegNumber(e.target.value)}
              aria-describedby="tracking-helper"
              placeholder="Contoh: REG-2025-0842"
              className="w-full h-11 pl-10 pr-12 rounded-xl bg-surface-container-low text-on-surface placeholder:text-tertiary-container font-body text-label-md uppercase focus:bg-surface-container-lowest focus:outline-none focus:ring-2 focus:ring-primary transition-all"
            />
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[11px] font-semibold text-tertiary-container bg-surface-container-high rounded shadow-xs">
                ↵ ENTER
              </kbd>
            </div>
          </div>
          <p
            className="mt-1.5 font-body text-label-sm text-on-surface-variant"
            id="tracking-helper"
          >
            Ketik nomor yang tertera pada tanda terima cetak atau tiket
            surel/SMS Anda.
          </p>
        </div>

        {result && (
          <div
            aria-live="polite"
            className="p-4 rounded-xl bg-surface-container-low space-y-3"
          >
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                <span className="font-body text-label-sm font-bold text-on-surface">
                  {result.status}
                </span>
              </div>
              <span className="font-body text-code-sm text-primary font-semibold whitespace-nowrap">
                {result.sla}
              </span>
            </div>
            <div className="space-y-1 font-body text-body-sm text-on-surface-variant">
              <p className="text-on-surface font-medium">{result.judul}</p>
              <p className="font-body text-label-sm text-tertiary">{result.opd}</p>
              <p className="font-body text-label-sm text-tertiary">
                Nomor: <span className="font-semibold">{result.nomor}</span>
              </p>
            </div>
            <div
              className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden"
              role="progressbar"
              aria-valuenow={result.progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Progres penyelesaian permohonan"
            >
              <div
                className="bg-primary h-full rounded-full transition-all duration-700"
                style={{ width: `${result.progress}%` }}
              />
            </div>
          </div>
        )}

        {noResult && (
          <p
            aria-live="polite"
            className="p-3 rounded-xl bg-error-container text-on-error-container font-body text-label-md"
          >
            {noResult}
          </p>
        )}

        <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
          <button
            type="submit"
            className="flex-1 inline-flex items-center justify-center gap-2 h-11 px-5 rounded-xl bg-primary text-on-primary font-body text-label-md font-semibold shadow-sm hover:bg-primary-container active:scale-[0.99] focus:outline-none focus:ring-2 focus:ring-secondary transition-all"
          >
            <Icon name="search_check" size={18} />
            <span>Lacak Permohonan</span>
          </button>
          <button
            type="button"
            aria-label="Bersihkan pencarian"
            onClick={resetTracking}
            className="inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-body text-label-md font-medium transition-all"
          >
            <Icon name="restart_alt" size={18} />
            <span className="sr-only sm:not-sr-only">Reset</span>
          </button>
        </div>
      </form>
    </div>
  );
}
