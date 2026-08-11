document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    fr: {
  brandSubtitle: "Votre chauffeur privé à Lille",
      googleReviews: "Avis Google",
  serviceArea: "Lille • Belgique • Paris • Allemagne • Pays-Bas",
      vehicleEyebrow: "L’expérience VTC",
vehicleTitle: "nouvelle génération",

vehicleAirportTitle: "Transferts aéroports",
vehicleAirportText: "Prise en charge ponctuelle et suivi des vols en temps réel.",

vehicleDistanceTitle: "Longues distances",
vehicleDistanceText: "Voyagez loin en toute sérénité et dans un confort premium.",

vehicleBusinessTitle: "Déplacements professionnels",
vehicleBusinessText: "Ponctualité, discrétion et confort pour vos rendez-vous.",

vehicleCustomTitle: "Service sur mesure",
vehicleCustomText: "Une expérience adaptée à vos horaires et à vos besoins.",

businessCardLabel: "Carte de visite animée",
businessCardSubtitle: "Votre chauffeur privé à Lille",
businessCardValues: "Confort • Ponctualité • Sérénité",
businessCardJob: "Chauffeur VTC professionnel",
businessCardLocation: "Lille - France",
businessCardBooking: "Réservation minimum 24 h à l’avance.",

vehicleSlogan: "Voyagez autrement, voyagez mieux.",
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
      googleReviews: "Google Reviews",
  serviceArea: "Lille • Belgium • Paris • Germany • Netherlands",
      vehicleEyebrow: "The VTC experience",
vehicleTitle: "new generation",

vehicleAirportTitle: "Airport transfers",
vehicleAirportText: "Punctual pick-up and real-time flight tracking.",

vehicleDistanceTitle: "Long-distance journeys",
vehicleDistanceText: "Travel far with complete peace of mind and premium comfort.",

vehicleBusinessTitle: "Business travel",
vehicleBusinessText: "Punctuality, discretion and comfort for your appointments.",

vehicleCustomTitle: "Tailored service",
vehicleCustomText: "A service adapted to your schedule and your needs.",

businessCardLabel: "Animated business card",
businessCardSubtitle: "Your private driver in Lille",
businessCardValues: "Comfort • Punctuality • Serenity",
businessCardJob: "Professional VTC driver",
businessCardLocation: "Lille - France",
businessCardBooking: "Booking required at least 24 hours in advance.",

vehicleSlogan: "Travel differently, travel better.",
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
      googleReviews: "Reseñas de Google",
  serviceArea: "Lille • Bélgica • París • Alemania • Países Bajos",
      vehicleEyebrow: "La experiencia VTC",
vehicleTitle: "de nueva generación",

vehicleAirportTitle: "Traslados al aeropuerto",
vehicleAirportText: "Recogida puntual y seguimiento de vuelos en tiempo real.",

vehicleDistanceTitle: "Largas distancias",
vehicleDistanceText: "Viaje lejos con total tranquilidad y máximo confort.",

vehicleBusinessTitle: "Desplazamientos profesionales",
vehicleBusinessText: "Puntualidad, discreción y comodidad para sus citas.",

vehicleCustomTitle: "Servicio a medida",
vehicleCustomText: "Una experiencia adaptada a sus horarios y necesidades.",

businessCardLabel: "Tarjeta de visita animada",
businessCardSubtitle: "Su chófer privado en Lille",
businessCardValues: "Confort • Puntualidad • Serenidad",
businessCardJob: "Chófer VTC profesional",
businessCardLocation: "Lille - Francia",
businessCardBooking: "Reserva obligatoria con al menos 24 h de antelación.",

vehicleSlogan: "Viaje de otra manera, viaje mejor.",
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
      googleReviews: "Google-Bewertungen",
  serviceArea: "Lille • Belgien • Paris • Deutschland • Niederlande",
      vehicleEyebrow: "Das VTC-Erlebnis",
vehicleTitle: "der neuen Generation",

vehicleAirportTitle: "Flughafentransfers",
vehicleAirportText: "Pünktliche Abholung und Flugverfolgung in Echtzeit.",

vehicleDistanceTitle: "Langstreckenfahrten",
vehicleDistanceText: "Reisen Sie weit mit Ruhe und erstklassigem Komfort.",

vehicleBusinessTitle: "Geschäftsfahrten",
vehicleBusinessText: "Pünktlichkeit, Diskretion und Komfort für Ihre Termine.",

vehicleCustomTitle: "Maßgeschneiderter Service",
vehicleCustomText: "Ein Service, der an Ihre Zeiten und Bedürfnisse angepasst ist.",

businessCardLabel: "Animierte Visitenkarte",
businessCardSubtitle: "Ihr privater Chauffeur in Lille",
businessCardValues: "Komfort • Pünktlichkeit • Gelassenheit",
businessCardJob: "Professioneller VTC-Chauffeur",
businessCardLocation: "Lille - Frankreich",
businessCardBooking: "Reservierung mindestens 24 Stunden im Voraus erforderlich.",

vehicleSlogan: "Reisen Sie anders, reisen Sie besser.",
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
