let totalCommande = document.getElementById('tyu');
//totalCommande.innerText = "1"

console.log(totalCommande);
var produit = document.getElementsByClassName("box")
for (let i = 0; i < produit.length; i++) {
  let bntPlus = produit[i].children[4].children[2]
  let nombre = produit[i].children[4].children[1]
  let total = produit[i].children[3].children[1]
  let prixUnitaire = produit[i].children[2].children[1]
  let qty = parseInt(nombre.innerText)
  let prixUnit = parseInt(prixUnitaire.innerText)
  let btnmoins = produit[i].children[4].children[0]
  let btnlike = produit[i].children[5].children[0].children[0]
  let bnttrash = produit[i].children[5].children[1].children[0]



  bntPlus.addEventListener("click", function (e) {
    console.log(e.target);
    qty++
    nombre.innerText = qty
    total.innerText = prixUnit * qty
    totalCommande.innerText =parseInt(totalCommande.innerText) + (prixUnit * qty );
    //console.log(totalCommande);
  })
  let box = produit[i]


  btnmoins.addEventListener("click", function (e) {
    console.log(e.target);
    qty--
    if (qty < 1) {
      qty = 0
    }
    nombre.innerText = qty
    total.innerText = prixUnit * qty
    totalCommande.innerText =parseInt(totalCommande.innerText) - prixUnit ;
  })

  bnttrash.addEventListener("click", function () {
    produit[i].remove();
    totalCommande.innerText =parseInt(totalCommande.innerText) - (prixUnit * qty );
  })

  const btnheart = document.querySelectorAll('.fa-heart');


  btnheart.forEach(button => {
    button.addEventListener('click', function () {
      this.classList.toggle('liked');
    });
  });

}

