---
layout: page
title: About Lessons with David
permalink: /lessons
lang: en
trans: lessons
---

<button onclick="myFunction('Demo1')" id="Demo1btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ HOW MUCH DO PIANO LESSONS COST?</button>
<div id="Demo1" class="w3-container w3-hide w3-animate-opacity">
  <p>Piano lessons are sliding scale up to 50$ an hour</p>
</div>
<button onclick="myFunction('Demo2')" id="Demo2btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ WHERE ARE PIANO LESSONS HELD?</button>
<div id="Demo2" class="w3-container w3-hide w3-animate-opacity">
  <p>Video stream, at a studio space, the student's home or my home in Montreal</p>
</div>
<button onclick="myFunction('Demo3')" id="Demo3btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ CAN I TRY A LESSON FOR FREE?</button>
<div id="Demo3" class="w3-container w3-hide w3-animate-opacity">
  <p>Sure.</p>
</div>
<button onclick="myFunction('Demo4')" id="Demo4btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ WHAT AGES DO YOU TEACH?</button>
<div id="Demo4" class="w3-container w3-hide w3-animate-opacity">
  <p>I teach kids starting at age 2 (lessons aren't very long and need the parent at that age, but I can teach a kid perfect pitch). I mostly teach adults.</p>
</div>
<button onclick="myFunction('Demo5')" id="Demo5btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ WHAT SKILL LEVEL DO YOU TEACH?</button>
<div id="Demo5" class="w3-container w3-hide w3-animate-opacity">
  <p>I teach beginning to early advanced students.</p>
</div>
<button onclick="myFunction('Demo6')" id="Demo6btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ WHAT DO YOU TEACH BEST?</button>
<div id="Demo6" class="w3-container w3-hide w3-animate-opacity">
  <p>Improvisation, "natural learning", overcoming physical, emotional, and cognitive barriers.</p>
</div>
<button onclick="myFunction('Demo7')" id="Demo7btn" class="w3-button w3-block w3-black w3-border w3-hover-white w3-left-align">+ WHAT IS THE MEANING OF LIFE?</button>
<div id="Demo7" class="w3-container w3-hide w3-animate-opacity">
  <p>Music of course</p>
</div>

## Method

I focus on making piano *easy* and on *natural learning*. My philosophy is that if you present a clear physical and cognitive "puzzle" to the body, there is no need to practice (though it doesn't hurt): the subconscious will solve the puzzle "naturally" within a couple of days. I honestly worry more about my students practicing *too much* than practicing too little. That is the power of puzzle-based learning, powered by asking questions and directing awareness to problem solving.

## What are lessons like for beginners?

I propose musical and whimsical music that is at the right level (see [Resources](/resources)).

For beginners, my philosophy is that it's important to have a "breezy" attitude about music at the beginning. For my students, I use a lot of what I call "<abbr title="disposable">burner</abbr> music," fairly easy music that we fly through over the course of about a month. So rather than investing too much in learning a couple of pieces at the beginning, I much prefer to try a bunch of little, easy, one or two line songs that are cute, and move onto something else.

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
