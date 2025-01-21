"use strict";
document.pincode.addEventListener("submit", function(e){
    e.preventDefault();
    const pin = this.pin.value;
    const url = `https://api.postalpincode.in/pincode/${pin}`;
    document.querySelector('[name="pincode"]').err.innerHTML="Fetching Data";
    document.querySelector(".table tbody").innerHTML="";
    document.querySelector(".b1").setAttribute("disabled","");

    fetch(url).then(i=>i.json()).then(i=>{
        if (i[0].Status=="Error") {
            document.querySelector('[name="pincode"]').err.innerHTML="No Pincode Fond"  
        }else{
            const resp = i[0].PostOffice;
            resp.forEach((elem,indx) => {
                document.querySelector(".table tbody").innerHTML+=`<tr><td>${++indx}</td><td>${elem.Name}</td><td>${elem.District}</td><td>${elem.Division}</td><td>${elem.State}</td></tr>`;
            });
            document.querySelector('[name="pincode"]').err.innerHTML="Data Received"  
        }
        document.querySelector(".b1").removeAttribute("disabled","");
    })
});