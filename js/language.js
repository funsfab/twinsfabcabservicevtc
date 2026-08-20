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
tarifsFooterNote: "Réservation requise minimum 24h avant le départ.",


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
      whatsapp: "NOUS ÉCRIRE SUR WHATSAPP",
      reservationEyebrow: "RÉSERVATION",
reservationHeroTitle1: "Réservez votre",
reservationHeroTitle2: "chauffeur VTC",
reservationHeroDescription1: "Demande de réservation minimum",
reservationHeroDescription2: "24 heures avant le départ.",
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
tarifsFooterNote: "Reservation required at least 24 hours before departure.",



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
      whatsapp: "MESSAGE US ON WHATSAP",
reservationEyebrow: "RESERVATION",
reservationHeroTitle1: "Book your",
reservationHeroTitle2: "VTC driver",
reservationHeroDescription1: "Reservation required at least",
reservationHeroDescription2: "24 hours before departure.",
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
tarifsFooterNote: "Reserva obligatoria al menos 24 horas antes de la salida.",


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
      whatsapp: "ESCRÍBANOS POR WHATSAPP",

  reservationEyebrow: "RESERVA",
reservationHeroTitle1: "Reserve su",
reservationHeroTitle2: "chófer VTC",
reservationHeroDescription1: "Reserva obligatoria con al menos",
reservationHeroDescription2: "24 horas de antelación.",
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
tarifsFooterNote: "Reservierung mindestens 24 Stunden vor der Abfahrt erforderlich.",


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
      whatsapp: "WHATSAPP-NACHRICHT SENDEN",
reservationEyebrow: "RESERVIERUNG",
reservationHeroTitle1: "Buchen Sie Ihren",
reservationHeroTitle2: "VTC-Fahrer",
reservationHeroDescription1: "Reservierung mindestens",
reservationHeroDescription2: "24 Stunden vor der Abfahrt.",
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
    });

  });


  const savedLanguage =
    localStorage.getItem("preferredLanguage") || "fr";

  changeLanguage(savedLanguage);

});
