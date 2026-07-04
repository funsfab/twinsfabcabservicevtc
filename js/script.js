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
${infos}`;
  const numero = "33621144767";
alert("Votre demande de réservation va s’ouvrir dans WhatsApp.");
  window.location.href =
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
}
function estimerTarif() {
  const depart = document.getElementById("estDepart").value;
  const destination = document.getElementById("estDestination").value;
  const resultat = document.getElementById("tarifResultat");

  if (depart === "" || destination === "") {
    resultat.innerHTML = "Veuillez renseigner le départ et la destination.";
    return;
  }

  resultat.innerHTML = `Tarif estimé : entre 30 € et 60 €<br><small>*Le tarif définitif sera confirmé après étude de votre trajet.</small>`;
}
