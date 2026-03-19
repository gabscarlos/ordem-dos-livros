"use client";

import { useLeitura as useLeituraContext } from "@/contexts/LeituraContext";

export function useLeitura() {
  return useLeituraContext();
}
