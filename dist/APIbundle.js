const e=document.getElementById("email"),t=document.getElementById("submit");document.getElementById("result");const n=document.getElementById("title"),o=document.getElementById("image"),s=document.getElementById("date");document.getElementById("date-from-publish");const d=document.getElementById("header"),i=document.getElementById("requested-content"),l=document.getElementById("request-sender");document.getElementById("request-sender-p");const c=document.getElementById("main-title"),m=document.getElementById("dropdown-content");function a(){m.classList.toggle("show")}c.addEventListener("mouseover",a,!0),c.addEventListener("mouseout",a,!1),t.addEventListener("click",(()=>{if(!e.value.endsWith(r)&&(alert("Please enter your @innopolis.university email"),1))return;const t=new URLSearchParams;t.append("email",e.value);fetch(`https://fwd.innopolis.university/api/hw2?${t.toString()}`).then((e=>{e.json().then((e=>{fetch(`https://fwd.innopolis.university/api/comic?id=${e}`).then((e=>{e.json().then((e=>{console.log(e),n.textContent=e.safe_title,o.src=e.img,o.alt=e.alt,s.textContent=new Date(e.year,e.month,e.day).toLocaleDateString()}))})).catch((e=>{console.log(e)}))}))})).catch((e=>{console.log(e)})),d.classList.add("shrink"),i.classList.add("show"),l.classList.add("hide"),i.scrollIntoView({behavior:"smooth"})}));const r="@innopolis.university";
