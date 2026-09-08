function toggleMenu(event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  const nav = document.querySelector("#mainHeader nav");
  const menuButton = document.querySelector("#mainHeader .menu-btn");

  if (!nav || !menuButton) return;

  const isOpen = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
}

document.addEventListener("click", function (event) {
  const nav = document.querySelector("#mainHeader nav");
  const menuButton = document.querySelector("#mainHeader .menu-btn");

  if (!nav || !menuButton) return;

  const clickedInsideMenu = nav.contains(event.target);
  const clickedMenuButton = menuButton.contains(event.target);

  if (!clickedInsideMenu && !clickedMenuButton) {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  }
});

document.querySelectorAll("#mainHeader nav a").forEach(function (link) {
  link.addEventListener("click", function () {
    const nav = document.querySelector("#mainHeader nav");
    const menuButton = document.querySelector("#mainHeader .menu-btn");

    if (nav) nav.classList.remove("open");
    if (menuButton) menuButton.setAttribute("aria-expanded", "false");
  });
});
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

  const reservationModalTitle = document.getElementById("reservationModalTitle");
  const reservationModalText1 = document.getElementById("reservationModalText1");
  const reservationModalText2 = document.getElementById("reservationModalText2");

  const reservationFormSection = document.getElementById("reservationFormSection");
  const reservationPostSendSection = document.getElementById("reservationPostSendSection");
  const reservationPostSendCard = reservationPostSendSection
    ? reservationPostSendSection.querySelector(".reservation-post-send-card")
    : null;
  const reservationPostSendIcon = document.getElementById("reservationPostSendIcon");
  const reservationPostSendEyebrow = document.getElementById("reservationPostSendEyebrow");
  const reservationPostSendTitle = document.getElementById("reservationPostSendTitle");
  const reservationPostSendText = document.getElementById("reservationPostSendText");
  const reservationPostSendActions = document.getElementById("reservationPostSendActions");
  const reservationConfirmSent = document.getElementById("reservationConfirmSent");
  const reservationReturnForm = document.getElementById("reservationReturnForm");
  const reservationNewRequest = document.getElementById("reservationNewRequest");

  let reservationMessage = "";
  let reservationContactChannel = "";

  function reservationUiText(key) {
    const lang = (document.documentElement.lang || "fr").toLowerCase();
    const messages = {
      fr: {
        emailRequired: "L’adresse e-mail est obligatoire.",
        emailInvalid: "Entrez une adresse e-mail valide, par exemple nom@gmail.com.",
        requiredFields: "Veuillez remplir tous les champs obligatoires.",
        futureDate: "Veuillez choisir une date et une heure de départ dans le futur.",
        shortNotice: "Demande à moins de 12 heures : contactez-nous pour vérifier la disponibilité. La prise en charge n’est pas garantie avant notre confirmation.",
        modalTitle: "Choisissez votre moyen de communication",
        modalText1: "Votre demande de réservation est prête.",
        modalText2: "Comment souhaitez-vous nous contacter ?",
        postSendEyebrow: "Dernière étape",
        postSendTitle: "Avez-vous envoyé votre demande ?",
        postSendWhatsApp: "WhatsApp a été ouvert avec votre message préparé. Envoyez-le dans WhatsApp, puis revenez ici.",
        postSendSms: "Votre application SMS a été ouverte avec votre message préparé. Envoyez-le, puis revenez ici.",
        postSendEmail: "Votre application e-mail a été ouverte avec votre message préparé. Envoyez-le, puis revenez ici.",
        postSendYes: "Oui, je l’ai envoyée",
        postSendNo: "Non, je ne l’ai pas envoyée",
        postSendCompleteEyebrow: "Demande terminée",
        postSendCompleteTitle: "Merci, votre demande est envoyée",
        postSendCompleteText: "Nous traiterons votre demande dès que possible. Votre réservation devient définitive uniquement après confirmation de Twins Fab Cab Service VTC.",
        postSendNotSentEyebrow: "Demande non envoyée",
        postSendNotSentTitle: "Votre demande n’a pas été envoyée",
        postSendNotSentText: "Aucun message n’a été confirmé comme envoyé. Pour recommencer, utilisez le bouton Faire une nouvelle demande.",
        postSendNew: "Faire une nouvelle demande"
      },
      en: {
        emailRequired: "Email address is required.",
        emailInvalid: "Enter a valid email address, for example name@gmail.com.",
        requiredFields: "Please complete all required fields.",
        futureDate: "Please choose a departure date and time in the future.",
        shortNotice: "Request with less than 12 hours’ notice: please contact us to check availability. Service is not guaranteed until we confirm it.",
        modalTitle: "Choose how to contact us",
        modalText1: "Your reservation request is ready.",
        modalText2: "How would you like to contact us?",
        postSendEyebrow: "Final step",
        postSendTitle: "Did you send your request?",
        postSendWhatsApp: "WhatsApp opened with your prepared message. Send it in WhatsApp, then return here.",
        postSendSms: "Your SMS app opened with your prepared message. Send it, then return here.",
        postSendEmail: "Your email app opened with your prepared message. Send it, then return here.",
        postSendYes: "Yes, I sent it",
        postSendNo: "No, I didn’t send it",
        postSendCompleteEyebrow: "Request complete",
        postSendCompleteTitle: "Thank you, your request has been sent",
        postSendCompleteText: "We will review your request as soon as possible. Your booking becomes final only after confirmation from Twins Fab Cab Service VTC.",
        postSendNotSentEyebrow: "Request not sent",
        postSendNotSentTitle: "Your request was not sent",
        postSendNotSentText: "No message has been confirmed as sent. To start again, use the Make a new request button.",
        postSendNew: "Make a new request"
      },
      es: {
        emailRequired: "La dirección de correo electrónico es obligatoria.",
        emailInvalid: "Introduzca una dirección de correo válida, por ejemplo nombre@gmail.com.",
        requiredFields: "Complete todos los campos obligatorios.",
        futureDate: "Elija una fecha y hora de salida futuras.",
        shortNotice: "Solicitud con menos de 12 horas de antelación: contáctenos para consultar disponibilidad. El servicio no está garantizado hasta nuestra confirmación.",
        modalTitle: "Elija cómo contactarnos",
        modalText1: "Su solicitud de reserva está lista.",
        modalText2: "¿Cómo desea ponerse en contacto con nosotros?",
        postSendEyebrow: "Último paso",
        postSendTitle: "¿Ha enviado su solicitud?",
        postSendWhatsApp: "WhatsApp se abrió con su mensaje preparado. Envíelo en WhatsApp y luego vuelva aquí.",
        postSendSms: "Su aplicación de SMS se abrió con su mensaje preparado. Envíelo y luego vuelva aquí.",
        postSendEmail: "Su aplicación de correo se abrió con su mensaje preparado. Envíelo y luego vuelva aquí.",
        postSendYes: "Sí, la he enviado",
        postSendNo: "No, no la he enviado",
        postSendCompleteEyebrow: "Solicitud terminada",
        postSendCompleteTitle: "Gracias, su solicitud ha sido enviada",
        postSendCompleteText: "Revisaremos su solicitud lo antes posible. La reserva solo será definitiva después de la confirmación de Twins Fab Cab Service VTC.",
        postSendNotSentEyebrow: "Solicitud no enviada",
        postSendNotSentTitle: "Su solicitud no se ha enviado",
        postSendNotSentText: "No se ha confirmado el envío de ningún mensaje. Para empezar de nuevo, utilice el botón Hacer una nueva solicitud.",
        postSendNew: "Hacer una nueva solicitud"
      },
      pt: {
        emailRequired: "O endereço de e-mail é obrigatório.",
        emailInvalid: "Introduza um endereço de e-mail válido, por exemplo nome@gmail.com.",
        requiredFields: "Preencha todos os campos obrigatórios.",
        futureDate: "Escolha uma data e hora de partida futuras.",
        shortNotice: "Pedido com menos de 12 horas de antecedência: contacte-nos para verificar a disponibilidade. O serviço não é garantido até à nossa confirmação.",
        modalTitle: "Escolha como nos contactar",
        modalText1: "O seu pedido de reserva está pronto.",
        modalText2: "Como deseja contactar-nos?",
        postSendEyebrow: "Última etapa",
        postSendTitle: "Enviou o seu pedido?",
        postSendWhatsApp: "O WhatsApp foi aberto com a sua mensagem preparada. Envie-a no WhatsApp e depois volte aqui.",
        postSendSms: "A aplicação de SMS foi aberta com a sua mensagem preparada. Envie-a e depois volte aqui.",
        postSendEmail: "A aplicação de e-mail foi aberta com a sua mensagem preparada. Envie-a e depois volte aqui.",
        postSendYes: "Sim, já enviei",
        postSendNo: "Não, não enviei",
        postSendCompleteEyebrow: "Pedido concluído",
        postSendCompleteTitle: "Obrigado, o seu pedido foi enviado",
        postSendCompleteText: "Analisaremos o seu pedido assim que possível. A reserva só se torna definitiva após confirmação da Twins Fab Cab Service VTC.",
        postSendNotSentEyebrow: "Pedido não enviado",
        postSendNotSentTitle: "O seu pedido não foi enviado",
        postSendNotSentText: "Nenhuma mensagem foi confirmada como enviada. Para começar de novo, utilize o botão Fazer um novo pedido.",
        postSendNew: "Fazer um novo pedido"
      },
      de: {
        emailRequired: "Die E-Mail-Adresse ist erforderlich.",
        emailInvalid: "Geben Sie eine gültige E-Mail-Adresse ein, zum Beispiel name@gmail.com.",
        requiredFields: "Bitte füllen Sie alle Pflichtfelder aus.",
        futureDate: "Bitte wählen Sie ein zukünftiges Abfahrtsdatum und eine zukünftige Uhrzeit.",
        shortNotice: "Anfrage mit weniger als 12 Stunden Vorlauf: Kontaktieren Sie uns zur Verfügbarkeitsprüfung. Die Fahrt ist erst nach unserer Bestätigung garantiert.",
        modalTitle: "Wählen Sie Ihren Kontaktweg",
        modalText1: "Ihre Reservierungsanfrage ist bereit.",
        modalText2: "Wie möchten Sie uns kontaktieren?",
        postSendEyebrow: "Letzter Schritt",
        postSendTitle: "Haben Sie Ihre Anfrage gesendet?",
        postSendWhatsApp: "WhatsApp wurde mit Ihrer vorbereiteten Nachricht geöffnet. Senden Sie sie in WhatsApp und kehren Sie anschließend hierher zurück.",
        postSendSms: "Ihre SMS-App wurde mit Ihrer vorbereiteten Nachricht geöffnet. Senden Sie sie und kehren Sie anschließend hierher zurück.",
        postSendEmail: "Ihre E-Mail-App wurde mit Ihrer vorbereiteten Nachricht geöffnet. Senden Sie sie und kehren Sie anschließend hierher zurück.",
        postSendYes: "Ja, ich habe sie gesendet",
        postSendNo: "Nein, ich habe sie nicht gesendet",
        postSendCompleteEyebrow: "Anfrage abgeschlossen",
        postSendCompleteTitle: "Vielen Dank, Ihre Anfrage wurde gesendet",
        postSendCompleteText: "Wir prüfen Ihre Anfrage so schnell wie möglich. Die Buchung ist erst nach Bestätigung durch Twins Fab Cab Service VTC verbindlich.",
        postSendNotSentEyebrow: "Anfrage nicht gesendet",
        postSendNotSentTitle: "Ihre Anfrage wurde nicht gesendet",
        postSendNotSentText: "Es wurde keine Nachricht als gesendet bestätigt. Um neu zu beginnen, verwenden Sie die Schaltfläche Neue Anfrage erstellen.",
        postSendNew: "Neue Anfrage erstellen"
      }
    };
    return (messages[lang] || messages.fr)[key];
  }


  /* =========================
     DATE MINIMUM
  ========================== */

  const dateInput = document.getElementById("date");

  if (dateInput) {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(
      today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
      today.getDate()
    ).padStart(2, "0");

    dateInput.min = `${year}-${month}-${day}`;
  }


  /* =========================
     ENVOI DU FORMULAIRE
  ========================== */

  /* =========================
     DATE / HEURE : OUVRIR LE SÉLECTEUR SUR TOUTE LA CARTE
     + fermer le sélecteur d’heure après un choix complet
  ========================== */
  const timeInput = document.getElementById("heure");

  function openNativePicker(input) {
    if (!input || input.disabled) return;

    input.focus({ preventScroll: true });

    if (typeof input.showPicker === "function") {
      try {
        input.showPicker();
        return;
      } catch (error) {
        /* Fallback ci-dessous pour les navigateurs qui refusent showPicker(). */
      }
    }

    /* Sur les navigateurs sans showPicker(), le focus reste actif.
       Un clic direct sur le champ continue d’utiliser le sélecteur natif. */
  }

  [dateInput, timeInput].forEach(function (input) {
    if (!input) return;

    const field = input.closest(".reservation-field");
    if (!field) return;

    field.classList.add("reservation-picker-field");
    field.addEventListener("click", function () {
      openNativePicker(input);
    });
  });

  if (timeInput) {
    function closeTimePickerAfterSelection() {
      if (!timeInput.value) return;

      window.setTimeout(function () {
        timeInput.blur();
      }, 80);
    }

    timeInput.addEventListener("input", closeTimePickerAfterSelection);
    timeInput.addEventListener("change", closeTimePickerAfterSelection);
  }

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
const emailField = document.getElementById("email");

