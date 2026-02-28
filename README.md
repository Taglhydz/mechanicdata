# 🔧 MechanicData

> Guide complet des codes défauts OBD-II automobile - Gratuit et open source

[![Deploy Status](https://github.com/Taglhydz/mechanicdata/actions/workflows/deploy.yml/badge.svg)](https://github.com/Taglhydz/mechanicdata/actions)
[![Astro](https://img.shields.io/badge/Astro-5.17-FF5D01?logo=astro)](https://astro.build)

🌐 **Site en ligne** : [taglhydz.github.io/mechanicdata](https://taglhydz.github.io/mechanicdata/)

---

## 📖 À propos

**MechanicData** est un site web dédié à l'explication détaillée des codes défauts OBD-II automobile. Notre mission : rendre le diagnostic automobile accessible à tous.

### ✨ Fonctionnalités

- 🔍 **Recherche rapide** : Trouvez instantanément votre code défaut
- 📊 **Fiches détaillées** : Symptômes, causes, diagnostics et solutions
- 💰 **Estimation des coûts** : Prix de réparation indicatifs
- 🔗 **Codes associés** : Navigation entre codes liés
- 📱 **Responsive** : Optimisé mobile, tablette et desktop
- ⚡ **Ultra-rapide** : Site statique généré avec Astro
- 🎯 **SEO optimisé** : Meta tags, sitemap, Schema.org

---

## 🚀 Stack Technique

| Technologie | Usage |
|-------------|-------|
| [Astro](https://astro.build) | Static Site Generator |
| Markdown | Gestion du contenu |
| GitHub Pages | Hébergement gratuit |
| GitHub Actions | CI/CD automatique |
| TypeScript | Type safety |

---

## 📂 Structure du Projet

```
mechanicdata/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD GitHub Actions
├── mechanicdata/               # Projet Astro
│   ├── src/
│   │   ├── content/
│   │   │   ├── config.ts       # Schéma Content Collections
│   │   │   └── codes/          # Articles codes OBD (Markdown)
│   │   │       ├── p0420.md
│   │   │       ├── p0301.md
│   │   │       └── p0171.md
│   │   ├── layouts/
│   │   │   └── Layout.astro    # Layout principal avec SEO
│   │   ├── pages/
│   │   │   ├── index.astro     # Page d'accueil
│   │   │   ├── codes.astro     # Page liste
│   │   │   └── codes/
│   │   │       └── [code].astro # Template dynamique
│   │   └── components/
│   ├── public/
│   │   └── robots.txt
│   ├── astro.config.mjs        # Configuration Astro
│   └── package.json
├── GUIDE_DEMARRAGE.md          # Guide de démarrage
├── STRATEGIE_SEO.md            # Stratégie SEO 12 mois
├── COMMANDES.md                # Référence commandes
└── README.md                   # Ce fichier
```

## 📈 Roadmap

### Phase 1 : Fondation (0-3 mois) ✅
- [x] Site Astro fonctionnel
- [x] 3 premiers codes publiés
- [x] SEO de base configuré
- [x] CI/CD mis en place
- [ ] 50 codes publiés
- [ ] Google Search Console configuré

### Phase 2 : Croissance (3-6 mois)
- [ ] 100+ codes publiés
- [ ] Guides thématiques
- [ ] 1000 visites/mois
- [ ] Backlinks actifs

### Phase 3 : Monétisation (6-12 mois)
- [ ] 200+ codes publiés
- [ ] Domaine custom (mechanicdata.fr)
- [ ] Google AdSense
- [ ] 10 000+ visites/mois

---

## © Copyright

© 2026 MechanicData. **Tous droits réservés.**

Ce code source est la propriété exclusive de MechanicData. Toute reproduction, distribution, ou utilisation à des fins commerciales sans autorisation préalable est strictement interdite.

---

## ⚠️ Disclaimer

Les informations fournies sur ce site sont à titre **indicatif uniquement**. Pour les réparations complexes ou en cas de doute, consultez toujours un professionnel certifié.

---

<div align="center">

**Fait avec ❤️ pour la communauté automobile**

⭐ **N'oubliez pas de mettre une étoile si ce projet vous aide !** ⭐

</div>