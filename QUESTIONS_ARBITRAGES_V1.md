# Juste a Rouler — Questions, Arbitrages & Points a Valider
## Document de travail pour iterer sur la V1

---

## 1. DESIGN & IDENTITE VISUELLE

- [ ] **Logo SVG** : Je n'ai que le PDF/AI. Il faudrait un SVG du logo (icone voiture + texte) pour l'integrer proprement dans le header et le footer. Tu peux me le fournir ?
- [ ] **Favicon** : Faut-il utiliser l'icone voiture du logo en favicon, ou creer un favicon simplifie (ex: "JR" en orange sur fond noir) ?
- [ ] **Couleur orange exacte** : J'ai extrait #E8650C du logo. Confirmes-tu cette teinte ou tu as un code hex officiel de ta charte graphique ?
- [ ] **Photos hero** : Le Range Rover est actuellement en hero. Souhaites-tu un carousel de vehicules ou une photo/video specifique du showroom ?
- [ ] **Dark mode / Light mode** : Le site est actuellement full dark pour les pages principales. Souhaites-tu un mode clair pour certaines pages (blog, label) ?
- [ ] **Logo Roue Libre** : La sous-marque a-t-elle son propre logo ? Si oui, il faudrait l'integrer sur la page /roue-libre.

---

## 2. FONCTIONNALITES & TECHNIQUE

- [ ] **Backend annonces** : Actuellement les vehicules sont en dur dans un fichier TS. Pour la V2, il faut un CMS ou une base de donnees. Options : Strapi, Sanity, Supabase, ou admin custom. Quelle preference ?
- [ ] **Formulaires** : Les formulaires (contact, RDV, simulation) ne sont pas connectes. Backend a prevoir : Resend (emails), ou Notion/Airtable comme CRM leger, ou HubSpot/Pipedrive comme mentionne dans le document strategique ?
- [ ] **Rapport Verite** : La page /label a une demo de recherche. Pour la V2, comment generer/stocker les vrais rapports ? PDF dynamique ? Base de donnees avec QR code unique ? Faut-il prevoir l'integration Histovec/CarVertical des maintenant dans l'architecture ?
- [ ] **Simulateur financement** : La formule actuelle est simplifiee. Faut-il integrer une API partenaire (Cetelem, Cofidis, etc.) ou rester sur une simulation indicative ?
- [ ] **Comparateur assurance** : Meme question — simulation indicative ou API partenaire reel ?
- [ ] **Paiement en ligne** : Faut-il prevoir un systeme de reservation/acompte en ligne (Stripe) pour les vehicules ?
- [ ] **Espace client** : Le document strategique mentionne un espace client (suivi mandats, historique, abonnements Care). A integrer en V2 ? Priorite ?
- [ ] **Multi-plateforme annonces** : Faut-il prevoir un export automatique des annonces vers LeBonCoin/LaCentrale via API ?
- [ ] **Signature electronique** : Yousign ou DocuSign a integrer pour les mandats ? Priorite ?

---

## 3. PARCOURS UTILISATEUR (UX)

- [ ] **Parcours vendeur** : La homepage pousse surtout vers l'achat. Faut-il un CTA dedique "Vendre mon vehicule" plus visible en hero ou dans le menu ?
- [ ] **Parcours pro/artisan** : Le Corner Pro est mentionne dans le document. Faut-il un segment visible "Professionnels" dans la nav ou le garder integre aux annonces ?
- [ ] **Annonces — tri par defaut** : Les annonces sont triees par prix croissant. Quel tri par defaut preferes-tu ? (prix, date ajout, score label, popularite)
- [ ] **Fiche vehicule — galerie photos** : Actuellement 1 seule photo par vehicule. Quand il y en aura plusieurs, quel format ? Carousel ? Lightbox ? Grille ?
- [ ] **Mobile — menu burger** : Le menu mobile est en slide-in. Le contenu est-il bien hierarchise pour toi ? Faut-il ajouter "Vendre mon vehicule" en premier dans le mobile ?
- [ ] **Prise de RDV** : Faut-il integrer un vrai calendrier de reservation (Calendly, Cal.com) ou rester sur le formulaire actuel ?
- [ ] **Chat en ligne** : Faut-il prevoir un widget de chat (Crisp, Intercom, Drift) pour la conversion ?

---

## 4. CONTENUS & COPYWRITING

