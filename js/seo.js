(function () {
  "use strict";

  const pageMeta = {
    "index.html": {
      fr: {
        title: "VTC Lille – Chauffeur privé & transferts | Twins Fab Cab",
        description: "Twins Fab Cab Service VTC, chauffeur privé à Lille. Transferts gares et aéroports, longues distances en France, Belgique, Pays-Bas et Allemagne."
      },
      en: {
        title: "Private Driver Lille – Airport Transfers | Twins Fab Cab",
        description: "Private chauffeur service in Lille for station and airport transfers and long-distance journeys across France, Belgium, the Netherlands and Germany."
      },
      es: {
        title: "VTC en Lille – Chófer privado y traslados | Twins Fab Cab",
        description: "Servicio de chófer privado VTC en Lille para traslados a estaciones y aeropuertos y viajes de larga distancia por Francia, Bélgica, Países Bajos y Alemania."
      },
      pt: {
        title: "VTC em Lille – Motorista privado e transfers | Twins Fab Cab",
        description: "Serviço de motorista privado VTC em Lille para transfers de estações e aeroportos e viagens de longa distância em França, Bélgica, Países Baixos e Alemanha."
      },
      de: {
        title: "Privatfahrer Lille – Flughafen-Transfers | Twins Fab Cab",
        description: "Privater VTC-Fahrservice in Lille für Bahnhof- und Flughafentransfers sowie Langstreckenfahrten in Frankreich, Belgien, den Niederlanden und Deutschland."
      }
    },
    "reservation.html": {
      fr: {
        title: "Réservation VTC Lille | Twins Fab Cab Service VTC",
        description: "Demandez votre réservation VTC à Lille. Réservation conseillée 12 h à l’avance ; pour moins de 12 h, contactez-nous afin de vérifier les disponibilités."
      },
      en: {
        title: "Book a Private Driver in Lille | Twins Fab Cab",
        description: "Request your private driver in Lille. Booking is recommended 12 hours in advance; for shorter notice, contact us to check availability."
      },
      es: {
        title: "Reserva VTC en Lille | Twins Fab Cab",
        description: "Solicite su chófer privado en Lille. Se recomienda reservar con 12 horas de antelación; para menos de 12 horas, contáctenos para consultar disponibilidad."
      },
      pt: {
        title: "Reserva VTC em Lille | Twins Fab Cab",
        description: "Peça o seu motorista privado em Lille. Recomenda-se reservar com 12 horas de antecedência; para menos de 12 horas, contacte-nos para verificar a disponibilidade."
      },
      de: {
        title: "VTC-Fahrer in Lille reservieren | Twins Fab Cab",
        description: "Fordern Sie Ihren privaten Fahrer in Lille an. Eine Reservierung 12 Stunden im Voraus wird empfohlen; bei kürzerer Frist kontaktieren Sie uns zur Verfügbarkeitsprüfung."
      }
    },
    "information.html": {
      fr: {
        title: "VTC Lille : villes, gares & aéroports | Twins Fab Cab",
        description: "Découvrez les villes, gares et aéroports desservis par Twins Fab Cab Service VTC depuis Lille, en France et vers les pays voisins."
      },
      en: {
        title: "Lille VTC: Cities, Stations & Airports | Twins Fab Cab",
        description: "See the cities, train stations and airports served by Twins Fab Cab Service VTC from Lille, across France and neighbouring countries."
      },
      es: {
        title: "VTC Lille: ciudades, estaciones y aeropuertos | Twins Fab Cab",
        description: "Consulte las ciudades, estaciones y aeropuertos atendidos por Twins Fab Cab Service VTC desde Lille, en Francia y países vecinos."
      },
      pt: {
        title: "VTC Lille: cidades, estações e aeroportos | Twins Fab Cab",
        description: "Consulte as cidades, estações e aeroportos servidos pela Twins Fab Cab Service VTC a partir de Lille, em França e nos países vizinhos."
      },
      de: {
        title: "VTC Lille: Städte, Bahnhöfe & Flughäfen | Twins Fab Cab",
        description: "Entdecken Sie die Städte, Bahnhöfe und Flughäfen, die Twins Fab Cab Service VTC ab Lille in Frankreich und den Nachbarländern bedient."
      }
    }
  };

  const localeMap = {
    fr: "fr_FR",
    en: "en_GB",
    es: "es_ES",
    pt: "pt_PT",
    de: "de_DE"
  };

  function pageName() {
    const raw = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    return raw || "index.html";
  }

  function setMeta(selector, value) {
    const element = document.querySelector(selector);
    if (element && value) element.setAttribute("content", value);
  }

  function applySeo(lang) {
    const page = pageName();
    const selected = pageMeta[page] && pageMeta[page][lang];

    if (selected) {
      document.title = selected.title;
      setMeta('meta[name="description"]', selected.description);
    }

    const title = document.title;
    const description = document.querySelector('meta[name="description"]')?.getAttribute("content") || "";

    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:locale"]', localeMap[lang] || "fr_FR");
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
  }

  function cleanPathWithoutHash() {
    let path = window.location.pathname;
    if (/\/index\.html$/i.test(path)) {
      path = path.replace(/index\.html$/i, "");
    }
    return path + window.location.search;
  }

  function setupCleanSamePageAnchors() {
    document.addEventListener("click", function (event) {
      const link = event.target.closest('a[href^="#"]');
      if (!link) return;

      const href = link.getAttribute("href");
      if (!href || href === "#") return;

      let target;
      try {
        target = document.querySelector(href);
      } catch (_) {
        return;
      }
      if (!target) return;

      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      window.history.replaceState(null, "", cleanPathWithoutHash());
    });

    if (window.location.hash) {
      const hash = window.location.hash;
      let target = null;
      try {
        target = document.querySelector(hash);
      } catch (_) {}

      if (target) {
        requestAnimationFrame(function () {
          target.scrollIntoView({ block: "start" });
          window.history.replaceState(null, "", cleanPathWithoutHash());
        });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const savedLanguage = localStorage.getItem("preferredLanguage") || document.documentElement.lang || "fr";
    applySeo(savedLanguage);
    setupCleanSamePageAnchors();

    document.querySelectorAll(".language-option").forEach(function (button) {
      button.addEventListener("click", function () {
        applySeo(button.dataset.lang || "fr");
      });
    });
  });
})();
