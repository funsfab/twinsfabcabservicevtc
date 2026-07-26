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
    const openButton = document.getElementById("openContactChoices");
    const modal = document.getElementById("contactChoiceModal");
    const closeButton = document.getElementById("closeContactChoices");

    if (!openButton || !modal || !closeButton) return;

    openButton.addEventListener("click", function () {
        modal.classList.add("show");
        document.body.style.overflow = "hidden";
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
const GEOAPIFY_API_KEY = "71f8e340b9cf4c8cb9d149daa99594ee";
