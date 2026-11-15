(() => {
  const D = {
    ca: {
      skip: "Salta al contingut",
      n1: "Funcions", n2: "Com funciona", n3: "Captures", n4: "Contacte",
      eyebrow: "TPV per a restaurants",
      h1: "El TPV del teu restaurant, de la sala a la cuina.",
      lead: "ARKHA POS reuneix taules, comandes, comptes, reserves en línia i carta QR en un sistema senzill, disponible en castellà, català i anglès, que funciona en un petit dispositiu dins el teu local. Fet a Catalunya.",
      cta: "Demana una demo", cta2: "Veure funcions",
      fH: "Funcions",
      f1t: "Plànol de sala",
      f1: "Dissenya la sala per seccions (sala, terrassa, barra…), veu l'estat de cada taula d'un cop d'ull i uneix taules quan arriba un grup.",
      f2t: "Comandes a cuina i barra",
      f2: "Les comandes arriben a la pantalla de cuina o de barra amb temporitzadors, perquè res no es quedi esperant.",
      fWt: "App del cambrer",
      fW: "Els cambrers prenen comandes des del mòbil, en temps real amb la caixa i la cuina.",
      f3t: "Comptes per dia",
      f3: "Historial de comptes cobrats agrupat per dia, amb filtres per període i forma de pagament, i cerca.",
      fZt: "Propines i tancament de caixa",
      fZ: "Registres les propines en cobrar (i també després) i tanques el dia amb el recompte de caixa i l'informe Z.",
      fCt: "Fitxatge al mòbil",
      fC: "El personal fitxa l'entrada i la sortida des del mòbil. Si el fitxatge és fora d'horari, es demana un motiu. Cada treballador veu les seves hores i pot descarregar el PDF del mes; l'encarregat exporta el PDF de cada persona o de tot el personal. Els registres es conserven 4 anys. Aquesta funció està dissenyada per satisfer la norma del registre de jornada (RDL 8/2019).",
      fGt: "Exportació per a la gestoria",
      fG: "Cada mes (o un període a la teva elecció) descarregues un CSV i un PDF amb les vendes per dia, l'IVA per tipus, les formes de pagament, les propines, les factures, les devolucions i els tancaments de caixa.",
      f5t: "Reserves en línia",
      f5: "Els clients reserven des del web amb disponibilitat real de taules, i ARKHA assigna la taula automàticament. Si afegeixen notes d'al·lèrgia, apareix una casella de consentiment explícit, desmarcada per defecte, amb un enllaç a l'avís de privacitat: aquestes notes són dades de salut segons el RGPD.",
      f6t: "Carta QR",
      f6: "Carta digital per al mòbil del client, amb diversos temes visuals per triar i al·lèrgens a cada plat.",
      fPt: "Personalització del teu restaurant",
      fP: "Poses el nom i el logotip del teu restaurant, tries l'aspecte de la carta QR (temes, colors i tipografies) i el de la pàgina de reserves, que pot seguir el mateix estil.",
      f7t: "Fitxa d'al·lèrgens",
      f7: "Taula dels 14 al·lèrgens generada a partir dels teus productes, a punt per imprimir o consultar.",
      f8t: "Accés del personal amb PIN",
      f8: "Cada persona entra amb el seu PIN i la seva foto de perfil. Ràpid en el servei, clar en l'activitat.",
      f9t: "Mode clar i fosc",
      f9: "Interfície en castellà, català i anglès, amb tema clar, fosc o automàtic segons la llum del local.",
      f4t: "Preparat per a Verifactu, en desenvolupament",
      f4: "Facturació amb registres encadenats i codi QR al tiquet, pensada per a Verifactu. Aquesta funció continua en desenvolupament i s'ofereix en mode de proves. No està certificada.",
      fDt: "Còpia a Google Drive",
      fD: "La còpia de seguretat xifrada a Google Drive ve activada per defecte a les instal·lacions noves. El propietari connecta el seu compte una vegada; fins llavors les còpies es queden al dispositiu del local.",
      fSt: "Suport remot i actualitzacions",
      fS: "El personal obre tickets de suport des del mateix TPV i el sistema pot rebre actualitzacions automàtiques des d'ARKHA Cloud, en una finestra de manteniment i amb còpia de seguretat i retorn enrere si alguna cosa falla. El dispositiu del local continua funcionant encara que no hi hagi internet.",
      hH: "Com funciona",
      s1t: "Un dispositiu al teu local",
      s1: "ARKHA funciona en un petit equip local (tipus Raspberry Pi). La sala segueix funcionant encara que falli internet.",
      s2t: "Caixa, mòbil i cuina",
      s2: "Caixa a l'ordinador o tauleta, cambrers des del mòbil i pantalla a cuina i barra, sincronitzats en temps real.",
      s3t: "Còpia de seguretat i núvol",
      s3: "Les teves dades es desen al dispositiu del local, amb còpia xifrada a Google Drive quan la connectes. El TPV continua funcionant sense internet; el suport i les actualitzacions arriben des d'ARKHA Cloud quan hi ha connexió.",
      cH: "Captures",
      cN: "Totes les captures fan servir dades de demostració.",
      capK: "Pantalla de cuina", capW: "App del cambrer", capC: "Fitxatge al mòbil",
      capM: "Carta QR", capB: "Reserves en línia", capL: "Personalització de la carta i les reserves", capA: "Fitxa d'al·lèrgens",
      rH: "Pensat per al compliment",
      r1t: "RGPD",
      r1: "Les dades d'una reserva només s'utilitzen per gestionar-la i es poden esborrar automàticament passat un termini. Les notes d'al·lèrgia es tracten com a dades de salut: cal un consentiment explícit, desmarcat per defecte, i un enllaç a l'avís de privacitat.",
      r2t: "Sense galetes de seguiment",
      r2: "Ni ARKHA ni aquest web utilitzen galetes de seguiment ni scripts de tercers.",
      r3t: "Al·lèrgens",
      r3: "Informació d'al·lèrgens per plat a la carta i en una fitxa imprimible, segons el Reglament (UE) 1169/2011.",
      kH: "Demana una demo",
      k1: "Explica'ns com és el teu restaurant i t'ensenyem ARKHA funcionant.",
      plans: "Plans, aviat.",
      ft: "ARKHA POS · Fet a Catalunya", legal: "Avís legal", priv: "Privacitat",
      // legal pages
      back: "← ARKHA POS",
      legalH: "Avís legal",
      legalIntro: "Aquest avís regula l'ús del lloc web arkha.eu, de caràcter informatiu sobre el programari ARKHA POS.",
      legalOwnerT: "Titular",
      legalOwner: "Les dades del titular d'aquest lloc (nom o raó social, NIF i domicili) s'indicaran aquí abans de completar la identificació formal. Mentrestant, el contacte és l'adreça de correu indicada més avall. No es publiquen dades personals fiscals en aquesta pàgina.",
      legalContactT: "Contacte",
      legalContact: "Per a qualsevol consulta relativa a aquest lloc o al producte:",
      legalObjectT: "Objecte",
      legalObject: "Aquest lloc explica les funcions d'ARKHA POS i ofereix una via de contacte per demanar una demostració. No és una botiga ni un formulari de contractació.",
      legalIpT: "Propietat intel·lectual",
      legalIp: "El nom ARKHA, els logotips, els textos i el disseny d'aquest lloc pertanyen al titular o s'utilitzen amb llicència. Les captures mostren dades de demostració. No se'n pot copiar el contingut per a un ús comercial sense permís.",
      legalRespT: "Responsabilitat",
      legalResp: "La informació d'aquest lloc descriu el programari tal com està avui. Algunes funcions, com Verifactu, continuen en desenvolupament i s'ofereixen en mode de proves; no es presenta el programari com a certificat ni com a garantia jurídica. L'ús d'ARKHA POS al restaurant és responsabilitat de cada establiment.",
      legalLawT: "Llei aplicable",
      legalLaw: "Aquest avís es regeix per la legislació espanyola. Per a qualsevol controvèrsia, els jutjats que corresponguin segons la normativa aplicable.",
      privH: "Política de privacitat",
      privIntro: "Aquesta política explica com es tracten les dades a arkha.eu i com ARKHA POS tracta les dades de reserves quan un restaurant utilitza el sistema. Les dades identificatives del titular d'aquest lloc (nom o raó social, NIF i domicili) són un marcador de posició fins que es completin; no es publiquen dades personals fiscals aquí. Per contactar-nos: holaarkha@gmail.com.",
      privSiteT: "Aquest lloc web (arkha.eu)",
      privSite: "Aquest lloc no recull formularis ni crea un compte. Si ens escrius a holaarkha@gmail.com, tractem el teu correu i el contingut del missatge només per respondre't. No fem seguiment, no enviem butlletins automàtics i no cedim aquestes dades.",
      privStoreT: "Emmagatzematge al navegador",
      privStore: "Aquest lloc no fa servir galetes. Només desa al teu navegador (localStorage) l'idioma i el tema (clar/fosc) que tries, perquè la pàgina els recordi. Pots esborrar-los netejant les dades del lloc al navegador. No hi ha scripts de tercers ni mesura d'audiència.",
      privBookT: "Dades de reserves a ARKHA POS",
      privBook: "Quan un restaurant fa servir ARKHA POS, el responsable del tractament de les dades de la reserva és el restaurant. ARKHA actua com a encarregat del tractament (art. 28 del RGPD). Les dades es desen al servidor del local. Es tracten el nom, el telèfon, el correu (opcional), el nombre de persones, el dia i l'hora, i les notes que escrigui el client, amb la finalitat de gestionar la reserva (art. 6.1.b del RGPD: mesures precontractuals). No s'elaboren perfils ni s'envia publicitat.",
      privHealthT: "Notes d'al·lèrgia (dades de salut)",
      privHealth: "Si el client escriu notes (per exemple, una al·lèrgia), aquestes notes es tracten com a dades de salut (art. 9 del RGPD). Només s'envien si marca una casella de consentiment explícit, desmarcada per defecte, amb un enllaç a l'avís de privacitat. Pot reservar sense notes si prefereix no donar aquest consentiment. Les notes s'utilitzen només per preparar la visita.",
      privRetT: "Conservació",
      privRet: "Les dades d'una reserva, incloses les notes, s'esborren automàticament passat un termini configurat pel restaurant (per defecte, 30 dies després de la data de la reserva), llevat que una obligació legal exigeixi conservar-les més temps.",
      privRightsT: "Els teus drets",
      privRights: "Pots demanar accés, rectificació, supressió, oposició, limitació i portabilitat. Per a una reserva feta en un restaurant, adreça't a aquest restaurant (el responsable). Per a un correu enviat a aquest lloc, escriu a holaarkha@gmail.com. També pots reclamar davant l'Agència Espanyola de Protecció de Dades (aepd.es) o l'Autoritat Catalana de Protecció de Dades (apdcat.cat).",
      phOwner: "Titular: [nom o raó social — pendent] · NIF: [pendent] · Domicili: [pendent]",
      titleLegal: "Avís legal · ARKHA POS",
      titlePriv: "Política de privacitat · ARKHA POS",
      metaDesc: "ARKHA POS: TPV per a restaurants fet a Catalunya, en castellà, català i anglès. Plànol de sala, comandes, fitxatge, reserves en línia, carta QR i facturació preparada per a Verifactu (en desenvolupament)."
    },
    en: {
      skip: "Skip to content",
      n1: "Features", n2: "How it works", n3: "Screenshots", n4: "Contact",
      eyebrow: "Restaurant POS",
      h1: "Your restaurant's POS, from the floor to the kitchen.",
      lead: "ARKHA POS brings tables, orders, bills, online bookings and a QR menu together in one simple system, available in Spanish, Catalan and English, running on a small device inside your restaurant. Made in Catalonia.",
      cta: "Request a demo", cta2: "See features",
      fH: "Features",
      f1t: "Floor plan",
      f1: "Lay out your room by sections (dining room, terrace, bar…), see every table's status at a glance and join tables for groups.",
      f2t: "Orders to kitchen and bar",
      f2: "Orders reach the kitchen or bar screen with timers, so nothing is left waiting.",
      fWt: "Waiter phone app",
      fW: "Waiters take orders from their phone, in real time with the till and the kitchen.",
      f3t: "Bills by day",
      f3: "Paid-bill history grouped by day, with period and payment-method filters, and search.",
      fZt: "Tips and cash close",
      fZ: "You record tips at payment (and afterwards) and close the day with a cash count and a Z report.",
      fCt: "Phone-first staff clock-in",
      fC: "Staff clock in and out from their phone. Out-of-hours punches ask for a reason. Each worker can see their own hours and download a monthly PDF; the manager can export a PDF for one worker or for all staff. Records are kept for 4 years. This feature is designed to meet the working-time register rule (RDL 8/2019).",
      fGt: "Monthly accountant export",
      fG: "Each month (or a period you choose) you download a CSV and a PDF with sales by day, VAT by rate, payment methods, tips, invoices, refunds and cash closes.",
      f5t: "Online bookings",
      f5: "Guests book from your website with real table availability, and ARKHA assigns the table automatically. If they add allergy notes, a separate explicit-consent checkbox appears, unticked by default, with a link to the privacy notice: those notes are health data under the GDPR.",
      f6t: "QR menu",
      f6: "A digital menu for the guest's phone, with several visual themes to choose from and allergens on every dish.",
      fPt: "Your restaurant's look",
      fP: "Set your restaurant's name and logo, choose how the QR menu looks (themes, colours and type) and how the booking page looks — it can follow the same style.",
      f7t: "Allergen sheet",
      f7: "A table of the 14 allergens built from your products, ready to print or consult.",
      f8t: "Staff PIN login",
      f8: "Each person signs in with their PIN and profile photo. Fast during service, clear in the activity log.",
      f9t: "Light and dark mode",
      f9: "The interface is available in Spanish, Catalan and English, with a light, dark or automatic theme to suit your room.",
      f4t: "Verifactu-ready, in development",
      f4: "Invoicing with chained records and a QR code on the ticket, designed for Spain's Verifactu. This feature is still in development and is offered in test mode. It is not certified.",
      fDt: "Google Drive backup",
      fD: "Encrypted Google Drive backup is on by default for new installations. The owner connects their account once; until then, copies stay on the restaurant's device.",
      fSt: "Remote support and updates",
      fS: "Staff can open support tickets from the POS, and the system can receive automatic updates from ARKHA Cloud, in a maintenance window, with a backup and automatic rollback if something fails. The local device keeps working even without internet.",
      hH: "How it works",
      s1t: "A device in your restaurant",
      s1: "ARKHA runs on a small local device (Raspberry Pi-class). Service keeps going even if the internet drops.",
      s2t: "Till, phone and kitchen",
      s2: "Till on a computer or tablet, waiters on their phones and screens in kitchen and bar, synced in real time.",
      s3t: "Backup and cloud",
      s3: "Your data is stored on the restaurant's device, with an encrypted Google Drive copy once you connect it. The POS keeps working offline; support and updates come from ARKHA Cloud when there is a connection.",
      cH: "Screenshots",
      cN: "All screenshots use demo data.",
      capK: "Kitchen display", capW: "Waiter app", capC: "Clock-in on the phone",
      capM: "QR menu", capB: "Online bookings", capL: "Menu and booking appearance", capA: "Allergen sheet",
      rH: "Built with compliance in mind",
      r1t: "GDPR",
      r1: "Booking data is used only to manage the booking and can be deleted automatically after a set period. Allergy notes are treated as health data: they require explicit consent, unticked by default, and a link to the privacy notice.",
      r2t: "No tracking cookies",
      r2: "Neither ARKHA nor this website use tracking cookies or third-party scripts.",
      r3t: "Allergens",
      r3: "Per-dish allergen information on the menu and on a printable sheet, per Regulation (EU) 1169/2011.",
      kH: "Request a demo",
      k1: "Tell us about your restaurant and we'll show you ARKHA in action.",
      plans: "Plans coming soon.",
      ft: "ARKHA POS · Made in Catalonia", legal: "Legal notice", priv: "Privacy",
      back: "← ARKHA POS",
      legalH: "Legal notice",
      legalIntro: "This notice governs the use of the arkha.eu website, which provides information about the ARKHA POS software.",
      legalOwnerT: "Owner",
      legalOwner: "The owner's details for this site (name or legal name, tax ID and address) will be stated here before formal identification is completed. Until then, contact the email address below. No personal tax identification data is published on this page.",
      legalContactT: "Contact",
      legalContact: "For any query about this site or the product:",
      legalObjectT: "Purpose",
      legalObject: "This site describes ARKHA POS and offers a contact address to request a demonstration. It is not a shop and it does not process contracts online.",
      legalIpT: "Intellectual property",
      legalIp: "The ARKHA name, logos, text and design of this site belong to the owner or are used under licence. Screenshots show demo data. The content may not be copied for commercial use without permission.",
      legalRespT: "Liability",
      legalResp: "The information on this site describes the software as it stands today. Some features, such as Verifactu, are still in development and are offered in test mode; the software is not presented as certified or as a legal guarantee. Each restaurant is responsible for how it uses ARKHA POS.",
      legalLawT: "Governing law",
      legalLaw: "This notice is governed by Spanish law. Any dispute will be heard by the courts that apply under the relevant rules.",
      privH: "Privacy policy",
      privIntro: "This policy explains how data is handled on arkha.eu and how ARKHA POS processes booking data when a restaurant uses the system. The identifying details of this site's owner (name or legal name, tax ID and address) are placeholders until they are completed; no personal tax identification data is published here. To contact us: holaarkha@gmail.com.",
      privSiteT: "This website (arkha.eu)",
      privSite: "This site does not collect forms or create an account. If you write to holaarkha@gmail.com, we process your email address and the content of your message only to reply. We do not track you, we do not send automated newsletters, and we do not share this data.",
      privStoreT: "Storage in your browser",
      privStore: "This site does not use cookies. It only stores in your browser (localStorage) the language and theme (light/dark) you choose, so the page can remember them. You can delete them by clearing this site's data in your browser. There are no third-party scripts and no audience measurement.",
      privBookT: "Booking data in ARKHA POS",
      privBook: "When a restaurant uses ARKHA POS, that restaurant is the data controller for booking data. ARKHA acts as data processor (Art. 28 GDPR). Data is stored on the restaurant's own server. We process the name, phone, email (optional), party size, date and time, and any notes the guest writes, to manage the booking (Art. 6(1)(b) GDPR: pre-contractual steps). There is no profiling and no advertising.",
      privHealthT: "Allergy notes (health data)",
      privHealth: "If the guest writes notes (for example an allergy), those notes are treated as health data (Art. 9 GDPR). They are only sent if the guest ticks an explicit consent checkbox, which is unticked by default and includes a link to the privacy notice. They can book without notes if they prefer not to give that consent. The notes are used only to prepare the visit.",
      privRetT: "Retention",
      privRet: "Booking data, including notes, is deleted automatically after a period the restaurant configures (by default, 30 days after the booking date), unless the law requires it to be kept longer.",
      privRightsT: "Your rights",
      privRights: "You can ask for access, rectification, erasure, objection, restriction and portability. For a booking made at a restaurant, contact that restaurant (the controller). For an email sent to this site, write to holaarkha@gmail.com. You can also complain to the Spanish Data Protection Agency (aepd.es) or the Catalan Data Protection Authority (apdcat.cat).",
      phOwner: "Owner: [name or legal name — to be completed] · Tax ID: [to be completed] · Address: [to be completed]",
      titleLegal: "Legal notice · ARKHA POS",
      titlePriv: "Privacy policy · ARKHA POS",
      metaDesc: "ARKHA POS: restaurant POS made in Catalonia, in Spanish, Catalan and English. Floor plan, orders, clock-in, online bookings, QR menu and Verifactu-ready invoicing (in development)."
    }
  };

  const A = {
    ca: {
      theme: "Canvia el tema clar/fosc",
      altFloor: "Plànol de sala d'ARKHA POS amb seccions (dades de demostració)",
      altFloorLight: "Plànol de sala d'ARKHA POS en tema clar (dades de demostració)",
      altKitchen: "Pantalla de cuina amb comandes i temporitzadors (dades de demostració)",
      altWaiter: "Vista de cambrer al mòbil amb taules i comanda (dades de demostració)",
      altClock: "Fitxatge al mòbil: rellotge, PIN i botó per fitxar (dades de demostració)",
      altMenu: "Carta QR al mòbil amb al·lèrgens (dades de demostració)",
      altBook: "Reserva en línia amb consentiment explícit per a notes d'al·lèrgia (dades de demostració)",
      altLook: "Personalització de la carta QR: temes visuals i vista prèvia (dades de demostració)",
      altAll: "Fitxa d'al·lèrgens imprimible (dades de demostració)"
    },
    en: {
      theme: "Toggle light/dark theme",
      altFloor: "ARKHA POS floor plan with room sections (demo data)",
      altFloorLight: "ARKHA POS floor plan in light theme (demo data)",
      altKitchen: "Kitchen display with orders and timers (demo data)",
      altWaiter: "Waiter phone view with tables and an order (demo data)",
      altClock: "Clock-in on the phone: clock, PIN and clock-in button (demo data)",
      altMenu: "QR menu on a phone with allergens (demo data)",
      altBook: "Online booking with explicit consent for allergy notes (demo data)",
      altLook: "QR menu customisation: visual themes and preview (demo data)",
      altAll: "Printable allergen sheet (demo data)"
    }
  };

  const META = {
    es: {
      title: "ARKHA POS · TPV para restaurantes",
      desc: "ARKHA POS: TPV para restaurantes hecho en Cataluña, en español, catalán e inglés. Plano de sala, comandas, fichaje, reservas online, carta QR y facturación preparada para Verifactu (en desarrollo)."
    },
    ca: {
      title: "ARKHA POS · TPV per a restaurants",
      desc: D.ca.metaDesc
    },
    en: {
      title: "ARKHA POS · Restaurant POS",
      desc: D.en.metaDesc
    }
  };

  const els = [...document.querySelectorAll("[data-i]")];
  const ia = [...document.querySelectorAll("[data-ia]")];
  els.forEach((e) => { e.dataset.es = e.textContent; });
  ia.forEach((e) => { e.dataset.esa = e.getAttribute(e.tagName === "IMG" ? "alt" : "aria-label"); });

  function applyMeta(l) {
    const m = META[l] || META.es;
    const page = document.body && document.body.dataset.page;
    if (page === "legal") document.title = l === "es" ? "Aviso legal · ARKHA POS" : (D[l] && D[l].titleLegal) || m.title;
    else if (page === "privacy") document.title = l === "es" ? "Política de privacidad · ARKHA POS" : (D[l] && D[l].titlePriv) || m.title;
    else document.title = m.title;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && !page) desc.setAttribute("content", m.desc);
    const ogt = document.querySelector('meta[property="og:title"]');
    const ogd = document.querySelector('meta[property="og:description"]');
    if (ogt && !page) ogt.setAttribute("content", m.title);
    if (ogd && !page) ogd.setAttribute("content", m.desc);
  }

  function set(l) {
    document.documentElement.lang = l;
    els.forEach((e) => {
      e.textContent = l === "es" ? e.dataset.es : (D[l] && D[l][e.dataset.i]) || e.dataset.es;
    });
    ia.forEach((e) => {
      const attr = e.tagName === "IMG" ? "alt" : "aria-label";
      e.setAttribute(attr, l === "es" ? e.dataset.esa : (A[l] && A[l][e.dataset.ia]) || e.dataset.esa);
    });
    document.querySelectorAll("[data-lang]").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    applyMeta(l);
    try { localStorage.lang = l; } catch (_) {}
  }

  document.querySelectorAll("[data-lang]").forEach((b) => { b.onclick = () => set(b.dataset.lang); });
  let l;
  try { l = localStorage.lang; } catch (_) {}
  if (!l) {
    const n = (navigator.language || "").slice(0, 2).toLowerCase();
    l = n === "ca" ? "ca" : n === "en" ? "en" : "es";
  }
  if (l !== "es") set(l); else applyMeta("es");

  const r = document.documentElement;
  let t;
  try { t = localStorage.theme; } catch (_) {}
  if (t) r.dataset.theme = t;
  const themeBtn = document.getElementById("theme");
  if (themeBtn) themeBtn.onclick = () => {
    const cur = r.dataset.theme || (matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    r.dataset.theme = cur === "dark" ? "light" : "dark";
    try { localStorage.theme = r.dataset.theme; } catch (_) {}
  };
})();