emailField.setCustomValidity("");

if (email === "") {
  emailField.setCustomValidity(
    reservationUiText("emailRequired")
  );
  emailField.reportValidity();
  emailField.focus();
  return;
}

const emailFormat =
  /^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/;

if (!emailFormat.test(email)) {
  emailField.setCustomValidity(
    reservationUiText("emailInvalid")
  );
  emailField.reportValidity();
  emailField.focus();
  return;
}

emailField.setCustomValidity("");
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
            reservationUiText("requiredFields")
          );

          return;
        }


        /* Vérification de la date et gestion des demandes à moins de 12 heures */
        const departureDate = new Date(
          `${date}T${heure}`
        );

        const currentDate = new Date();

        if (departureDate <= currentDate) {
          alert(
            reservationUiText("futureDate")
          );
          return;
        }

        const minimumDepartureDate = new Date(
          currentDate.getTime() + 12 * 60 * 60 * 1000
        );

        const isShortNotice =
          departureDate < minimumDepartureDate;

        if (isShortNotice) {
          alert(
            reservationUiText("shortNotice")
          );
        }


        const formattedDate = formatReservationDate(date);

        const requestHeading = isShortNotice
          ? "DEMANDE DE DISPONIBILITÉ — MOINS DE 12H"
          : "DEMANDE DE RÉSERVATION";

        reservationMessage =
