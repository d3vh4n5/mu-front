import * as pj from '../../package.json'

export const config = {
    project: {
        alias: "Mu Campana",
        icon: "",
        name: pj.name,
        version: pj.version
    },
    server: {
        version: "99b + DL"
    },
    site: {
        // URL pública (canonical, Open Graph, sitemap). Sin barra final.
        url: "https://mucampana.com",
        description: "Mu Campana: servidor privado de MU Online 99b + DL. Experiencia x100, drop 40%, resets, eventos Blood Castle, Devil Square, Chaos Castle e invasiones. Crea tu cuenta y juega gratis.",
        locale: "es_AR"
    },
    home: {
        // Portada: "presentacion" = banner a pantalla completa con la bienvenida encima;
        //          "compacto"     = banner con su proporción y la bienvenida dentro del contenedor
        hero: "presentacion" as "presentacion" | "compacto"
    },
    pages: {
        // Páginas internas: "franja" = encabezado bajo con el título de la página adentro;
        //                   "completo" = banner completo y el título dentro del contenedor
        hero: "franja" as "franja" | "completo"
    },
    contact: {
        // Correo para consultas o problemas; se usa en todo el sitio
        email: "staff@mucampana.com"
    }
}