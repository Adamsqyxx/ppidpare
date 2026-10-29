"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/components/ui/icon";

type FontScale = "sm" | "base" | "lg";
type Contrast = "normal" | "high";

const FONT_KEY = "ppid:font-scale";
const CONTRAST_KEY = "ppid:contrast";

export function UtilityBar() {
  const [fontScale, setFontScale] = useState<FontScale>("base");
  const [contrast, setContrast] = useState<Contrast>("normal");

  // Baca preferensi tersimpan (a11y: pengaturan harus persisten antar halaman)
  useEffect(() => {
    const savedScale = window.localStorage.getItem(FONT_KEY) as FontScale | null;
    const savedContrast = window.localStorage.getItem(CONTRAST_KEY) as Contrast | null;
    if (savedScale === "sm" || savedScale === "lg") setFontScale(savedScale);
    if (savedContrast === "high") setContrast("high");
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    if (fontScale === "base") {
      html.removeAttribute("data-font-scale");
    } else {
      html.setAttribute("data-font-scale", fontScale);
    }
    window.localStorage.setItem(FONT_KEY, fontScale);
  }, [fontScale]);

  useEffect(() => {
    const html = document.documentElement;
    if (contrast === "high") {
      html.setAttribute("data-contrast", "high");
    } else {
      html.removeAttribute("data-contrast");
    }
    window.localStorage.setItem(CONTRAST_KEY, contrast);
  }, [contrast]);

  const btnBase =
    "px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors";

  return (
    <div className="w-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-10 flex items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5">
            <Icon name="support_agent" size={16} className="text-primary" />
            <span>Hotline Diskominfo: (0421) 21123</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5">
            <Icon name="schedule" size={16} className="text-primary" />
            <span>Senin - Jumat 08:00 - 16:00 WITA</span>
          </span>
        </div>

        <div aria-label="Aksesibilitas Tampilan" className="flex items-center gap-4">
          <span className="hidden md:inline text-on-surface-variant font-label-sm text-label-sm">
            Ukuran Fon:
          </span>
          <div className="flex items-center gap-1" role="group" aria-label="Ukuran huruf">
            <button
              type="button"
              aria-label="Perkecil Ukuran Huruf"
              aria-pressed={fontScale === "sm"}
              onClick={() => setFontScale("sm")}
              className={`${btnBase} ${fontScale === "sm" ? "ring-2 ring-primary" : ""}`}
            >
              A-
            </button>
            <button
              type="button"
              aria-label="Ukuran Huruf Normal"
              aria-pressed={fontScale === "base"}
              onClick={() => setFontScale("base")}
              className={`${btnBase} ${fontScale === "base" ? "ring-2 ring-primary" : ""}`}
            >
              A
            </button>
            <button
              type="button"
              aria-label="Perbesar Ukuran Huruf"
              aria-pressed={fontScale === "lg"}
              onClick={() => setFontScale("lg")}
              className={`${btnBase} ${fontScale === "lg" ? "ring-2 ring-primary" : ""}`}
            >
              A+
            </button>
          </div>
          <span aria-hidden="true" className="h-4 w-px bg-outline-variant hidden sm:inline-block" />
          <button
            type="button"
            aria-label="Alihkan Mode Kontras Tinggi"
            aria-pressed={contrast === "high"}
            onClick={() => setContrast(contrast === "high" ? "normal" : "high")}
            className="flex items-center gap-1 px-2 py-0.5 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
          >
            <Icon name="contrast" size={14} />
            <span className="hidden sm:inline">Kontras Tinggi</span>
          </button>
        </div>
      </div>
    </div>
  );
}