`${requestHeading}

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

${isShortNotice ? "Demande à moins de 12h : sous réserve de disponibilité et de confirmation." : "Réservation conseillée au moins 12h à l’avance."}

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
        showPostSendQuestion("whatsapp");
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

        closeReservationModal();
        showPostSendQuestion("sms");
        window.location.href = smsUrl;
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
        /* Adresse e-mail actuellement utilisée par l’entreprise. */
        const professionalEmail =
          "funsfab@gmail.com";

        const subject =
          "Demande de réservation – Twins Fab Cab Service VTC";

        const emailUrl =
          `mailto:${professionalEmail}` +
          `?subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(reservationMessage)}`;

        closeReservationModal();
        showPostSendQuestion("email");
        window.location.href = emailUrl;
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

    if (reservationModalTitle) reservationModalTitle.textContent = reservationUiText("modalTitle");
    if (reservationModalText1) reservationModalText1.textContent = reservationUiText("modalText1");
    if (reservationModalText2) reservationModalText2.textContent = reservationUiText("modalText2");

    contactModal.classList.add("open");

    contactModal.setAttribute(
      "aria-hidden",
      "false"
    );

    document.body.style.overflow = "hidden";
  }


  function showPostSendQuestion(channel) {
    if (!reservationPostSendSection || !reservationFormSection) return;

    reservationContactChannel = channel;

    const textKey =
      channel === "whatsapp"
        ? "postSendWhatsApp"
        : channel === "sms"
          ? "postSendSms"
          : "postSendEmail";

    if (reservationPostSendCard) reservationPostSendCard.classList.remove("is-complete");
    if (reservationPostSendIcon) reservationPostSendIcon.innerHTML = '<i class="fa-regular fa-paper-plane"></i>';
    if (reservationPostSendEyebrow) reservationPostSendEyebrow.textContent = reservationUiText("postSendEyebrow");
    if (reservationPostSendTitle) reservationPostSendTitle.textContent = reservationUiText("postSendTitle");
    if (reservationPostSendText) reservationPostSendText.textContent = reservationUiText(textKey);

    if (reservationConfirmSent) {
      const label = reservationConfirmSent.querySelector("span");
      if (label) label.textContent = reservationUiText("postSendYes");
    }

    if (reservationReturnForm) {
      const label = reservationReturnForm.querySelector("span");
      if (label) label.textContent = reservationUiText("postSendNo");
    }

    if (reservationPostSendActions) reservationPostSendActions.hidden = false;

    [reservationConfirmSent, reservationReturnForm].forEach(function (button) {
      if (!button) return;
      button.disabled = false;
      button.setAttribute("aria-disabled", "false");
    });

    if (reservationNewRequest) reservationNewRequest.hidden = true;

    reservationFormSection.hidden = true;
    reservationPostSendSection.hidden = false;

    window.setTimeout(function () {
      reservationPostSendSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  function lockPostSendDecisionButtons() {
    [reservationConfirmSent, reservationReturnForm].forEach(function (button) {
      if (!button) return;
      button.disabled = true;
      button.setAttribute("aria-disabled", "true");
    });

    if (reservationPostSendActions) reservationPostSendActions.hidden = false;

    if (reservationNewRequest) {
      reservationNewRequest.hidden = false;
      const label = reservationNewRequest.querySelector("span");
      if (label) label.textContent = reservationUiText("postSendNew");
    }
  }

  function showCompletedRequestState() {
    if (!reservationPostSendSection) return;

    if (reservationPostSendCard) reservationPostSendCard.classList.add("is-complete");
    if (reservationPostSendIcon) reservationPostSendIcon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    if (reservationPostSendEyebrow) reservationPostSendEyebrow.textContent = reservationUiText("postSendCompleteEyebrow");
    if (reservationPostSendTitle) reservationPostSendTitle.textContent = reservationUiText("postSendCompleteTitle");
    if (reservationPostSendText) reservationPostSendText.textContent = reservationUiText("postSendCompleteText");

    lockPostSendDecisionButtons();

    if (reservationForm) reservationForm.reset();
    reservationMessage = "";
    reservationContactChannel = "";
  }

  function showNotSentRequestState() {
    if (!reservationPostSendSection) return;

    if (reservationPostSendCard) reservationPostSendCard.classList.remove("is-complete");
    if (reservationPostSendIcon) reservationPostSendIcon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    if (reservationPostSendEyebrow) reservationPostSendEyebrow.textContent = reservationUiText("postSendNotSentEyebrow");
    if (reservationPostSendTitle) reservationPostSendTitle.textContent = reservationUiText("postSendNotSentTitle");
    if (reservationPostSendText) reservationPostSendText.textContent = reservationUiText("postSendNotSentText");

    lockPostSendDecisionButtons();
  }

  function returnToReservationForm(resetForm) {
    if (!reservationPostSendSection || !reservationFormSection) return;

    if (resetForm && reservationForm) reservationForm.reset();

    reservationPostSendSection.hidden = true;
    reservationFormSection.hidden = false;

    window.setTimeout(function () {
      reservationFormSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
  }

  if (reservationConfirmSent) {
    reservationConfirmSent.addEventListener("click", showCompletedRequestState);
  }

  if (reservationReturnForm) {
    reservationReturnForm.addEventListener("click", showNotSentRequestState);
  }

  if (reservationNewRequest) {
    reservationNewRequest.addEventListener("click", function () {
      returnToReservationForm(true);
    });
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

/* =========================================
   REVIEWS CAROUSEL — CLEAN FINAL VERSION
========================================= */

document.addEventListener("DOMContentLoaded", function () {
    const carousel =
        document.getElementById("reviewsCarousel");

    const viewport =
        carousel?.querySelector(".reviews-viewport");

    const track =
        document.getElementById("reviewsTrack");

    const range =
        document.getElementById("reviewsRange");

    if (!carousel || !viewport || !track || !range) {
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

    track.innerHTML = reviews.map(function (review, index) {
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

                        <p class="reviews-date" data-i18n="reviewDate${index + 1}">
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

                <blockquote class="reviews-text" data-i18n="reviewText${index + 1}">
  ${review.text}
</blockquote>

                <button
  type="button"
  class="reviews-toggle"
  aria-expanded="false"
>
  <span class="reviews-toggle-more" data-i18n="reviewsReadMore">Lire la suite</span>
  <span class="reviews-toggle-hide" data-i18n="reviewsHide" hidden>Cacher</span>
</button>

            </article>
        `;
    }).join("");

    const cards = Array.from(
        track.querySelectorAll(".reviews-card")
    );

    if (!cards.length) {
        return;
    }

    let currentIndex = 0;
    let direction = 1;
    let automaticTimer = null;
    let restartTimer = null;
    let scrollEndTimer = null;
    let carouselIsVisible = false;
    let rangeIsBeingUsed = false;

    function stopAutomaticMovement() {
        if (automaticTimer !== null) {
            window.clearInterval(automaticTimer);
            automaticTimer = null;
        }
    }

    function currentReviewIsExpanded() {
        return cards.some(function (card) {
            return card.classList.contains("is-expanded");
        });
    }

    function startAutomaticMovement() {
        if (
            automaticTimer !== null ||
            !carouselIsVisible ||
            currentReviewIsExpanded() ||
            rangeIsBeingUsed
        ) {
            return;
        }

        automaticTimer = window.setInterval(
            showNextReview,
            6000
        );
    }

    function restartAutomaticMovement() {
        window.clearTimeout(restartTimer);

        restartTimer = window.setTimeout(
            function () {
                stopAutomaticMovement();
                startAutomaticMovement();
            },
            1200
        );
    }

    function getCardPosition(index) {
        return (
            cards[index].offsetLeft -
            cards[0].offsetLeft
        );
    }

    function getMaximumScroll() {
        return Math.max(
            0,
            viewport.scrollWidth -
            viewport.clientWidth
        );
    }

    function setRangeProgress(value) {
        const safeValue = Math.min(
            1,
            Math.max(0, value)
        );

        range.value = String(safeValue);
        range.style.setProperty(
            "--range-progress",
            `${safeValue * 100}%`
        );
    }

    function updateRangeFromCards() {
        const maximumScroll =
            getMaximumScroll();

        const progress =
            maximumScroll > 0
                ? viewport.scrollLeft /
                  maximumScroll
                : 0;

        setRangeProgress(progress);
    }

    function findNearestCardIndex() {
        let nearestIndex = 0;
        let nearestDistance = Infinity;

        cards.forEach(function (card, index) {
            const distance = Math.abs(
                viewport.scrollLeft -
                getCardPosition(index)
            );

            if (distance < nearestDistance) {
                nearestDistance = distance;
                nearestIndex = index;
            }
        });

        return nearestIndex;
    }

    function closeExpandedReviews() {
        cards.forEach(function (card) {
            const text =
                card.querySelector(".reviews-text");

            const button =
                card.querySelector(".reviews-toggle");

            if (!text || !button) {
                return;
            }

            card.classList.remove("is-expanded");
            text.classList.remove("is-expanded");
            card.style.maxHeight = "420px";

            button.querySelector(".reviews-toggle-more").hidden = false;
button.querySelector(".reviews-toggle-hide").hidden = true;
            button.setAttribute(
                "aria-expanded",
                "false"
            );
        });
    }

    function showReview(index, behavior = "smooth") {
        closeExpandedReviews();

        currentIndex = Math.max(
            0,
            Math.min(index, cards.length - 1)
        );

        viewport.scrollTo({
            left: getCardPosition(currentIndex),
            behavior: behavior
        });
    }

    function showNextReview() {
    if (currentReviewIsExpanded()) {
        return;
    }

    const visibleCards =
        window.innerWidth >= 1024 ? 3 : 1;

    const maxIndex = Math.max(
        0,
        cards.length - visibleCards
    );

    let nextIndex =
        currentIndex + direction;

    if (nextIndex > maxIndex) {
        direction = -1;
        nextIndex = Math.max(0, maxIndex - 1);
    }

    if (nextIndex < 0) {
        direction = 1;
        nextIndex = Math.min(1, maxIndex);
    }

    showReview(nextIndex);
}

    viewport.addEventListener(
        "pointerdown",
        function () {
            stopAutomaticMovement();
        }
    );

    viewport.addEventListener(
        "scroll",
        function () {
            updateRangeFromCards();

            window.clearTimeout(scrollEndTimer);

            scrollEndTimer = window.setTimeout(
                function () {
                    const nearestIndex =
                        findNearestCardIndex();

                    if (nearestIndex !== currentIndex) {
                        direction =
                            nearestIndex > currentIndex
                                ? 1
                                : -1;

                        currentIndex = nearestIndex;
                    }

                    restartAutomaticMovement();
                },
                140
            );
        },
        {
            passive: true
        }
    );

    range.addEventListener(
        "pointerdown",
        function () {
            rangeIsBeingUsed = true;
            stopAutomaticMovement();
            viewport.style.scrollSnapType = "none";
            viewport.style.scrollBehavior = "auto";
        }
    );

    range.addEventListener(
        "input",
        function () {
            const progress =
                Number(range.value);

            setRangeProgress(progress);

            viewport.scrollTo({
                left: progress * getMaximumScroll(),
                behavior: "auto"
            });
        }
    );

    function finishRangeMovement() {
        if (!rangeIsBeingUsed) {
            return;
        }

        rangeIsBeingUsed = false;
        viewport.style.scrollSnapType =
            "x mandatory";

        viewport.style.scrollBehavior =
            "smooth";

        currentIndex =
            findNearestCardIndex();

        showReview(currentIndex);
        restartAutomaticMovement();
    }

    range.addEventListener(
        "change",
        finishRangeMovement
    );

    range.addEventListener(
        "pointerup",
        finishRangeMovement
    );

    range.addEventListener(
        "pointercancel",
        finishRangeMovement
    );

    track.addEventListener(
        "click",
        function (event) {
            const button =
                event.target.closest(
                    ".reviews-toggle"
                );

            if (!button) {
                return;
            }

            const card =
                button.closest(".reviews-card");

            const text =
                card?.querySelector(
                    ".reviews-text"
                );

            if (!card || !text) {
                return;
            }

            const opening =
                !card.classList.contains(
                    "is-expanded"
                );

            if (opening) {
                stopAutomaticMovement();
                closeExpandedReviews();

                card.classList.add("is-expanded");
                text.classList.add("is-expanded");

                button.querySelector(".reviews-toggle-more").hidden = true;
button.querySelector(".reviews-toggle-hide").hidden = false;
                button.setAttribute(
                    "aria-expanded",
                    "true"
                );

                window.requestAnimationFrame(
                    function () {
                        card.style.maxHeight =
                            `${card.scrollHeight}px`;
                    }
                );
            } else {
                card.style.maxHeight =
                    `${card.scrollHeight}px`;

                window.requestAnimationFrame(
                    function () {
                        card.classList.remove(
                            "is-expanded"
                        );

                        text.classList.remove(
                            "is-expanded"
                        );

                        card.style.maxHeight =
                            "420px";
                    }
                );

                button.querySelector(".reviews-toggle-more").hidden = false;
button.querySelector(".reviews-toggle-hide").hidden = true;
                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

                restartAutomaticMovement();
            }
        }
    );

    function updateToggleVisibility() {
        cards.forEach(function (card) {
            const text =
                card.querySelector(
                    ".reviews-text"
                );

            const button =
                card.querySelector(
                    ".reviews-toggle"
                );

            if (!text || !button) {
                return;
            }

            if (card.classList.contains("is-expanded")) {
  button.style.display = "";
  return;
}

const needsToggle =
  text.scrollHeight > text.clientHeight + 3;

button.style.display = needsToggle ? "" : "none";
        });
    }
  const reviewTextObserver = new MutationObserver(function () {
  window.requestAnimationFrame(function () {
    updateToggleVisibility();
  });
});

