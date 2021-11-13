import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

  {
    title: true,
    name: 'Users',
      },
  {
    name: 'les utilisateurs activent',
    url: '/users/userEnable',
    icon: 'icon-user'

  },
  {
    name: "lister les utilisateurs n'est pas activés",
    url: '/users/userNotEnable',
    icon: 'icon-user'
  },
  {
    title: true,
    name: 'Stade'
  },
  {
    name:'Liste des stades',
    url:'/stade/listStade',
    icon:''
  },
  {
    name:'ajouter stade',
    url:'/stade/addStade',
    icon:'far fa-futbol'
  },
  {
    title: true,
    name: 'equipes'
  },
  {
    name: 'liste des equipes',
    url: '/equipes/allequipe',
    icon: 'icon-user'

  },
  {
    title: true,
    name: 'carte'
  },
  {
    name: 'liste des cartes',
    url: '/carte/allCarte',
    icon: 'fa fa-drivers-license'

  },
  {
    title: true,
    name: 'Partie'
  },
  {
    name: 'liste des partie',
    url: '/partie/listPartie',
    icon: 'fa fa-drivers-license'

  },
  {
    name: 'ajouter partie',
    url: '/partie/addPartie',
    icon: 'fa fa-drivers-license'

  },
  {
    title: true,
    name: 'Resevation'
  },
  {
    name: 'liste des Reservations',
    url: '/reservation/listReservation',
    icon: 'fa fa-drivers-license'
  }

];
