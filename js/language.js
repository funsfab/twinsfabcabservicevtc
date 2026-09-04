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
whyAvailabilityDetail4: "Réservation minimum 12 heures avant le départ",

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
      destinationsEyebrow: "Gares & Aéroports",
destinationsTitle: "Desservis",
destinationsSubtitle: "Depuis Lille, nous vous accompagnons vers les principales destinations.",
      // French
destinationsFlightTracking: "Suivi des vols",
destinationsStationPickup: "Prise en charge en gare",
      destinationsStations: "Gares",
      destinationsAirports: "Aéroports",
      // French
destinationsApprox10: "Environ 10 min",
destinationsApprox20: "Environ 20 min",
destinationsApprox1h20: "Environ 1h20",
destinationsApprox2h10: "Environ 2h10",
destinationsMore: "Autres destinations",
destinationsDiscoverAll: "Découvrir toutes nos destinations",
      // French
contactEyebrow: "CONTACT RAPIDE",
contactTitle: "Besoin d’un chauffeur ?",
contactSubtitle: "Nous sommes à votre disposition 7j/7 pour tous vos trajets.",
      // French
contactPhoneTitle: "Téléphone / WhatsApp",
contactPhoneLink: "Réponse rapide",
      // French
contactEmailTitle: "Email",
contactEmailLink: "Nous écrire",
      // French
contactLocationTitle: "Localisation",
contactLocationText: "Lille - France",
contactLocationLink: "Voir sur la carte",
      contactBookingTitle: "Faire une réservation",
      // French
contactAdvantagePremium: "Service premium",
contactAdvantageAvailable: "Disponible 7j/7",
contactAdvantageReliable: "Fiable & ponctuel",
contactAdvantageComfort: "Votre confort, notre priorité",
      // French
contactQuestion: "Comment souhaitez-vous nous contacter ?",
contactChooseOption: "Choisissez une option",
contactCall: "Appeler",
contactSendEmail: "Envoyer un e-mail",
contactCopyEmail: "Copier l'adresse e-mail",
contactClose: "Fermer",
      // French
reviewsGoogleTitle: "Avis Google",
reviewsEyebrow: "Avis Google",
reviewsTitle: "Ce que disent nos clients",
reviewsSubtitle: "Des expériences réelles partagées par nos passagers.",
reviewsGoogleButton: "Voir les avis Google",
reviewsCustomerReviews: "Avis clients",
reviewsSatisfiedCustomers: "Clients satisfaits",

      reviewDate1: "Il y a 10 mois",
reviewText1: "Je viens du Brésil. Excellent transfert de Lille à Paris. Très bon tarif, excellente voiture et ponctualité irréprochable. Je recommande vivement ce service.",

reviewDate2: "Il y a 9 mois",
reviewText2: "Excellent service ! William a été fiable, ponctuel et très sympathique. Il a rendu le trajet fluide et agréable. Je recommande vivement !",

reviewDate3: "Il y a 1 an",
reviewText3: "Excellent ! Chauffeur très poli ! Il était toujours à l’heure et rendait chaque trajet agréable. Je recommande ce chauffeur, vous ne le regretterez pas !",

reviewDate4: "Il y a 1 an",
reviewText4: "Excellent service de A à Z. C’est toujours un plaisir de travailler avec eux. Je recommande à 100 %.",

reviewDate5: "Il y a 9 mois",
reviewText5: "Excellent service ! Chauffeur fiable, sympathique et très respectueux. Conduite fluide, véhicule propre et confortable. Absolument rien à redire, je recommande à 100 % !",

reviewDate6: "Il y a 10 mois",
reviewText6: "Je suis brésilienne et j’étais à Lille pour un déplacement professionnel. J’ai fait appel aux services de William et je le recommande vivement. Il parle anglais, ce qui a facilité la communication. Son professionnalisme, sa ponctualité, sa conduite responsable et sa gentillesse sont remarquables. Notre trajet de Lille à l’aéroport Charles-de-Gaulle pendant la nuit a été impeccable.",

reviewDate7: "Il y a 1 an",
reviewText7: "William est un professionnel respectueux qui conduit parfaitement. La voiture est toujours propre et confortable. Il est sympathique, disponible, souriant et extrêmement ponctuel. N’hésitez pas à faire appel à lui.",

reviewDate8: "Il y a 10 mois",
reviewText8: "Une excellente expérience. Une très belle voiture et un chauffeur bilingue français-anglais, prudent, serviable et ponctuel. Je recommande vivement.",

reviewDate9: "Il y a 1 an",
reviewText9: "Ayant fait appel à ses services à deux reprises, je recommande vivement ce chauffeur. Ponctuel, avec une conduite souple et beaucoup de gentillesse : un vrai professionnel. Je ferais de nouveau appel à lui sans hésitation.",

reviewDate10: "Il y a 2 ans",
reviewText10: "Service professionnel et ponctuel ! La voiture était propre, avec beaucoup d’espace pour les bagages. Je recommande vivement les services de William.",



      // French
footerContactTitle: "Contact",
footerLocation: "Lille - France",
footerAvailability: "7j/7 - 24h/24",
footerProfessionalDrivers: "Chauffeurs professionnels",
footerPremiumVehicle: "Véhicule premium",
footerPunctuality: "Ponctualité garantie",
footerSecurePayment: "Paiement sécurisé",
footerPaymentTitle: "Paiement sécurisé",
footerBankTransfer: "Virement bancaire",
footerRightsReserved: "Tous droits réservés.",
footerLegalNotice: "Mentions légales",
footerPrivacyPolicy: "Politique de confidentialité",
footerTerms: "CGV",

      
      // French
reviewsReadMore: "Lire la suite",
reviewsHide: "Cacher",
      // French
tarifsLocalTitle: "Trajets locaux",
tarifsLocalText: "Déplacements dans Lille et ses alentours.",
tarifsFrom: "À partir de",
tarifsMinimum: "Tarif minimum",
      // French
tarifsMinimumText: "Même pour un trajet de courte distance.",
      // French
tarifsAirportTitle: "Transferts aéroports",
tarifsAirportText: "Transferts vers et depuis tous les aéroports.",
tarifsAccordingTrip: "Selon le trajet",
      tarifsQuote: "Sur devis",
      // French
tarifsStationTitle: "Transferts gares",
tarifsStationText: "Transferts vers et depuis toutes les gares.",
      // French
tarifsHourlyTitle: "Mise à disposition",
tarifsHourlyText: "Véhicule avec chauffeur pour une durée déterminée.",
      // French
tarifsPersonalizedTitle: "Devis personnalisé",
tarifsPersonalizedText: "Longues distances et trajets sur mesure.",
      // French
tarifsFrom: "À partir de",
      // French
tarifsCustomRate: "Tarif personnalisé",
      tarifsQuickResponse: "Réponse rapide",
tarifsPaymentTitle: "Moyens de paiement acceptés",
      // French
tarifsCash: "Espèces",
tarifsCard: "Carte bancaire",
tarifsBankTransfer: "Virement bancaire",
      // French
tarifsBookNow: "Réserver maintenant",
      // French
tarifsFooterNote: "Réservation requise minimum 12h avant le départ.",


      infoNavHome: "Accueil",
infoNavDestinations: "Destinations",
infoNavLegal: "Mentions légales",
infoNavPrivacy: "Confidentialité",
infoNavTerms: "CGV",
infoNavContact: "Contact",
      
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
businessCardBooking: "Réservation minimum 12 h à l’avance.",

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
      whatsapp: "NOUS ÉCRIRE SUR WHATSAPP",
      reservationEyebrow: "RÉSERVATION",
reservationHeroTitle1: "Réservez votre",
reservationHeroTitle2: "chauffeur VTC",
reservationHeroDescription1: "Demande de réservation minimum",
reservationHeroDescription2: "12 heures avant le départ.",
reservationMinimumPrice: "Tarif minimum : 30 €",

      reservationFormTitle: "Votre demande de réservation",
reservationName: "Votre nom complet",
reservationEmail: "Email",
reservationDeparture: "Adresse de départ",
reservationDestination: "Destination",
    reservationFlightTrain: "N° de vol ou de train (optionnel)",
reservationTripType: "Type de trajet",
reservationPassengers: "Nombre de passagers",
reservationPayment: "Mode de paiement souhaité",
reservationBaggage: "Choisissez vos bagages",
reservationAdditionalInfo: "Informations complémentaires (retard de vol, point de rendez-vous, demandes particulières...)",


      reservationTripType: "Type de trajet",
reservationTripOneWay: "Aller simple",
reservationTripRoundTrip: "Aller-retour",

reservationPassengers: "Nombre de passagers",
reservationPassenger1: "1 passager",
reservationPassenger2: "2 passagers",
reservationPassenger3: "3 passagers",
reservationPassenger4: "4 passagers",

      reservationBaggage: "Choisissez vos bagages",
reservationBaggageSmall1: "1 petit bagage",
reservationBaggageLarge1: "1 grand bagage",
reservationBaggageLarge1Small1: "1 grand + 1 petit",
reservationBaggageLarge2Small1: "2 grands + 1 petit",
reservationBaggageLarge2Small2: "2 grands + 2 petits (maximum)",

reservationPayment: "Mode de paiement souhaité",
reservationPaymentCash: "Espèces",
reservationPaymentCard: "Carte bancaire",
reservationPaymentBankTransfer: "Virement bancaire",

      reservationSubmit: "Envoyer ma demande",
reservationPriceNotice: "Le tarif définitif sera communiqué après étude de votre demande.",
reservationHelpTitle: "Besoin d’aide ou une question ?",
reservationHelpText: "Notre équipe est à votre disposition pour toute question.",
reservationHelpWhatsApp: "WhatsApp",
reservationHelpCall: "Appeler",
reservationHelpSms: "SMS",
reservationHelpEmail: "E-mail",
      footerRightsReserved: "Tous droits réservés.",
informationEyebrow: "TOUT CE QU’IL FAUT SAVOIR",
informationTitle: "Informations utiles",
informationDescription: "Retrouvez toutes les informations concernant nos destinations desservies, nos conditions de service et les informations légales.",

      infoCitiesTitle: "Villes desservies",
infoCitiesText: "Voir toutes les villes et régions",
infoStationsTitle: "Gares desservies",
infoStationsText: "Voir toutes les gares principales",
infoAirportsTitle: "Aéroports desservis",
infoAirportsText: "Voir tous les aéroports",

      infoDestinationNotFound: "Destination non trouvée ?",
infoCustomTrips: "Nous réalisons également des trajets sur mesure vers toute destination en France, en Belgique, aux Pays-Bas, en Allemagne et dans les pays voisins.",
infoBookNow: "RÉSERVER MAINTENANT",

      infoLegalNotice: "Mentions légales",
infoPrivacyPolicy: "Politique de confidentialité",
infoTermsConditions: "Conditions générales de vente (CGV)",
infoContact: "Contact",

      footerFrance: "France",
footerComfort: "CONFORT",
footerPunctuality: "PONCTUALITÉ",
footerSafety: "SÉCURITÉ",
footerDiscretion: "DISCRÉTION",
footerRightsReserved: "Tous droits réservés.",

infoLilleMetropolis: "Métropole Européenne de Lille",
infoOtherCitiesFrance: "Autres villes en France",
infoBelgium: "Belgique",
infoNetherlands: "Pays-Bas",

      cityDunkirk: "Dunkerque",
cityKortrijk: "Courtrai",
cityRoeselare: "Roulers",
cityBrussels: "Bruxelles",
cityGhent: "Gand",
cityAntwerp: "Anvers",


      stationLilleFlandres: "Gare Lille-Flandres",
stationLilleEurope: "Gare Lille-Europe",
stationTourcoing: "Gare de Tourcoing",
stationParisNord: "Gare de Paris-Nord",
stationParisLyon: "Gare de Paris-Lyon",

stationBrusselsMidi: "Bruxelles-Midi",
stationBrusselsCentral: "Bruxelles-Central",
stationBrusselsNord: "Bruxelles-Nord",
stationGhentSintPieters: "Gand-Saint-Pierre",
stationAntwerpCentral: "Anvers-Central",


      airportLille: "Aéroport de Lille-Lesquin (LIL)",
airportParisCDG: "Aéroport Paris-Charles-de-Gaulle (CDG)",
airportParisOrly: "Aéroport de Paris-Orly (ORY)",
airportBeauvais: "Aéroport de Beauvais-Tillé (BVA)",

airportBrusselsZaventem: "Aéroport de Bruxelles-Zaventem (BRU)",
airportBrusselsCharleroi: "Aéroport de Bruxelles-Charleroi (CRL)",

airportAmsterdam: "Aéroport d'Amsterdam-Schiphol (AMS)",
airportEindhoven: "Aéroport d'Eindhoven (EIN)",
airportRotterdam: "Aéroport de Rotterdam-La Haye (RTM)",

airportFrankfurt: "Aéroport de Francfort (FRA)",
airportMunich: "Aéroport de Munich (MUC)",
airportBerlin: "Aéroport de Berlin-Brandebourg (BER)",
airportDusseldorf: "Aéroport de Düsseldorf (DUS)",
airportMonchengladbach: "Aéroport de Mönchengladbach (MGL)",

      infoContactAvailability: "Disponible 24h/24 et 7j/7",
infoContactReservationNotice: "Réservation minimum 12 heures à l'avance.",

      
      
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
whyAvailabilityDetail4: "Reservation at least 12 hours before departure",

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
      destinationsEyebrow: "Train Stations & Airports",
destinationsTitle: "Served",
destinationsSubtitle: "From Lille, we take you to the main destinations.",
      // English
destinationsFlightTracking: "Flight tracking",
destinationsStationPickup: "Station pickup",
      destinationsStations: "Train stations",
      destinationsAirports: "Airports",
      // English
destinationsApprox10: "About 10 min",
destinationsApprox20: "About 20 min",
destinationsApprox1h20: "About 1h20",
destinationsApprox2h10: "About 2h10",
destinationsMore: "Other destinations",
destinationsDiscoverAll: "Discover all our destinations",
      // English
contactEyebrow: "QUICK CONTACT",
contactTitle: "Need a driver?",
contactSubtitle: "We are available 7 days a week for all your journeys.",
      // English
contactPhoneTitle: "Phone / WhatsApp",
contactPhoneLink: "Quick response",
      // English
contactEmailTitle: "Email",
contactEmailLink: "Write to us",
      // English
contactLocationTitle: "Location",
contactLocationText: "Lille - France",
contactLocationLink: "View on map",
      contactBookingTitle: "Make a reservation",
      // English
contactAdvantagePremium: "Premium service",
contactAdvantageAvailable: "Available 7 days a week",
contactAdvantageReliable: "Reliable & punctual",
contactAdvantageComfort: "Your comfort, our priority",
      // English
contactQuestion: "How would you like to contact us?",
contactChooseOption: "Choose an option",
contactCall: "Call",
contactSendEmail: "Send an email",
contactCopyEmail: "Copy email address",
contactClose: "Close",
      // English
reviewsGoogleTitle: "Google Reviews",
reviewsEyebrow: "Google Reviews",
reviewsTitle: "What our customers say",
reviewsSubtitle: "Real experiences shared by our passengers.",
reviewsGoogleButton: "View Google reviews",
reviewsCustomerReviews: "Customer reviews",
reviewsSatisfiedCustomers: "Satisfied customers",


      reviewDate1: "10 months ago",
reviewText1: "I come from Brazil. Excellent transfer from Lille to Paris. Very good price, excellent car and impeccable punctuality. I highly recommend this service.",

reviewDate2: "9 months ago",
reviewText2: "Excellent service! William was reliable, punctual and very friendly. He made the journey smooth and pleasant. I highly recommend him!",

reviewDate3: "1 year ago",
reviewText3: "Excellent! Very polite driver! He was always on time and made every journey pleasant. I recommend this driver, you will not regret it!",

reviewDate4: "1 year ago",
reviewText4: "Excellent service from A to Z. It is always a pleasure to work with them. I recommend them 100%.",

reviewDate5: "9 months ago",
reviewText5: "Excellent service! Reliable, friendly and very respectful driver. Smooth driving, clean and comfortable vehicle. Absolutely nothing to complain about, I recommend him 100%!",

reviewDate6: "10 months ago",
reviewText6: "I am Brazilian and was in Lille on a business trip. I used William’s services and highly recommend him. He speaks English, which made communication easier. His professionalism, punctuality, responsible driving and kindness are remarkable. Our nighttime journey from Lille to Charles de Gaulle Airport was impeccable.",

reviewDate7: "1 year ago",
reviewText7: "William is a respectful professional who drives perfectly. The car is always clean and comfortable. He is friendly, available, cheerful and extremely punctual. Do not hesitate to use his services.",

reviewDate8: "10 months ago",
reviewText8: "An excellent experience. A very nice car and a bilingual French-English driver who is careful, helpful and punctual. I highly recommend him.",

reviewDate9: "1 year ago",
reviewText9: "Having used his services twice, I highly recommend this driver. Punctual, with smooth driving and a lot of kindness: a true professional. I would use his services again without hesitation.",

reviewDate10: "2 years ago",
reviewText10: "Professional and punctual service! The car was clean, with plenty of space for luggage. I highly recommend William’s services.",


      // English
footerContactTitle: "Contact",
footerLocation: "Lille - France",
footerAvailability: "7 days a week - 24 hours a day",
footerProfessionalDrivers: "Professional drivers",
footerPremiumVehicle: "Premium vehicle",
footerPunctuality: "Guaranteed punctuality",
footerSecurePayment: "Secure payment",
footerPaymentTitle: "Secure payment",
footerBankTransfer: "Bank transfer",
footerRightsReserved: "All rights reserved.",
footerLegalNotice: "Legal notice",
footerPrivacyPolicy: "Privacy policy",
footerTerms: "Terms & Conditions",

      

// English
reviewsReadMore: "Read more",
reviewsHide: "Hide",
      
      // English
tarifsLocalTitle: "Local trips",
tarifsLocalText: "Trips within Lille and the surrounding area.",
tarifsFrom: "From",
      tarifsCustomRate: "Custom rate",
tarifsMinimum: "Minimum fare",
      // English
tarifsMinimumText: "Even for a short-distance journey.",
      paymentDetail1: "Secure remote payment",
paymentDetail2: "Payment link by SMS",
paymentDetail3: "Digital invoice available",
paymentDetail4: "Payment by bank card",
paymentDetail5: "Cash or bank transfer",
paymentDetail6: "PayPal accepted",
      // English
tarifsAirportTitle: "Airport transfers",
tarifsAirportText: "Transfers to and from all airports.",
tarifsAccordingTrip: "Depending on the trip",
      tarifsQuote: "On request",
      // English
tarifsStationTitle: "Train station transfers",
tarifsStationText: "Transfers to and from all train stations.",
      // English
tarifsHourlyTitle: "Chauffeur at your disposal",
tarifsHourlyText: "Vehicle with driver for a specified period.",
      // English
tarifsPersonalizedTitle: "Custom quote",
tarifsPersonalizedText: "Long-distance and tailor-made journeys.",
      // English
tarifsFrom: "From",
      tarifsQuickResponse: "Quick response",
      // English
tarifsPaymentTitle: "Accepted payment methods",
     // English
tarifsCash: "Cash",
tarifsCard: "Bank card",
tarifsBankTransfer: "Bank transfer", 
      // English
tarifsBookNow: "Book now",
      // English
tarifsFooterNote: "Reservation required at least 12 hours before departure.",



      infoNavHome: "Home",
infoNavDestinations: "Destinations",
infoNavLegal: "Legal notice",
infoNavPrivacy: "Privacy",
infoNavTerms: "Terms & Conditions",
infoNavContact: "Contact",
      
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
businessCardBooking: "Booking required at least 12 hours in advance.",

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
      whatsapp: "MESSAGE US ON WHATSAP",
reservationEyebrow: "RESERVATION",
reservationHeroTitle1: "Book your",
reservationHeroTitle2: "VTC driver",
reservationHeroDescription1: "Reservation required at least",
reservationHeroDescription2: "12 hours before departure.",
reservationMinimumPrice: "Minimum fare: €30",

      reservationFormTitle: "Your reservation request",
reservationName: "Your full name",
reservationEmail: "Email",
reservationDeparture: "Pickup address",
reservationDestination: "Destination",

reservationFlightTrain: "Flight or train number (optional)",
reservationTripType: "Trip type",
reservationPassengers: "Number of passengers",
reservationPayment: "Preferred payment method",
reservationBaggage: "Select your luggage",
reservationAdditionalInfo: "Additional information (flight delay, meeting point, special requests...)",


      reservationTripType: "Trip type",
