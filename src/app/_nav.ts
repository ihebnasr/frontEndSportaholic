import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'tableau de bord',
    url: '/dashboard',
    icon: 'fa fa-tachometer',

  },

  {
    title: true,
    name: 'Users',
      },
  {
    name: "liste des inscriptions",
    url: '/users/newInscrit',
    icon: 'fa fa-user'
  },
  {
    name: 'les utilisateurs activent',
    url: '/users/userEnable',
    icon: 'fa fa-user '

  },
  {
    name: "les utilisateurs n'est pas activés",
    url: '/users/userNotEnable',
    icon: 'fa fa-user'
  },

  {
    title: true,
    name: 'Stade'
  },
  {
    name:'Liste des stades',
    url:'/stade/listStade',
    icon:'fa fa-futbol-o'
  },
  {
    name:'Ajouter stade',
    url:'/stade/addStade',
    icon:'fa fa-futbol-o'
  },
  {
    title: true,
    name: 'equipes'
  },
  {
    name: 'Liste des equipes',
    url: '/equipes/allequipe',
    icon: 'fa fa-futbol-o'

  },{
    name:'Ajouter equipe',
    url: '/equipes/addEquipe',
    icon:'fa fa-futbol-o'
  },
  {
    title: true,
    name: 'carte'
  },
  {
    name: 'Liste des cartes',
    url: '/carte/allCarte',
    icon: 'fa fa-credit-card'
  },
  {
    name: 'Ajouter cartes',
    url: '/carte/addCarte',
    icon: 'fa fa-credit-card'

  },
  {
    title: true,
    name: 'Categorie Partie'
  },
  {
    name: 'Liste des categories',
    url: '/categorie/allCategorie',
    icon: 'fa fa-futbol-o'

  },
  {
    name: 'Ajouter categorie',
    url: '/categorie/addCategorie',
    icon: 'fa fa-futbol-o'

  },
  {
    title: true,
    name: 'Partie'
  },
  {
    name: 'Liste des partie',
    url: '/partie/listPartie',
    icon: 'fa fa-futbol-o'

  },
  {
    name: 'Ajouter partie',
    url: '/partie/addPartie',
    icon: 'fa fa-futbol-o'

  },
  {
    title: true,
    name: 'Resevation'
  },
  {
    name: 'Liste des Reservations',
    url: '/reservation/listReservation',
    icon: 'fa fa-ticket'
  }

];
