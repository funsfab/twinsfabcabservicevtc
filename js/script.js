function toggleMenu(){
  document.querySelector("nav").classList.toggle("active");
}
function sendReservation(event) {
  event.preventDefault();

  const nom = document.getElementById("nom").value;
  const telephone = document.getElementById("telephone").value;
  const email = document.getElementById("email").value;
  const depart = document.getElementById("depart").value;
  const destination = document.getElementById("destination").value;
  const date = document.getElementById("date").value;
  const heure = document.getElementById("heure").value;
  const passagers = document.getElementById("passagers").value;
  const paiement = document.getElementById("paiement").value;
  const infos = document.getElementById("message").value;
const tarifEstime = document.getElementById("tarifResultat").innerText;

  const message =
`📋 *Demande de Réservation*
👤 Nom : ${nom}
📞 Téléphone : ${telephone}
📧 Email : ${email}

📍 Départ : ${depart}
🎯 Destination : ${destination}

📅 Date : ${date}
🕒 Heure : ${heure}

👥 Passagers : ${passagers}
💳 Paiement : ${paiement}

📝 Informations :
💶 ${tarifEstime}
${infos}`;
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
