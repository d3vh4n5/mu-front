/// <reference types="astro/client" />

declare namespace App {
  interface Locals {
    /** Título de la página interna: lo dibuja la franja del encabezado o el contenedor (ver config.pages.hero) */
    pageHeading?: {
      eyebrow?: string;
      title: string;
      lead?: string;
    };
  }
}
