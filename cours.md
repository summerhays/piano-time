---
layout: page
title: Apprendre plus sur les cours avec David
permalink: /cours
lang: fr
trans: lessons
---

<button onclick="myFunction('Demo1')" id="Demo1btn" class="w3-button w3-block w3-border w3-black w3-hover-white w3-left-align">+ LES COURS COÛTENT COMBIEN?</button>
<div id="Demo1" class="w3-container w3-hide w3-animate-opacity">
  <p>Les tarifs varient selon une échelle mobile jusqu'à un maximum de $50 de l'heure</p>
</div>
<button onclick="myFunction('Demo2')" id="Demo2btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ OÙ SE TIENNENT LES COURS?</button>
<div id="Demo2" class="w3-container w3-hide w3-animate-opacity">
  <p>Par vidéoconférence, dans un studio, chez l'étudiant.e ou chez nous à Montréal.</p>
</div>
<button onclick="myFunction('Demo3')" id="Demo3btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ PUIS-JE ESSAYER UN COURS SANS PAYER?</button>
<div id="Demo3" class="w3-container w3-hide w3-animate-opacity">
  <p>Sans problème, nous pouvons faire une consultation gratuite.</p>
</div>
<button onclick="myFunction('Demo4')" id="Demo4btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ QUELS GROUPES D'ÂGE PEUX-TU ENSEIGNER?</button>
<div id="Demo4" class="w3-container w3-hide w3-animate-opacity">
  <p>Il est possible d'apprendre la musique à partir de 2 ans (un cours dure 15 minutes et la présence d'un parent est essentielle). Pour la plupart j'enseigne les adultes -- j'ai une étudiante qui a 80+ ans.</p>
</div>
<button onclick="myFunction('Demo5')" id="Demo5btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ TU ENSEIGNES JUSQU'À QUEL NIVEAU D'APPRENTISSAGE?</button>
<div id="Demo5" class="w3-container w3-hide w3-animate-opacity">
  <p>J'enseigne des étudiants débutants jusqu'à avancés.</p>
</div>
<button onclick="myFunction('Demo6')" id="Demo6btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ QU'EST-CE QUE TU ENSEIGNES LE MIEUX?</button>
<div id="Demo6" class="w3-container w3-hide w3-animate-opacity">
  <p>L'improvisation, l'« apprentissage naturel », comment surmonter des barrières physiques, émotionnelles, et cognitives.</p>
</div>
<button onclick="myFunction('Demo7')" id="Demo7btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ QUEL EST LE SENS DE LA VIE?</button>
<div id="Demo7" class="w3-container w3-hide w3-animate-opacity">
  <p>La musique, bien sûr!</p>
</div>

## Méthode

Selon ma méthode, le piano doit être *facile*; je mets beaucoup l'accent sur un processus d'*apprentissage naturel*. J'essaie de présenter un casse-tête clair à l'étudiant au piano. Si le casse-tête est au bon niveau, l'inconscient de l'étudiant.e va le résoudre sans l'intervention. Il n'est même pas nécessaire de pratiquer (même s'il n'est pas mauvais de pratiquer). 

Beaucoup d'enseignants semblent présenter des casse-têtes trop complexes, avec le résultat que l'étudiant apprend très peu, même avec beaucoup d'effort. Honnêtement, j'ai plus peur que mes étudiant.e.s répètent trop que pas assez. Voilà la force de l'apprentissage par des casse-têtes. Les questions et le sensibilisation sont le moteur de l'apprentissage.

## À quoi ressemble les cours pour les débutants?

Je propose des ouvrages mélodieux et fantaisiste au bon niveau pour l'étudiant.e (voir les [Ressources](/ressources)).

Selon ma philosophie pédagogique, il faut que les débutants aient une attitude « légère » par rapport à la musique au début. J'utilise des morceaux « jetables »: des pièces relativements faciles qu'on termine de semaine en semaine au cours de quelques mois. Plutôt qu'investir beaucoup de temps à perfectionner trop au début, je préfère présenter une gamme de styles et situations, d'une ou deux lignes chaque, avant de nous lancer dans de la musique plus sérieuse.

<script>
function myFunction(id) {
  var x = document.getElementById(id);
  var btnid = id + "btn";
  var y = document.getElementById(btnid).innerHTML;
  var min = y.replace("+ ", "- ");
  var max = y.replace("- ", "+ ");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
    document.getElementById(btnid).innerHTML = min;
  } else { 
    x.className = x.className.replace(" w3-show", "");
    document.getElementById(btnid).innerHTML = max;
  }
}
</script>
