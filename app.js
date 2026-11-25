const modules=[
["command","COMMAND CENTRE","Your business at a glance","▦","Business overview and authorised performance."],
["ai","DUMA AI","Your business assistant","✦","Ask questions and work with approved business information."],
["money","MONEY & ACCOUNTING","Income, expenses, invoices and reports","R","Invoices, quotes, supplier bills, cash flow and financial reporting."],
["payroll","PAYROLL & HR","Staff, payslips and people operations","♙","Payroll, leave, attendance, shifts and employee self-service."],
["retail","RETAIL & POS","Sales, checkout and customers","▤","POS, barcode scanning, receipts, cash-ups and sales analytics."],
["stock","STOCK & INVENTORY","Products, quantities and suppliers","▣","Stock levels, movements, expiry dates, warehouses and purchase orders."],
["crm","CUSTOMERS","Customer records and sales","◎","Customer history, follow-ups, communications and customer portal."],
["fleet","FLEET","Vehicles, drivers and maintenance","▰","Vehicle records, driver management, inspections and service schedules."],
["freight","FREIGHT & LOGISTICS","Loads, dispatch and deliveries","⇄","Load boards, allocations, delivery milestones and proof of delivery."],
["projects","PROJECTS & CONTRACTS","Projects, tenders and contracts","▧","Budgets, tasks, deadlines and approvals."],
["documents","DOCUMENTS","Business documents and records","▤","Contracts, licences, files, signatures and expiry reminders."],
["intelligence","REPORTS & BUSINESS RADAR","Reports and performance insights","◫","Trend analysis, operational alerts and evidence-based recommendations."],
["education","EDUCATION","Schools, learners and staff","⌂","Learners, parents, teachers, timetables, fees and attendance."],
["health","HEALTH ADMINISTRATION","Healthcare administration","＋","Facilities, staff, shifts and equipment administration."],
["municipal","MUNICIPAL SERVICES","Municipal operations and residents","⌂","Service requests, assets, finance and public reporting."],
["agri","AGRICULTURE","Farm and co-operative operations","♧","Farm records, production, equipment and input stock."],
["hospitality","HOSPITALITY","Guest and food services","⌂","Bookings, tables, orders, rooms, inventory and guest management."],
["assets","ASSETS & MAINTENANCE","Equipment, property and repairs","◇","Asset registers, maintenance plans and work orders."],
["market","MARKETPLACE & STAFF","Suppliers, opportunities and recruitment","⌘","Business listings, RFQs, jobs and applications."],
["communications","COMMUNICATIONS & ACADEMY","Team updates and staff development","✉","Announcements, messaging, courses and certificates."],
["security","SECURITY & CORE LOCK","Users, permissions and protection","⬡","Role-based access, audit logs and platform protection."],
["openapi","INTEGRATIONS","Approved connected services","⇧","Controlled connections to approved external services."],
["global","COUNTRY & CURRENCY","Multi-country business settings","◎","Country settings, currencies and tax rules."],
["automation","AUTOMATION & VOICE","Workflows and assistance","⌁","Approvals, reminders and voice commands."],
["portal","CUSTOMER & EMPLOYEE PORTALS","Self-service tools","♧","Payslips, leave, attendance, orders and service requests."]
];
const industries=[
["Retail & wholesale","POS, stock, suppliers, customers","retail"],
["Professional services","Clients, projects, invoices, time","professional"],
["Transport & logistics","Fleet, freight, drivers, deliveries","transport"],
["Education","Learners, parents, staff, fees","education"],
["Healthcare","Facilities, staff and administration","health"],
["Municipal & government","Service requests, assets, finance","municipal"],
["Agriculture","Farms, co-ops, production, equipment","agriculture"],
["Construction & engineering","Tenders, projects, contracts, assets","construction"],
["Hospitality & food","Bookings, orders, stock, guests","hospitality"],
["Manufacturing","Production, inventory, quality, procurement","manufacturing"],
["Non-profit organisations","Donors, programmes, grants, reporting","nonprofit"]
];
const industryModules={
retail:["command","ai","retail","stock","crm","money","payroll","documents","intelligence","assets","communications","security","portal","openapi"],
professional:["command","ai","money","crm","projects","payroll","documents","intelligence","communications","security","portal"],
transport:["command","ai","fleet","freight","stock","crm","money","payroll","documents","intelligence","assets","security","portal"],
education:["command","ai","education","payroll","money","documents","intelligence","communications","security","portal"],
health:["command","ai","health","payroll","money","documents","assets","intelligence","security","portal"],
municipal:["command","ai","municipal","projects","fleet","assets","money","payroll","documents","intelligence","communications","security","portal"],
agriculture:["command","ai","agri","stock","fleet","money","payroll","assets","documents","intelligence","security","portal"],
construction:["command","ai","projects","fleet","stock","assets","money","payroll","documents","intelligence","security","portal"],
hospitality:["command","ai","hospitality","retail","stock","crm","money","payroll","documents","intelligence","security","portal"],
manufacturing:["command","ai","stock","projects","assets","money","payroll","documents","intelligence","security","portal"],
nonprofit:["command","ai","money","projects","payroll","documents","intelligence","communications","security","portal"]
};
const nav=document.getElementById("nav"),view=document.getElementById("view"),toast=document.getElementById("toast");
let current="command",timer,setupIndustries=[],setupStep=1;
const getOrg=()=>{try{return JSON.parse(localStorage.getItem("dumaOrganisation")||"null")}catch{return null}};
function notify(s){toast.textContent=s;toast.classList.add("show");clearTimeout(timer);timer=setTimeout(()=>toast.classList.remove("show"),3000)}
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function allowedModules(){const org=getOrg();if(!org)return [];const ids=new Set(["settings"]);(org.industries||[]).forEach(k=>(industryModules[k]||[]).forEach(id=>ids.add(id)));return modules.filter(m=>ids.has(m[0]))}
function drawNav(){
 const org=getOrg();if(!org){nav.innerHTML="";return}
 nav.innerHTML='<div class="side-label">YOUR WORKSPACE</div>'+allowedModules().map(m=>'<button data-id="'+m[0]+'" class="'+(m[0]===current?'active':'')+'">'+m[3]+' &nbsp; '+m[1]+'</button>').join('')+'<div class="side-label">ACCOUNT</div><button data-id="settings">⚙ &nbsp; Settings & company</button><button data-action="change-industries">＋ &nbsp; Add an industry</button>';
}
function card(m){return '<button class="card module" data-id="'+m[0]+'"><span class="symbol">'+m[3]+'</span><span><strong>'+m[1]+'</strong><p>'+m[2]+'</p><em>Open workspace →</em></span></button>'}
function landing(){return '<div class="welcome landing-welcome"><div><p class="eyebrow">DUMA BUSINESS OPERATING SYSTEM</p><h1>One platform. Every industry.</h1><p>Run your business from one connected workspace. Choose your industry and DUMA will organise the tools and departments that matter to your business.</p></div><button class="button" data-id="setup">＋ Set up organisation</button></div><section class="card landing-about"><h2>What DUMA BUSINESS does</h2><p> DUMA brings your business operations together — sales, stock, customers, money, staff, documents and reports — in one place. Your workspace is arranged around the industry you choose, and you can add more industries as your business grows.</p><p class="preview-note"><strong>Foundation preview:</strong> Some features are still being built. Do not enter real personal, employee, salary, banking, medical or confidential business data yet.</p></section>'}
function setupPage(){
 const chosen=setupIndustries;
 if(setupStep===1)return '<div class="welcome"><div><p class="eyebrow">LET’S SET UP YOUR BUSINESS</p><h1>What industry are you in?</h1><p>Select one or more. You can add more industries later without starting again.</p></div></div><div class="industry-pick-grid">'+industries.map((x,i)=>'<label class="industry-pick"><input type="checkbox" data-industry-pick="'+x[2]+'" '+(chosen.includes(x[2])?'checked':'')+'><span><strong>'+x[0]+'</strong><small>'+x[1]+'</small></span></label>').join('')+'</div><div class="setup-actions"><button class="button secondary" data-id="cancel-setup">Cancel</button><button class="button" data-action="next-setup" '+(!chosen.length?'disabled':'')+'>Continue</button></div>';
 return '<div class="welcome"><div><p class="eyebrow">COMPANY DETAILS</p><h1>Tell us about your organisation</h1><p>This information sets up your workspace on this device.</p></div></div><form id="organisation-form" class="setup-form"><label>Organisation / business name<input class="field" name="name" required placeholder="e.g. DUMA Retail Store"></label><label>Trading name (optional)<input class="field" name="trading" placeholder="Trading name"></label><label>Country<select class="field" name="country"><option>South Africa</option><option>Botswana</option><option>Namibia</option><option>Zimbabwe</option><option>Ghana</option><option>Other</option></select></label><label>Province / region<input class="field" name="region" placeholder="e.g. North West"></label><label>City / town<input class="field" name="town" placeholder="e.g. Bloemhof"></label><label>Business email (optional)<input class="field" name="email" type="email" placeholder="name@business.co.za"></label><div class="selected-industries"><strong>Selected industries</strong><p>'+industries.filter(x=>chosen.includes(x[2])).map(x=>x[0]).join(" · ")+'</p></div><div class="setup-actions"><button type="button" class="button secondary" data-action="back-setup">Back</button><button type="submit" class="button">Create my workspace</button></div></form>';
}
function workspaceHome(){const org=getOrg(),list=allowedModules().filter(m=>m[0]!=="settings");return '<div class="welcome"><div><p class="eyebrow">'+esc((org.industries||[]).map(k=>(industries.find(x=>x[2]===k)||[])[0]).filter(Boolean).join(" + ").toUpperCase())+' WORKSPACE</p><h1>Welcome, '+esc(org.name)+'</h1><p>Your DUMA workspace is ready. These are the tools selected for your business.</p></div><button class="button secondary" data-id="settings">Company settings</button></div><div class="section-head"><div><h2>Your business menu</h2><p>Only modules for your selected industry are shown.</p></div></div><div class="grid">'+list.map(card).join('')+'</div>'}
function modulePage(id){const m=modules.find(x=>x[0]===id);if(!m)return workspaceHome();return '<div class="welcome"><div><p class="eyebrow">YOUR DUMA WORKSPACE</p><h1>'+m[1]+'</h1><p>'+m[2]+'</p></div><button class="button secondary" data-id="command">← Workspace home</button></div><div class="notice"><div><strong>Foundation preview</strong>This module is part of your selected workspace. Its production database, secure user access and live workflows still need implementation and testing.</div></div><section class="card"><h2 style="font-size:14px">What this module will cover</h2><p style="font-size:12px;line-height:1.7">'+m[4]+'</p></section>'}
function settings(){const org=getOrg()||{};return '<div class="welcome"><div><p class="eyebrow">ORGANISATION SETTINGS</p><h1>'+esc(org.name||"Your organisation")+'</h1><p>Manage your company setup and appearance.</p></div></div><section class="card settings-group"><h2>Company details</h2><p>'+esc([org.trading,org.town,org.region,org.country].filter(Boolean).join(" · "))+'</p><p><strong>Industries:</strong> '+industries.filter(x=>(org.industries||[]).includes(x[2])).map(x=>x[0]).join(", ")+'</p><div class="setting-actions"><button class="button secondary" data-action="change-industries">Add or change industries</button></div></section><section class="settings-group"><h2>App colours</h2><div class="setting-row"><label for="themeChoice">Colour theme</label><select id="themeChoice"><option value="light">Light</option><option value="dark">Dark</option><option value="blue">Blue</option><option value="logo">DUMA logo colours</option></select></div></section><section class="settings-group"><h2>Text size & accessibility</h2><div class="setting-row"><label for="zoomChoice">Text size</label><select id="zoomChoice"><option value="1">Normal</option><option value="1.15">Large</option><option value="1.3">Extra large</option><option value="1.5">Very large</option><option value="1.75">Maximum</option></select></div><div class="setting-row"><label for="largeControls">Larger buttons and controls</label><input id="largeControls" type="checkbox"></div><div class="setting-row"><label for="highContrast">Higher contrast</label><input id="highContrast" type="checkbox"></div></section><section class="settings-group"><p>Appearance preferences are saved on this device in this preview.</p><button class="button secondary" data-action="reset-view">Reset appearance</button></section>'}
function show(id){
 const org=getOrg();
 if(!org&&id!=="setup"){id="landing"}
 current=id;document.body.classList.toggle("first-run",!org);
 document.getElementById("crumb").textContent=org?(id==="command"?"Workspace":id==="settings"?"Settings":(modules.find(m=>m[0]===id)||["","",""])[1]):"";
 document.querySelector(".pill").style.display=org?"":"none";
 drawNav();
 if(id==="landing")view.innerHTML=landing();
 else if(id==="setup")view.innerHTML=setupPage();
 else if(id==="command")view.innerHTML=workspaceHome();
 else if(id==="settings")view.innerHTML=settings();
 else view.innerHTML=modulePage(id);
 if(id==="settings"){const p=JSON.parse(localStorage.getItem("dumaPreferences")||"{}");document.getElementById("themeChoice").value=p.theme||"logo";document.getElementById("zoomChoice").value=p.scale||"1";document.getElementById("largeControls").checked=!!p.largeControls;document.getElementById("highContrast").checked=!!p.highContrast;}
 document.getElementById("side").classList.remove("open");
}
function applyPreferences(){const p=JSON.parse(localStorage.getItem("dumaPreferences")||"{}");document.body.dataset.theme=p.theme||"logo";document.documentElement.style.setProperty("--duma-scale",p.scale||"1");document.body.dataset.largeControls=p.largeControls?"true":"false";document.body.dataset.highContrast=p.highContrast?"true":"false";const meta=document.querySelector('meta[name="theme-color"]');if(meta)meta.content=p.theme==="blue"?"#123d70":p.theme==="dark"?"#080d15":"#111827";}
function savePreferences(){const p={theme:document.getElementById("themeChoice")?.value||"logo",scale:document.getElementById("zoomChoice")?.value||"1",largeControls:!!document.getElementById("largeControls")?.checked,highContrast:!!document.getElementById("highContrast")?.checked};localStorage.setItem("dumaPreferences",JSON.stringify(p));applyPreferences();}
function setSetupSelection(){setupIndustries=[...document.querySelectorAll("[data-industry-pick]:checked")].map(x=>x.dataset.industryPick);}
applyPreferences();
document.addEventListener("change",e=>{if(e.target.matches("[data-industry-pick]")){setSetupSelection();const b=document.querySelector('[data-action="next-setup"]');if(b)b.disabled=!setupIndustries.length;}if(["themeChoice","zoomChoice","largeControls","highContrast"].includes(e.target.id))savePreferences();});
document.addEventListener("click",e=>{
 const action=e.target.closest("[data-action]")?.dataset.action;
 if(action==="next-setup"){setSetupSelection();if(setupIndustries.length){setupStep=2;show("setup")}return}
 if(action==="back-setup"){setupStep=1;show("setup");return}
 if(action==="change-industries"){const org=getOrg();setupIndustries=[...(org?.industries||[])];setupStep=1;show("setup");return}
 if(action==="reset-view"){localStorage.removeItem("dumaPreferences");applyPreferences();show("settings");notify("Appearance reset.");return}
 if(e.target.closest('[data-id="cancel-setup"]')){show(getOrg()?"command":"landing");return}
 const b=e.target.closest("[data-id]");if(b){if(b.dataset.id==="cancel-setup")return;show(b.dataset.id);return}
});
document.addEventListener("submit",e=>{if(e.target.id!=="organisation-form")return;e.preventDefault();const d=new FormData(e.target);const org={name:d.get("name").trim(),trading:d.get("trading").trim(),country:d.get("country"),region:d.get("region").trim(),town:d.get("town").trim(),email:d.get("email").trim(),industries:[...setupIndustries]};if(!org.name)return;localStorage.setItem("dumaOrganisation",JSON.stringify(org));setupStep=1;current="command";show("command");notify("Your DUMA workspace is ready.");});
document.getElementById("menu").addEventListener("click",()=>document.getElementById("side").classList.toggle("open"));
show(getOrg()?"command":"landing");
if("serviceWorker"in navigator&&location.protocol!=="file:")window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}));