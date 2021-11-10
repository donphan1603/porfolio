import { IconBriefcase, IconEnverlopOpen, IconHomeSolid, IconUserSolid } from "../components/commons/icons";
export const PofolioMenus = {
  home: {
    id: 1,
    title: "Home",
    icon: <IconHomeSolid className="w-5 h-5" />,
    active: true
  },
  about: {
    id: 2,
    title: "About",
    icon: <IconUserSolid className="w-5 h-5" />,
    active: false
  },
  porfolio: {
    id: 3,
    title: "Porfolio",
    icon: <IconBriefcase className="w-5 h-5" />,
    active: false
  },
  contact: {
    id: 4,
    title: "Contact",
    icon: <IconEnverlopOpen className="w-5 h-5" />,
    active: false
  },
}