cards.forEach(function (card) {
  const reviewText =
    card.querySelector(".reviews-text");

  if (reviewText) {
    reviewTextObserver.observe(reviewText, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
});

    const observer =
        new IntersectionObserver(
            function (entries) {
                carouselIsVisible =
                    entries[0].isIntersecting;

                if (carouselIsVisible) {
                    startAutomaticMovement();
                } else {
                    stopAutomaticMovement();
                }
            },
            {
                threshold: 0.35
            }
        );

    observer.observe(carousel);

    window.addEventListener(
        "resize",
        function () {
            updateToggleVisibility();
            showReview(currentIndex, "auto");
            updateRangeFromCards();
        }
    );

    showReview(0, "auto");
    setRangeProgress(0);

    window.requestAnimationFrame(
        updateToggleVisibility
    );
});

/* ===== SHOW/HIDE HERO DOWN ARROW ===== */

document.addEventListener("DOMContentLoaded", function () {
  const heroSection =
    document.getElementById("accueil");

  const downArrow =
    document.querySelector(".hero-scroll-down");

  if (!heroSection || !downArrow) {
    return;
  }

  downArrow.style.transition =
    "opacity 0.3s ease, visibility 0.3s ease";

  function updateDownArrow() {
    const heroPosition =
      heroSection.getBoundingClientRect();

    const heroIsActive =
      heroPosition.bottom >
      window.innerHeight * 0.55;

    downArrow.style.opacity =
      heroIsActive ? "1" : "0";

    downArrow.style.visibility =
      heroIsActive ? "visible" : "hidden";

    downArrow.style.pointerEvents =
      heroIsActive ? "auto" : "none";
  }

  updateDownArrow();

  window.addEventListener(
    "scroll",
    updateDownArrow,
    { passive: true }
  );
});

