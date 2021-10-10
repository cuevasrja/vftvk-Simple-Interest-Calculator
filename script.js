function compute(){
    var principal = document.getElementById("principal");
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var inter = document.getElementById("inter");
    var result = document.getElementById("result");
    var failed = document.getElementById("failed");
    var interest = principal.value * years * rate /100;
    var year = new Date().getFullYear() + parseInt(years);
    if (principal.value > 0) {
      inter.style.display = "block";
      result.innerHTML = `If you deposit <b class="active">${principal.value}</b>,<br/>
      at an interest rate of <b class="active">${rate}%</b>.<br/>
      You will receive an amount of <b class="active">${interest}</b>,<br/>
      in the year <b class="active">${year}</b>`;
    }
    else {
      inter.style.display = "none";
      alert("Enter a positive number");
      principal.focus();
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText = `${rateval}%`;
}
