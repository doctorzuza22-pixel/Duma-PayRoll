const pages={
 home:{name:"Command centre",title:"One business. One connected workspace.",sub:"Manage money, people, stock and transport from one place."},
 money:{name:"DUMA Money",title:"Your business finances, together.",sub:"Income, expenses, cash flow and financial records. Money tools are planned for the next build stage."},
 fleet:{name:"DUMA Fleet",title:"Know your fleet. Control your costs.",sub:"Vehicles, drivers, maintenance and fleet costs. Fleet integration will follow the secure shared-backend foundation."},
 payroll:{name:"DUMA Payroll",title:"People, payroll and compliance.",sub:"Employee records, pay runs, payslips, leave and South African payroll support."},
 business:{name:"DUMA Business",title:"Run your day-to-day business.",sub:"Stock, sales, customers, suppliers and bookings in one workspace."},
 freight:{name:"DUMA Freight",title:"Move loads with better control.",sub:"Load listings, allocations, delivery progress and logistics records."},
 intelligence:{name:"DUMA Intelligence",title:"See the full picture.",sub:"Bring approved business data together for reports, trends and decision support."},
 people:{name:"People & access",title:"The right access for every team member.",sub:"Company users, roles, branches and approval permissions."},
 documents:{name:"Documents",title:"Business documents in one place.",sub:"A shared document centre with access controls and audit history."},
 settings:{name:"Settings",title:"Set up your DUMA workspace.",sub:"Company profile, branches, preferences, security and connected services."}
};
const toast=document.getElementById("toast");let toastTimer;
function notify(message){toast.textContent=message;toast.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove("show"),3000)}
function navigate(page){
 const item=pages[page];if(!item)return;
 document.querySelectorAll(".nav-link").forEach(b=>b.classList.toggle("active",b.dataset.page===page));
 document.getElementById("crumb").textContent=item.name;
 document.getElementById("pageTitle").textContent=item.title;
 document.getElementById("pageSubtitle").textContent=item.sub;
 document.getElementById("sidebar").classList.remove("open");
 if(page!=="home")notify(item.name+" workspace selected. Its live features are being built; no business records are stored yet.");
}
document.querySelectorAll("[data-page]").forEach(button=>button.addEventListener("click",()=>navigate(button.dataset.page)));
document.getElementById("menuToggle").addEventListener("click",()=>document.getElementById("sidebar").classList.toggle("open"));
document.getElementById("companySetup").addEventListener("click",()=>notify("Company setup is part of the secure accounts build. No details are collected in this preview."));
document.getElementById("dismissNotice").addEventListener("click",()=>document.getElementById("previewNotice").remove());
const now=new Date();document.getElementById("todayLabel").textContent="DUMA BUSINESS OPERATING SYSTEM · "+now.toLocaleDateString("en-ZA",{weekday:"long",day:"numeric",month:"long",year:"numeric"}).toUpperCase();
if("serviceWorker" in navigator && location.protocol!=="file:"){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));}
