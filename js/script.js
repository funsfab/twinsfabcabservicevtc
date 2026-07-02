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
    "🚖 Nouvelle réservation Twins Fab Cab Service VTC\n\n" +
    "👤 Nom : " + nom + "\n" +
    "📞 Téléphone : " + telephone + "\n" +
    "📧 Email : " + email + "\n\n" +
    "📍 Départ : " + depart + "\n" +
    "🎯 Destination : " + destination + "\n\n" +
    "📅 Date : " + date + "\n" +
    "🕒 Heure : " + heure + "\n\n" +
    "👥 Passagers : " + passagers + "\n" +
    "💳 Paiement : " + paiement + "\n\n" +
    "📝 Informations : " + infos;

  const numero = "33621144767";
alert("Votre demande de réservation va s’ouvrir dans WhatsApp.");
  window.location.href =
    "https://wa.me/" + numero + "?text=" + encodeURIComponent(message);
}
