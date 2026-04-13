import { CTA_URL } from "@/config/cta";

const UTM_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

export function useCTALink() {
  function getLink() {
    if (typeof window === "undefined") return CTA_URL;
    const currentParams = new URLSearchParams(window.location.search);
    const url = new URL(CTA_URL);
    UTM_PARAMS.forEach((key) => {
      const value = currentParams.get(key);
      if (value) url.searchParams.set(key, value);
    });
    return url.toString();
  }

  function openCTA() {
    window.open(getLink(), "_blank", "noopener,noreferrer");
  }

  return { getLink, openCTA };
}
