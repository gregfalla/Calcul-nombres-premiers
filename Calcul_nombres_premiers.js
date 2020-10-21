// Calcul nombres premiers

let nbrMax = Number.parseInt(prompt("Entrez la valeur jusqu'à laquelle vous désirez trouver les nombres premiers."))
let tabNbrPremiers=[];
let nbrDiviseurs=0;


for(let i=1;i<=nbrMax;i++){
  nbrDiviseurs=0
  for(let j=1;j<=Math.sqrt(i);j++){
    if(i%j==0){
      nbrDiviseurs++;
    }
  }
  if(nbrDiviseurs<=1){
    tabNbrPremiers.push(i);
  }
}

console.log(`L'ensemble des nombres premiers compris entre 1 et ${nbrMax} sont : ${tabNbrPremiers}`);

/*

Tout d'abord, demandez à l'utilisateur d'entrer une valeur maximum, que vous forcez en nombre entier et que vous stocker dans une variable initialement déclarée.
Initialisez un tableau vide.
Initialisez un compteur de diviseurs à 0.

Nous allons ensuite créer 2 boucles imbriquées. Par convention non-officielle, nous allons utiliser "i" comme compteur pour la première boucle, et "j" pour la seconde.

Tant que "i" est plus petit ou égal à la valeur maximale, incrémentez "i" de 1.
Dans cette boucle, initialisez le compteur de diviseurs à 0 puis tant que "j", initialisé à 1, est inférieur à "i", incrémentez de 1. On teste si "i" est divisible entièrement par "j".
Si oui, on incrémente le nombre de diviseurs de 1 et on recommence la boucle J.

Après la boucle J, mais toujours dans la boucle I, on teste si le nombre de diviseurs est plus petit ou égal à 1. Si c'est vrai, on insère "i" à la fin du tableau. Sinon on ne fait rien.

Après la boucle I, on affiche en console un message expliquant qu'on affiche les nombres premiers compris entre 1 et le nombre maximum, suivi de l'affichage du tableau.

*/