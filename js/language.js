document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    fr: {
  brandSubtitle: "Votre chauffeur privé à Lille",
      navHome: "ACCUEIL",
      navServices: "SERVICES",
      navPopular: "TRAJETS POPULAIRES",
      navVehicle: "NOTRE VÉHICULE",
      navAbout: "À PROPOS",
      navContact: "CONTACT",

      heroTitle:
        'Votre chauffeur privé<br>haut de gamme<br><span>à Lille</span>',

      heroDescription:
        "Voyagez avec élégance, confort et sérénité.<br>Tesla Model Y 100 % électrique.",

      available: "Disponible",
      payment: "Paiement<br>sécurisé",
      personalService: "Service<br>personnalisé",

      booking: "FAIRE UNE RÉSERVATION",
      whatsapp: "NOUS ÉCRIRE SUR WHATSAPP"
    },

    en: {
  brandSubtitle: "Your private driver in Lille",
      navHome: "HOME",
      navServices: "SERVICES",
      navPopular: "POPULAR ROUTES",
      navVehicle: "OUR VEHICLE",
      navAbout: "ABOUT",
      navContact: "CONTACT",

      heroTitle:
        'Your private driver<br>premium service<br><span>in Lille</span>',

      heroDescription:
        "Travel with elegance, comfort and peace of mind.<br>100% electric Tesla Model Y.",

      available: "Available",
      payment: "Secure<br>payment",
      personalService: "Personalised<br>service",

      booking: "MAKE A RESERVATION",
      whatsapp: "MESSAGE US ON WHATSAPP"
    },

    es: {
  brandSubtitle: "Su chófer privado en Lille",
      navHome: "INICIO",
      navServices: "SERVICIOS",
      navPopular: "TRAYECTOS POPULARES",
      navVehicle: "NUESTRO VEHÍCULO",
      navAbout: "NOSOTROS",
      navContact: "CONTACTO",

      heroTitle:
        'Su chófer privado<br>de alta gama<br><span>en Lille</span>',

      heroDescription:
        "Viaje con elegancia, comodidad y tranquilidad.<br>Tesla Model Y 100 % eléctrico.",
      available: "Disponible",
      payment: "Pago<br>seguro",
      personalService: "Servicio<br>personalizado",

      booking: "HACER UNA RESERVA",
      whatsapp: "ESCRÍBANOS POR WHATSAPP"
    },

    de: {
      brandSubtitle: "Ihr privater Chauffeur in Lille",
      navHome: "STARTSEITE",
      navServices: "SERVICES",
      navPopular: "BELIEBTE STRECKEN",
      navVehicle: "UNSER FAHRZEUG",
      navAbout: "ÜBER UNS",
      navContact: "KONTAKT",

      heroTitle:
        'Ihr privater Chauffeur<br>der Premiumklasse<br><span>in Lille</span>',

      heroDescription:
        "Reisen Sie elegant, komfortabel und entspannt.<br>Tesla Model Y – 100 % elektrisch.",

      available: "Verfügbar",
      payment: "Sichere<br>Zahlung",
      personalService: "Persönlicher<br>Service",

      booking: "JETZT RESERVIEREN",
      whatsapp: "WHATSAPP-NACHRICHT SENDEN"
    }
  };


  function changeLanguage(lang) {

    const selected = translations[lang];

    if (!selected) return;


    document.documentElement.lang = lang;


    document.querySelectorAll("[data-i18n]").forEach((element) => {

      const key = element.dataset.i18n;

      if (selected[key] !== undefined) {
        element.innerHTML = selected[key];
      }

    });


    document.querySelectorAll(".language-option").forEach((button) => {

      button.classList.toggle(
        "is-active",
        button.dataset.lang === lang
      );

    });


    localStorage.setItem("preferredLanguage", lang);
  }


  document.querySelectorAll(".language-option").forEach((button) => {

    button.addEventListener("click", () => {
      changeLanguage(button.dataset.lang);
    });

  });


  const savedLanguage =
    localStorage.getItem("preferredLanguage") || "fr";

  changeLanguage(savedLanguage);

});
