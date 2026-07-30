function toggleMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const menu = document.querySelector("#mainHeader nav");

  if (!menu) return;

  menu.classList.toggle("open");
}
document.addEventListener("click", function (event) {
  const nav = document.querySelector("#mainHeader nav");
  const menuButton = document.querySelector(".menu-btn");

  if (!nav || !menuButton) return;

  const clickedInsideMenu = nav.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    nav.classList.remove("open");
  }
});

document.querySelectorAll("#mainHeader nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    const nav = document.querySelector("#mainHeader nav");

    if (nav) {
      nav.classList.remove("open");
    }
  });
});
function sendReservation(event) {
  event.preventDefault();
  const nom = document.getElementById("nom").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const depart = document.getElementById("depart").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const dateFr = date
  ? date.split("-").reverse().join("/")
  : "Non précisée";
  const heure = document.getElementById("heure").value;
  const passagers = document.getElementById("passagers").value;
  const bagages = document.getElementById("bagages")?.value || "Non précisé";
const transport = document.getElementById("transport")?.value || "Non précisé";
const allerRetour = document.getElementById("allerRetour")?.value || "Non précisé";
  const paiement = document.getElementById("paiement").value;
  const infos = document.getElementById("message").value;
const tarifEstime = document.getElementById("tarifResultat")?.textContent || "Non estimé";
  const message =
`📋 *Demande de Réservation*
👤 Nom : ${nom}
📞 Téléphone : ${telephone}
📧 Email : ${email}

📍 Départ : ${depart}
🎯 Destination : ${destination}

📅 Date : ${dateFr}
🕒 Heure : ${heure}

👥 Passagers : ${passagers}
🧳 Bagages : ${bagages || "Non précisé"}
🔁 Type de trajet : ${allerRetour || "Non précisé"}
✈️ N° de vol ou de train : ${transport || "Non précisé"}
💳 Paiement : ${paiement}
📝 Informations : ${infos || "Aucune"}
💶 Tarif estimé : ${tarifEstime}
`;
alert("La demande est prête");
  
  reservationMessage = message;
openContactModal();
}
let reservationMessage = "";

function openContactModal() {
  const modal = document.getElementById("contactModal");

  if (!modal) {
    console.error("La fenêtre contactModal est introuvable.");
    return;
  }

  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeContactModal() {
  const modal = document.getElementById("contactModal");

  if (!modal) return;

  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function sendByWhatsApp() {
  const numero = "33621144767";

  window.location.href =
    "https://wa.me/" +
    numero +
    "?text=" +
    encodeURIComponent(reservationMessage);
}

function contactByPhone() {
  window.location.href = "tel:+33621144767";
}

function sendBySms() {
  const numero = "+33621144767";
  const separator = /iPhone|iPad|iPod/i.test(navigator.userAgent)
    ? "&"
    : "?";

  window.location.href =
    "sms:" +
    numero +
    separator +
    "body=" +
    encodeURIComponent(reservationMessage);
}

function sendByEmail() {
  const email = "funsfab@gmail.com";
  const subject = "Demande de réservation VTC";

  window.location.href =
    "mailto:" +
    email +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(reservationMessage);
}

/* Fermer en touchant la zone sombre */
document.addEventListener("click", function (event) {
  const modal = document.getElementById("contactModal");

  if (event.target === modal) {
    closeContactModal();
  }
});

function estimerTarif() {
  const km = Number(document.getElementById("estKm").value);
  const resultat = document.getElementById("tarifResultat");

  if (!km || km <= 0) {
    resultat.innerHTML = "Veuillez entrer une distance valide en kilomètres.";
    return;
  }

  const prix = Math.max(30, km * 2);

  resultat.innerHTML =
    `Tarif estimé : ${prix.toFixed(0)} €<br><small>*Le tarif définitif sera confirmé après étude de votre trajet.</small>`;
}

document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(function (counter) {
    const target = Number(counter.dataset.target);
    let intervalId = null;
    let restartId = null;

    function stopCounter() {
      clearInterval(intervalId);
      clearTimeout(restartId);

      intervalId = null;
      restartId = null;
    }

    function runCounter() {
      stopCounter();

      let current = 0;
      counter.textContent = current;

      intervalId = setInterval(function () {
        current++;
        counter.textContent = current;

        if (current >= target) {
          clearInterval(intervalId);

          restartId = setTimeout(function () {
            runCounter();
          }, 1200);
        }
      }, 300);
    }

    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            runCounter();
          } else {
            stopCounter();
            counter.textContent = "0";
          }
        });
      },
      {
        threshold: 0.4
      }
    );

    observer.observe(counter);
  });
});