- [ ] **Temoignages** : Les temoignages sont fictifs pour l'instant. As-tu de vrais avis clients a integrer ? Google Reviews ? Trustpilot ?
- [ ] **Blog** : La page /blog est prevue dans l'arborescence mais pas encore creee. Priorite ? Quels types de contenus ? (guides achat, actus, coulisses, vanlife)
- [ ] **Chiffres cles** : Les stats affichees (500+ clients, 4.9/5, 12j delai) sont des projections. Veux-tu les garder telles quelles ou les ajuster ?
- [ ] **Telephone** : Le numero affiche est "06 00 00 00 00" — quel est le vrai numero a mettre ?
- [ ] **Adresse showroom** : L'adresse est "a confirmer" — quelle est l'adresse reelle ?
- [ ] **Email** : contact@justearouler.fr est-il le bon email ?
- [ ] **Horaires** : "Lun-Sam 9h-19h" est-il correct ?
- [ ] **CGV / Mentions legales** : A rediger. Faut-il prevoir des pages dediees avec contenu reel ?
- [ ] **Tarifs Care/Serenite** : Les prix 19/29/39 EUR/mois sont-ils valides ou a ajuster ?
- [ ] **Tarifs location Roue Libre** : Les prix 89-149 EUR/jour sont-ils coherents ?

---

## 5. INTEGRATIONS TECHNIQUES

- [ ] **Analytics** : Google Analytics 4, Plausible, ou Vercel Analytics ?
- [ ] **Google Maps** : Faut-il integrer une carte sur la page contact ?
- [ ] **Google Business Profile** : Le compte existe-t-il deja ?
- [ ] **Reseaux sociaux** : Quels comptes existent ? Instagram, Facebook, TikTok ? Faut-il des liens dans le footer ?
- [ ] **Meta Pixel / Google Ads** : Faut-il prevoir le tracking publicitaire des le lancement ?
- [ ] **Cookies / RGPD** : Faut-il une banniere cookies (Axeptio, Tarteaucitron) ?
- [ ] **SEO avance** : Faut-il prevoir le JSON-LD (schema.org) pour les vehicules (schema Auto), le business local, les reviews ?
- [ ] **Sitemap XML** : A generer automatiquement via Next.js.
- [ ] **Open Graph** : Les images OG sont prevues. As-tu des visuels specifiques pour le partage social ?

---

## 6. STRATEGIE COMMERCIALE

- [ ] **Depot-vente vs Stock** : Sur le site, faut-il differencier visuellement le depot-vente du stock ? Ou les presenter de la meme facon pour le client ?
- [ ] **Gamme Essentiel (ex-Budget)** : Le positionnement actuel est discret. Faut-il le pousser davantage ou le garder en retrait pour proteger l'image premium ?
- [ ] **Prix affiches** : Faut-il afficher les prix TTC, HT, ou les deux ? Mention "prix nego" ?
- [ ] **Mensualites** : La mention "ou X EUR/mois" est un fort levier conversion. Faut-il la rendre encore plus visible (plus grande, couleur differente) ?
- [ ] **Garantie** : Les durees de garantie (3/6/12 mois) sont-elles definitives ?
- [ ] **Zone de chalandise** : Le site cible-t-il une zone geographique precise (ville, region) ou la France entiere ?
- [ ] **Livraison** : Proposez-vous la livraison nationale ? A integrer dans les fiches vehicules ?

---

## 7. PRIORITES DE DEVELOPPEMENT (V2)

Par ordre de suggestion :

1. **Backend CMS** pour les annonces (ajouter/modifier/supprimer des vehicules sans toucher au code)
2. **Formulaires connectes** (envoi d'emails reels, CRM)
3. **Galerie photos multi-images** par vehicule
4. **SEO technique** (JSON-LD, sitemap, meta dynamiques par vehicule)
5. **Rapport Verite** generateur PDF + stockage + QR code
6. **Espace client** basique (suivi mandat, historique)
7. **Blog** avec CMS
8. **Prise de RDV** avec calendrier reel
9. **API partenaires** financement/assurance
10. **Deploiement Vercel** + domaine justearouler.fr

---

## 8. QUESTIONS ARCHITECTURE

- [ ] **Nom de domaine** : justearouler.fr est-il reserve ? Alternatives : justarouler.fr, jar.fr ?
- [ ] **Hebergement** : Vercel (recommande pour Next.js) ou autre preference ?
- [ ] **Base de donnees** : Supabase (PostgreSQL, gratuit au debut) ou autre ?
- [ ] **Emails transactionnels** : Resend, SendGrid, ou Brevo ?
- [ ] **Stockage images** : Cloudinary, Uploadthing, ou S3 ?

---

*Document genere le 28/02/2026 — A completer et valider ensemble pour la V2.*