reservationTripOneWay: "One way",
reservationTripRoundTrip: "Round trip",

reservationPassengers: "Number of passengers",
reservationPassenger1: "1 passenger",
reservationPassenger2: "2 passengers",
reservationPassenger3: "3 passengers",
reservationPassenger4: "4 passengers",

      reservationBaggage: "Choose your luggage",
reservationBaggageSmall1: "1 small bag",
reservationBaggageLarge1: "1 large bag",
reservationBaggageLarge1Small1: "1 large + 1 small",
reservationBaggageLarge2Small1: "2 large + 1 small",
reservationBaggageLarge2Small2: "2 large + 2 small (maximum)",

reservationPayment: "Preferred payment method",
reservationPaymentCash: "Cash",
reservationPaymentCard: "Bank card",
reservationPaymentBankTransfer: "Bank transfer",

reservationSubmit: "Send my request",
reservationPriceNotice: "The final price will be provided after reviewing your request.",
reservationHelpTitle: "Need help or have a question?",
reservationHelpText: "Our team is available to answer any questions.",
reservationHelpWhatsApp: "WhatsApp",
reservationHelpCall: "Call",
reservationHelpSms: "SMS",
reservationHelpEmail: "Email",
      footerRightsReserved: "All rights reserved.",
informationEyebrow: "EVERYTHING YOU NEED TO KNOW",
informationTitle: "Useful information",
informationDescription: "Find all the information about the destinations we serve, our service conditions and legal information.",

      infoCitiesTitle: "Cities served",
infoCitiesText: "View all cities and regions",
infoStationsTitle: "Train stations served",
infoStationsText: "View all major train stations",
infoAirportsTitle: "Airports served",
infoAirportsText: "View all airports",

infoDestinationNotFound: "Destination not found?",
infoCustomTrips: "We also provide tailor-made journeys to any destination in France, Belgium, the Netherlands, Germany and neighboring countries.",
infoBookNow: "BOOK NOW",


      infoLegalNotice: "Legal notice",
infoPrivacyPolicy: "Privacy policy",
infoTermsConditions: "General Terms and Conditions of Sale",
infoContact: "Contact",

      footerFrance: "France",
footerComfort: "COMFORT",
footerPunctuality: "PUNCTUALITY",
footerSafety: "SAFETY",
footerDiscretion: "DISCRETION",
footerRightsReserved: "All rights reserved.",

infoLilleMetropolis: "European Metropolis of Lille",
infoOtherCitiesFrance: "Other cities in France",
infoBelgium: "Belgium",
infoNetherlands: "Netherlands",

      
      cityDunkirk: "Dunkirk",
cityKortrijk: "Kortrijk",
cityRoeselare: "Roeselare",
cityBrussels: "Brussels",
cityGhent: "Ghent",
cityAntwerp: "Antwerp",

      stationLilleFlandres: "Lille-Flandres Station",
stationLilleEurope: "Lille-Europe Station",
stationTourcoing: "Tourcoing Station",
stationParisNord: "Paris-Nord Station",
stationParisLyon: "Paris-Lyon Station",

stationBrusselsMidi: "Brussels-South",
stationBrusselsCentral: "Brussels-Central",
stationBrusselsNord: "Brussels-North",
stationGhentSintPieters: "Ghent-Saint-Peter's",
stationAntwerpCentral: "Antwerp-Central",

      airportLille: "Lille-Lesquin Airport (LIL)",
airportParisCDG: "Paris Charles de Gaulle Airport (CDG)",
airportParisOrly: "Paris-Orly Airport (ORY)",
airportBeauvais: "Beauvais-Tillé Airport (BVA)",

airportBrusselsZaventem: "Brussels-Zaventem Airport (BRU)",
airportBrusselsCharleroi: "Brussels-Charleroi Airport (CRL)",

airportAmsterdam: "Amsterdam Schiphol Airport (AMS)",
airportEindhoven: "Eindhoven Airport (EIN)",
airportRotterdam: "Rotterdam The Hague Airport (RTM)",

airportFrankfurt: "Frankfurt Airport (FRA)",
airportMunich: "Munich Airport (MUC)",
airportBerlin: "Berlin Brandenburg Airport (BER)",
airportDusseldorf: "Düsseldorf Airport (DUS)",
airportMonchengladbach: "Mönchengladbach Airport (MGL)",

      infoContactAvailability: "Available 24/7",
infoContactReservationNotice: "Reservation required at least 12 hours in advance.",
      
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
      destinationsEyebrow: "Estaciones y Aeropuertos",
destinationsTitle: "Con servicio",
destinationsSubtitle: "Desde Lille, le llevamos a los principales destinos.",
      // Spanish
destinationsFlightTracking: "Seguimiento de vuelos",
destinationsStationPickup: "Recogida en la estación",
      destinationsStations: "Estaciones",
      destinationsAirports: "Aeropuertos",
      // Spanish
destinationsApprox10: "Aprox. 10 min",
destinationsApprox20: "Aprox. 20 min",
destinationsApprox1h20: "Aprox. 1h20",
destinationsApprox2h10: "Aprox. 2h10",
destinationsMore: "Otros destinos",
destinationsDiscoverAll: "Descubrir todos nuestros destinos",
      // Spanish
contactEyebrow: "CONTACTO RÁPIDO",
contactTitle: "¿Necesita un chófer?",
contactSubtitle: "Estamos a su disposición los 7 días de la semana para todos sus trayectos.",
      // Spanish
contactPhoneTitle: "Teléfono / WhatsApp",
contactPhoneLink: "Respuesta rápida",
      // Spanish
contactEmailTitle: "Correo electrónico",
contactEmailLink: "Escríbanos",
      // Spanish
contactLocationTitle: "Ubicación",
contactLocationText: "Lille - Francia",
contactLocationLink: "Ver en el mapa",
      contactBookingTitle: "Hacer una reserva",
      // Spanish
contactAdvantagePremium: "Servicio premium",
contactAdvantageAvailable: "Disponible 7 días a la semana",
contactAdvantageReliable: "Fiable y puntual",
contactAdvantageComfort: "Su comodidad, nuestra prioridad",
      // Spanish
contactQuestion: "¿Cómo desea contactarnos?",
contactChooseOption: "Elija una opción",
contactCall: "Llamar",
contactSendEmail: "Enviar un correo electrónico",
contactCopyEmail: "Copiar la dirección de correo",
contactClose: "Cerrar",
      // Spanish
reviewsGoogleTitle: "Reseñas de Google",
reviewsEyebrow: "Reseñas de Google",
reviewsTitle: "Lo que dicen nuestros clientes",
reviewsSubtitle: "Experiencias reales compartidas por nuestros pasajeros.",
reviewsGoogleButton: "Ver las reseñas de Google",
reviewsCustomerReviews: "Reseñas de clientes",
reviewsSatisfiedCustomers: "Clientes satisfechos",


      reviewDate1: "Hace 10 meses",
reviewText1: "Vengo de Brasil. Excelente traslado de Lille a París. Muy buen precio, excelente coche y puntualidad impecable. Recomiendo mucho este servicio.",

reviewDate2: "Hace 9 meses",
reviewText2: "¡Excelente servicio! William fue fiable, puntual y muy amable. Hizo que el trayecto fuera fluido y agradable. ¡Lo recomiendo mucho!",

reviewDate3: "Hace 1 año",
reviewText3: "¡Excelente! ¡Conductor muy educado! Siempre llegaba puntual y hacía que cada trayecto fuera agradable. Recomiendo a este conductor, ¡no se arrepentirá!",

reviewDate4: "Hace 1 año",
reviewText4: "Excelente servicio de principio a fin. Siempre es un placer trabajar con ellos. Los recomiendo al 100 %.",

reviewDate5: "Hace 9 meses",
reviewText5: "¡Excelente servicio! Conductor fiable, amable y muy respetuoso. Conducción suave, vehículo limpio y cómodo. Absolutamente nada que objetar, ¡lo recomiendo al 100 %!",

reviewDate6: "Hace 10 meses",
reviewText6: "Soy brasileña y estaba en Lille por un viaje de negocios. Utilicé los servicios de William y lo recomiendo mucho. Habla inglés, lo que facilitó la comunicación. Su profesionalidad, puntualidad, conducción responsable y amabilidad son extraordinarias. Nuestro trayecto nocturno de Lille al aeropuerto Charles de Gaulle fue impecable.",

reviewDate7: "Hace 1 año",
reviewText7: "William es un profesional respetuoso que conduce perfectamente. El coche está siempre limpio y cómodo. Es amable, disponible, sonriente y extremadamente puntual. No dude en recurrir a sus servicios.",

reviewDate8: "Hace 10 meses",
reviewText8: "Una experiencia excelente. Un coche muy bonito y un conductor bilingüe francés-inglés, prudente, atento y puntual. Lo recomiendo mucho.",

reviewDate9: "Hace 1 año",
reviewText9: "Después de haber utilizado sus servicios en dos ocasiones, recomiendo mucho a este conductor. Puntual, con una conducción suave y mucha amabilidad: un verdadero profesional. Volvería a recurrir a sus servicios sin dudarlo.",

reviewDate10: "Hace 2 años",
reviewText10: "¡Servicio profesional y puntual! El coche estaba limpio y tenía mucho espacio para el equipaje. Recomiendo mucho los servicios de William.",



      // Spanish
footerContactTitle: "Contacto",
footerLocation: "Lille - Francia",
footerAvailability: "7 días a la semana - 24 horas al día",
footerProfessionalDrivers: "Conductores profesionales",
footerPremiumVehicle: "Vehículo premium",
footerPunctuality: "Puntualidad garantizada",
footerSecurePayment: "Pago seguro",
footerPaymentTitle: "Pago seguro",
footerBankTransfer: "Transferencia bancaria",
footerRightsReserved: "Todos los derechos reservados.",
footerLegalNotice: "Aviso legal",
footerPrivacyPolicy: "Política de privacidad",
footerTerms: "Términos y condiciones",

      
      // Spanish
reviewsReadMore: "Leer más",
reviewsHide: "Ocultar",
      // Spanish
tarifsLocalTitle: "Trayectos locales",
tarifsLocalText: "Desplazamientos en Lille y sus alrededores.",
tarifsFrom: "Desde",
      tarifsCustomRate: "Tarifa personalizada",
tarifsMinimum: "Tarifa mínima",
      // Spanish
tarifsMinimumText: "Incluso para un trayecto de corta distancia.",
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
whyAvailabilityDetail4: "Reserva mínima 12 horas antes de la salida",

whyPaymentTitle: "Pago seguro",
whyPaymentText: "Varios métodos de pago disponibles.",
      paymentDetail1: "Pago a distancia seguro",
paymentDetail2: "Enlace de pago por SMS",
paymentDetail3: "Factura digital disponible",
paymentDetail4: "Pago con tarjeta bancaria",
paymentDetail5: "Efectivo o transferencia bancaria",
paymentDetail6: "PayPal aceptado",
      // Spanish
tarifsAirportTitle: "Traslados al aeropuerto",
tarifsAirportText: "Traslados hacia y desde todos los aeropuertos.",
tarifsAccordingTrip: "Según el trayecto",
      tarifsQuote: "Bajo presupuesto",
      // Spanish
tarifsStationTitle: "Traslados a estaciones",
tarifsStationText: "Traslados hacia y desde todas las estaciones.",
      // Spanish
tarifsHourlyTitle: "Servicio a disposición",
tarifsHourlyText: "Vehículo con chófer durante un período determinado.",
      // Spanish
tarifsPersonalizedTitle: "Presupuesto personalizado",
tarifsPersonalizedText: "Largos recorridos y trayectos a medida.",
      // Spanish
tarifsFrom: "Desde",
      tarifsQuickResponse: "Respuesta rápida",
    // Spanish
tarifsPaymentTitle: "Métodos de pago aceptados",
      // Spanish
tarifsCash: "Efectivo",
tarifsCard: "Tarjeta bancaria",
tarifsBankTransfer: "Transferencia bancaria",
      // Spanish
tarifsBookNow: "Reservar ahora",
      // Spanish
tarifsFooterNote: "Reserva obligatoria al menos 12 horas antes de la salida.",


      infoNavHome: "Inicio",
infoNavDestinations: "Destinos",
infoNavLegal: "Aviso legal",
infoNavPrivacy: "Privacidad",
infoNavTerms: "Términos y condiciones",
infoNavContact: "Contacto",
      
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
businessCardBooking: "Reserva obligatoria con al menos 12 h de antelación.",

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
      whatsapp: "ESCRÍBANOS POR WHATSAPP",

  reservationEyebrow: "RESERVA",
reservationHeroTitle1: "Reserve su",
reservationHeroTitle2: "chófer VTC",
reservationHeroDescription1: "Reserva obligatoria con al menos",
reservationHeroDescription2: "12 horas de antelación.",
reservationMinimumPrice: "Tarifa mínima: 30 €",

      reservationFormTitle: "Su solicitud de reserva",
reservationName: "Su nombre completo",
reservationEmail: "Correo electrónico",
reservationDeparture: "Dirección de recogida",
reservationDestination: "Destino",


      reservationFlightTrain: "N.º de vuelo o tren (opcional)",
reservationTripType: "Tipo de trayecto",
reservationPassengers: "Número de pasajeros",
reservationPayment: "Método de pago preferido",
reservationBaggage: "Seleccione su equipaje",
reservationAdditionalInfo: "Información adicional (retraso del vuelo, punto de encuentro, solicitudes especiales...)",

reservationTripType: "Tipo de trayecto",
reservationTripOneWay: "Solo ida",
reservationTripRoundTrip: "Ida y vuelta",

reservationPassengers: "Número de pasajeros",
reservationPassenger1: "1 pasajero",
reservationPassenger2: "2 pasajeros",
reservationPassenger3: "3 pasajeros",
reservationPassenger4: "4 pasajeros",

reservationBaggage: "Seleccione su equipaje",
reservationBaggageSmall1: "1 equipaje pequeño",
reservationBaggageLarge1: "1 equipaje grande",
reservationBaggageLarge1Small1: "1 grande + 1 pequeño",
reservationBaggageLarge2Small1: "2 grandes + 1 pequeño",
reservationBaggageLarge2Small2: "2 grandes + 2 pequeños (máximo)",

reservationPayment: "Método de pago preferido",
reservationPaymentCash: "Efectivo",
reservationPaymentCard: "Tarjeta bancaria",
reservationPaymentBankTransfer: "Transferencia bancaria",

reservationSubmit: "Enviar mi solicitud",
reservationPriceNotice: "El precio final se comunicará después de estudiar su solicitud.",
reservationHelpTitle: "¿Necesita ayuda o tiene alguna pregunta?",
reservationHelpText: "Nuestro equipo está a su disposición para cualquier consulta.",
reservationHelpWhatsApp: "WhatsApp",
reservationHelpCall: "Llamar",
reservationHelpSms: "SMS",
reservationHelpEmail: "Correo electrónico",
      footerRightsReserved: "Todos los derechos reservados.",

informationEyebrow: "TODO LO QUE NECESITA SABER",
informationTitle: "Información útil",
informationDescription: "Encuentre toda la información sobre los destinos que atendemos, nuestras condiciones de servicio y la información legal.",

infoCitiesTitle: "Ciudades atendidas",
infoCitiesText: "Ver todas las ciudades y regiones",
infoStationsTitle: "Estaciones atendidas",
infoStationsText: "Ver todas las estaciones principales",
infoAirportsTitle: "Aeropuertos atendidos",
infoAirportsText: "Ver todos los aeropuertos",

infoDestinationNotFound: "¿No encuentra su destino?",
infoCustomTrips: "También realizamos trayectos a medida a cualquier destino en Francia, Bélgica, Países Bajos, Alemania y los países vecinos.",
infoBookNow: "RESERVAR AHORA",


      infoLegalNotice: "Aviso legal",
infoPrivacyPolicy: "Política de privacidad",
infoTermsConditions: "Condiciones generales de venta",
infoContact: "Contacto",

      footerFrance: "Francia",
footerComfort: "CONFORT",
footerPunctuality: "PUNTUALIDAD",
footerSafety: "SEGURIDAD",
footerDiscretion: "DISCRECIÓN",
footerRightsReserved: "Todos los derechos reservados.",


infoLilleMetropolis: "Metrópoli Europea de Lille",
infoOtherCitiesFrance: "Otras ciudades de Francia",
infoBelgium: "Bélgica",
infoNetherlands: "Países Bajos",
      

cityDunkirk: "Dunkerque",
cityKortrijk: "Cortrique",
cityRoeselare: "Roeselare",
cityBrussels: "Bruselas",
cityGhent: "Gante",
cityAntwerp: "Amberes",


      stationLilleFlandres: "Estación Lille-Flandres",
stationLilleEurope: "Estación Lille-Europe",
stationTourcoing: "Estación de Tourcoing",
stationParisNord: "Estación París-Norte",
stationParisLyon: "Estación París-Lyon",

stationBrusselsMidi: "Bruselas-Sur",
stationBrusselsCentral: "Bruselas-Central",
stationBrusselsNord: "Bruselas-Norte",
stationGhentSintPieters: "Gante-San Pedro",
stationAntwerpCentral: "Amberes-Central",

      airportLille: "Aeropuerto de Lille-Lesquin (LIL)",
airportParisCDG: "Aeropuerto de París-Charles de Gaulle (CDG)",
airportParisOrly: "Aeropuerto de París-Orly (ORY)",
airportBeauvais: "Aeropuerto de Beauvais-Tillé (BVA)",

airportBrusselsZaventem: "Aeropuerto de Bruselas-Zaventem (BRU)",
airportBrusselsCharleroi: "Aeropuerto de Bruselas-Charleroi (CRL)",

airportAmsterdam: "Aeropuerto de Ámsterdam-Schiphol (AMS)",
airportEindhoven: "Aeropuerto de Eindhoven (EIN)",
airportRotterdam: "Aeropuerto de Róterdam-La Haya (RTM)",

airportFrankfurt: "Aeropuerto de Fráncfort (FRA)",
airportMunich: "Aeropuerto de Múnich (MUC)",
airportBerlin: "Aeropuerto de Berlín-Brandeburgo (BER)",
airportDusseldorf: "Aeropuerto de Düsseldorf (DUS)",
airportMonchengladbach: "Aeropuerto de Mönchengladbach (MGL)",


      infoContactAvailability: "Disponible las 24 horas, los 7 días de la semana",
infoContactReservationNotice: "Reserva requerida con al menos 12 horas de antelación.",
      
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
      destinationsEyebrow: "Bahnhöfe & Flughäfen",
destinationsTitle: "Angebunden",
destinationsSubtitle: "Von Lille aus bringen wir Sie zu den wichtigsten Zielen.",
      // German
destinationsFlightTracking: "Flugverfolgung",
destinationsStationPickup: "Abholung am Bahnhof",
      destinationsStations: "Bahnhöfe",
      destinationsAirports: "Flughäfen",
      // German
destinationsApprox10: "Ca. 10 Min.",
destinationsApprox20: "Ca. 20 Min.",
destinationsApprox1h20: "Ca. 1 Std. 20 Min.",
destinationsApprox2h10: "Ca. 2 Std. 10 Min.",
destinationsMore: "Weitere Ziele",
destinationsDiscoverAll: "Alle unsere Ziele entdecken",
      // German
contactEyebrow: "SCHNELLKONTAKT",
contactTitle: "Benötigen Sie einen Fahrer?",
contactSubtitle: "Wir stehen Ihnen 7 Tage die Woche für alle Ihre Fahrten zur Verfügung.",
      // German
contactPhoneTitle: "Telefon / WhatsApp",
contactPhoneLink: "Schnelle Antwort",
      // German
contactEmailTitle: "E-Mail",
contactEmailLink: "Schreiben Sie uns",
      // German
contactLocationTitle: "Standort",
contactLocationText: "Lille - Frankreich",
contactLocationLink: "Auf der Karte ansehen",
      contactBookingTitle: "Eine Reservierung vornehmen",
      // German
contactAdvantagePremium: "Premium-Service",
contactAdvantageAvailable: "7 Tage die Woche verfügbar",
contactAdvantageReliable: "Zuverlässig & pünktlich",
contactAdvantageComfort: "Ihr Komfort, unsere Priorität",
      // German
contactQuestion: "Wie möchten Sie uns kontaktieren?",
contactChooseOption: "Wählen Sie eine Option",
contactCall: "Anrufen",
contactSendEmail: "E-Mail senden",
contactCopyEmail: "E-Mail-Adresse kopieren",
contactClose: "Schließen",
      // German
