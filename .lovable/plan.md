## Portfolio — Jenovic Ilambu

Un portfolio premium, sombre et doré, avec des micro-interactions soignées qui mettent en valeur ton travail de dev fullstack.

### Direction visuelle (Noir & Gold)

- Palette : noir profond `#0d0d0d`, charbon `#1a1a1a`, or `#c9a84c`, or pâle `#f0d78c`
- Typographie : **Cormorant Garamond** (serif élégant) pour les titres + **Inter** pour le corps
- Ambiance : éditoriale, premium, beaucoup d'espace, accents dorés rares mais marquants
- Grain de bruit subtil sur le fond, dégradés or très doux

### Sections (4 retenues)

1. **Hero + À propos**
   - Nom géant en serif, sous-titre "Développeur Fullstack — Kinshasa, RDC"
   - Phrase manifeste : "Toute solution informatique, je l'implémente et je lui donne vie."
   - CTA : "Voir mes projets" + "Me contacter"
   - Bloc À propos court avec localisation et focus

2. **Projets** (récupérés depuis ton GitHub)
   - DigitalMarketing RDC (démo live)
   - Lumire Makeup (démo live)
   - SmartCampus ULC (démo live)
   - Kaisen Cares (ONG)
   - JIKO-JIBU (charbon écologique)
   - Study Spark Compass
   - Chaque carte : titre, description, stack, liens GitHub + démo

3. **Compétences / Stack**
   - Groupes : Frontend (React, TS, Tailwind), Backend (PHP, Node), Outils (Git, Figma)
   - Affichage en grille avec icônes dorées

4. **Contact**
   - Formulaire (nom, email, message) + liens directs (GitHub, email, LinkedIn si tu en as un)
   - Pour l'envoi réel d'emails on activera Lovable Cloud plus tard si tu veux

### Interactions ("comme il se doit")

- Curseur custom doré qui suit la souris (desktop)
- Apparition au scroll des sections (fade + translate)
- Cartes projets : tilt 3D léger au survol + glow doré
- Texte hero avec animation de révélation lettre par lettre
- Navigation sticky avec indicateur de section active
- Transitions de page fluides
- Bouton "back to top" qui apparaît en scroll
- Easter egg : Konami code → confettis dorés (optionnel)

### Architecture technique

- Routes séparées : `/` (home), `/projets`, `/contact` — chacune avec sa propre meta SEO
- Composants réutilisables : `Navbar`, `Footer`, `ProjectCard`, `SectionHeading`, `CustomCursor`, `ScrollReveal`
- Animations via **framer-motion** (déjà conseillé par le stack Lovable)
- Données projets dans un fichier `src/data/projects.ts` (facile à éditer)
- Tokens design dans `src/styles.css` (couleurs oklch, fonts, ombres dorées, gradients)

### Hors-scope pour cette première version

- Blog (peut être ajouté plus tard)
- Multilingue FR/EN (à activer si tu veux après)
- Backend pour le formulaire (j'ouvrirai Lovable Cloud quand tu valides)

Je peux lancer la construction maintenant — tu veux que je parte sur ces 6 projets, ou tu préfères en sélectionner moins / en ajouter ?