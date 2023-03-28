var div=document.createElement("div");
div.style.textAlign="center";
var input=document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("id","name");
var button=document.createElement("button");
button.setAttribute("type","button");
button.classList.add("btn","btn-primary");
button.innerHTML="Search";
button.style.marginLeft="5px";
button.style.color="blue";
button.addEventListener("click",foo);

let name=document.createElement("div");
name.setAttribute("id","name");

let brewery_type=document.createElement("div");
brewery_type.setAttribute("id","brewery_type");

let address_1=document.createElement("div");
address_1.setAttribute("id","address_1");

let website_url=document.createElement("div");
website_url.setAttribute("id","website_url");

let phone=document.createElement("div");
phone.setAttribute("id","phone");

div.append(input,button,name,brewery_type,address_1,website_url,phone);
document.body.append(div);

async function foo(){
    
    var res=await fetch("https://api.openbrewerydb.org/v1/breweries");
    var res1=await res.json();
    console.log(res1);
    // var res1=document.getElementById("res1").value;
    // console.log(res1);

    for(var i=0;i<res1.length;i++){
    try{console.log(res1[i].name);
        console.log(res1[i].brewery_type);
        console.log(res1[i].address_1);
        console.log(res1[i].website_url);
        console.log(res1[i].phone);
    
    
    name.innerHTML=`The first array of Breweries name:${res1[0].name}`;
    address_1.innerHTML=`The first array of Breweries Address:${res1[0].address_1}`;
    brewery_type.innerHTML=`The first array of Breweries Type:${res1[0].brewery_type}`;
    website_url.innerHTML=`The first array of Breweries website-URL:${res1[0].website_url}`;
    phone.innerHTML=`The first array of Breweries Phone Number:${res1[0].phone}`;
  
}
   
      catch(error){
     console.log(error);
      
    }
 }
 
 
 }