reviewsGoogleTitle: "Google-Bewertungen",
reviewsEyebrow: "Google-Bewertungen",
reviewsTitle: "Was unsere Kunden sagen",
reviewsSubtitle: "Echte Erfahrungen unserer Fahrgäste.",
reviewsGoogleButton: "Google-Bewertungen ansehen",
reviewsCustomerReviews: "Kundenbewertungen",
reviewsSatisfiedCustomers: "Zufriedene Kunden",


      reviewDate1: "Vor 10 Monaten",
reviewText1: "Ich komme aus Brasilien. Ausgezeichneter Transfer von Lille nach Paris. Sehr guter Preis, hervorragendes Fahrzeug und tadellose Pünktlichkeit. Ich kann diesen Service sehr empfehlen.",

reviewDate2: "Vor 9 Monaten",
reviewText2: "Ausgezeichneter Service! William war zuverlässig, pünktlich und sehr freundlich. Er hat die Fahrt angenehm und reibungslos gemacht. Ich kann ihn sehr empfehlen!",

reviewDate3: "Vor 1 Jahr",
reviewText3: "Ausgezeichnet! Sehr höflicher Fahrer! Er war immer pünktlich und machte jede Fahrt angenehm. Ich kann diesen Fahrer empfehlen, Sie werden es nicht bereuen!",

reviewDate4: "Vor 1 Jahr",
reviewText4: "Ausgezeichneter Service von A bis Z. Es ist immer eine Freude, mit ihnen zusammenzuarbeiten. Ich empfehle sie zu 100 %.",

reviewDate5: "Vor 9 Monaten",
reviewText5: "Ausgezeichneter Service! Zuverlässiger, freundlicher und sehr respektvoller Fahrer. Ruhige Fahrweise, sauberes und komfortables Fahrzeug. Absolut nichts zu beanstanden, ich empfehle ihn zu 100 %!",

reviewDate6: "Vor 10 Monaten",
reviewText6: "Ich bin Brasilianerin und war geschäftlich in Lille. Ich habe Williams Dienste genutzt und kann ihn sehr empfehlen. Er spricht Englisch, was die Kommunikation erleichtert hat. Seine Professionalität, Pünktlichkeit, verantwortungsvolle Fahrweise und Freundlichkeit sind bemerkenswert. Unsere nächtliche Fahrt von Lille zum Flughafen Charles de Gaulle war tadellos.",

reviewDate7: "Vor 1 Jahr",
reviewText7: "William ist ein respektvoller Profi, der hervorragend fährt. Das Auto ist immer sauber und komfortabel. Er ist freundlich, verfügbar, gut gelaunt und äußerst pünktlich. Zögern Sie nicht, seine Dienste in Anspruch zu nehmen.",

reviewDate8: "Vor 10 Monaten",
reviewText8: "Eine ausgezeichnete Erfahrung. Ein sehr schönes Auto und ein zweisprachiger französisch-englischer Fahrer, der vorsichtig, hilfsbereit und pünktlich ist. Ich kann ihn sehr empfehlen.",

reviewDate9: "Vor 1 Jahr",
reviewText9: "Nachdem ich seine Dienste zweimal genutzt habe, kann ich diesen Fahrer sehr empfehlen. Pünktlich, mit ruhiger Fahrweise und großer Freundlichkeit: ein echter Profi. Ich würde seine Dienste jederzeit wieder ohne zu zögern in Anspruch nehmen.",

reviewDate10: "Vor 2 Jahren",
reviewText10: "Professioneller und pünktlicher Service! Das Auto war sauber und bot viel Platz für das Gepäck. Ich kann Williams Dienste sehr empfehlen.",



      // German
footerContactTitle: "Kontakt",
footerLocation: "Lille - Frankreich",
footerAvailability: "7 Tage die Woche - 24 Stunden am Tag",
footerProfessionalDrivers: "Professionelle Fahrer",
footerPremiumVehicle: "Premium-Fahrzeug",
footerPunctuality: "Garantierte Pünktlichkeit",
footerSecurePayment: "Sichere Zahlung",
footerPaymentTitle: "Sichere Zahlung",
footerBankTransfer: "Banküberweisung",
footerRightsReserved: "Alle Rechte vorbehalten.",
footerLegalNotice: "Impressum",
footerPrivacyPolicy: "Datenschutzerklärung",
footerTerms: "AGB",

      
// German
reviewsReadMore: "Mehr lesen",
reviewsHide: "Ausblenden",
      
      // German
tarifsLocalTitle: "Lokale Fahrten",
tarifsLocalText: "Fahrten in Lille und Umgebung.",
tarifsFrom: "Ab",
      tarifsCustomRate: "Individueller Tarif",
tarifsMinimum: "Mindesttarif",
      // German
tarifsMinimumText: "Auch bei einer kurzen Strecke.",
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
whyAvailabilityDetail4: "Reservierung mindestens 12 Stunden vor Abfahrt",

whyPaymentTitle: "Sichere Zahlung",
whyPaymentText: "Mehrere Zahlungsmethoden verfügbar.",
      paymentDetail1: "Sichere Zahlung aus der Ferne",
paymentDetail2: "Zahlungslink per SMS",
paymentDetail3: "Digitale Rechnung verfügbar",
paymentDetail4: "Zahlung per Bankkarte",
paymentDetail5: "Barzahlung oder Banküberweisung",
paymentDetail6: "PayPal akzeptiert",
      // German
tarifsAirportTitle: "Flughafentransfers",
tarifsAirportText: "Transfers zu und von allen Flughäfen.",
tarifsAccordingTrip: "Je nach Strecke",
      // German
tarifsQuote: "Auf Anfrage",
      // German
tarifsStationTitle: "Bahnhoftransfers",
tarifsStationText: "Transfers zu und von allen Bahnhöfen.",
      // German
tarifsHourlyTitle: "Fahrzeug mit Chauffeur",
tarifsHourlyText: "Fahrzeug mit Chauffeur für einen bestimmten Zeitraum.",
      // German
tarifsPersonalizedTitle: "Individuelles Angebot",
tarifsPersonalizedText: "Langstrecken und maßgeschneiderte Fahrten.",
      // German
tarifsFrom: "Ab",
      tarifsQuickResponse: "Schnelle Antwort",
      // German
tarifsPaymentTitle: "Akzeptierte Zahlungsmethoden",
      // German
tarifsCash: "Bargeld",
tarifsCard: "Bankkarte",
tarifsBankTransfer: "Banküberweisung",
      // German
tarifsBookNow: "Jetzt buchen",
      // German
tarifsFooterNote: "Reservierung mindestens 12 Stunden vor der Abfahrt erforderlich.",


      infoNavHome: "Startseite",
infoNavDestinations: "Ziele",
infoNavLegal: "Rechtliche Hinweise",
infoNavPrivacy: "Datenschutz",
infoNavTerms: "AGB",
infoNavContact: "Kontakt",
      
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
businessCardBooking: "Reservierung mindestens 12 Stunden im Voraus erforderlich.",

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
      whatsapp: "WHATSAPP-NACHRICHT SENDEN",
reservationEyebrow: "RESERVIERUNG",
reservationHeroTitle1: "Buchen Sie Ihren",
reservationHeroTitle2: "VTC-Fahrer",
reservationHeroDescription1: "Reservierung mindestens",
reservationHeroDescription2: "12 Stunden vor der Abfahrt.",
reservationMinimumPrice: "Mindesttarif: 30 €",

      reservationFormTitle: "Ihre Reservierungsanfrage",
reservationName: "Ihr vollständiger Name",
reservationEmail: "E-Mail",
reservationDeparture: "Abholadresse",
reservationDestination: "Ziel",

reservationFlightTrain: "Flug- oder Zugnummer (optional)",
reservationTripType: "Art der Fahrt",
reservationPassengers: "Anzahl der Fahrgäste",
reservationPayment: "Bevorzugte Zahlungsmethode",
reservationBaggage: "Wählen Sie Ihr Gepäck",
reservationAdditionalInfo: "Zusätzliche Informationen (Flugverspätung, Treffpunkt, besondere Wünsche...)",
reservationTripType: "Art der Fahrt",
reservationTripOneWay: "Einfache Fahrt",
reservationTripRoundTrip: "Hin- und Rückfahrt",

reservationPassengers: "Anzahl der Fahrgäste",
reservationPassenger1: "1 Fahrgast",
reservationPassenger2: "2 Fahrgäste",
reservationPassenger3: "3 Fahrgäste",
reservationPassenger4: "4 Fahrgäste",

      reservationBaggage: "Wählen Sie Ihr Gepäck",
reservationBaggageSmall1: "1 kleines Gepäckstück",
reservationBaggageLarge1: "1 großes Gepäckstück",
reservationBaggageLarge1Small1: "1 großes + 1 kleines",
reservationBaggageLarge2Small1: "2 große + 1 kleines",
reservationBaggageLarge2Small2: "2 große + 2 kleine (Maximum)",

reservationPayment: "Bevorzugte Zahlungsmethode",
reservationPaymentCash: "Bargeld",
reservationPaymentCard: "Bankkarte",
reservationPaymentBankTransfer: "Banküberweisung",

reservationSubmit: "Anfrage senden",
reservationPriceNotice: "Der endgültige Preis wird Ihnen nach Prüfung Ihrer Anfrage mitgeteilt.",
reservationHelpTitle: "Benötigen Sie Hilfe oder haben Sie eine Frage?",
reservationHelpText: "Unser Team steht Ihnen für alle Fragen zur Verfügung.",
reservationHelpWhatsApp: "WhatsApp",
reservationHelpCall: "Anrufen",
reservationHelpSms: "SMS",
reservationHelpEmail: "E-Mail",
      footerRightsReserved: "Alle Rechte vorbehalten.",
informationEyebrow: "ALLES, WAS SIE WISSEN MÜSSEN",
informationTitle: "Nützliche Informationen",
informationDescription: "Hier finden Sie alle Informationen zu unseren angefahrenen Zielen, unseren Servicebedingungen und den rechtlichen Informationen.",

      infoCitiesTitle: "Bediente Städte",
infoCitiesText: "Alle Städte und Regionen anzeigen",
infoStationsTitle: "Bediente Bahnhöfe",
infoStationsText: "Alle wichtigen Bahnhöfe anzeigen",
infoAirportsTitle: "Bediente Flughäfen",
infoAirportsText: "Alle Flughäfen anzeigen",

      infoDestinationNotFound: "Ziel nicht gefunden?",
infoCustomTrips: "Wir bieten auch maßgeschneiderte Fahrten zu jedem Ziel in Frankreich, Belgien, den Niederlanden, Deutschland und den Nachbarländern an.",
infoBookNow: "JETZT BUCHEN",

      infoLegalNotice: "Impressum",
infoPrivacyPolicy: "Datenschutzerklärung",
infoTermsConditions: "Allgemeine Geschäftsbedingungen (AGB)",
infoContact: "Kontakt",


      footerFrance: "Frankreich",
footerComfort: "KOMFORT",
footerPunctuality: "PÜNKTLICHKEIT",
footerSafety: "SICHERHEIT",
footerDiscretion: "DISKRETION",
footerRightsReserved: "Alle Rechte vorbehalten.",

      infoLilleMetropolis: "Europäische Metropole Lille",
infoOtherCitiesFrance: "Weitere Städte in Frankreich",
infoBelgium: "Belgien",
infoNetherlands: "Niederlande",


      cityDunkirk: "Dünkirchen",
cityKortrijk: "Kortrijk",
cityRoeselare: "Roeselare",
cityBrussels: "Brüssel",
cityGhent: "Gent",
cityAntwerp: "Antwerpen",


      stationLilleFlandres: "Bahnhof Lille-Flandres",
stationLilleEurope: "Bahnhof Lille-Europe",
stationTourcoing: "Bahnhof Tourcoing",
stationParisNord: "Bahnhof Paris-Nord",
stationParisLyon: "Bahnhof Paris-Lyon",

stationBrusselsMidi: "Brüssel-Süd",
stationBrusselsCentral: "Brüssel-Central",
stationBrusselsNord: "Brüssel-Nord",
stationGhentSintPieters: "Gent-Sankt-Peter",
stationAntwerpCentral: "Antwerpen-Central",


      airportLille: "Flughafen Lille-Lesquin (LIL)",
airportParisCDG: "Flughafen Paris-Charles-de-Gaulle (CDG)",
airportParisOrly: "Flughafen Paris-Orly (ORY)",
airportBeauvais: "Flughafen Beauvais-Tillé (BVA)",

airportBrusselsZaventem: "Flughafen Brüssel-Zaventem (BRU)",
airportBrusselsCharleroi: "Flughafen Brüssel-Charleroi (CRL)",

airportAmsterdam: "Flughafen Amsterdam-Schiphol (AMS)",
airportEindhoven: "Flughafen Eindhoven (EIN)",
airportRotterdam: "Flughafen Rotterdam-Den Haag (RTM)",

airportFrankfurt: "Flughafen Frankfurt (FRA)",
airportMunich: "Flughafen München (MUC)",
airportBerlin: "Flughafen Berlin Brandenburg (BER)",
airportDusseldorf: "Flughafen Düsseldorf (DUS)",
airportMonchengladbach: "Flughafen Mönchengladbach (MGL)",


      infoContactAvailability: "24 Stunden am Tag, 7 Tage die Woche verfügbar",
infoContactReservationNotice: "Reservierung mindestens 12 Stunden im Voraus erforderlich.",
      
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

document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
  const key = element.dataset.i18nPlaceholder;

  if (selected[key] !== undefined) {
    element.setAttribute("placeholder", selected[key]);
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

      // On mobile, close the navigation panel after the language is chosen.
      if (window.matchMedia("(max-width: 768px)").matches) {
        const header = button.closest("#mainHeader");
        const nav = header ? header.querySelector("nav") : null;
        const menuButton = header ? header.querySelector(".menu-btn") : null;

        if (nav) nav.classList.remove("open", "active");
        if (menuButton) menuButton.setAttribute("aria-expanded", "false");
      }
    });

  });


  const savedLanguage =
    localStorage.getItem("preferredLanguage") || "fr";

  changeLanguage(savedLanguage);

});


/* =========================================================
   LEGAL PAGES — SAVED-LANGUAGE TRANSLATION
   Uses preferredLanguage saved by the main site.
   No language selector is shown on these pages.
   ========================================================= */
