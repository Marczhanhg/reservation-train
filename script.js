function calculatePrice() {
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;
  const date = document.getElementById("date").value;
  const passengers = parseInt(document.getElementById("passengers").value);

  if (!from || !to || !date || !passengers) {
    document.getElementById("result").innerText = "Veuillez remplir tous les champs.";
    return;
  }

  const pricePerTicket = 25; // Prix fictif par billet en euros
  const totalPrice = passengers * pricePerTicket;

  document.getElementById("result").innerHTML = `
    <p>Trajet : ${from} → ${to}</p>
    <p>Date : ${date}</p>
    <p>Nombre de passagers : ${passengers}</p>
    <p><strong>Total à payer : ${totalPrice} €</strong></p>
  `;
}
