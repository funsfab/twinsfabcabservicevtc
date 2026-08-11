document.addEventListener("DOMContentLoaded", () => {

  const translations = {
    fr: {
  brandSubtitle: "Votre chauffeur privé à Lille",
      googleReviews: "Avis Google",
  serviceArea: "Lille • Belgique • Paris • Allemagne • Pays-Bas",
      vehicleEyebrow: "L’expérience VTC",
      vehicleTitle: "nouvelle génération",
      whyIntro: "Pourquoi",
whyTitle: "Nous choisir",
whySubtitle: "L’excellence à chaque trajet.",
      whyReliabilityTitle: "Fiabilité & ponctualité",
whyReliabilityText: "Nous respectons toujours vos horaires.",
      whyReliabilityDetail1: "Ponctualité garantie",
whyReliabilityDetail2: "Suivi de votre trajet en temps réel",
whyReliabilityDetail3: "Respect total de vos horaires",
whyReliabilityDetail4: "Prise en charge fiable",

whyComfortTitle: "Confort premium",
whyComfortText: "Voyagez dans une Tesla Model Y 100 % électrique.",
// French
whyComfortDetailsText: "Voyagez dans un véhicule 100 % électrique, silencieux, confortable et moderne.",
whyComfortDetail1: "Tesla Model Y",
whyComfortDetail2: "100 % électrique",
whyComfortDetail3: "4 passagers maximum",
whyComfortDetail4: "Véhicule climatisé",
whyComfortDetail5: "Voyage silencieux",
whyComfortDetail6: "Grand coffre",
whyDriverTitle: "Chauffeur professionnel",
whyDriverText: "Chauffeur expérimenté, courtois et discret.",
    whyDriverDetail1: "Chauffeur expérimenté",
whyDriverDetail2: "Courtois et discret",
whyDriverDetail3: "Service personnalisé",
whyDriverDetail4: "À l’écoute de vos besoins",  

whyAvailabilityTitle: "Disponibilité 24/7",
whyAvailabilityText: "Nous sommes disponibles à tout moment.",
      whyAvailabilityDetailsIntro: "Disponible 24h/24 et 7j/7 sur réservation.",
whyAvailabilityDetail1: "Trajets privés et professionnels",
whyAvailabilityDetail2: "Transferts gares et aéroports",
whyAvailabilityDetail3: "Longues distances en France et en Europe",
whyAvailabilityDetail4: "Réservation minimum 24 heures avant le départ",

whyPaymentTitle: "Paiement sécurisé",
whyPaymentText: "Plusieurs moyens de paiement disponibles.",
      paymentDetail1: "Paiement à distance sécurisé",
paymentDetail2: "Lien de paiement par SMS",
paymentDetail3: "Facture numérique disponible",
paymentDetail4: "Paiement par carte bancaire",
paymentDetail5: "Espèces ou virement bancaire",
paymentDetail6: "PayPal accepté",
     // FRENCH
tarifsTransparentTitle: "Tarifs transparents",
tarifsTransparentText: "Pas de frais cachés",
tarifsCustomTitle: "Devis sur mesure",
tarifsCustomText: "Adapté à vos besoins",
tarifsEyebrow: "Nos",
tarifsTitle: "Tarifs",
tarifsSubtitle: "Des tarifs transparents pour tous vos déplacements.", 
      
// French
whyFooterSlogan: "Votre confort, notre priorité.",
      

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
      whyIntro: "Why",
whyTitle: "Choose us",
whySubtitle: "Excellence on every journey.",
      whyReliabilityTitle: "Reliability & punctuality",
whyReliabilityText: "We always respect your schedule.",
      whyReliabilityDetail1: "Guaranteed punctuality",
whyReliabilityDetail2: "Real-time tracking of your journey",
whyReliabilityDetail3: "Full respect for your schedule",
whyReliabilityDetail4: "Reliable pick-up",

whyComfortTitle: "Premium comfort",
whyComfortText: "Travel in a 100% electric Tesla Model Y.",
      // English
whyComfortDetailsText: "Travel in a 100% electric, quiet, comfortable and modern vehicle.",
whyComfortDetail1: "Tesla Model Y",
whyComfortDetail2: "100% electric",
whyComfortDetail3: "Maximum 4 passengers",
whyComfortDetail4: "Air-conditioned vehicle",
whyComfortDetail5: "Quiet journey",
whyComfortDetail6: "Large boot",
whyDriverTitle: "Professional driver",
whyDriverText: "Experienced, courteous and discreet driver.",
      whyDriverDetail1: "Experienced driver",
whyDriverDetail2: "Courteous and discreet",
whyDriverDetail3: "Personalised service",
whyDriverDetail4: "Attentive to your needs",

whyAvailabilityTitle: "Available 24/7",
whyAvailabilityText: "We are available at all times.",
      whyAvailabilityDetailsIntro: "Available 24/7 by reservation.",
whyAvailabilityDetail1: "Private and business trips",
whyAvailabilityDetail2: "Train station and airport transfers",
whyAvailabilityDetail3: "Long-distance travel in France and Europe",
whyAvailabilityDetail4: "Reservation at least 24 hours before departure",

whyPaymentTitle: "Secure payment",
whyPaymentText: "Several payment methods available.",
      // ENGLISH
tarifsTransparentTitle: "Transparent pricing",
tarifsTransparentText: "No hidden fees",
tarifsCustomTitle: "Tailored quote",
tarifsCustomText: "Adapted to your needs",
tarifsEyebrow: "Our",
tarifsTitle: "Rates",
tarifsSubtitle: "Transparent pricing for all your journeys.",
      paymentDetail1: "Secure remote payment",
paymentDetail2: "Payment link by SMS",
paymentDetail3: "Digital invoice available",
paymentDetail4: "Payment by bank card",
paymentDetail5: "Cash or bank transfer",
paymentDetail6: "PayPal accepted",
      
// English
whyFooterSlogan: "Your comfort, our priority.",

      

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
      whyIntro: "Por qué",
whyTitle: "Elegirnos",
whySubtitle: "La excelencia en cada trayecto.",
      whyReliabilityTitle: "Fiabilidad y puntualidad",
whyReliabilityText: "Siempre respetamos sus horarios.",
      whyReliabilityDetail1: "Puntualidad garantizada",
whyReliabilityDetail2: "Seguimiento de su trayecto en tiempo real",
whyReliabilityDetail3: "Respeto total de sus horarios",
whyReliabilityDetail4: "Recogida fiable",

whyComfortTitle: "Confort premium",
whyComfortText: "Viaje en un Tesla Model Y 100 % eléctrico.",
      // Spanish
whyComfortDetailsText: "Viaje en un vehículo 100 % eléctrico, silencioso, cómodo y moderno.",
whyComfortDetail1: "Tesla Model Y",
whyComfortDetail2: "100% eléctrico",
whyComfortDetail3: "Máximo 4 pasajeros",
whyComfortDetail4: "Vehículo climatizado",
whyComfortDetail5: "Viaje silencioso",
whyComfortDetail6: "Maletero grande",
whyDriverTitle: "Conductor profesional",
whyDriverText: "Conductor experimentado, cortés y discreto.",
      // SPANISH
tarifsTransparentTitle: "Tarifas transparentes",
tarifsTransparentText: "Sin cargos ocultos",
tarifsCustomTitle: "Presupuesto a medida",
tarifsCustomText: "Adaptado a sus necesidades",
tarifsEyebrow: "Nuestras",
tarifsTitle: "Tarifas",
tarifsSubtitle: "Tarifas transparentes para todos sus desplazamientos.",
      whyDriverDetail1: "Conductor experimentado",
whyDriverDetail2: "Cortés y discreto",
whyDriverDetail3: "Servicio personalizado",
whyDriverDetail4: "Atento a sus necesidades",

whyAvailabilityTitle: "Disponibilidad 24/7",
whyAvailabilityText: "Estamos disponibles en todo momento.",
      whyAvailabilityDetailsIntro: "Disponible 24/7 con reserva previa.",
whyAvailabilityDetail1: "Trayectos privados y profesionales",
whyAvailabilityDetail2: "Traslados a estaciones y aeropuertos",
whyAvailabilityDetail3: "Largas distancias en Francia y Europa",
whyAvailabilityDetail4: "Reserva mínima 24 horas antes de la salida",

whyPaymentTitle: "Pago seguro",
whyPaymentText: "Varios métodos de pago disponibles.",
      paymentDetail1: "Pago a distancia seguro",
paymentDetail2: "Enlace de pago por SMS",
paymentDetail3: "Factura digital disponible",
paymentDetail4: "Pago con tarjeta bancaria",
paymentDetail5: "Efectivo o transferencia bancaria",
paymentDetail6: "PayPal aceptado",
      
// Spanish
whyFooterSlogan: "Su comodidad, nuestra prioridad.",      
      

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
      whyIntro: "Warum",
whyTitle: "Uns wählen",
whySubtitle: "Exzellenz auf jeder Fahrt.",
      whyReliabilityTitle: "Zuverlässigkeit & Pünktlichkeit",
whyReliabilityText: "Wir halten Ihre Termine stets ein.",
      whyReliabilityDetail1: "Garantierte Pünktlichkeit",
whyReliabilityDetail2: "Echtzeit-Verfolgung Ihrer Fahrt",
whyReliabilityDetail3: "Volle Einhaltung Ihres Zeitplans",
whyReliabilityDetail4: "Zuverlässige Abholung",

whyComfortTitle: "Premium-Komfort",
whyComfortText: "Fahren Sie in einem 100 % elektrischen Tesla Model Y.",
      // German
whyComfortDetailsText: "Reisen Sie in einem 100 % elektrischen, leisen, komfortablen und modernen Fahrzeug.",
whyComfortDetail1: "Tesla Model Y",
whyComfortDetail2: "100 % elektrisch",
whyComfortDetail3: "Maximal 4 Fahrgäste",
whyComfortDetail4: "Klimatisiertes Fahrzeug",
whyComfortDetail5: "Leise Fahrt",
whyComfortDetail6: "Großer Kofferraum",
whyDriverTitle: "Professioneller Chauffeur",
whyDriverText: "Erfahrener, höflicher und diskreter Chauffeur.",
      // GERMAN
tarifsTransparentTitle: "Transparente Preise",
tarifsTransparentText: "Keine versteckten Gebühren",
tarifsCustomTitle: "Individuelles Angebot",
tarifsCustomText: "An Ihre Bedürfnisse angepasst",
tarifsEyebrow: "Unsere",
tarifsTitle: "Preise",
tarifsSubtitle: "Transparente Preise für all Ihre Fahrten.",
   whyDriverDetail1: "Erfahrener Chauffeur",
whyDriverDetail2: "Höflich und diskret",
whyDriverDetail3: "Persönlicher Service",
whyDriverDetail4: "Auf Ihre Bedürfnisse abgestimmt",   

whyAvailabilityTitle: "24/7 verfügbar",
whyAvailabilityText: "Wir sind jederzeit verfügbar.",
      whyAvailabilityDetailsIntro: "24/7 nach Reservierung verfügbar.",
whyAvailabilityDetail1: "Private und geschäftliche Fahrten",
whyAvailabilityDetail2: "Transfers zu Bahnhöfen und Flughäfen",
whyAvailabilityDetail3: "Langstreckenfahrten in Frankreich und Europa",
whyAvailabilityDetail4: "Reservierung mindestens 24 Stunden vor Abfahrt",

whyPaymentTitle: "Sichere Zahlung",
whyPaymentText: "Mehrere Zahlungsmethoden verfügbar.",
      paymentDetail1: "Sichere Zahlung aus der Ferne",
paymentDetail2: "Zahlungslink per SMS",
paymentDetail3: "Digitale Rechnung verfügbar",
paymentDetail4: "Zahlung per Bankkarte",
paymentDetail5: "Barzahlung oder Banküberweisung",
paymentDetail6: "PayPal akzeptiert",
      
// German
whyFooterSlogan: "Ihr Komfort, unsere Priorität.",
      

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