/* ===== BACK TO TOP BUTTON ===== */

document.addEventListener("DOMContentLoaded", function () {
  const backToTop =
    document.getElementById("backToTop");

  if (!backToTop) {
    return;
  }

  function updateBackToTop() {
    if (window.scrollY > 80) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }
  }

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  updateBackToTop();

  window.addEventListener(
    "scroll",
    updateBackToTop,
    { passive: true }
  );
});

/* ===== RESERVATION PAGE ARROWS ===== */

document.addEventListener("DOMContentLoaded", function () {
  const downArrow = document.querySelector(
    ".reservation-scroll-down"
  );

  const backToTop = document.getElementById(
    "reservationBackToTop"
  );

  if (!downArrow || !backToTop) {
    return;
  }

  downArrow.style.transition =
    "opacity 0.3s ease, visibility 0.3s ease";

  function updateReservationArrows() {
    const pageHasScrolled = window.scrollY > 80;

    backToTop.classList.toggle(
      "show",
      pageHasScrolled
    );

    downArrow.style.opacity =
      pageHasScrolled ? "0" : "1";

    downArrow.style.visibility =
      pageHasScrolled ? "hidden" : "visible";

    downArrow.style.pointerEvents =
      pageHasScrolled ? "none" : "auto";
  }

  backToTop.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  updateReservationArrows();

  window.addEventListener(
    "scroll",
    updateReservationArrows,
    { passive: true }
  );
});
const telephoneInputField =
  document.getElementById("telephone");

