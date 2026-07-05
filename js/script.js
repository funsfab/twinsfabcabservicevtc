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
  const numero = "33621144767";
alert("Votre demande de réservation va s’ouvrir dans WhatsApp.");
  window.location.href =
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
}
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
