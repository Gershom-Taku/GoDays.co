//js for typed  sentence using typedjs.
var typed = new Typed(".input ", {
  strings: ["So ", "good ", "only ", "with ", "GoDays "],

  typeSpeed: 110,
  backSpeed: 110,
  loop: true
});
//js for updates.
  window.addEventListener('load', function(e) {
    setTimeout(function() { window.scrollTo(0, 1); }, 1);
  }, false);

window.applicationCache.addEventListener('updateready', function(e) {
  if (window.applicationCache.status == window.applicationCache.UPDATEREADY) {
    window.applicationCache.swapCache();
    if (confirm('A new version of this site is available. Load it?')) {
      window.location.reload();
    }
  }
}, false);

//javascript for a search bar
function openPage(){
  var x = document.getElementById("search").value;

  if (x === "challenges"){
    window.open("/index.html");
  }
  if (x==="contact us"){
    window.open("/carrier.html");
  }
  if (x==="partners"){
     window.open("/partners.html");
  }
  if (x==="about us"){
    window.open("/partners.html");
  }
  if (x==="purpose"){
    window.open("/index.html");
  }
  if (x==="sports"){
    window.open("/download.html");
  }
  if (x==="plan"){
    window.open("/carrier.html");
  }
  if (x==="what is interesting about the website"){
    window.open("/carrier.html");
  }
  if (x==="learning"){
    window.open("/carrier.html");
  }
  if (x==="education"){
    window.open("/carrier.html");
  }
  if (x==="company"){
    window.open("/partners.html");
  }
  if (x==="updates"){
    window.open("/download.html");
  }
  if(x==="new"){
    window.open("/download.html");
  }
  if (x==="investmensts"){
    window.open("/partners.html");
  }
  if (x==="download"){
    window.open("/index.html");
  }
  if(x==="jobs"){
    window.open("/carrier.html");
  }
  if(x==="application"){
    window.open("/carrier.html");
  }
  if (x==="markerting"){
    window.open("/carrier.html");
  }
  if (x==="programming"){
    window.open("/carrier.html");
  }
  if (x==="vacancy"){
    window.open("/carrier.html");
  }
  if (x==="owner"){
    window.open("/index.html");
  }
  if (x==="games"){
    window.open("/download.html");
  }
  if (x==="Software and Services"){
    window.open("/carrier.html");
  }
  if(x==="engeneering"){
    window.open("/carrier.html");
  }
  if (x==="social"){
    window.open("/carrier.html");
  }
  if (x==="news"){
    window.open("/download.html");
  }
  if (x==="skills"){
    window.open("/carrier.html");
  }
  if (x==="work"){
    window.open("/carrier.html");
  }
  if(x==="godays"){
    window.open("/partners.html");
  }
  if (x==="school"){
    window.open("/carrier.html");
  }
}