let telephoneSelector = null;

if (
  telephoneInputField &&
  window.intlTelInput
) {
  telephoneSelector = window.intlTelInput(
    telephoneInputField,
    {
      initialCountry: "fr",
      separateDialCode: true,
      countrySearch: true,
      countrySelectorMode: "AUTO",
      countryNameLocale: "fr",

      loadUtils: () =>
        import(
          "https://cdn.jsdelivr.net/npm/intl-tel-input@29.1.2/dist/js/utils.js"
        ),
    }
  );
  
  let countryPopupScrollY = 0;

let countryTouchStartY = 0;

function stopBackgroundTouch(event) {
  const target = event.target;

  const countryList =
    target instanceof Element
      ? target.closest(".iti__country-list")
      : null;

  if (!countryList) {
    event.preventDefault();
    return;
  }

  const currentTouchY =
    event.touches[0].clientY;

  const movingDown =
    currentTouchY > countryTouchStartY;

  const atTop =
    countryList.scrollTop <= 0;

  const atBottom =
    Math.ceil(
      countryList.scrollTop +
      countryList.clientHeight
    ) >= countryList.scrollHeight;

  if (
    (atTop && movingDown) ||
    (atBottom && !movingDown)
  ) {
    event.preventDefault();
  }

  countryTouchStartY = currentTouchY;
}

telephoneInputField.addEventListener(
  "open:countryselector",
  function () {
    countryPopupScrollY = window.scrollY;

    document.documentElement.style.overflow =
      "hidden";
    document.documentElement.style.overscrollBehavior =
      "none";

    document.body.style.position = "fixed";
    document.body.style.top =
      `-${countryPopupScrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    const countryList =
      document.querySelector(
        ".iti__country-list"
      );

    if (countryList) {
      countryList.style.overscrollBehavior =
        "contain";
      countryList.style.touchAction = "pan-y";
    }
document.addEventListener(
  "touchstart",
  function (event) {
    if (event.touches.length > 0) {
      countryTouchStartY =
        event.touches[0].clientY;
    }
  },
  { passive: true }
);
    document.addEventListener(
      "touchmove",
      stopBackgroundTouch,
      { passive: false }
    );
  }
);

telephoneInputField.addEventListener(
  "close:countryselector",
  function () {
    document.removeEventListener(
      "touchmove",
      stopBackgroundTouch
    );

    document.documentElement.style.overflow =
      "";
    document.documentElement.style.overscrollBehavior =
      "";

    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    document.body.style.overflow = "";

    window.scrollTo(
      0,
      countryPopupScrollY
    );
  }
);
}