document.addEventListener("DOMContentLoaded", () => {
  const legalPageTranslations = {"mentions-legales.html":{"en":{"Votre chauffeur privé à Lille":"Your private driver in Lille","Retour à l’accueil":"Back to home","Accueil":"Home","Mentions légales":"Legal notice","Politique de confidentialité":"Privacy policy","politique de confidentialité":"privacy policy","CGV":"Terms & Conditions","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – All rights reserved.","Dénomination sociale :":"Company name:","Nom commercial :":"Trading name:","Forme juridique :":"Legal form:","Société par actions simplifiée à associé unique (SASU)":"French simplified joint-stock company with a sole shareholder (SASU)","Capital social :":"Share capital:","Siège social :":"Registered office:","TVA intracommunautaire :":"Intra-Community VAT number:","Téléphone :":"Phone:","Adresse e-mail :":"Email address:","E-mail :":"Email:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, France","Dernière mise à jour : 29 juillet 2026":"Last updated: 29 July 2026","Pour plus d’informations, consultez la":"For more information, please see the","Mentions légales | Twins Fab Cab Service VTC":"Legal notice | Twins Fab Cab Service VTC","Mentions":"Legal","légales":"notice","Informations légales relatives au site internet Twins Fab Cab Service VTC.":"Legal information relating to the Twins Fab Cab Service VTC website.","1. Éditeur du site":"1. Website publisher","Immatriculation :":"Registration:","2. Directeur de la publication":"2. Publication director","Le directeur de la publication du site est :":"The website publication director is:","Monsieur FABAJO Oluwafunsho Seun":"Mr FABAJO Oluwafunsho Seun","En qualité de président de la société TWINS FAB CAB SERVICE.":"In his capacity as President of TWINS FAB CAB SERVICE.","3. Activité réglementée":"3. Regulated activity","Activité de chauffeur VTC (voiture de transport avec chauffeur).":"Private-hire chauffeur activity (VTC – passenger transport vehicle with driver).","Numéro d’inscription au registre des exploitants de VTC :":"Registration number in the VTC operators register:","Registre géré par le ministère chargé des Transports.":"Register managed by the French ministry responsible for transport.","Assistance REVTC :":"REVTC support:","4. Hébergement du site":"4. Website hosting","Le site est hébergé par le service":"The website is hosted by","États-Unis":"United States","Assistance :":"Support:","Centre d’assistance GitHub":"GitHub Support Center","GitHub ne communique pas de numéro de téléphone public pour son service d’hébergement.":"GitHub does not provide a public telephone number for its hosting service.","5. Propriété intellectuelle":"5. Intellectual property","L’ensemble du contenu présent sur ce site, notamment les textes, images, éléments graphiques, logos, icônes et la structure générale, est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.":"All content on this website, including texts, images, graphic elements, logos, icons and the overall structure, is protected by French and international intellectual-property laws.","Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.":"Any total or partial reproduction, representation, modification, publication or adaptation is prohibited without prior written authorisation.","6. Responsabilité":"6. Liability","TWINS FAB CAB SERVICE s’efforce de fournir des informations exactes et régulièrement mises à jour.":"TWINS FAB CAB SERVICE endeavours to provide accurate and regularly updated information.","L’entreprise ne peut cependant garantir l’absence totale d’erreurs ou d’interruptions temporaires du site.":"However, the company cannot guarantee that the website will be entirely free of errors or temporary interruptions.","Les tarifs affichés sont indicatifs. Le tarif définitif est confirmé après étude de la demande de réservation.":"The displayed fares are indicative. The final fare is confirmed after the reservation request has been reviewed.","7. Données personnelles":"7. Personal data","Les informations transmises par le formulaire de réservation sont utilisées uniquement pour traiter les demandes des clients et organiser les trajets.":"Information submitted through the reservation form is used only to process customer requests and organise journeys.","8. Droit applicable":"8. Applicable law","Le présent site et ses mentions légales sont soumis au droit français.":"This website and its legal notice are governed by French law.","En cas de litige, les parties chercheront en priorité une solution amiable avant toute procédure judiciaire.":"In the event of a dispute, the parties will first seek an amicable solution before initiating court proceedings."},"es":{"Votre chauffeur privé à Lille":"Su chófer privado en Lille","Retour à l’accueil":"Volver al inicio","Accueil":"Inicio","Mentions légales":"Aviso legal","Politique de confidentialité":"Política de privacidad","politique de confidentialité":"política de privacidad","CGV":"Condiciones generales","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Todos los derechos reservados.","Dénomination sociale :":"Razón social:","Nom commercial :":"Nombre comercial:","Forme juridique :":"Forma jurídica:","Société par actions simplifiée à associé unique (SASU)":"Sociedad por acciones simplificada unipersonal (SASU)","Capital social :":"Capital social:","Siège social :":"Domicilio social:","TVA intracommunautaire :":"N.º de IVA intracomunitario:","Téléphone :":"Teléfono:","Adresse e-mail :":"Correo electrónico:","E-mail :":"Correo electrónico:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Francia","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Francia","Dernière mise à jour : 29 juillet 2026":"Última actualización: 29 de julio de 2026","Pour plus d’informations, consultez la":"Para más información, consulte la","Mentions légales | Twins Fab Cab Service VTC":"Aviso legal | Twins Fab Cab Service VTC","Mentions":"Aviso","légales":"legal","Informations légales relatives au site internet Twins Fab Cab Service VTC.":"Información legal relativa al sitio web de Twins Fab Cab Service VTC.","1. Éditeur du site":"1. Editor del sitio web","Immatriculation :":"Inscripción registral:","2. Directeur de la publication":"2. Director de la publicación","Le directeur de la publication du site est :":"El director de la publicación del sitio web es:","Monsieur FABAJO Oluwafunsho Seun":"Sr. FABAJO Oluwafunsho Seun","En qualité de président de la société TWINS FAB CAB SERVICE.":"En calidad de presidente de la sociedad TWINS FAB CAB SERVICE.","3. Activité réglementée":"3. Actividad regulada","Activité de chauffeur VTC (voiture de transport avec chauffeur).":"Actividad de chófer VTC (vehículo de transporte con conductor).","Numéro d’inscription au registre des exploitants de VTC :":"Número de inscripción en el registro de operadores VTC:","Registre géré par le ministère chargé des Transports.":"Registro gestionado por el ministerio francés competente en materia de transportes.","Assistance REVTC :":"Asistencia REVTC:","4. Hébergement du site":"4. Alojamiento del sitio web","Le site est hébergé par le service":"El sitio web está alojado por el servicio","États-Unis":"Estados Unidos","Assistance :":"Asistencia:","Centre d’assistance GitHub":"Centro de ayuda de GitHub","GitHub ne communique pas de numéro de téléphone public pour son service d’hébergement.":"GitHub no facilita un número de teléfono público para su servicio de alojamiento.","5. Propriété intellectuelle":"5. Propiedad intelectual","L’ensemble du contenu présent sur ce site, notamment les textes, images, éléments graphiques, logos, icônes et la structure générale, est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.":"Todo el contenido de este sitio web, incluidos los textos, imágenes, elementos gráficos, logotipos, iconos y la estructura general, está protegido por las leyes francesas e internacionales de propiedad intelectual.","Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.":"Queda prohibida cualquier reproducción, representación, modificación, publicación o adaptación, total o parcial, sin autorización previa por escrito.","6. Responsabilité":"6. Responsabilidad","TWINS FAB CAB SERVICE s’efforce de fournir des informations exactes et régulièrement mises à jour.":"TWINS FAB CAB SERVICE procura ofrecer información exacta y actualizada periódicamente.","L’entreprise ne peut cependant garantir l’absence totale d’erreurs ou d’interruptions temporaires du site.":"No obstante, la empresa no puede garantizar la ausencia total de errores o interrupciones temporales del sitio.","Les tarifs affichés sont indicatifs. Le tarif définitif est confirmé après étude de la demande de réservation.":"Las tarifas mostradas son orientativas. La tarifa definitiva se confirma tras estudiar la solicitud de reserva.","7. Données personnelles":"7. Datos personales","Les informations transmises par le formulaire de réservation sont utilisées uniquement pour traiter les demandes des clients et organiser les trajets.":"La información transmitida mediante el formulario de reserva se utiliza únicamente para tramitar las solicitudes de los clientes y organizar los trayectos.","8. Droit applicable":"8. Derecho aplicable","Le présent site et ses mentions légales sont soumis au droit français.":"Este sitio web y su aviso legal se rigen por la legislación francesa.","En cas de litige, les parties chercheront en priorité une solution amiable avant toute procédure judiciaire.":"En caso de litigio, las partes buscarán prioritariamente una solución amistosa antes de iniciar cualquier procedimiento judicial."},"de":{"Votre chauffeur privé à Lille":"Ihr privater Chauffeur in Lille","Retour à l’accueil":"Zurück zur Startseite","Accueil":"Startseite","Mentions légales":"Impressum","Politique de confidentialité":"Datenschutzerklärung","politique de confidentialité":"Datenschutzerklärung","CGV":"AGB","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Alle Rechte vorbehalten.","Dénomination sociale :":"Firmenbezeichnung:","Nom commercial :":"Handelsname:","Forme juridique :":"Rechtsform:","Société par actions simplifiée à associé unique (SASU)":"Vereinfachte Aktiengesellschaft mit Alleingesellschafter (SASU)","Capital social :":"Stammkapital:","Siège social :":"Firmensitz:","TVA intracommunautaire :":"Umsatzsteuer-Identifikationsnummer:","Téléphone :":"Telefon:","Adresse e-mail :":"E-Mail-Adresse:","E-mail :":"E-Mail:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Frankreich","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Frankreich","Dernière mise à jour : 29 juillet 2026":"Letzte Aktualisierung: 29. Juli 2026","Pour plus d’informations, consultez la":"Weitere Informationen finden Sie in der","Mentions légales | Twins Fab Cab Service VTC":"Impressum | Twins Fab Cab Service VTC","Mentions":"Impressum","légales":"","Informations légales relatives au site internet Twins Fab Cab Service VTC.":"Rechtliche Informationen zur Website von Twins Fab Cab Service VTC.","1. Éditeur du site":"1. Websitebetreiber","Immatriculation :":"Handelsregistereintrag:","2. Directeur de la publication":"2. Verantwortlicher für die Veröffentlichung","Le directeur de la publication du site est :":"Verantwortlicher für die Veröffentlichung der Website ist:","Monsieur FABAJO Oluwafunsho Seun":"Herr FABAJO Oluwafunsho Seun","En qualité de président de la société TWINS FAB CAB SERVICE.":"In seiner Eigenschaft als Präsident der Gesellschaft TWINS FAB CAB SERVICE.","3. Activité réglementée":"3. Regulierte Tätigkeit","Activité de chauffeur VTC (voiture de transport avec chauffeur).":"VTC-Chauffeurdienst (Personenbeförderung mit Fahrer).","Numéro d’inscription au registre des exploitants de VTC :":"Registrierungsnummer im VTC-Betreiberregister:","Registre géré par le ministère chargé des Transports.":"Register, das vom französischen Verkehrsministerium geführt wird.","Assistance REVTC :":"REVTC-Support:","4. Hébergement du site":"4. Hosting der Website","Le site est hébergé par le service":"Die Website wird gehostet über","États-Unis":"Vereinigte Staaten","Assistance :":"Support:","Centre d’assistance GitHub":"GitHub Support-Center","GitHub ne communique pas de numéro de téléphone public pour son service d’hébergement.":"GitHub stellt für seinen Hosting-Dienst keine öffentliche Telefonnummer bereit.","5. Propriété intellectuelle":"5. Geistiges Eigentum","L’ensemble du contenu présent sur ce site, notamment les textes, images, éléments graphiques, logos, icônes et la structure générale, est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.":"Sämtliche Inhalte dieser Website, insbesondere Texte, Bilder, grafische Elemente, Logos, Symbole und die allgemeine Struktur, sind durch französische und internationale Vorschriften zum geistigen Eigentum geschützt.","Toute reproduction, représentation, modification, publication ou adaptation, totale ou partielle, est interdite sans autorisation écrite préalable.":"Jede vollständige oder teilweise Vervielfältigung, Darstellung, Änderung, Veröffentlichung oder Anpassung ist ohne vorherige schriftliche Genehmigung untersagt.","6. Responsabilité":"6. Haftung","TWINS FAB CAB SERVICE s’efforce de fournir des informations exactes et régulièrement mises à jour.":"TWINS FAB CAB SERVICE bemüht sich, genaue und regelmäßig aktualisierte Informationen bereitzustellen.","L’entreprise ne peut cependant garantir l’absence totale d’erreurs ou d’interruptions temporaires du site.":"Das Unternehmen kann jedoch nicht garantieren, dass die Website vollständig frei von Fehlern oder vorübergehenden Unterbrechungen ist.","Les tarifs affichés sont indicatifs. Le tarif définitif est confirmé après étude de la demande de réservation.":"Die angezeigten Preise sind Richtwerte. Der endgültige Preis wird nach Prüfung der Reservierungsanfrage bestätigt.","7. Données personnelles":"7. Personenbezogene Daten","Les informations transmises par le formulaire de réservation sont utilisées uniquement pour traiter les demandes des clients et organiser les trajets.":"Die über das Reservierungsformular übermittelten Informationen werden ausschließlich zur Bearbeitung von Kundenanfragen und zur Organisation der Fahrten verwendet.","8. Droit applicable":"8. Anwendbares Recht","Le présent site et ses mentions légales sont soumis au droit français.":"Diese Website und ihr Impressum unterliegen französischem Recht.","En cas de litige, les parties chercheront en priorité une solution amiable avant toute procédure judiciaire.":"Im Streitfall werden die Parteien vorrangig eine gütliche Lösung anstreben, bevor gerichtliche Schritte eingeleitet werden."}},"politique-confidentialite.html":{"en":{"Votre chauffeur privé à Lille":"Your private driver in Lille","Retour à l’accueil":"Back to home","Accueil":"Home","Mentions légales":"Legal notice","Politique de confidentialité":"Privacy policy","politique de confidentialité":"privacy policy","CGV":"Terms & Conditions","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – All rights reserved.","Dénomination sociale :":"Company name:","Nom commercial :":"Trading name:","Forme juridique :":"Legal form:","Société par actions simplifiée à associé unique (SASU)":"French simplified joint-stock company with a sole shareholder (SASU)","Capital social :":"Share capital:","Siège social :":"Registered office:","TVA intracommunautaire :":"Intra-Community VAT number:","Téléphone :":"Phone:","Adresse e-mail :":"Email address:","E-mail :":"Email:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, France","Dernière mise à jour : 29 juillet 2026":"Last updated: 29 July 2026","Pour plus d’informations, consultez la":"For more information, please see the","Politique de confidentialité | Twins Fab Cab Service VTC":"Privacy policy | Twins Fab Cab Service VTC","Politique de":"Privacy","confidentialité":"policy","Cette page explique comment Twins Fab Cab Service collecte, utilise et protège les données personnelles transmises par les utilisateurs du site.":"This page explains how Twins Fab Cab Service collects, uses and protects personal data submitted by website users.","1. Responsable du traitement":"1. Data controller","Le responsable du traitement des données personnelles est :":"The controller responsible for personal-data processing is:","Société :":"Company:","2. Données collectées":"2. Data collected","Lors d’une demande de réservation ou d’une prise de contact, les informations suivantes peuvent être transmises :":"When making a reservation request or contacting us, the following information may be submitted:","Nom et prénom":"First and last name","Numéro de téléphone":"Telephone number","Adresse e-mail":"Email address","Adresse de départ et destination":"Pickup address and destination","Date et heure du trajet":"Date and time of the journey","Nombre de passagers et de bagages":"Number of passengers and pieces of luggage","Numéro de vol ou de train":"Flight or train number","Mode de paiement souhaité":"Preferred payment method","Informations complémentaires communiquées librement":"Additional information provided voluntarily","3. Finalités du traitement":"3. Purposes of processing","Les données sont utilisées uniquement pour :":"The data is used only to:","Répondre aux demandes de renseignements":"Respond to enquiries","Étudier et confirmer les réservations":"Review and confirm reservations","Organiser et réaliser les trajets demandés":"Organise and provide the requested journeys","Contacter le client au sujet de son trajet":"Contact the customer regarding their journey","Établir des devis, factures et justificatifs":"Prepare quotes, invoices and supporting documents","Respecter les obligations légales et comptables":"Comply with legal and accounting obligations","Assurer la sécurité et le bon fonctionnement du site":"Ensure the security and proper operation of the website","4. Bases juridiques":"4. Legal bases","Traitement":"Processing","Base juridique":"Legal basis","Réponse à une demande de réservation ou de devis":"Response to a reservation or quotation request","Mesures précontractuelles prises à la demande du client":"Pre-contractual measures taken at the customer’s request","Organisation et réalisation du trajet":"Organisation and performance of the journey","Exécution du contrat de transport":"Performance of the transport contract","Facturation et comptabilité":"Invoicing and accounting","Respect des obligations légales":"Compliance with legal obligations","Sécurité du site et prévention des abus":"Website security and abuse prevention","Intérêt légitime de l’entreprise":"Legitimate interests of the company","5. Fonctionnement du formulaire de réservation":"5. How the reservation form works","Le site est un site statique et ne possède pas de base de données enregistrant automatiquement les formulaires de réservation.":"The website is static and does not have a database that automatically stores reservation forms.","Après avoir rempli le formulaire, le client choisit lui-même le moyen par lequel il souhaite envoyer sa demande :":"After completing the form, the customer chooses how they wish to send their request:","La demande est alors transmise par le service choisi. Le traitement effectué ensuite par WhatsApp, l’opérateur téléphonique ou le fournisseur de messagerie relève également de leurs propres politiques de confidentialité.":"The request is then transmitted through the selected service. Any subsequent processing by WhatsApp, the telephone operator or the email provider is also subject to their own privacy policies.","6. Autocomplétion des adresses":"6. Address autocomplete","Le formulaire de réservation utilise le service Geoapify pour proposer des adresses pendant la saisie des lieux de départ et de destination.":"The reservation form uses Geoapify to suggest addresses while pickup and destination locations are being entered.","Lorsque l’utilisateur commence à saisir une adresse, les caractères saisis et certaines informations techniques nécessaires à la connexion sont transmis à Geoapify pour fournir les suggestions.":"When the user starts entering an address, the characters entered and certain technical information required for the connection are sent to Geoapify in order to provide suggestions.","Politique de confidentialité :":"Privacy policy:","7. Hébergement et données techniques":"7. Hosting and technical data","Le site est hébergé par":"The website is hosted by","Lorsqu’une personne visite un site GitHub Pages, GitHub peut enregistrer son adresse IP et certaines données techniques, notamment à des fins de sécurité.":"When someone visits a GitHub Pages website, GitHub may record their IP address and certain technical data, particularly for security purposes.","8. Destinataires des données":"8. Recipients of the data","Les données sont accessibles uniquement aux personnes et prestataires ayant besoin de les traiter :":"The data is accessible only to the persons and service providers who need to process it:","Le responsable de TWINS FAB CAB SERVICE":"The person responsible for TWINS FAB CAB SERVICE","Les prestataires comptables ou juridiques, lorsque cela est nécessaire":"Accounting or legal service providers, where necessary","Le service de communication choisi par le client : WhatsApp, SMS ou messagerie électronique":"The communication service chosen by the customer: WhatsApp, SMS or email","Geoapify pour les suggestions d’adresses":"Geoapify for address suggestions","GitHub Pages pour l’hébergement du site":"GitHub Pages for website hosting","Les autorités compétentes lorsqu’une obligation légale l’exige":"The competent authorities where required by law","TWINS FAB CAB SERVICE ne vend ni ne loue les données personnelles de ses clients à des tiers.":"TWINS FAB CAB SERVICE does not sell or rent its customers’ personal data to third parties.","9. Durées de conservation":"9. Retention periods","Type de données":"Type of data","Durée ou critère de conservation":"Retention period or criterion","Demande de renseignement ou de réservation sans suite":"Unsuccessful enquiry or reservation request","Le temps nécessaire au traitement et au suivi de la demande, avec suppression au plus tard trois ans après le dernier contact":"For as long as necessary to process and follow up the request, with deletion no later than three years after the last contact","Contrats, réservations et correspondances commerciales":"Contracts, reservations and business correspondence","Jusqu’à cinq ans après la fin de la prestation, lorsque leur conservation est nécessaire":"Up to five years after the service has ended, where retention is necessary","Factures et documents comptables":"Invoices and accounting documents","Dix ans conformément aux obligations comptables applicables":"Ten years in accordance with applicable accounting obligations","Données techniques d’hébergement":"Technical hosting data","Selon les durées définies par GitHub dans sa politique de confidentialité":"According to the periods defined by GitHub in its privacy policy","10. Cookies et traceurs":"10. Cookies and trackers","À la date de la présente politique, le site n’utilise aucun outil de publicité personnalisée ni outil de mesure d’audience installé par TWINS FAB CAB SERVICE.":"As of the date of this policy, the website does not use any personalised-advertising tools or audience-measurement tools installed by TWINS FAB CAB SERVICE.","Aucun cookie publicitaire n’est volontairement déposé par le site.":"The website does not intentionally place any advertising cookies.","Des prestataires techniques externes peuvent toutefois recevoir des informations techniques nécessaires au chargement de leurs services ou ressources.":"However, external technical service providers may receive technical information necessary to load their services or resources.","11. Transferts hors de l’Union européenne":"11. Transfers outside the European Union","Certains prestataires utilisés par le site ou choisis par le client peuvent traiter des données en dehors de l’Espace économique européen.":"Some service providers used by the website or chosen by the customer may process data outside the European Economic Area.","Ces traitements sont alors soumis aux garanties et mécanismes de protection prévus par les prestataires concernés et par la réglementation applicable.":"Such processing is then subject to the safeguards and protection mechanisms provided by the relevant service providers and applicable regulations.","12. Sécurité":"12. Security","TWINS FAB CAB SERVICE met en œuvre des mesures raisonnables afin de protéger les données contre la perte, l’accès non autorisé, la modification ou la divulgation.":"TWINS FAB CAB SERVICE implements reasonable measures to protect data against loss, unauthorised access, alteration or disclosure.","Aucun système de transmission sur internet ne peut néanmoins garantir une sécurité absolue.":"However, no internet transmission system can guarantee absolute security.","13. Vos droits":"13. Your rights","Selon la réglementation applicable, vous pouvez demander :":"Depending on the applicable regulations, you may request:","L’accès à vos données personnelles":"Access to your personal data","La rectification de données inexactes":"Correction of inaccurate data","L’effacement de vos données":"Erasure of your data","La limitation du traitement":"Restriction of processing","L’opposition à certains traitements":"Objection to certain processing","La portabilité des données, lorsque applicable":"Data portability, where applicable","Le retrait de votre consentement lorsqu’un traitement repose sur celui-ci":"Withdrawal of your consent where processing is based on it","14. Exercer vos droits":"14. Exercising your rights","Pour exercer vos droits ou poser une question sur l’utilisation de vos données, vous pouvez contacter :":"To exercise your rights or ask a question about the use of your data, you can contact:","Une preuve d’identité pourra être demandée uniquement lorsque cela est nécessaire pour vérifier l’identité de la personne effectuant la demande.":"Proof of identity may be requested only where necessary to verify the identity of the person making the request.","15. Réclamation auprès de la CNIL":"15. Complaint to the CNIL","Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés.":"If you believe your rights are not being respected, you may lodge a complaint with the French data-protection authority, the CNIL.","Déposer une plainte auprès de la CNIL":"File a complaint with the CNIL","16. Modification de la politique":"16. Changes to this policy","Cette politique peut être modifiée afin de tenir compte des évolutions du site, des services utilisés ou de la réglementation.":"This policy may be amended to reflect changes to the website, the services used or the applicable regulations.","La date de la dernière mise à jour est indiquée en haut de cette page.":"The date of the latest update is shown at the top of this page."},"es":{"Votre chauffeur privé à Lille":"Su chófer privado en Lille","Retour à l’accueil":"Volver al inicio","Accueil":"Inicio","Mentions légales":"Aviso legal","Politique de confidentialité":"Política de privacidad","politique de confidentialité":"política de privacidad","CGV":"Condiciones generales","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Todos los derechos reservados.","Dénomination sociale :":"Razón social:","Nom commercial :":"Nombre comercial:","Forme juridique :":"Forma jurídica:","Société par actions simplifiée à associé unique (SASU)":"Sociedad por acciones simplificada unipersonal (SASU)","Capital social :":"Capital social:","Siège social :":"Domicilio social:","TVA intracommunautaire :":"N.º de IVA intracomunitario:","Téléphone :":"Teléfono:","Adresse e-mail :":"Correo electrónico:","E-mail :":"Correo electrónico:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Francia","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Francia","Dernière mise à jour : 29 juillet 2026":"Última actualización: 29 de julio de 2026","Pour plus d’informations, consultez la":"Para más información, consulte la","Politique de confidentialité | Twins Fab Cab Service VTC":"Política de privacidad | Twins Fab Cab Service VTC","Politique de":"Política de","confidentialité":"privacidad","Cette page explique comment Twins Fab Cab Service collecte, utilise et protège les données personnelles transmises par les utilisateurs du site.":"Esta página explica cómo Twins Fab Cab Service recopila, utiliza y protege los datos personales transmitidos por los usuarios del sitio.","1. Responsable du traitement":"1. Responsable del tratamiento","Le responsable du traitement des données personnelles est :":"El responsable del tratamiento de los datos personales es:","Société :":"Empresa:","2. Données collectées":"2. Datos recopilados","Lors d’une demande de réservation ou d’une prise de contact, les informations suivantes peuvent être transmises :":"Al realizar una solicitud de reserva o ponerse en contacto, pueden transmitirse los siguientes datos:","Nom et prénom":"Nombre y apellidos","Numéro de téléphone":"Número de teléfono","Adresse e-mail":"Correo electrónico","Adresse de départ et destination":"Dirección de recogida y destino","Date et heure du trajet":"Fecha y hora del trayecto","Nombre de passagers et de bagages":"Número de pasajeros y equipajes","Numéro de vol ou de train":"Número de vuelo o tren","Mode de paiement souhaité":"Método de pago preferido","Informations complémentaires communiquées librement":"Información adicional facilitada voluntariamente","3. Finalités du traitement":"3. Finalidades del tratamiento","Les données sont utilisées uniquement pour :":"Los datos se utilizan únicamente para:","Répondre aux demandes de renseignements":"Responder a solicitudes de información","Étudier et confirmer les réservations":"Estudiar y confirmar las reservas","Organiser et réaliser les trajets demandés":"Organizar y realizar los trayectos solicitados","Contacter le client au sujet de son trajet":"Contactar al cliente en relación con su trayecto","Établir des devis, factures et justificatifs":"Elaborar presupuestos, facturas y justificantes","Respecter les obligations légales et comptables":"Cumplir las obligaciones legales y contables","Assurer la sécurité et le bon fonctionnement du site":"Garantizar la seguridad y el correcto funcionamiento del sitio","4. Bases juridiques":"4. Bases jurídicas","Traitement":"Tratamiento","Base juridique":"Base jurídica","Réponse à une demande de réservation ou de devis":"Respuesta a una solicitud de reserva o presupuesto","Mesures précontractuelles prises à la demande du client":"Medidas precontractuales adoptadas a solicitud del cliente","Organisation et réalisation du trajet":"Organización y realización del trayecto","Exécution du contrat de transport":"Ejecución del contrato de transporte","Facturation et comptabilité":"Facturación y contabilidad","Respect des obligations légales":"Cumplimiento de las obligaciones legales","Sécurité du site et prévention des abus":"Seguridad del sitio y prevención de abusos","Intérêt légitime de l’entreprise":"Interés legítimo de la empresa","5. Fonctionnement du formulaire de réservation":"5. Funcionamiento del formulario de reserva","Le site est un site statique et ne possède pas de base de données enregistrant automatiquement les formulaires de réservation.":"El sitio es estático y no dispone de una base de datos que registre automáticamente los formularios de reserva.","Après avoir rempli le formulaire, le client choisit lui-même le moyen par lequel il souhaite envoyer sa demande :":"Tras completar el formulario, el cliente elige el medio por el que desea enviar su solicitud:","La demande est alors transmise par le service choisi. Le traitement effectué ensuite par WhatsApp, l’opérateur téléphonique ou le fournisseur de messagerie relève également de leurs propres politiques de confidentialité.":"La solicitud se transmite entonces mediante el servicio elegido. El tratamiento posterior realizado por WhatsApp, el operador telefónico o el proveedor de correo electrónico también se rige por sus propias políticas de privacidad.","6. Autocomplétion des adresses":"6. Autocompletado de direcciones","Le formulaire de réservation utilise le service Geoapify pour proposer des adresses pendant la saisie des lieux de départ et de destination.":"El formulario de reserva utiliza Geoapify para sugerir direcciones durante la introducción de los lugares de recogida y destino.","Lorsque l’utilisateur commence à saisir une adresse, les caractères saisis et certaines informations techniques nécessaires à la connexion sont transmis à Geoapify pour fournir les suggestions.":"Cuando el usuario comienza a introducir una dirección, los caracteres escritos y cierta información técnica necesaria para la conexión se transmiten a Geoapify para proporcionar las sugerencias.","Politique de confidentialité :":"Política de privacidad:","7. Hébergement et données techniques":"7. Alojamiento y datos técnicos","Le site est hébergé par":"El sitio web está alojado por","Lorsqu’une personne visite un site GitHub Pages, GitHub peut enregistrer son adresse IP et certaines données techniques, notamment à des fins de sécurité.":"Cuando una persona visita un sitio de GitHub Pages, GitHub puede registrar su dirección IP y determinados datos técnicos, especialmente por motivos de seguridad.","8. Destinataires des données":"8. Destinatarios de los datos","Les données sont accessibles uniquement aux personnes et prestataires ayant besoin de les traiter :":"Los datos solo son accesibles para las personas y proveedores que necesitan tratarlos:","Le responsable de TWINS FAB CAB SERVICE":"El responsable de TWINS FAB CAB SERVICE","Les prestataires comptables ou juridiques, lorsque cela est nécessaire":"Los proveedores de servicios contables o jurídicos, cuando sea necesario","Le service de communication choisi par le client : WhatsApp, SMS ou messagerie électronique":"El servicio de comunicación elegido por el cliente: WhatsApp, SMS o correo electrónico","Geoapify pour les suggestions d’adresses":"Geoapify para las sugerencias de direcciones","GitHub Pages pour l’hébergement du site":"GitHub Pages para el alojamiento del sitio","Les autorités compétentes lorsqu’une obligation légale l’exige":"Las autoridades competentes cuando lo exija una obligación legal","TWINS FAB CAB SERVICE ne vend ni ne loue les données personnelles de ses clients à des tiers.":"TWINS FAB CAB SERVICE no vende ni alquila los datos personales de sus clientes a terceros.","9. Durées de conservation":"9. Plazos de conservación","Type de données":"Tipo de datos","Durée ou critère de conservation":"Plazo o criterio de conservación","Demande de renseignement ou de réservation sans suite":"Solicitud de información o reserva sin continuación","Le temps nécessaire au traitement et au suivi de la demande, avec suppression au plus tard trois ans après le dernier contact":"El tiempo necesario para tramitar y hacer seguimiento de la solicitud, con supresión como máximo tres años después del último contacto","Contrats, réservations et correspondances commerciales":"Contratos, reservas y correspondencia comercial","Jusqu’à cinq ans après la fin de la prestation, lorsque leur conservation est nécessaire":"Hasta cinco años después de la finalización del servicio, cuando sea necesaria su conservación","Factures et documents comptables":"Facturas y documentos contables","Dix ans conformément aux obligations comptables applicables":"Diez años de conformidad con las obligaciones contables aplicables","Données techniques d’hébergement":"Datos técnicos de alojamiento","Selon les durées définies par GitHub dans sa politique de confidentialité":"Según los plazos definidos por GitHub en su política de privacidad","10. Cookies et traceurs":"10. Cookies y rastreadores","À la date de la présente politique, le site n’utilise aucun outil de publicité personnalisée ni outil de mesure d’audience installé par TWINS FAB CAB SERVICE.":"En la fecha de esta política, el sitio no utiliza herramientas de publicidad personalizada ni herramientas de medición de audiencia instaladas por TWINS FAB CAB SERVICE.","Aucun cookie publicitaire n’est volontairement déposé par le site.":"El sitio no deposita voluntariamente ninguna cookie publicitaria.","Des prestataires techniques externes peuvent toutefois recevoir des informations techniques nécessaires au chargement de leurs services ou ressources.":"No obstante, proveedores técnicos externos pueden recibir información técnica necesaria para cargar sus servicios o recursos.","11. Transferts hors de l’Union européenne":"11. Transferencias fuera de la Unión Europea","Certains prestataires utilisés par le site ou choisis par le client peuvent traiter des données en dehors de l’Espace économique européen.":"Algunos proveedores utilizados por el sitio o elegidos por el cliente pueden tratar datos fuera del Espacio Económico Europeo.","Ces traitements sont alors soumis aux garanties et mécanismes de protection prévus par les prestataires concernés et par la réglementation applicable.":"Estos tratamientos están sujetos a las garantías y mecanismos de protección previstos por los proveedores correspondientes y la normativa aplicable.","12. Sécurité":"12. Seguridad","TWINS FAB CAB SERVICE met en œuvre des mesures raisonnables afin de protéger les données contre la perte, l’accès non autorisé, la modification ou la divulgation.":"TWINS FAB CAB SERVICE aplica medidas razonables para proteger los datos contra la pérdida, el acceso no autorizado, la modificación o la divulgación.","Aucun système de transmission sur internet ne peut néanmoins garantir une sécurité absolue.":"No obstante, ningún sistema de transmisión por internet puede garantizar una seguridad absoluta.","13. Vos droits":"13. Sus derechos","Selon la réglementation applicable, vous pouvez demander :":"De acuerdo con la normativa aplicable, puede solicitar:","L’accès à vos données personnelles":"El acceso a sus datos personales","La rectification de données inexactes":"La rectificación de datos inexactos","L’effacement de vos données":"La supresión de sus datos","La limitation du traitement":"La limitación del tratamiento","L’opposition à certains traitements":"La oposición a determinados tratamientos","La portabilité des données, lorsque applicable":"La portabilidad de los datos, cuando sea aplicable","Le retrait de votre consentement lorsqu’un traitement repose sur celui-ci":"La retirada de su consentimiento cuando el tratamiento se base en él","14. Exercer vos droits":"14. Ejercicio de sus derechos","Pour exercer vos droits ou poser une question sur l’utilisation de vos données, vous pouvez contacter :":"Para ejercer sus derechos o plantear una pregunta sobre el uso de sus datos, puede contactar con:","Une preuve d’identité pourra être demandée uniquement lorsque cela est nécessaire pour vérifier l’identité de la personne effectuant la demande.":"Solo podrá solicitarse una prueba de identidad cuando sea necesario verificar la identidad de la persona que realiza la solicitud.","15. Réclamation auprès de la CNIL":"15. Reclamación ante la CNIL","Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés.":"Si considera que no se respetan sus derechos, puede presentar una reclamación ante la autoridad francesa de protección de datos, la CNIL.","Déposer une plainte auprès de la CNIL":"Presentar una reclamación ante la CNIL","16. Modification de la politique":"16. Modificación de la política","Cette politique peut être modifiée afin de tenir compte des évolutions du site, des services utilisés ou de la réglementation.":"Esta política puede modificarse para tener en cuenta cambios en el sitio, los servicios utilizados o la normativa.","La date de la dernière mise à jour est indiquée en haut de cette page.":"La fecha de la última actualización se indica en la parte superior de esta página."},"de":{"Votre chauffeur privé à Lille":"Ihr privater Chauffeur in Lille","Retour à l’accueil":"Zurück zur Startseite","Accueil":"Startseite","Mentions légales":"Impressum","Politique de confidentialité":"Datenschutzerklärung","politique de confidentialité":"Datenschutzerklärung","CGV":"AGB","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Alle Rechte vorbehalten.","Dénomination sociale :":"Firmenbezeichnung:","Nom commercial :":"Handelsname:","Forme juridique :":"Rechtsform:","Société par actions simplifiée à associé unique (SASU)":"Vereinfachte Aktiengesellschaft mit Alleingesellschafter (SASU)","Capital social :":"Stammkapital:","Siège social :":"Firmensitz:","TVA intracommunautaire :":"Umsatzsteuer-Identifikationsnummer:","Téléphone :":"Telefon:","Adresse e-mail :":"E-Mail-Adresse:","E-mail :":"E-Mail:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Frankreich","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Frankreich","Dernière mise à jour : 29 juillet 2026":"Letzte Aktualisierung: 29. Juli 2026","Pour plus d’informations, consultez la":"Weitere Informationen finden Sie in der","Politique de confidentialité | Twins Fab Cab Service VTC":"Datenschutzerklärung | Twins Fab Cab Service VTC","Politique de":"Datenschutz","confidentialité":"erklärung","Cette page explique comment Twins Fab Cab Service collecte, utilise et protège les données personnelles transmises par les utilisateurs du site.":"Diese Seite erläutert, wie Twins Fab Cab Service die von den Nutzern der Website übermittelten personenbezogenen Daten erhebt, verwendet und schützt.","1. Responsable du traitement":"1. Verantwortlicher für die Datenverarbeitung","Le responsable du traitement des données personnelles est :":"Verantwortlicher für die Verarbeitung personenbezogener Daten ist:","Société :":"Unternehmen:","2. Données collectées":"2. Erhobene Daten","Lors d’une demande de réservation ou d’une prise de contact, les informations suivantes peuvent être transmises :":"Bei einer Reservierungsanfrage oder Kontaktaufnahme können folgende Informationen übermittelt werden:","Nom et prénom":"Vor- und Nachname","Numéro de téléphone":"Telefonnummer","Adresse e-mail":"E-Mail-Adresse","Adresse de départ et destination":"Abholadresse und Ziel","Date et heure du trajet":"Datum und Uhrzeit der Fahrt","Nombre de passagers et de bagages":"Anzahl der Fahrgäste und Gepäckstücke","Numéro de vol ou de train":"Flug- oder Zugnummer","Mode de paiement souhaité":"Bevorzugte Zahlungsmethode","Informations complémentaires communiquées librement":"Freiwillig mitgeteilte zusätzliche Informationen","3. Finalités du traitement":"3. Zwecke der Verarbeitung","Les données sont utilisées uniquement pour :":"Die Daten werden ausschließlich verwendet, um:","Répondre aux demandes de renseignements":"Anfragen zu beantworten","Étudier et confirmer les réservations":"Reservierungen zu prüfen und zu bestätigen","Organiser et réaliser les trajets demandés":"Die angeforderten Fahrten zu organisieren und durchzuführen","Contacter le client au sujet de son trajet":"Den Kunden bezüglich seiner Fahrt zu kontaktieren","Établir des devis, factures et justificatifs":"Angebote, Rechnungen und Belege zu erstellen","Respecter les obligations légales et comptables":"Gesetzliche und buchhalterische Pflichten zu erfüllen","Assurer la sécurité et le bon fonctionnement du site":"Die Sicherheit und den ordnungsgemäßen Betrieb der Website zu gewährleisten","4. Bases juridiques":"4. Rechtsgrundlagen","Traitement":"Verarbeitung","Base juridique":"Rechtsgrundlage","Réponse à une demande de réservation ou de devis":"Beantwortung einer Reservierungs- oder Angebotsanfrage","Mesures précontractuelles prises à la demande du client":"Vorvertragliche Maßnahmen auf Anfrage des Kunden","Organisation et réalisation du trajet":"Organisation und Durchführung der Fahrt","Exécution du contrat de transport":"Erfüllung des Beförderungsvertrags","Facturation et comptabilité":"Rechnungsstellung und Buchhaltung","Respect des obligations légales":"Erfüllung gesetzlicher Pflichten","Sécurité du site et prévention des abus":"Websitesicherheit und Missbrauchsprävention","Intérêt légitime de l’entreprise":"Berechtigtes Interesse des Unternehmens","5. Fonctionnement du formulaire de réservation":"5. Funktionsweise des Reservierungsformulars","Le site est un site statique et ne possède pas de base de données enregistrant automatiquement les formulaires de réservation.":"Die Website ist statisch und verfügt über keine Datenbank, in der Reservierungsformulare automatisch gespeichert werden.","Après avoir rempli le formulaire, le client choisit lui-même le moyen par lequel il souhaite envoyer sa demande :":"Nach dem Ausfüllen des Formulars wählt der Kunde selbst, auf welchem Weg er seine Anfrage senden möchte:","La demande est alors transmise par le service choisi. Le traitement effectué ensuite par WhatsApp, l’opérateur téléphonique ou le fournisseur de messagerie relève également de leurs propres politiques de confidentialité.":"Die Anfrage wird anschließend über den ausgewählten Dienst übermittelt. Die weitere Verarbeitung durch WhatsApp, den Telefonanbieter oder den E-Mail-Anbieter unterliegt ebenfalls deren jeweiligen Datenschutzbestimmungen.","6. Autocomplétion des adresses":"6. Adress-Autovervollständigung","Le formulaire de réservation utilise le service Geoapify pour proposer des adresses pendant la saisie des lieux de départ et de destination.":"Das Reservierungsformular nutzt Geoapify, um bei der Eingabe von Abhol- und Zielorten Adressvorschläge anzuzeigen.","Lorsque l’utilisateur commence à saisir une adresse, les caractères saisis et certaines informations techniques nécessaires à la connexion sont transmis à Geoapify pour fournir les suggestions.":"Sobald der Nutzer mit der Eingabe einer Adresse beginnt, werden die eingegebenen Zeichen sowie bestimmte für die Verbindung erforderliche technische Informationen an Geoapify übermittelt, damit Vorschläge bereitgestellt werden können.","Politique de confidentialité :":"Datenschutzerklärung:","7. Hébergement et données techniques":"7. Hosting und technische Daten","Le site est hébergé par":"Die Website wird gehostet von","Lorsqu’une personne visite un site GitHub Pages, GitHub peut enregistrer son adresse IP et certaines données techniques, notamment à des fins de sécurité.":"Beim Besuch einer GitHub-Pages-Website kann GitHub die IP-Adresse und bestimmte technische Daten erfassen, insbesondere zu Sicherheitszwecken.","8. Destinataires des données":"8. Empfänger der Daten","Les données sont accessibles uniquement aux personnes et prestataires ayant besoin de les traiter :":"Auf die Daten können nur Personen und Dienstleister zugreifen, die sie verarbeiten müssen:","Le responsable de TWINS FAB CAB SERVICE":"Der Verantwortliche von TWINS FAB CAB SERVICE","Les prestataires comptables ou juridiques, lorsque cela est nécessaire":"Buchhaltungs- oder Rechtsdienstleister, soweit erforderlich","Le service de communication choisi par le client : WhatsApp, SMS ou messagerie électronique":"Der vom Kunden gewählte Kommunikationsdienst: WhatsApp, SMS oder E-Mail","Geoapify pour les suggestions d’adresses":"Geoapify für Adressvorschläge","GitHub Pages pour l’hébergement du site":"GitHub Pages für das Hosting der Website","Les autorités compétentes lorsqu’une obligation légale l’exige":"Die zuständigen Behörden, wenn dies gesetzlich vorgeschrieben ist","TWINS FAB CAB SERVICE ne vend ni ne loue les données personnelles de ses clients à des tiers.":"TWINS FAB CAB SERVICE verkauft oder vermietet die personenbezogenen Daten seiner Kunden nicht an Dritte.","9. Durées de conservation":"9. Aufbewahrungsfristen","Type de données":"Datenart","Durée ou critère de conservation":"Aufbewahrungsdauer oder -kriterium","Demande de renseignement ou de réservation sans suite":"Nicht weiterverfolgte Informations- oder Reservierungsanfrage","Le temps nécessaire au traitement et au suivi de la demande, avec suppression au plus tard trois ans après le dernier contact":"So lange wie für die Bearbeitung und Nachverfolgung der Anfrage erforderlich, spätestens jedoch bis drei Jahre nach dem letzten Kontakt","Contrats, réservations et correspondances commerciales":"Verträge, Reservierungen und Geschäftskorrespondenz","Jusqu’à cinq ans après la fin de la prestation, lorsque leur conservation est nécessaire":"Bis zu fünf Jahre nach Beendigung der Leistung, sofern eine Aufbewahrung erforderlich ist","Factures et documents comptables":"Rechnungen und Buchhaltungsunterlagen","Dix ans conformément aux obligations comptables applicables":"Zehn Jahre gemäß den geltenden buchhalterischen Pflichten","Données techniques d’hébergement":"Technische Hosting-Daten","Selon les durées définies par GitHub dans sa politique de confidentialité":"Gemäß den von GitHub in seiner Datenschutzerklärung festgelegten Fristen","10. Cookies et traceurs":"10. Cookies und Tracking-Technologien","À la date de la présente politique, le site n’utilise aucun outil de publicité personnalisée ni outil de mesure d’audience installé par TWINS FAB CAB SERVICE.":"Zum Zeitpunkt dieser Datenschutzerklärung verwendet die Website keine von TWINS FAB CAB SERVICE installierten Tools für personalisierte Werbung oder Reichweitenmessung.","Aucun cookie publicitaire n’est volontairement déposé par le site.":"Die Website setzt bewusst keine Werbe-Cookies.","Des prestataires techniques externes peuvent toutefois recevoir des informations techniques nécessaires au chargement de leurs services ou ressources.":"Externe technische Dienstleister können jedoch technische Informationen erhalten, die zum Laden ihrer Dienste oder Ressourcen erforderlich sind.","11. Transferts hors de l’Union européenne":"11. Übermittlungen außerhalb der Europäischen Union","Certains prestataires utilisés par le site ou choisis par le client peuvent traiter des données en dehors de l’Espace économique européen.":"Einige von der Website eingesetzte oder vom Kunden gewählte Dienstleister können Daten außerhalb des Europäischen Wirtschaftsraums verarbeiten.","Ces traitements sont alors soumis aux garanties et mécanismes de protection prévus par les prestataires concernés et par la réglementation applicable.":"Diese Verarbeitungen unterliegen den von den betreffenden Dienstleistern vorgesehenen Garantien und Schutzmechanismen sowie den geltenden Vorschriften.","12. Sécurité":"12. Sicherheit","TWINS FAB CAB SERVICE met en œuvre des mesures raisonnables afin de protéger les données contre la perte, l’accès non autorisé, la modification ou la divulgation.":"TWINS FAB CAB SERVICE ergreift angemessene Maßnahmen, um Daten vor Verlust, unbefugtem Zugriff, Veränderung oder Offenlegung zu schützen.","Aucun système de transmission sur internet ne peut néanmoins garantir une sécurité absolue.":"Kein Übertragungssystem im Internet kann jedoch absolute Sicherheit gewährleisten.","13. Vos droits":"13. Ihre Rechte","Selon la réglementation applicable, vous pouvez demander :":"Nach Maßgabe der geltenden Vorschriften können Sie Folgendes verlangen:","L’accès à vos données personnelles":"Zugang zu Ihren personenbezogenen Daten","La rectification de données inexactes":"Berichtigung unrichtiger Daten","L’effacement de vos données":"Löschung Ihrer Daten","La limitation du traitement":"Einschränkung der Verarbeitung","L’opposition à certains traitements":"Widerspruch gegen bestimmte Verarbeitungen","La portabilité des données, lorsque applicable":"Datenübertragbarkeit, soweit anwendbar","Le retrait de votre consentement lorsqu’un traitement repose sur celui-ci":"Widerruf Ihrer Einwilligung, wenn die Verarbeitung darauf beruht","14. Exercer vos droits":"14. Ausübung Ihrer Rechte","Pour exercer vos droits ou poser une question sur l’utilisation de vos données, vous pouvez contacter :":"Zur Ausübung Ihrer Rechte oder bei Fragen zur Verwendung Ihrer Daten können Sie sich wenden an:","Une preuve d’identité pourra être demandée uniquement lorsque cela est nécessaire pour vérifier l’identité de la personne effectuant la demande.":"Ein Identitätsnachweis kann nur verlangt werden, wenn dies zur Überprüfung der Identität der anfragenden Person erforderlich ist.","15. Réclamation auprès de la CNIL":"15. Beschwerde bei der CNIL","Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une réclamation à la Commission nationale de l’informatique et des libertés.":"Wenn Sie der Ansicht sind, dass Ihre Rechte nicht gewahrt werden, können Sie bei der französischen Datenschutzbehörde CNIL Beschwerde einlegen.","Déposer une plainte auprès de la CNIL":"Beschwerde bei der CNIL einreichen","16. Modification de la politique":"16. Änderung der Datenschutzerklärung","Cette politique peut être modifiée afin de tenir compte des évolutions du site, des services utilisés ou de la réglementation.":"Diese Datenschutzerklärung kann geändert werden, um Entwicklungen der Website, der genutzten Dienste oder der Rechtsvorschriften zu berücksichtigen.","La date de la dernière mise à jour est indiquée en haut de cette page.":"Das Datum der letzten Aktualisierung ist oben auf dieser Seite angegeben."}},"cgv.html":{"en":{"Votre chauffeur privé à Lille":"Your private driver in Lille","Retour à l’accueil":"Back to home","Accueil":"Home","Mentions légales":"Legal notice","Politique de confidentialité":"Privacy policy","politique de confidentialité":"privacy policy","CGV":"Terms & Conditions","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – All rights reserved.","Dénomination sociale :":"Company name:","Nom commercial :":"Trading name:","Forme juridique :":"Legal form:","Société par actions simplifiée à associé unique (SASU)":"French simplified joint-stock company with a sole shareholder (SASU)","Capital social :":"Share capital:","Siège social :":"Registered office:","TVA intracommunautaire :":"Intra-Community VAT number:","Téléphone :":"Phone:","Adresse e-mail :":"Email address:","E-mail :":"Email:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, France","Dernière mise à jour : 29 juillet 2026":"Last updated: 29 July 2026","Pour plus d’informations, consultez la":"For more information, please see the","Conditions générales de vente | Twins Fab Cab Service VTC":"General Terms and Conditions of Sale | Twins Fab Cab Service VTC","Conditions générales":"General Terms and Conditions","de vente":"of Sale","Les présentes conditions définissent les règles applicables aux réservations et prestations de transport proposées par Twins Fab Cab Service VTC.":"These terms define the rules applicable to reservations and transport services offered by Twins Fab Cab Service VTC.","1. Identité du prestataire":"1. Service provider identity","RCS :":"Commercial register:","Inscription au registre VTC :":"VTC register number:","2. Objet":"2. Purpose","Les présentes conditions générales de vente, ci-après les « CGV », encadrent les prestations de transport de personnes avec chauffeur proposées par TWINS FAB CAB SERVICE.":"These General Terms and Conditions of Sale, hereinafter the “Terms”, govern the chauffeur-driven passenger transport services offered by TWINS FAB CAB SERVICE.","Elles s’appliquent aux clients particuliers et, lorsque cela est pertinent, aux clients professionnels.":"They apply to private customers and, where relevant, business customers.","3. Acceptation des CGV":"3. Acceptance of the Terms","Toute réservation confirmée implique que le client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.":"Any confirmed reservation means that the customer acknowledges having read these Terms and accepts them without reservation.","Les conditions particulières communiquées dans un devis ou une confirmation écrite complètent les présentes CGV.":"Any special conditions stated in a quotation or written confirmation supplement these Terms.","4. Prestations proposées":"4. Services offered","Les prestations peuvent notamment comprendre :":"The services may include in particular:","Les déplacements locaux dans Lille et ses alentours":"Local journeys in Lille and the surrounding area","Les transferts vers ou depuis les gares":"Transfers to or from train stations","Les transferts vers ou depuis les aéroports":"Transfers to or from airports","Les trajets de longue distance en France":"Long-distance journeys in France","Certains trajets internationaux, notamment vers la Belgique, les Pays-Bas et l’Allemagne":"Certain international journeys, particularly to Belgium, the Netherlands and Germany","La mise à disposition d’un véhicule avec chauffeur":"A chauffeur-driven vehicle at the customer’s disposal","Le véhicule peut accueillir un maximum de quatre passagers. Le client doit indiquer avant la confirmation le nombre de passagers, de bagages et toute demande particulière.":"The vehicle can carry a maximum of four passengers. Before confirmation, the customer must state the number of passengers, luggage and any special requests.","5. Demande et confirmation de réservation":"5. Reservation request and confirmation","Une demande envoyée par le formulaire du site, WhatsApp, SMS, téléphone ou e-mail ne constitue pas automatiquement une réservation définitive.":"A request sent through the website form, WhatsApp, SMS, telephone or email does not automatically constitute a final reservation.","La réservation devient définitive uniquement après :":"The reservation becomes final only after:","Confirmation écrite de TWINS FAB CAB SERVICE":"Written confirmation from TWINS FAB CAB SERVICE","Acceptation du prix par le client":"Acceptance of the price by the customer","Versement des sommes demandées, lorsque la réservation nécessite un paiement préalable":"Payment of the requested amounts where advance payment is required","Une réservation doit normalement être effectuée au minimum":"A reservation should normally be made at least","12 heures avant l’heure de départ":"12 hours before the departure time","TWINS FAB CAB SERVICE peut exceptionnellement accepter une demande effectuée moins de 12 heures avant le départ, selon les disponibilités et après accord direct avec le client.":"TWINS FAB CAB SERVICE may exceptionally accept a request made less than 12 hours before departure, subject to availability and direct agreement with the customer.","6. Prix":"6. Price","Le prix est déterminé selon le trajet, la distance, la durée estimée, les horaires, les éventuels frais de péage, de stationnement et les demandes particulières du client.":"The price is determined according to the journey, distance, estimated duration, schedule, any toll or parking charges and the customer’s special requests.","Le tarif minimum d’une prestation est fixé à":"The minimum fare for a service is",", sauf accord écrit différent.":"unless otherwise agreed in writing.","Le prix définitif est communiqué au client avant la confirmation de la réservation.":"The final price is communicated to the customer before the reservation is confirmed.","7. Moyens de paiement":"7. Payment methods","Selon les modalités convenues, le paiement peut être réalisé par :":"Depending on the agreed arrangements, payment may be made by:","Carte bancaire":"Bank card","Espèces":"Cash","Virement bancaire":"Bank transfer","Tout autre moyen expressément accepté par TWINS FAB CAB SERVICE":"Any other method expressly accepted by TWINS FAB CAB SERVICE","8. Arrhes pour les trajets de plus de 30 km":"8. Booking deposit for journeys over 30 km","Pour tout trajet dont la distance estimée est supérieure à":"For any journey with an estimated distance greater than","30 kilomètres":"30 kilometres",", le client doit verser une somme correspondant à":"the customer must pay an amount equal to","20 % du prix total du trajet":"20% of the total journey price","Cette somme constitue des arrhes de réservation et doit être versée avant la confirmation définitive du trajet.":"This amount constitutes a booking deposit and must be paid before final confirmation of the journey.","Le solde restant est payé selon les modalités indiquées dans la confirmation de réservation.":"The remaining balance is paid according to the terms stated in the reservation confirmation.","TWINS FAB CAB SERVICE peut demander un paiement préalable pour un autre type de trajet lorsque cela est clairement convenu avec le client avant la réservation.":"TWINS FAB CAB SERVICE may request advance payment for another type of journey where this is clearly agreed with the customer before reservation.","9. Annulation par le client":"9. Cancellation by the customer","Annulation quatre heures ou plus avant le départ":"Cancellation four hours or more before departure","Lorsque le client annule le trajet au minimum":"When the customer cancels the journey at least","4 heures avant l’heure de départ prévue":"4 hours before the scheduled departure time","Une somme correspondant à":"An amount equal to","15 % du prix total du trajet":"15% of the total journey price","est remboursée au client":"is refunded to the customer","5 % du prix total du trajet":"5% of the total journey price","est conservée au titre des frais d’annulation":"is retained as a cancellation fee","Annulation moins de quatre heures avant le départ":"Cancellation less than four hours before departure","Lorsque l’annulation intervient moins de":"When cancellation occurs less than","4 heures avant le départ":"4 hours before departure",", les arrhes correspondant à":"the deposit corresponding to","20 % du prix total":"20% of the total price","restent intégralement acquises à TWINS FAB CAB SERVICE.":"is retained in full by TWINS FAB CAB SERVICE.","Absence du client":"Customer no-show","En cas d’absence du client au lieu et à l’heure convenus, sans annulation préalable, les arrhes de 20 % sont également conservées.":"If the customer is absent from the agreed place at the agreed time without prior cancellation, the 20% deposit is also retained.","Exemple pour un trajet de 100 € :":"Example for a €100 journey:","le client verse 20 € à la réservation.":"the customer pays €20 when booking.","S’il annule au moins quatre heures avant le départ, 15 € lui sont remboursés et 5 € sont conservés.":"If they cancel at least four hours before departure, €15 is refunded and €5 is retained.","S’il annule moins de quatre heures avant le départ, les 20 € sont conservés.":"If they cancel less than four hours before departure, the €20 is retained.","10. Arrangement exceptionnel avec le client":"10. Exceptional arrangement with the customer","TWINS FAB CAB SERVICE et le client peuvent convenir d’une solution différente lorsqu’une situation particulière le justifie.":"TWINS FAB CAB SERVICE and the customer may agree on a different solution where justified by particular circumstances.","Cet arrangement doit être confirmé par écrit, notamment par WhatsApp, SMS ou e-mail.":"This arrangement must be confirmed in writing, including by WhatsApp, SMS or email.","Lorsqu’un accord particulier a été confirmé par écrit, cet accord prévaut pour la réservation concernée sur la règle générale correspondante des présentes CGV.":"Where a special agreement has been confirmed in writing, that agreement takes precedence for the reservation concerned over the corresponding general rule in these Terms.","11. Annulation par le prestataire":"11. Cancellation by the service provider","En cas d’impossibilité d’exécuter la prestation, TWINS FAB CAB SERVICE informe le client dans les meilleurs délais.":"If the service cannot be performed, TWINS FAB CAB SERVICE informs the customer as soon as possible.","Les sommes versées sont remboursées conformément aux règles légales applicables aux arrhes, sauf cas de force majeure ou accord écrit différent autorisé par la loi.":"Amounts paid are refunded in accordance with the legal rules applicable to deposits, except in cases of force majeure or where a different written agreement is permitted by law.","Lorsqu’une solution adaptée est disponible, un autre horaire ou une solution de remplacement peut être proposé au client.":"Where a suitable solution is available, an alternative time or replacement solution may be offered to the customer.","12. Droit de rétractation":"12. Right of withdrawal","Les prestations proposées sont des services de transport de passagers.":"The services offered are passenger transport services.","Conformément à l’article L.221-2 du Code de la consommation, ces contrats ne bénéficient pas du délai général de rétractation de quatorze jours applicable à certains contrats conclus à distance.":"Under Article L.221-2 of the French Consumer Code, these contracts are not subject to the general fourteen-day withdrawal period applicable to certain distance contracts.","Les conditions d’annulation prévues dans les présentes CGV restent applicables.":"The cancellation conditions set out in these Terms remain applicable.","13. Obligations du client":"13. Customer obligations","Le client s’engage à :":"The customer undertakes to:","Fournir des informations exactes et complètes":"Provide accurate and complete information","Être présent au lieu convenu à l’heure prévue":"Be present at the agreed place at the scheduled time","Signaler rapidement tout changement concernant le trajet":"Promptly report any change concerning the journey","Respecter le chauffeur, le véhicule et les règles de sécurité":"Respect the driver, the vehicle and safety rules","Ne pas transporter de produit interdit, dangereux ou illégal":"Not transport prohibited, dangerous or illegal items","Informer le chauffeur à l’avance de tout bagage volumineux ou demande particulière":"Inform the driver in advance of any bulky luggage or special request","14. Comportement et dégradations":"14. Conduct and damage","Le chauffeur peut refuser ou interrompre une prestation lorsqu’un passager adopte un comportement dangereux, violent, insultant ou manifestement incompatible avec la sécurité du trajet.":"The driver may refuse or interrupt a service where a passenger behaves dangerously, violently, abusively or in a way clearly incompatible with the safety of the journey.","Les frais de nettoyage exceptionnel ou de réparation résultant d’une dégradation imputable au client ou à ses accompagnants pourront être facturés sur présentation de justificatifs.":"Exceptional cleaning or repair costs resulting from damage attributable to the customer or accompanying persons may be invoiced upon presentation of supporting evidence.","15. Retards et durée du trajet":"15. Delays and journey duration","Les durées indiquées sont des estimations.":"The stated journey times are estimates.","Elles peuvent varier en raison de la circulation, des travaux, des contrôles, des conditions météorologiques, d’un accident ou de tout autre événement indépendant de la volonté du chauffeur.":"They may vary due to traffic, roadworks, checks, weather conditions, an accident or any other event beyond the driver’s control.","Le client doit prévoir une marge suffisante, notamment pour les départs de train et d’avion.":"The customer must allow sufficient time, particularly for train and flight departures.","16. Bagages et effets personnels":"16. Luggage and personal belongings","Le client doit vérifier avant de quitter le véhicule qu’il n’a oublié aucun effet personnel.":"Before leaving the vehicle, the customer must check that no personal belongings have been left behind.","La capacité de prise en charge des bagages dépend de leur nombre, de leur taille et de l’espace disponible dans le véhicule.":"Luggage capacity depends on the number and size of the items and the space available in the vehicle.","Tout bagage inhabituel ou particulièrement volumineux doit être signalé avant la confirmation.":"Any unusual or particularly bulky luggage must be reported before confirmation.","17. Responsabilité":"17. Liability","TWINS FAB CAB SERVICE s’engage à exécuter les prestations avec professionnalisme, prudence et diligence.":"TWINS FAB CAB SERVICE undertakes to provide services professionally, carefully and diligently.","Sa responsabilité ne peut être engagée pour les conséquences résultant d’informations incorrectes fournies par le client ou d’un événement extérieur imprévisible et irrésistible.":"It cannot be held liable for consequences resulting from incorrect information provided by the customer or from an external event that is unforeseeable and unavoidable.","Aucune disposition des présentes CGV ne limite les droits dont le consommateur bénéficie obligatoirement en vertu de la loi.":"Nothing in these Terms limits any mandatory rights granted to consumers by law.","18. Force majeure":"18. Force majeure","Aucune partie ne pourra être tenue responsable d’un manquement causé par un événement de force majeure reconnu par la réglementation française.":"Neither party may be held liable for a failure caused by an event of force majeure recognised under French law.","Les parties chercheront en priorité une solution adaptée, telle qu’un report, une modification ou un remboursement lorsque celui-ci est applicable.":"The parties will first seek an appropriate solution, such as postponement, modification or a refund where applicable.","19. Données personnelles":"19. Personal data","Les données communiquées par le client sont utilisées pour répondre à sa demande, organiser le trajet, établir les documents nécessaires et respecter les obligations légales.":"Data provided by the customer is used to respond to the request, organise the journey, prepare the necessary documents and comply with legal obligations.","20. Réclamations":"20. Complaints","Toute réclamation doit d’abord être adressée à :":"Any complaint must first be addressed to:","La réclamation doit expliquer le problème et contenir les éléments nécessaires à son traitement.":"The complaint must explain the problem and contain the information required to process it.","Informations à compléter":"Information to be completed","21. Médiation de la consommation":"21. Consumer mediation","Après une réclamation écrite préalable restée sans solution, le client consommateur peut recourir gratuitement au médiateur de la consommation dont relève TWINS FAB CAB SERVICE.":"After a prior written complaint remains unresolved, a consumer customer may use, free of charge, the consumer mediator responsible for TWINS FAB CAB SERVICE.","Médiateur actuellement en cours de désignation.":"A mediator is currently being appointed.","Le nom, l’adresse postale et le site internet du médiateur seront ajoutés à cette section dès la finalisation de l’adhésion.":"The mediator’s name, postal address and website will be added to this section once the appointment process has been completed.","Cette section temporaire doit être remplacée par les véritables coordonnées du médiateur avant que les CGV soient considérées comme définitivement complètes.":"This temporary section must be replaced with the mediator’s actual contact details before these Terms can be considered fully complete.","22. Droit applicable et règlement des litiges":"22. Applicable law and dispute resolution","Les présentes CGV sont soumises au droit français.":"These Terms are governed by French law.","En cas de difficulté, les parties chercheront d’abord une solution amiable.":"In the event of a difficulty, the parties will first seek an amicable solution.","À défaut d’accord amiable ou de médiation, le litige pourra être porté devant la juridiction compétente selon les règles légales applicables.":"If no amicable agreement or mediation is reached, the dispute may be brought before the competent court in accordance with the applicable legal rules.","23. Modification des CGV":"23. Changes to the Terms","TWINS FAB CAB SERVICE peut modifier les présentes CGV pour tenir compte d’une évolution de ses services ou de la réglementation.":"TWINS FAB CAB SERVICE may amend these Terms to reflect changes to its services or applicable regulations.","Les conditions applicables à une réservation sont celles acceptées au moment de sa confirmation, sauf accord écrit ultérieur entre les parties.":"The conditions applicable to a reservation are those accepted at the time of confirmation, unless the parties subsequently agree otherwise in writing."},"es":{"Votre chauffeur privé à Lille":"Su chófer privado en Lille","Retour à l’accueil":"Volver al inicio","Accueil":"Inicio","Mentions légales":"Aviso legal","Politique de confidentialité":"Política de privacidad","politique de confidentialité":"política de privacidad","CGV":"Condiciones generales","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Todos los derechos reservados.","Dénomination sociale :":"Razón social:","Nom commercial :":"Nombre comercial:","Forme juridique :":"Forma jurídica:","Société par actions simplifiée à associé unique (SASU)":"Sociedad por acciones simplificada unipersonal (SASU)","Capital social :":"Capital social:","Siège social :":"Domicilio social:","TVA intracommunautaire :":"N.º de IVA intracomunitario:","Téléphone :":"Teléfono:","Adresse e-mail :":"Correo electrónico:","E-mail :":"Correo electrónico:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Francia","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Francia","Dernière mise à jour : 29 juillet 2026":"Última actualización: 29 de julio de 2026","Pour plus d’informations, consultez la":"Para más información, consulte la","Conditions générales de vente | Twins Fab Cab Service VTC":"Condiciones Generales de Venta | Twins Fab Cab Service VTC","Conditions générales":"Condiciones generales","de vente":"de venta","Les présentes conditions définissent les règles applicables aux réservations et prestations de transport proposées par Twins Fab Cab Service VTC.":"Las presentes condiciones definen las normas aplicables a las reservas y a los servicios de transporte ofrecidos por Twins Fab Cab Service VTC.","1. Identité du prestataire":"1. Identidad del prestador","RCS :":"Registro mercantil:","Inscription au registre VTC :":"Inscripción en el registro VTC:","2. Objet":"2. Objeto","Les présentes conditions générales de vente, ci-après les « CGV », encadrent les prestations de transport de personnes avec chauffeur proposées par TWINS FAB CAB SERVICE.":"Las presentes Condiciones Generales de Venta, en adelante «CGV», regulan los servicios de transporte de pasajeros con conductor ofrecidos por TWINS FAB CAB SERVICE.","Elles s’appliquent aux clients particuliers et, lorsque cela est pertinent, aux clients professionnels.":"Se aplican a clientes particulares y, cuando corresponda, a clientes profesionales.","3. Acceptation des CGV":"3. Aceptación de las CGV","Toute réservation confirmée implique que le client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.":"Toda reserva confirmada implica que el cliente reconoce haber leído las presentes CGV y aceptarlas sin reservas.","Les conditions particulières communiquées dans un devis ou une confirmation écrite complètent les présentes CGV.":"Las condiciones particulares comunicadas en un presupuesto o una confirmación escrita complementan las presentes CGV.","4. Prestations proposées":"4. Servicios ofrecidos","Les prestations peuvent notamment comprendre :":"Los servicios pueden incluir, en particular:","Les déplacements locaux dans Lille et ses alentours":"Trayectos locales en Lille y sus alrededores","Les transferts vers ou depuis les gares":"Traslados hacia o desde estaciones de tren","Les transferts vers ou depuis les aéroports":"Traslados hacia o desde aeropuertos","Les trajets de longue distance en France":"Trayectos de larga distancia en Francia","Certains trajets internationaux, notamment vers la Belgique, les Pays-Bas et l’Allemagne":"Determinados trayectos internacionales, especialmente a Bélgica, los Países Bajos y Alemania","La mise à disposition d’un véhicule avec chauffeur":"Puesta a disposición de un vehículo con conductor","Le véhicule peut accueillir un maximum de quatre passagers. Le client doit indiquer avant la confirmation le nombre de passagers, de bagages et toute demande particulière.":"El vehículo puede transportar un máximo de cuatro pasajeros. Antes de la confirmación, el cliente debe indicar el número de pasajeros, equipajes y cualquier solicitud especial.","5. Demande et confirmation de réservation":"5. Solicitud y confirmación de reserva","Une demande envoyée par le formulaire du site, WhatsApp, SMS, téléphone ou e-mail ne constitue pas automatiquement une réservation définitive.":"Una solicitud enviada mediante el formulario del sitio, WhatsApp, SMS, teléfono o correo electrónico no constituye automáticamente una reserva definitiva.","La réservation devient définitive uniquement après :":"La reserva se vuelve definitiva únicamente después de:","Confirmation écrite de TWINS FAB CAB SERVICE":"Confirmación escrita de TWINS FAB CAB SERVICE","Acceptation du prix par le client":"Aceptación del precio por parte del cliente","Versement des sommes demandées, lorsque la réservation nécessite un paiement préalable":"Pago de los importes solicitados cuando la reserva requiera un pago por adelantado","Une réservation doit normalement être effectuée au minimum":"Normalmente, una reserva debe realizarse al menos","12 heures avant l’heure de départ":"12 horas antes de la hora de salida","TWINS FAB CAB SERVICE peut exceptionnellement accepter une demande effectuée moins de 12 heures avant le départ, selon les disponibilités et après accord direct avec le client.":"TWINS FAB CAB SERVICE podrá aceptar excepcionalmente una solicitud realizada con menos de 12 horas de antelación, según disponibilidad y previo acuerdo directo con el cliente.","6. Prix":"6. Precio","Le prix est déterminé selon le trajet, la distance, la durée estimée, les horaires, les éventuels frais de péage, de stationnement et les demandes particulières du client.":"El precio se determina según el trayecto, la distancia, la duración estimada, los horarios, los posibles gastos de peaje y aparcamiento y las solicitudes especiales del cliente.","Le tarif minimum d’une prestation est fixé à":"La tarifa mínima de un servicio se fija en",", sauf accord écrit différent.":"salvo acuerdo escrito en contrario.","Le prix définitif est communiqué au client avant la confirmation de la réservation.":"El precio definitivo se comunica al cliente antes de confirmar la reserva.","7. Moyens de paiement":"7. Métodos de pago","Selon les modalités convenues, le paiement peut être réalisé par :":"Según las condiciones acordadas, el pago puede realizarse mediante:","Carte bancaire":"Tarjeta bancaria","Espèces":"Efectivo","Virement bancaire":"Transferencia bancaria","Tout autre moyen expressément accepté par TWINS FAB CAB SERVICE":"Cualquier otro medio expresamente aceptado por TWINS FAB CAB SERVICE","8. Arrhes pour les trajets de plus de 30 km":"8. Arras para trayectos de más de 30 km","Pour tout trajet dont la distance estimée est supérieure à":"Para cualquier trayecto cuya distancia estimada sea superior a","30 kilomètres":"30 kilómetros",", le client doit verser une somme correspondant à":"el cliente debe abonar una cantidad equivalente al","20 % du prix total du trajet":"20 % del precio total del trayecto","Cette somme constitue des arrhes de réservation et doit être versée avant la confirmation définitive du trajet.":"Esta cantidad constituye arras de reserva y debe abonarse antes de la confirmación definitiva del trayecto.","Le solde restant est payé selon les modalités indiquées dans la confirmation de réservation.":"El saldo restante se abona según las condiciones indicadas en la confirmación de la reserva.","TWINS FAB CAB SERVICE peut demander un paiement préalable pour un autre type de trajet lorsque cela est clairement convenu avec le client avant la réservation.":"TWINS FAB CAB SERVICE puede solicitar un pago por adelantado para otro tipo de trayecto cuando se acuerde claramente con el cliente antes de la reserva.","9. Annulation par le client":"9. Cancelación por parte del cliente","Annulation quatre heures ou plus avant le départ":"Cancelación cuatro horas o más antes de la salida","Lorsque le client annule le trajet au minimum":"Cuando el cliente cancela el trayecto al menos","4 heures avant l’heure de départ prévue":"4 horas antes de la hora de salida prevista","Une somme correspondant à":"Una cantidad equivalente al","15 % du prix total du trajet":"15 % del precio total del trayecto","est remboursée au client":"se reembolsa al cliente","5 % du prix total du trajet":"5 % del precio total del trayecto","est conservée au titre des frais d’annulation":"se retiene en concepto de gastos de cancelación","Annulation moins de quatre heures avant le départ":"Cancelación menos de cuatro horas antes de la salida","Lorsque l’annulation intervient moins de":"Cuando la cancelación se produce menos de","4 heures avant le départ":"4 horas antes de la salida",", les arrhes correspondant à":"las arras correspondientes al","20 % du prix total":"20 % del precio total","restent intégralement acquises à TWINS FAB CAB SERVICE.":"queda íntegramente en poder de TWINS FAB CAB SERVICE.","Absence du client":"Ausencia del cliente","En cas d’absence du client au lieu et à l’heure convenus, sans annulation préalable, les arrhes de 20 % sont également conservées.":"Si el cliente no se presenta en el lugar y a la hora acordados sin cancelación previa, también se retienen las arras del 20 %.","Exemple pour un trajet de 100 € :":"Ejemplo para un trayecto de 100 €:","le client verse 20 € à la réservation.":"el cliente abona 20 € al reservar.","S’il annule au moins quatre heures avant le départ, 15 € lui sont remboursés et 5 € sont conservés.":"Si cancela al menos cuatro horas antes de la salida, se le reembolsan 15 € y se retienen 5 €.","S’il annule moins de quatre heures avant le départ, les 20 € sont conservés.":"Si cancela menos de cuatro horas antes de la salida, se retienen los 20 €.","10. Arrangement exceptionnel avec le client":"10. Acuerdo excepcional con el cliente","TWINS FAB CAB SERVICE et le client peuvent convenir d’une solution différente lorsqu’une situation particulière le justifie.":"TWINS FAB CAB SERVICE y el cliente pueden acordar una solución diferente cuando una situación particular lo justifique.","Cet arrangement doit être confirmé par écrit, notamment par WhatsApp, SMS ou e-mail.":"Este acuerdo debe confirmarse por escrito, en particular mediante WhatsApp, SMS o correo electrónico.","Lorsqu’un accord particulier a été confirmé par écrit, cet accord prévaut pour la réservation concernée sur la règle générale correspondante des présentes CGV.":"Cuando se haya confirmado por escrito un acuerdo particular, dicho acuerdo prevalece para la reserva correspondiente sobre la regla general equivalente de las presentes CGV.","11. Annulation par le prestataire":"11. Cancelación por parte del prestador","En cas d’impossibilité d’exécuter la prestation, TWINS FAB CAB SERVICE informe le client dans les meilleurs délais.":"Si no es posible prestar el servicio, TWINS FAB CAB SERVICE informa al cliente lo antes posible.","Les sommes versées sont remboursées conformément aux règles légales applicables aux arrhes, sauf cas de force majeure ou accord écrit différent autorisé par la loi.":"Las cantidades abonadas se reembolsan de conformidad con las normas legales aplicables a las arras, salvo caso de fuerza mayor o acuerdo escrito diferente permitido por la ley.","Lorsqu’une solution adaptée est disponible, un autre horaire ou une solution de remplacement peut être proposé au client.":"Cuando exista una solución adecuada, podrá proponerse al cliente otro horario o una solución alternativa.","12. Droit de rétractation":"12. Derecho de desistimiento","Les prestations proposées sont des services de transport de passagers.":"Los servicios ofrecidos son servicios de transporte de pasajeros.","Conformément à l’article L.221-2 du Code de la consommation, ces contrats ne bénéficient pas du délai général de rétractation de quatorze jours applicable à certains contrats conclus à distance.":"De conformidad con el artículo L.221-2 del Código de Consumo francés, estos contratos no se benefician del plazo general de desistimiento de catorce días aplicable a determinados contratos celebrados a distancia.","Les conditions d’annulation prévues dans les présentes CGV restent applicables.":"Siguen siendo aplicables las condiciones de cancelación previstas en las presentes CGV.","13. Obligations du client":"13. Obligaciones del cliente","Le client s’engage à :":"El cliente se compromete a:","Fournir des informations exactes et complètes":"Facilitar información exacta y completa","Être présent au lieu convenu à l’heure prévue":"Estar presente en el lugar acordado a la hora prevista","Signaler rapidement tout changement concernant le trajet":"Comunicar rápidamente cualquier cambio relativo al trayecto","Respecter le chauffeur, le véhicule et les règles de sécurité":"Respetar al conductor, el vehículo y las normas de seguridad","Ne pas transporter de produit interdit, dangereux ou illégal":"No transportar productos prohibidos, peligrosos o ilegales","Informer le chauffeur à l’avance de tout bagage volumineux ou demande particulière":"Informar al conductor con antelación de cualquier equipaje voluminoso o solicitud especial","14. Comportement et dégradations":"14. Comportamiento y daños","Le chauffeur peut refuser ou interrompre une prestation lorsqu’un passager adopte un comportement dangereux, violent, insultant ou manifestement incompatible avec la sécurité du trajet.":"El conductor puede rechazar o interrumpir un servicio cuando un pasajero adopte un comportamiento peligroso, violento, insultante o manifiestamente incompatible con la seguridad del trayecto.","Les frais de nettoyage exceptionnel ou de réparation résultant d’une dégradation imputable au client ou à ses accompagnants pourront être facturés sur présentation de justificatifs.":"Los gastos de limpieza extraordinaria o reparación derivados de daños imputables al cliente o a sus acompañantes podrán facturarse previa presentación de justificantes.","15. Retards et durée du trajet":"15. Retrasos y duración del trayecto","Les durées indiquées sont des estimations.":"Las duraciones indicadas son estimaciones.","Elles peuvent varier en raison de la circulation, des travaux, des contrôles, des conditions météorologiques, d’un accident ou de tout autre événement indépendant de la volonté du chauffeur.":"Pueden variar debido al tráfico, obras, controles, condiciones meteorológicas, accidentes o cualquier otro acontecimiento ajeno a la voluntad del conductor.","Le client doit prévoir une marge suffisante, notamment pour les départs de train et d’avion.":"El cliente debe prever un margen suficiente, especialmente para las salidas de trenes y vuelos.","16. Bagages et effets personnels":"16. Equipaje y efectos personales","Le client doit vérifier avant de quitter le véhicule qu’il n’a oublié aucun effet personnel.":"Antes de abandonar el vehículo, el cliente debe comprobar que no ha olvidado ningún efecto personal.","La capacité de prise en charge des bagages dépend de leur nombre, de leur taille et de l’espace disponible dans le véhicule.":"La capacidad para transportar equipaje depende de su número, tamaño y del espacio disponible en el vehículo.","Tout bagage inhabituel ou particulièrement volumineux doit être signalé avant la confirmation.":"Cualquier equipaje inusual o especialmente voluminoso debe comunicarse antes de la confirmación.","17. Responsabilité":"17. Responsabilidad","TWINS FAB CAB SERVICE s’engage à exécuter les prestations avec professionnalisme, prudence et diligence.":"TWINS FAB CAB SERVICE se compromete a prestar los servicios con profesionalidad, prudencia y diligencia.","Sa responsabilité ne peut être engagée pour les conséquences résultant d’informations incorrectes fournies par le client ou d’un événement extérieur imprévisible et irrésistible.":"No podrá ser responsable de las consecuencias derivadas de información incorrecta facilitada por el cliente o de un acontecimiento externo imprevisible e irresistible.","Aucune disposition des présentes CGV ne limite les droits dont le consommateur bénéficie obligatoirement en vertu de la loi.":"Ninguna disposición de las presentes CGV limita los derechos que la ley reconoce obligatoriamente al consumidor.","18. Force majeure":"18. Fuerza mayor","Aucune partie ne pourra être tenue responsable d’un manquement causé par un événement de force majeure reconnu par la réglementation française.":"Ninguna de las partes podrá ser considerada responsable de un incumplimiento causado por un acontecimiento de fuerza mayor reconocido por la legislación francesa.","Les parties chercheront en priorité une solution adaptée, telle qu’un report, une modification ou un remboursement lorsque celui-ci est applicable.":"Las partes buscarán prioritariamente una solución adecuada, como un aplazamiento, una modificación o un reembolso cuando proceda.","19. Données personnelles":"19. Datos personales","Les données communiquées par le client sont utilisées pour répondre à sa demande, organiser le trajet, établir les documents nécessaires et respecter les obligations légales.":"Los datos facilitados por el cliente se utilizan para responder a su solicitud, organizar el trayecto, elaborar los documentos necesarios y cumplir las obligaciones legales.","20. Réclamations":"20. Reclamaciones","Toute réclamation doit d’abord être adressée à :":"Toda reclamación debe dirigirse primero a:","La réclamation doit expliquer le problème et contenir les éléments nécessaires à son traitement.":"La reclamación debe explicar el problema e incluir la información necesaria para su tramitación.","Informations à compléter":"Información pendiente de completar","21. Médiation de la consommation":"21. Mediación de consumo","Après une réclamation écrite préalable restée sans solution, le client consommateur peut recourir gratuitement au médiateur de la consommation dont relève TWINS FAB CAB SERVICE.":"Tras una reclamación escrita previa que no haya sido resuelta, el cliente consumidor puede recurrir gratuitamente al mediador de consumo competente para TWINS FAB CAB SERVICE.","Médiateur actuellement en cours de désignation.":"Actualmente se está designando un mediador.","Le nom, l’adresse postale et le site internet du médiateur seront ajoutés à cette section dès la finalisation de l’adhésion.":"El nombre, la dirección postal y el sitio web del mediador se añadirán a esta sección una vez finalizada la adhesión.","Cette section temporaire doit être remplacée par les véritables coordonnées du médiateur avant que les CGV soient considérées comme définitivement complètes.":"Esta sección temporal debe sustituirse por los datos de contacto reales del mediador antes de que las CGV puedan considerarse definitivamente completas.","22. Droit applicable et règlement des litiges":"22. Derecho aplicable y resolución de litigios","Les présentes CGV sont soumises au droit français.":"Las presentes CGV se rigen por la legislación francesa.","En cas de difficulté, les parties chercheront d’abord une solution amiable.":"En caso de dificultad, las partes buscarán primero una solución amistosa.","À défaut d’accord amiable ou de médiation, le litige pourra être porté devant la juridiction compétente selon les règles légales applicables.":"A falta de acuerdo amistoso o mediación, el litigio podrá someterse al tribunal competente de conformidad con las normas legales aplicables.","23. Modification des CGV":"23. Modificación de las CGV","TWINS FAB CAB SERVICE peut modifier les présentes CGV pour tenir compte d’une évolution de ses services ou de la réglementation.":"TWINS FAB CAB SERVICE puede modificar las presentes CGV para tener en cuenta cambios en sus servicios o en la normativa.","Les conditions applicables à une réservation sont celles acceptées au moment de sa confirmation, sauf accord écrit ultérieur entre les parties.":"Las condiciones aplicables a una reserva son las aceptadas en el momento de su confirmación, salvo acuerdo escrito posterior entre las partes."},"de":{"Votre chauffeur privé à Lille":"Ihr privater Chauffeur in Lille","Retour à l’accueil":"Zurück zur Startseite","Accueil":"Startseite","Mentions légales":"Impressum","Politique de confidentialité":"Datenschutzerklärung","politique de confidentialité":"Datenschutzerklärung","CGV":"AGB","© 2026 Twins Fab Cab Service VTC – Tous droits réservés.":"© 2026 Twins Fab Cab Service VTC – Alle Rechte vorbehalten.","Dénomination sociale :":"Firmenbezeichnung:","Nom commercial :":"Handelsname:","Forme juridique :":"Rechtsform:","Société par actions simplifiée à associé unique (SASU)":"Vereinfachte Aktiengesellschaft mit Alleingesellschafter (SASU)","Capital social :":"Stammkapital:","Siège social :":"Firmensitz:","TVA intracommunautaire :":"Umsatzsteuer-Identifikationsnummer:","Téléphone :":"Telefon:","Adresse e-mail :":"E-Mail-Adresse:","E-mail :":"E-Mail:","10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, France":"10 rue d’Alsace, Tour America 2B, 59370 Mons-en-Barœul, Frankreich","59370 Mons-en-Barœul, France":"59370 Mons-en-Barœul, Frankreich","Dernière mise à jour : 29 juillet 2026":"Letzte Aktualisierung: 29. Juli 2026","Pour plus d’informations, consultez la":"Weitere Informationen finden Sie in der","Conditions générales de vente | Twins Fab Cab Service VTC":"Allgemeine Geschäftsbedingungen | Twins Fab Cab Service VTC","Conditions générales":"Allgemeine Geschäftsbedingungen","de vente":"","Les présentes conditions définissent les règles applicables aux réservations et prestations de transport proposées par Twins Fab Cab Service VTC.":"Diese Bedingungen regeln die Reservierungen und Beförderungsleistungen von Twins Fab Cab Service VTC.","1. Identité du prestataire":"1. Angaben zum Dienstleister","RCS :":"Handelsregister:","Inscription au registre VTC :":"Eintragung im VTC-Register:","2. Objet":"2. Gegenstand","Les présentes conditions générales de vente, ci-après les « CGV », encadrent les prestations de transport de personnes avec chauffeur proposées par TWINS FAB CAB SERVICE.":"Diese Allgemeinen Geschäftsbedingungen, nachfolgend „AGB“, regeln die von TWINS FAB CAB SERVICE angebotenen Personenbeförderungsleistungen mit Chauffeur.","Elles s’appliquent aux clients particuliers et, lorsque cela est pertinent, aux clients professionnels.":"Sie gelten für Privatkunden und, soweit einschlägig, für Geschäftskunden.","3. Acceptation des CGV":"3. Annahme der AGB","Toute réservation confirmée implique que le client reconnaît avoir pris connaissance des présentes CGV et les accepter sans réserve.":"Mit jeder bestätigten Reservierung erkennt der Kunde an, diese AGB gelesen zu haben und sie vorbehaltlos zu akzeptieren.","Les conditions particulières communiquées dans un devis ou une confirmation écrite complètent les présentes CGV.":"Besondere Bedingungen, die in einem Angebot oder einer schriftlichen Bestätigung mitgeteilt werden, ergänzen diese AGB.","4. Prestations proposées":"4. Angebotene Leistungen","Les prestations peuvent notamment comprendre :":"Die Leistungen können insbesondere Folgendes umfassen:","Les déplacements locaux dans Lille et ses alentours":"Lokale Fahrten in Lille und Umgebung","Les transferts vers ou depuis les gares":"Transfers zu oder von Bahnhöfen","Les transferts vers ou depuis les aéroports":"Transfers zu oder von Flughäfen","Les trajets de longue distance en France":"Langstreckenfahrten in Frankreich","Certains trajets internationaux, notamment vers la Belgique, les Pays-Bas et l’Allemagne":"Bestimmte internationale Fahrten, insbesondere nach Belgien, in die Niederlande und nach Deutschland","La mise à disposition d’un véhicule avec chauffeur":"Bereitstellung eines Fahrzeugs mit Chauffeur","Le véhicule peut accueillir un maximum de quatre passagers. Le client doit indiquer avant la confirmation le nombre de passagers, de bagages et toute demande particulière.":"Das Fahrzeug kann maximal vier Fahrgäste befördern. Vor der Bestätigung muss der Kunde die Anzahl der Fahrgäste, Gepäckstücke und besondere Wünsche angeben.","5. Demande et confirmation de réservation":"5. Reservierungsanfrage und -bestätigung","Une demande envoyée par le formulaire du site, WhatsApp, SMS, téléphone ou e-mail ne constitue pas automatiquement une réservation définitive.":"Eine Anfrage über das Website-Formular, WhatsApp, SMS, Telefon oder E-Mail stellt nicht automatisch eine verbindliche Reservierung dar.","La réservation devient définitive uniquement après :":"Die Reservierung wird erst verbindlich nach:","Confirmation écrite de TWINS FAB CAB SERVICE":"Schriftlicher Bestätigung durch TWINS FAB CAB SERVICE","Acceptation du prix par le client":"Annahme des Preises durch den Kunden","Versement des sommes demandées, lorsque la réservation nécessite un paiement préalable":"Zahlung der verlangten Beträge, sofern eine Vorauszahlung erforderlich ist","Une réservation doit normalement être effectuée au minimum":"Eine Reservierung sollte normalerweise mindestens","12 heures avant l’heure de départ":"12 Stunden vor der Abfahrtszeit","TWINS FAB CAB SERVICE peut exceptionnellement accepter une demande effectuée moins de 12 heures avant le départ, selon les disponibilités et après accord direct avec le client.":"TWINS FAB CAB SERVICE kann ausnahmsweise eine Anfrage weniger als 12 Stunden vor der Abfahrt annehmen, je nach Verfügbarkeit und nach direkter Vereinbarung mit dem Kunden.","6. Prix":"6. Preis","Le prix est déterminé selon le trajet, la distance, la durée estimée, les horaires, les éventuels frais de péage, de stationnement et les demandes particulières du client.":"Der Preis richtet sich nach Strecke, Entfernung, geschätzter Dauer, Uhrzeit, etwaigen Maut- und Parkgebühren sowie besonderen Kundenwünschen.","Le tarif minimum d’une prestation est fixé à":"Der Mindestpreis für eine Leistung beträgt",", sauf accord écrit différent.":"sofern nicht schriftlich etwas anderes vereinbart wurde.","Le prix définitif est communiqué au client avant la confirmation de la réservation.":"Der endgültige Preis wird dem Kunden vor der Bestätigung der Reservierung mitgeteilt.","7. Moyens de paiement":"7. Zahlungsmethoden","Selon les modalités convenues, le paiement peut être réalisé par :":"Je nach Vereinbarung kann die Zahlung erfolgen per:","Carte bancaire":"Bankkarte","Espèces":"Bargeld","Virement bancaire":"Banküberweisung","Tout autre moyen expressément accepté par TWINS FAB CAB SERVICE":"Jede andere von TWINS FAB CAB SERVICE ausdrücklich akzeptierte Zahlungsmethode","8. Arrhes pour les trajets de plus de 30 km":"8. Reservierungsanzahlung für Fahrten über 30 km","Pour tout trajet dont la distance estimée est supérieure à":"Für jede Fahrt mit einer geschätzten Entfernung von mehr als","30 kilomètres":"30 Kilometern",", le client doit verser une somme correspondant à":"muss der Kunde einen Betrag in Höhe von","20 % du prix total du trajet":"20 % des Gesamtpreises der Fahrt","Cette somme constitue des arrhes de réservation et doit être versée avant la confirmation définitive du trajet.":"Dieser Betrag dient als Reservierungsanzahlung und muss vor der endgültigen Bestätigung der Fahrt gezahlt werden.","Le solde restant est payé selon les modalités indiquées dans la confirmation de réservation.":"Der Restbetrag wird gemäß den in der Reservierungsbestätigung angegebenen Bedingungen gezahlt.","TWINS FAB CAB SERVICE peut demander un paiement préalable pour un autre type de trajet lorsque cela est clairement convenu avec le client avant la réservation.":"TWINS FAB CAB SERVICE kann für andere Fahrten eine Vorauszahlung verlangen, wenn dies vor der Reservierung eindeutig mit dem Kunden vereinbart wurde.","9. Annulation par le client":"9. Stornierung durch den Kunden","Annulation quatre heures ou plus avant le départ":"Stornierung vier Stunden oder mehr vor Abfahrt","Lorsque le client annule le trajet au minimum":"Wenn der Kunde die Fahrt mindestens","4 heures avant l’heure de départ prévue":"4 Stunden vor der geplanten Abfahrtszeit","Une somme correspondant à":"Ein Betrag in Höhe von","15 % du prix total du trajet":"15 % des Gesamtpreises der Fahrt","est remboursée au client":"wird dem Kunden erstattet","5 % du prix total du trajet":"5 % des Gesamtpreises der Fahrt","est conservée au titre des frais d’annulation":"wird als Stornogebühr einbehalten","Annulation moins de quatre heures avant le départ":"Stornierung weniger als vier Stunden vor Abfahrt","Lorsque l’annulation intervient moins de":"Wenn die Stornierung weniger als","4 heures avant le départ":"4 Stunden vor der Abfahrt",", les arrhes correspondant à":"bleibt die Reservierungsanzahlung in Höhe von","20 % du prix total":"20 % des Gesamtpreises","restent intégralement acquises à TWINS FAB CAB SERVICE.":"vollständig bei TWINS FAB CAB SERVICE.","Absence du client":"Nichterscheinen des Kunden","En cas d’absence du client au lieu et à l’heure convenus, sans annulation préalable, les arrhes de 20 % sont également conservées.":"Erscheint der Kunde ohne vorherige Stornierung nicht am vereinbarten Ort zur vereinbarten Zeit, wird die Anzahlung von 20 % ebenfalls einbehalten.","Exemple pour un trajet de 100 € :":"Beispiel für eine Fahrt von 100 €:","le client verse 20 € à la réservation.":"der Kunde zahlt bei der Reservierung 20 €.","S’il annule au moins quatre heures avant le départ, 15 € lui sont remboursés et 5 € sont conservés.":"Bei einer Stornierung mindestens vier Stunden vor Abfahrt werden 15 € erstattet und 5 € einbehalten.","S’il annule moins de quatre heures avant le départ, les 20 € sont conservés.":"Bei einer Stornierung weniger als vier Stunden vor Abfahrt werden die 20 € einbehalten.","10. Arrangement exceptionnel avec le client":"10. Ausnahmeregelung mit dem Kunden","TWINS FAB CAB SERVICE et le client peuvent convenir d’une solution différente lorsqu’une situation particulière le justifie.":"TWINS FAB CAB SERVICE und der Kunde können bei Vorliegen besonderer Umstände eine abweichende Lösung vereinbaren.","Cet arrangement doit être confirmé par écrit, notamment par WhatsApp, SMS ou e-mail.":"Diese Vereinbarung muss schriftlich bestätigt werden, insbesondere per WhatsApp, SMS oder E-Mail.","Lorsqu’un accord particulier a été confirmé par écrit, cet accord prévaut pour la réservation concernée sur la règle générale correspondante des présentes CGV.":"Wurde eine besondere Vereinbarung schriftlich bestätigt, geht diese für die betreffende Reservierung der entsprechenden allgemeinen Regel dieser AGB vor.","11. Annulation par le prestataire":"11. Stornierung durch den Dienstleister","En cas d’impossibilité d’exécuter la prestation, TWINS FAB CAB SERVICE informe le client dans les meilleurs délais.":"Kann die Leistung nicht erbracht werden, informiert TWINS FAB CAB SERVICE den Kunden so schnell wie möglich.","Les sommes versées sont remboursées conformément aux règles légales applicables aux arrhes, sauf cas de force majeure ou accord écrit différent autorisé par la loi.":"Gezahlte Beträge werden gemäß den gesetzlichen Vorschriften für Anzahlungen erstattet, außer bei höherer Gewalt oder einer gesetzlich zulässigen abweichenden schriftlichen Vereinbarung.","Lorsqu’une solution adaptée est disponible, un autre horaire ou une solution de remplacement peut être proposé au client.":"Wenn eine geeignete Lösung verfügbar ist, kann dem Kunden ein anderer Termin oder eine Ersatzlösung angeboten werden.","12. Droit de rétractation":"12. Widerrufsrecht","Les prestations proposées sont des services de transport de passagers.":"Bei den angebotenen Leistungen handelt es sich um Personenbeförderungsdienste.","Conformément à l’article L.221-2 du Code de la consommation, ces contrats ne bénéficient pas du délai général de rétractation de quatorze jours applicable à certains contrats conclus à distance.":"Gemäß Artikel L.221-2 des französischen Verbraucherschutzgesetzes gilt für diese Verträge nicht die allgemeine vierzehntägige Widerrufsfrist, die für bestimmte Fernabsatzverträge vorgesehen ist.","Les conditions d’annulation prévues dans les présentes CGV restent applicables.":"Die in diesen AGB vorgesehenen Stornierungsbedingungen bleiben anwendbar.","13. Obligations du client":"13. Pflichten des Kunden","Le client s’engage à :":"Der Kunde verpflichtet sich:","Fournir des informations exactes et complètes":"Genaue und vollständige Angaben zu machen","Être présent au lieu convenu à l’heure prévue":"Zur vereinbarten Zeit am vereinbarten Ort anwesend zu sein","Signaler rapidement tout changement concernant le trajet":"Änderungen bezüglich der Fahrt unverzüglich mitzuteilen","Respecter le chauffeur, le véhicule et les règles de sécurité":"Den Chauffeur, das Fahrzeug und die Sicherheitsregeln zu respektieren","Ne pas transporter de produit interdit, dangereux ou illégal":"Keine verbotenen, gefährlichen oder illegalen Gegenstände zu transportieren","Informer le chauffeur à l’avance de tout bagage volumineux ou demande particulière":"Den Chauffeur im Voraus über sperriges Gepäck oder besondere Wünsche zu informieren","14. Comportement et dégradations":"14. Verhalten und Schäden","Le chauffeur peut refuser ou interrompre une prestation lorsqu’un passager adopte un comportement dangereux, violent, insultant ou manifestement incompatible avec la sécurité du trajet.":"Der Chauffeur kann eine Leistung ablehnen oder abbrechen, wenn sich ein Fahrgast gefährlich, gewalttätig, beleidigend oder offensichtlich mit der Sicherheit der Fahrt unvereinbar verhält.","Les frais de nettoyage exceptionnel ou de réparation résultant d’une dégradation imputable au client ou à ses accompagnants pourront être facturés sur présentation de justificatifs.":"Kosten für außergewöhnliche Reinigung oder Reparaturen infolge von Schäden, die dem Kunden oder seinen Begleitpersonen zuzurechnen sind, können gegen Nachweis in Rechnung gestellt werden.","15. Retards et durée du trajet":"15. Verspätungen und Fahrtdauer","Les durées indiquées sont des estimations.":"Die angegebenen Fahrtdauern sind Schätzwerte.","Elles peuvent varier en raison de la circulation, des travaux, des contrôles, des conditions météorologiques, d’un accident ou de tout autre événement indépendant de la volonté du chauffeur.":"Sie können sich aufgrund von Verkehr, Baustellen, Kontrollen, Wetterbedingungen, Unfällen oder anderen Ereignissen außerhalb des Einflussbereichs des Chauffeurs ändern.","Le client doit prévoir une marge suffisante, notamment pour les départs de train et d’avion.":"Der Kunde muss ausreichend Zeitpuffer einplanen, insbesondere bei Zug- und Flugabfahrten.","16. Bagages et effets personnels":"16. Gepäck und persönliche Gegenstände","Le client doit vérifier avant de quitter le véhicule qu’il n’a oublié aucun effet personnel.":"Vor dem Verlassen des Fahrzeugs muss der Kunde prüfen, dass er keine persönlichen Gegenstände vergessen hat.","La capacité de prise en charge des bagages dépend de leur nombre, de leur taille et de l’espace disponible dans le véhicule.":"Die Gepäckkapazität hängt von Anzahl und Größe der Gepäckstücke sowie vom verfügbaren Platz im Fahrzeug ab.","Tout bagage inhabituel ou particulièrement volumineux doit être signalé avant la confirmation.":"Ungewöhnliches oder besonders sperriges Gepäck muss vor der Bestätigung angegeben werden.","17. Responsabilité":"17. Haftung","TWINS FAB CAB SERVICE s’engage à exécuter les prestations avec professionnalisme, prudence et diligence.":"TWINS FAB CAB SERVICE verpflichtet sich, die Leistungen professionell, umsichtig und sorgfältig zu erbringen.","Sa responsabilité ne peut être engagée pour les conséquences résultant d’informations incorrectes fournies par le client ou d’un événement extérieur imprévisible et irrésistible.":"Eine Haftung für Folgen aus falschen Angaben des Kunden oder aus einem unvorhersehbaren und unabwendbaren äußeren Ereignis ist ausgeschlossen.","Aucune disposition des présentes CGV ne limite les droits dont le consommateur bénéficie obligatoirement en vertu de la loi.":"Keine Bestimmung dieser AGB beschränkt zwingende gesetzliche Verbraucherrechte.","18. Force majeure":"18. Höhere Gewalt","Aucune partie ne pourra être tenue responsable d’un manquement causé par un événement de force majeure reconnu par la réglementation française.":"Keine Partei haftet für eine Pflichtverletzung, die durch ein nach französischem Recht anerkanntes Ereignis höherer Gewalt verursacht wird.","Les parties chercheront en priorité une solution adaptée, telle qu’un report, une modification ou un remboursement lorsque celui-ci est applicable.":"Die Parteien werden vorrangig eine geeignete Lösung suchen, etwa eine Verschiebung, Änderung oder gegebenenfalls eine Erstattung.","19. Données personnelles":"19. Personenbezogene Daten","Les données communiquées par le client sont utilisées pour répondre à sa demande, organiser le trajet, établir les documents nécessaires et respecter les obligations légales.":"Die vom Kunden mitgeteilten Daten werden verwendet, um seine Anfrage zu bearbeiten, die Fahrt zu organisieren, erforderliche Unterlagen zu erstellen und gesetzliche Pflichten zu erfüllen.","20. Réclamations":"20. Beschwerden","Toute réclamation doit d’abord être adressée à :":"Jede Beschwerde ist zunächst zu richten an:","La réclamation doit expliquer le problème et contenir les éléments nécessaires à son traitement.":"Die Beschwerde muss das Problem erläutern und die für ihre Bearbeitung erforderlichen Angaben enthalten.","Informations à compléter":"Angaben noch zu ergänzen","21. Médiation de la consommation":"21. Verbraucherschlichtung","Après une réclamation écrite préalable restée sans solution, le client consommateur peut recourir gratuitement au médiateur de la consommation dont relève TWINS FAB CAB SERVICE.":"Bleibt eine vorherige schriftliche Beschwerde ungelöst, kann sich ein Verbraucher kostenlos an die für TWINS FAB CAB SERVICE zuständige Verbraucherschlichtungsstelle wenden.","Médiateur actuellement en cours de désignation.":"Eine Schlichtungsstelle wird derzeit benannt.","Le nom, l’adresse postale et le site internet du médiateur seront ajoutés à cette section dès la finalisation de l’adhésion.":"Name, Postanschrift und Website der Schlichtungsstelle werden diesem Abschnitt nach Abschluss des Beitrittsverfahrens hinzugefügt.","Cette section temporaire doit être remplacée par les véritables coordonnées du médiateur avant que les CGV soient considérées comme définitivement complètes.":"Dieser vorläufige Abschnitt muss durch die tatsächlichen Kontaktdaten der Schlichtungsstelle ersetzt werden, bevor die AGB als vollständig gelten können.","22. Droit applicable et règlement des litiges":"22. Anwendbares Recht und Streitbeilegung","Les présentes CGV sont soumises au droit français.":"Diese AGB unterliegen französischem Recht.","En cas de difficulté, les parties chercheront d’abord une solution amiable.":"Bei Schwierigkeiten werden die Parteien zunächst eine gütliche Lösung anstreben.","À défaut d’accord amiable ou de médiation, le litige pourra être porté devant la juridiction compétente selon les règles légales applicables.":"Kommt keine gütliche Einigung oder Schlichtung zustande, kann der Streit nach den geltenden gesetzlichen Vorschriften vor das zuständige Gericht gebracht werden.","23. Modification des CGV":"23. Änderung der AGB","TWINS FAB CAB SERVICE peut modifier les présentes CGV pour tenir compte d’une évolution de ses services ou de la réglementation.":"TWINS FAB CAB SERVICE kann diese AGB ändern, um Änderungen seiner Leistungen oder der Rechtsvorschriften zu berücksichtigen.","Les conditions applicables à une réservation sont celles acceptées au moment de sa confirmation, sauf accord écrit ultérieur entre les parties.":"Für eine Reservierung gelten die Bedingungen, die zum Zeitpunkt ihrer Bestätigung akzeptiert wurden, sofern die Parteien später nichts anderes schriftlich vereinbaren."}}};
  const legalPageMeta = {"mentions-legales.html":{"en":{"title":"Legal notice | Twins Fab Cab Service VTC","description":"Legal notice for the Twins Fab Cab Service VTC website."},"es":{"title":"Aviso legal | Twins Fab Cab Service VTC","description":"Aviso legal del sitio web de Twins Fab Cab Service VTC."},"de":{"title":"Impressum | Twins Fab Cab Service VTC","description":"Impressum der Website von Twins Fab Cab Service VTC."}},"politique-confidentialite.html":{"en":{"title":"Privacy policy | Twins Fab Cab Service VTC","description":"Privacy policy and personal-data protection information for Twins Fab Cab Service VTC."},"es":{"title":"Política de privacidad | Twins Fab Cab Service VTC","description":"Política de privacidad y protección de datos personales de Twins Fab Cab Service VTC."},"de":{"title":"Datenschutzerklärung | Twins Fab Cab Service VTC","description":"Datenschutzerklärung und Informationen zum Schutz personenbezogener Daten bei Twins Fab Cab Service VTC."}},"cgv.html":{"en":{"title":"General Terms and Conditions of Sale | Twins Fab Cab Service VTC","description":"General terms and conditions of sale and transport for Twins Fab Cab Service VTC."},"es":{"title":"Condiciones Generales de Venta | Twins Fab Cab Service VTC","description":"Condiciones generales de venta y transporte de Twins Fab Cab Service VTC."},"de":{"title":"Allgemeine Geschäftsbedingungen | Twins Fab Cab Service VTC","description":"Allgemeine Geschäfts- und Beförderungsbedingungen von Twins Fab Cab Service VTC."}}};

  const pageName = (window.location.pathname.split("/").pop() || "").toLowerCase();
  const pageTranslations = legalPageTranslations[pageName];
  if (!pageTranslations) return;

  const lang = localStorage.getItem("preferredLanguage") || "fr";
  document.documentElement.lang = lang;
  if (lang === "fr" || !pageTranslations[lang]) return;

  const dictionary = pageTranslations[lang];
  const normalize = (value) => value.replace(/\s+/g, " ").trim();

  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT,
    {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest("script, style")) return NodeFilter.FILTER_REJECT;
        const key = normalize(node.nodeValue || "");
        return key && dictionary[key] !== undefined
          ? NodeFilter.FILTER_ACCEPT
          : NodeFilter.FILTER_REJECT;
      }
    }
  );

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    const original = node.nodeValue || "";
    const key = normalize(original);
    const leading = (original.match(/^\s*/) || [""])[0];
    const trailing = (original.match(/\s*$/) || [""])[0];
    node.nodeValue = leading + dictionary[key] + trailing;
  });

  const meta = legalPageMeta[pageName] && legalPageMeta[pageName][lang];
  if (meta) {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", meta.description);
  }

  const homeLabel = dictionary["Retour à l’accueil"];
  if (homeLabel) {
    document.querySelectorAll('[aria-label="Retour à l’accueil"]').forEach((el) => {
      el.setAttribute("aria-label", homeLabel);
    });
  }
});