/* ===== Header effect while scrolling ===== */

document.addEventListener("DOMContentLoaded", function () {
  const mainHeader = document.getElementById("mainHeader");

  if (!mainHeader) return;

  function updateHeader() {
    if (window.scrollY > 40) {
      mainHeader.classList.add("header-scrolled");
    } else {
      mainHeader.classList.remove("header-scrolled");
    }
  }

  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
});
/* ===== Highlight active menu section ===== */

const sectionLinks = document.querySelectorAll(
  '#mainHeader nav a[href^="#"]'
);

const pageSections = document.querySelectorAll(
  '#accueil, #services, #vehicule, #apropos, #contact'
);

function updateActiveMenuLink() {
  let currentSection = "accueil";
  const triggerPoint = window.innerHeight * 0.35;

  pageSections.forEach(function (section) {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop <= triggerPoint) {
      currentSection = section.id;
    }
  });

  sectionLinks.forEach(function (link) {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveMenuLink);
window.addEventListener("load", updateActiveMenuLink);

/* ==================================================
   WHY PREMIUM ACCORDION
================================================== */

const premiumCards = document.querySelectorAll(".why-premium-card");

premiumCards.forEach((card) => {

    const button = card.querySelector(".why-premium-trigger");

    button.addEventListener("click", () => {

        const alreadyOpen = card.classList.contains("is-open");

        premiumCards.forEach((item) => {

            item.classList.remove("is-open");

            item
              .querySelector(".why-premium-trigger")
              .setAttribute("aria-expanded","false");

        });

        if (!alreadyOpen) {

            card.classList.add("is-open");

            button.setAttribute("aria-expanded","true");

        }

    });

});
document.querySelectorAll(".destination-featured-card").forEach((card) => {
  card.addEventListener("click", () => {
    const destinationName = card.querySelector("h3")?.textContent.trim();

    if (!destinationName) return;

    const url =
      "reservation.html?destination=" +
      encodeURIComponent(destinationName);

    window.location.href = url;
  });
});
const destinationField = document.getElementById("destination");

if (destinationField) {
  const params = new URLSearchParams(window.location.search);
  const selectedDestination = params.get("destination");

  if (selectedDestination) {
    destinationField.value = selectedDestination;
  }
}
/* =========================================================
   NOUVELLE PAGE RÉSERVATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  const menuButton = document.getElementById("reservationMenuButton");
  const navigation = document.getElementById("reservationNavigation");

  const reservationForm = document.getElementById("reservationForm");

  const contactModal = document.getElementById("contactModal");
  const modalCloseButton = document.getElementById(
    "reservationModalClose"
  );

  const sendWhatsAppButton = document.getElementById(
    "sendWhatsAppButton"
  );

  const sendSmsButton = document.getElementById(
    "sendSmsButton"
  );

  const sendEmailButton = document.getElementById(
    "sendEmailButton"
  );

  let reservationMessage = "";


  /* =========================
     MENU MOBILE
  ========================== */

  if (menuButton && navigation) {
    menuButton.addEventListener("click", function () {
      const isOpen = navigation.classList.toggle("open");

      menuButton.setAttribute(
        "aria-expanded",
        String(isOpen)
      );

      const icon = menuButton.querySelector("i");

      if (icon) {
        icon.className = isOpen
          ? "fa-solid fa-xmark"
          : "fa-solid fa-bars";
      }
    });

    navigation.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navigation.classList.remove("open");

        menuButton.setAttribute(
          "aria-expanded",
          "false"
        );

        const icon = menuButton.querySelector("i");

        if (icon) {
          icon.className = "fa-solid fa-bars";
        }
      });
    });
  }


  /* =========================
     DATE MINIMUM
  ========================== */

  const dateInput = document.getElementById("date");

  if (dateInput) {
    const tomorrow = new Date();

    tomorrow.setDate(tomorrow.getDate() + 1);

    const year = tomorrow.getFullYear();

    const month = String(
      tomorrow.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      tomorrow.getDate()
    ).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
  }


  /* =========================
     ENVOI DU FORMULAIRE
  ========================== */

  if (reservationForm) {
    reservationForm.addEventListener(
      "submit",
      function (event) {
        event.preventDefault();

        const nom = document
          .getElementById("nom")
          .value
          .trim();

        const telephone = document
          .getElementById("telephone")
          .value
          .trim();

        const email = document
          .getElementById("email")
          .value
          .trim();

        const depart = document
          .getElementById("depart")
          .value
          .trim();

        const destination = document
          .getElementById("destination")
          .value
          .trim();

        const transport = document
          .getElementById("transport")
          .value
          .trim();

        const allerRetour = document
          .getElementById("allerRetour")
          .value;

        const date = document
          .getElementById("date")
          .value;

        const heure = document
          .getElementById("heure")
          .value;

        const passagers = document
          .getElementById("passagers")
          .value;

        const bagages = document
          .getElementById("bagages")
          .value;

        const paiement = document
          .getElementById("paiement")
          .value;

        const message = document
          .getElementById("message")
          .value
          .trim();


        /* Vérification */
        if (
          !nom ||
          !telephone ||
          !depart ||
          !destination ||
          !date ||
          !heure ||
          !passagers
        ) {
          alert(
            "Veuillez remplir tous les champs obligatoires."
          );

          return;
        }


        /* Vérification du délai de 24 heures */
        const departureDate = new Date(
          `${date}T${heure}`
        );

        const currentDate = new Date();

        const minimumDepartureDate = new Date(
          currentDate.getTime() + 24 * 60 * 60 * 1000
        );

        if (departureDate < minimumDepartureDate) {
          alert(
            "La réservation doit être effectuée au minimum 24 heures avant le départ."
          );

          return;
        }


        const formattedDate = formatReservationDate(date);


        reservationMessage =
`DEMANDE DE RÉSERVATION

Nom : ${nom}
Téléphone : ${telephone}
Email : ${email || "Non renseigné"}

Adresse de départ : ${depart}
Destination : ${destination}
N° de vol ou de train : ${transport || "Non renseigné"}

Type de trajet : ${allerRetour}
Date de départ : ${formattedDate}
Heure de départ : ${heure}

Nombre de passagers : ${passagers}
Bagages : ${bagages || "Non renseigné"}
Mode de paiement : ${paiement || "Non renseigné"}

Informations complémentaires :
${message || "Aucune information complémentaire"}

Tarif minimum : 30 €
Le tarif définitif sera communiqué après étude de la demande.`;

        openReservationModal();
      }
    );
  }


  /* =========================
     FERMETURE DU MODAL
  ========================== */

  if (modalCloseButton) {
    modalCloseButton.addEventListener(
      "click",
      closeReservationModal
    );
  }

  document
    .querySelectorAll("[data-close-modal]")
    .forEach(function (element) {
      element.addEventListener(
        "click",
        closeReservationModal
      );
    });

  document.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Escape") {
        closeReservationModal();
      }
    }
  );


  /* =========================
     WHATSAPP
  ========================== */

  if (sendWhatsAppButton) {
    sendWhatsAppButton.addEventListener(
      "click",
      function () {
        const whatsappNumber = "33621144767";

        const whatsappUrl =
          `https://wa.me/${whatsappNumber}` +
          `?text=${encodeURIComponent(reservationMessage)}`;

        window.open(
          whatsappUrl,
          "_blank",
          "noopener,noreferrer"
        );

        closeReservationModal();
      }
    );
  }


  /* =========================
     SMS
  ========================== */

  if (sendSmsButton) {
    sendSmsButton.addEventListener(
      "click",
      function () {
        const phoneNumber = "+33621144767";

        const smsUrl =
          `sms:${phoneNumber}` +
          `?body=${encodeURIComponent(reservationMessage)}`;

        window.location.href = smsUrl;

        closeReservationModal();
      }
    );
  }


  /* =========================
     EMAIL
  ========================== */

  if (sendEmailButton) {
    sendEmailButton.addEventListener(
      "click",
      function () {
        /*
          Remplace l’adresse ci-dessous
          par ton adresse e-mail professionnelle.
        */
        const professionalEmail =
          "funsfab@gmail.com";

        const subject =
          "Demande de réservation – Twins Fab Cab Service VTC";

        const emailUrl =
          `mailto:${professionalEmail}` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(reservationMessage)}`;

        window.location.href = emailUrl;

        closeReservationModal();
      }
    );
  }


  /* =========================
     FONCTIONS
  ========================== */

  function openReservationModal() {
    if (!contactModal) {
      return;
    }

    contactModal.classList.add("open");

    contactModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";
  }


  function closeReservationModal() {
    if (!contactModal) {
      return;
    }

    contactModal.classList.remove("open");

    contactModal.setAttribute(
      "aria-hidden",
      "true"
    );

    document.body.style.overflow = "";
  }
/* ==========================
   GEOAPIFY AUTOCOMPLETE
========================== */

/* ==========================
   GEOAPIFY AUTOCOMPLETE
========================== */

const GEOAPIFY_API_KEY = "71f8e340b9cf4c8cb9d149daa99594ee";

function setupAddressAutocomplete(inputId) {
    const input = document.getElementById(inputId);

    if (!input) return;

    const suggestionsBox = document.createElement("div");
    suggestionsBox.className = "address-suggestions";

    input.parentElement.style.position = "relative";
    input.parentElement.appendChild(suggestionsBox);

    let timer;

    input.addEventListener("input", function () {
        clearTimeout(timer);

        const searchText = input.value.trim();

        if (searchText.length < 2) {
            suggestionsBox.innerHTML = "";
            suggestionsBox.style.display = "none";
            return;
        }

        timer = setTimeout(async function () {
            const url =
                "https://api.geoapify.com/v1/geocode/autocomplete" +
                "?text=" + encodeURIComponent(searchText) +
                "&lang=fr" +
"&limit=8" +
"&bias=proximity:3.0573,50.6292" +
"&filter=countrycode:fr,be,nl,de" +
                "&apiKey=" + encodeURIComponent(GEOAPIFY_API_KEY);

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error("Erreur Geoapify");
                }

                const data = await response.json();

                suggestionsBox.innerHTML = "";

                if (!data.features || data.features.length === 0) {
                    suggestionsBox.style.display = "none";
                    return;
                }

                data.features.forEach(function (feature) {
                    const suggestion = document.createElement("button");

                    suggestion.type = "button";
                    suggestion.className = "address-suggestion";
                    suggestion.textContent =
                        feature.properties.formatted;

                    suggestion.addEventListener("click", function () {
                        input.value = feature.properties.formatted;
                        suggestionsBox.innerHTML = "";
                        suggestionsBox.style.display = "none";
                    });

                    suggestionsBox.appendChild(suggestion);
                });

                suggestionsBox.style.display = "block";
            } catch (error) {
                console.error(error);
                suggestionsBox.style.display = "none";
            }
        }, 400);
    });

    document.addEventListener("click", function (event) {
        if (!input.parentElement.contains(event.target)) {
            suggestionsBox.style.display = "none";
        }
    });
}

setupAddressAutocomplete("depart");
setupAddressAutocomplete("destination");

  function formatReservationDate(dateValue) {
    if (!dateValue) {
      return "Non renseignée";
    }

    const parts = dateValue.split("-");

    if (parts.length !== 3) {
      return dateValue;
    }

    return `${parts[2]}/${parts[1]}/${parts[0]}`;
  }
});

/* ==========================
   CONTACT CHOICE POPUP
========================== */

document.addEventListener("DOMContentLoaded", function () {
    const openButtons = [
    document.getElementById("openContactChoices"),
    document.getElementById("openFooterContactChoices")
].filter(Boolean);
    const modal = document.getElementById("contactChoiceModal");
    const closeButton = document.getElementById("closeContactChoices");

    if (!openButtons.length || !modal || !closeButton) return;

    openButtons.forEach(function(button) {
    button.addEventListener("click", function () {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
    });
});

    closeButton.addEventListener("click", function () {
        modal.classList.remove("show");
        document.body.style.overflow = "";
    });

    modal.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            modal.classList.remove("show");
            document.body.style.overflow = "";
        }
    });
});

/* ==========================
   EMAIL CHOICE POPUP
========================== */

document.addEventListener("DOMContentLoaded", function () {
    const openEmailButton =
        document.getElementById("openEmailChoices");

    const emailModal =
        document.getElementById("emailChoiceModal");

    const closeEmailButton =
        document.getElementById("closeEmailChoices");

    const copyEmailButton =
        document.getElementById("copyEmailButton");

    const emailAddress = "funsfab@gmail.com";

    if (
        !openEmailButton ||
        !emailModal ||
        !closeEmailButton ||
        !copyEmailButton
    ) {
        return;
    }

    function closeEmailModal() {
        emailModal.classList.remove("show");
        document.body.style.overflow = "";
    }

    openEmailButton.addEventListener("click", function () {
        emailModal.classList.add("show");
        document.body.style.overflow = "hidden";
    });

    closeEmailButton.addEventListener("click", closeEmailModal);

    emailModal.addEventListener("click", function (event) {
        if (event.target === emailModal) {
            closeEmailModal();
        }
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeEmailModal();
        }
    });

    copyEmailButton.addEventListener("click", async function () {
        try {
            await navigator.clipboard.writeText(emailAddress);

            copyEmailButton.textContent =
                "✅ Adresse e-mail copiée";

            setTimeout(function () {
                copyEmailButton.textContent =
                    "📋 Copier l'adresse e-mail";
            }, 2000);
        } catch (error) {
            alert("Adresse e-mail : " + emailAddress);
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const reviewText =
        document.getElementById("luxuryReviewText");

    const reviewToggle =
        document.getElementById("luxuryReviewToggle");

    if (!reviewText || !reviewToggle) {
        return;
    }

    function getCollapsedHeight() {
        const styles = window.getComputedStyle(reviewText);
        const lineHeight = parseFloat(styles.lineHeight);

        return lineHeight * 4;
    }

    function prepareReviewText() {
        const collapsedHeight = getCollapsedHeight();

        reviewText.classList.remove("is-expanded");
        reviewText.style.maxHeight =
            `${collapsedHeight}px`;

        reviewToggle.textContent = "Lire la suite";
        reviewToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        requestAnimationFrame(function () {
            reviewToggle.hidden =
                reviewText.scrollHeight <=
                collapsedHeight + 4;
        });
    }

    reviewToggle.addEventListener("click", function () {
        const isExpanded =
            reviewToggle.getAttribute(
                "aria-expanded"
            ) === "true";

        const collapsedHeight =
            getCollapsedHeight();

        if (!isExpanded) {
            reviewText.classList.add("is-expanded");

            reviewText.style.maxHeight =
                `${reviewText.scrollHeight}px`;

            reviewToggle.textContent = "Cacher";

            reviewToggle.setAttribute(
                "aria-expanded",
                "true"
            );
        } else {
            reviewText.style.maxHeight =
                `${reviewText.scrollHeight}px`;

            requestAnimationFrame(function () {
                reviewText.classList.remove(
                    "is-expanded"
                );

                reviewText.style.maxHeight =
                    `${collapsedHeight}px`;
            });

            reviewToggle.textContent =
                "Lire la suite";

            reviewToggle.setAttribute(
                "aria-expanded",
                "false"
            );
        }
    });

    window.addEventListener("resize", function () {
        const isExpanded =
            reviewToggle.getAttribute(
                "aria-expanded"
            ) === "true";

        reviewText.style.maxHeight = isExpanded
            ? `${reviewText.scrollHeight}px`
            : `${getCollapsedHeight()}px`;
    });

    prepareReviewText();
});

/* =========================================
   REAL HORIZONTAL REVIEWS CAROUSEL
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const carousel =
        document.getElementById("reviewsCarousel");

    const track =
        document.getElementById("reviewsTrack");
        
        const viewport =
    carousel?.querySelector(".reviews-viewport");

    const scrollbarThumb =
    const scrollbarThumb =
    document.getElementById("reviewsScrollbarThumb");
        const scrollbar =
    scrollbarThumb?.parentElement;

    if (
    !carousel ||
    !viewport ||
    !track ||
    !scrollbar ||
    !scrollbarThumb
) {
    return;
} 

    const reviews = [
        {
            name: "Ana Paula Jardim",
            avatar: "A",
            date: "Il y a 10 mois",
            text:
                "Je viens du Brésil. Excellent transfert de Lille à Paris. Très bon tarif, excellente voiture et ponctualité irréprochable. Je recommande vivement ce service."
        },
        {
            name: "Neta Hershkovitz Meir",
            avatar: "N",
            date: "Il y a 9 mois",
            text:
                "Excellent service ! William a été fiable, ponctuel et très sympathique. Il a rendu le trajet fluide et agréable. Je recommande vivement !"
        },
        {
            name: "Elin Kristine Eriksen",
            avatar: "E",
            date: "Il y a 1 an",
            text:
                "Excellent ! Chauffeur très poli ! Il était toujours à l’heure et rendait chaque trajet agréable. Je recommande ce chauffeur, vous ne le regretterez pas !"
        },
        {
            name: "Leslie Berton",
            avatar: "L",
            date: "Il y a 1 an",
            text:
                "Excellent service de A à Z. C’est toujours un plaisir de travailler avec eux. Je recommande à 100 %."
        },
        {
            name: "irie bass",
            avatar: "I",
            date: "Il y a 9 mois",
            text:
                "Excellent service ! Chauffeur fiable, sympathique et très respectueux. Conduite fluide, véhicule propre et confortable. Absolument rien à redire, je recommande à 100 % !"
        },
        {
            name: "Iris Macedo",
            avatar: "I",
            date: "Il y a 10 mois",
            text:
                "Je suis brésilienne et j’étais à Lille pour un déplacement professionnel. J’ai fait appel aux services de William et je le recommande vivement. Il parle anglais, ce qui a facilité la communication. Son professionnalisme, sa ponctualité, sa conduite responsable et sa gentillesse sont remarquables. Notre trajet de Lille à l’aéroport Charles-de-Gaulle pendant la nuit a été impeccable."
        },
        {
            name: "Caroline Gay",
            avatar: "C",
            date: "Il y a 1 an",
            text:
                "William est un professionnel respectueux qui conduit parfaitement. La voiture est toujours propre et confortable. Il est sympathique, disponible, souriant et extrêmement ponctuel. N’hésitez pas à faire appel à lui."
        },
        {
            name: "Benjamin Ulmann",
            avatar: "B",
            date: "Il y a 10 mois",
            text:
                "Une excellente expérience. Une très belle voiture et un chauffeur bilingue français-anglais, prudent, serviable et ponctuel. Je recommande vivement."
        },
        {
            name: "herbet claude",
            avatar: "H",
            date: "Il y a 1 an",
            text:
                "Ayant fait appel à ses services à deux reprises, je recommande vivement ce chauffeur. Ponctuel, avec une conduite souple et beaucoup de gentillesse : un vrai professionnel. Je ferais de nouveau appel à lui sans hésitation."
        },
        {
            name: "Agathe MARTIN",
            avatar: "A",
            date: "Il y a 2 ans",
            text:
                "Service professionnel et ponctuel ! La voiture était propre, avec beaucoup d’espace pour les bagages. Je recommande vivement les services de William."
        }
    ];

    const stars = `
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
    `;

    /* Create the 10 complete cards */

    track.innerHTML = reviews.map(function (review) {
        return `
            <article class="reviews-card">

                <div class="reviews-profile">

                    <div class="reviews-avatar">
                        ${review.avatar}
                    </div>

                    <div class="reviews-customer">

                        <h3 class="reviews-name">
                            ${review.name}
                            <i
                                class="fa-solid fa-circle-check"
                                aria-label="Avis vérifié"
                            ></i>
                        </h3>

                        <p class="reviews-date">
                            ${review.date}
                        </p>

                    </div>

                </div>

                <div
                    class="reviews-stars"
                    aria-label="5 étoiles sur 5"
                >
                    ${stars}
                </div>

                <blockquote class="reviews-text">
                    ${review.text}
                </blockquote>

                <button
                    type="button"
                    class="reviews-toggle"
                    aria-expanded="false"
                >
                    Lire la suite
                </button>

            </article>
        `;
    }).join("");

    const cards =
        Array.from(track.querySelectorAll(".reviews-card"));

    let currentIndex = 0;
    let direction = 1;
    let automaticTimer = null;
    let carouselIsVisible = false;
    let scrollEndTimer = null;
let restartTimer = null;

    /* Move the complete horizontal track */

    function FromScroll() {
    const maxScroll = Math.max(
        1,
        viewport.scrollWidth - viewport.clientWidth
    );

    const maxThumbLeft = Math.max(
        0,
        scrollbar.clientWidth -
        scrollbarThumb.offsetWidth
    );

    const progress = Math.min(
        1,
        Math.max(0, viewport.scrollLeft / maxScroll)
    );

    scrollbarThumb.style.left =
        `${progress * maxThumbLeft}px`;
}
function getCardPosition(index) {
    return (
        cards[index].offsetLeft -
        cards[0].offsetLeft
    );
}

function updateProgressFromScroll() {
    const maxScroll = Math.max(
        0,
        viewport.scrollWidth - viewport.clientWidth
    );

    const maxThumbLeft = Math.max(
        0,
        scrollbar.clientWidth - scrollbarThumb.offsetWidth
    );

    const progress =
        maxScroll > 0
            ? viewport.scrollLeft / maxScroll
            : 0;

    scrollbarThumb.style.left =
        `${progress * maxThumbLeft}px`;
}
function showReview(index) {
    currentIndex = Math.max(
        0,
        Math.min(index, cards.length - 1)
    );

    viewport.scrollTo({
        left: getCardPosition(currentIndex),
        behavior: "smooth"
    });

    requestAnimationFrame(
    updateProgressFromScroll
);
}

    function currentReviewIsExpanded() {
        const currentCard = cards[currentIndex];

        return currentCard
            ?.querySelector(".reviews-text")
            ?.classList.contains("is-expanded");
    }

    function showNextReview() {
        if (currentReviewIsExpanded()) {
            return;
        }

        let nextIndex =
            currentIndex + direction;

        /* At review 10, begin travelling backwards */

        if (nextIndex >= reviews.length) {
            direction = -1;
            nextIndex = reviews.length - 2;
        }

        /* At review 1, begin travelling forwards */

        if (nextIndex < 0) {
            direction = 1;
            nextIndex = 1;
        }

        showReview(nextIndex);
    }

    function startCarousel() {
        if (
            automaticTimer ||
            !carouselIsVisible ||
            currentReviewIsExpanded()
        ) {
            return;
        }

        automaticTimer = window.setInterval(
            showNextReview,
            6000
        );
    }

    /* Manual finger swipe */

function updateReviewFromScroll() {
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    cards.forEach(function (card, index) {
        const distance = Math.abs(
    viewport.scrollLeft -
    (
        card.offsetLeft -
        cards[0].offsetLeft
    )
);

        if (distance < nearestDistance) {
            nearestDistance = distance;
            nearestIndex = index;
        }
    });

    if (nearestIndex !== currentIndex) {
        direction =
            nearestIndex > currentIndex ? 1 : -1;

        currentIndex = nearestIndex;
    }

    ();
}

function restartCarouselAfterSwipe() {
    window.clearTimeout(restartTimer);

    restartTimer = window.setTimeout(
        function () {
            stopCarousel();
            startCarousel();
        },
        1200
    );
}

viewport.addEventListener(
    "pointerdown",
    function () {
        stopCarousel();
    }
);

viewport.addEventListener(
    "pointerup",
    restartCarouselAfterSwipe
);

viewport.addEventListener(
    "pointercancel",
    restartCarouselAfterSwipe
);

function updateProgressFromScroll() {
    const maxScroll = Math.max(
        1,
        viewport.scrollWidth - viewport.clientWidth
    );

    const maxThumbLeft = Math.max(
        0,
        scrollbar.clientWidth -
        scrollbarThumb.offsetWidth
    );

    const progress = Math.min(
        1,
        Math.max(
            0,
            viewport.scrollLeft / maxScroll
        )
    );

    scrollbarThumb.style.left =
        `${progress * maxThumbLeft}px`;
}
viewport.addEventListener(
    "scroll",
    function () {
        /* Move the bar continuously with the cards */
        updateProgressFromScroll();

        window.clearTimeout(scrollEndTimer);

        scrollEndTimer = window.setTimeout(
            function () {
                updateReviewFromScroll();
                restartCarouselAfterSwipe();
            },
            120
        );
    },
    {
        passive: true
    }
);

/* =========================================
   DRAGGABLE REVIEWS PROGRESS BAR
========================================= */

let isDraggingReviewBar = false;
let draggedPointerId = null;

function moveCarouselFromBar(clientX) {
    const barRect =
        scrollbar.getBoundingClientRect();

    const thumbWidth =
        scrollbarThumb.offsetWidth;

    const maxThumbLeft = Math.max(
        0,
        barRect.width - thumbWidth
    );

    let thumbLeft =
        clientX -
        barRect.left -
        thumbWidth / 2;

    thumbLeft = Math.max(
        0,
        Math.min(thumbLeft, maxThumbLeft)
    );

    const progress =
        maxThumbLeft > 0
            ? thumbLeft / maxThumbLeft
            : 0;

    const maxScroll = Math.max(
        0,
        viewport.scrollWidth -
        viewport.clientWidth
    );

    scrollbarThumb.style.left =
        `${thumbLeft}px`;

    viewport.scrollLeft =
        progress * maxScroll;
}

scrollbar.addEventListener(
    "pointerdown",
    function (event) {
        event.preventDefault();

        stopCarousel();

        isDraggingReviewBar = true;
        draggedPointerId = event.pointerId;

        scrollbar.setPointerCapture(
            event.pointerId
        );

        /* Temporarily stop snapping while dragging */
        viewport.style.scrollSnapType = "none";

        moveCarouselFromBar(event.clientX);
    }
);

scrollbar.addEventListener(
    "pointermove",
    function (event) {
        if (
            !isDraggingReviewBar ||
            event.pointerId !== draggedPointerId
        ) {
            return;
        }

        event.preventDefault();

        moveCarouselFromBar(event.clientX);
    }
);

function finishReviewBarDrag(event) {
    if (
        !isDraggingReviewBar ||
        event.pointerId !== draggedPointerId
    ) {
        return;
    }

    isDraggingReviewBar = false;
    draggedPointerId = null;

    viewport.style.scrollSnapType =
        "x mandatory";

    updateReviewFromScroll();

    /* Centre the nearest complete card */
    showReview(currentIndex);

    restartCarouselAfterSwipe();
}

scrollbar.addEventListener(
    "pointerup",
    finishReviewBarDrag
);

scrollbar.addEventListener(
    "pointercancel",
    finishReviewBarDrag
);

    /* Lire la suite / Cacher */

    track.addEventListener("click", function (event) {
        const button =
            event.target.closest(".reviews-toggle");

        if (!button) {
            return;
        }

        const card =
            button.closest(".reviews-card");

        const text =
            card?.querySelector(".reviews-text");

        if (!text) {
            return;
        }

        const opening =
            !text.classList.contains("is-expanded");

        if (opening) {
            stopCarousel();

            text.classList.add("is-expanded");
            card.classList.add("is-expanded");

            button.textContent = "Cacher";

            button.setAttribute(
                "aria-expanded",
                "true"
            );
        } else {
            text.classList.remove("is-expanded");
card.classList.remove("is-expanded");
            button.textContent = "Lire la suite";

            button.setAttribute(
                "aria-expanded",
                "false"
            );

            startCarousel();
        }
    });

    /* Hide Lire la suite on reviews that already fit */

    function updateToggleVisibility() {
        cards.forEach(function (card) {
            const text =
                card.querySelector(".reviews-text");

            const button =
                card.querySelector(".reviews-toggle");

            if (!text || !button) {
                return;
            }

            if (text.classList.contains("is-expanded")) {
                return;
            }

            button.hidden =
                text.scrollHeight <= text.clientHeight + 3;
        });
    }

    requestAnimationFrame(updateToggleVisibility);

    window.addEventListener(
        "resize",
        updateToggleVisibility
    );

    /* Only move while the review section is visible */

    const observer =
        new IntersectionObserver(
            function (entries) {
                carouselIsVisible =
                    entries[0].isIntersecting;

                if (carouselIsVisible) {
                    startCarousel();
                } else {
                    stopCarousel();
                }
            },
            {
                threshold: 0.35
            }
        );

    observer.observe(carousel);

    showReview(0);
});
const GEOAPIFY_API_KEY = "71f8e340b9cf4c8cb9d149daa99594ee";