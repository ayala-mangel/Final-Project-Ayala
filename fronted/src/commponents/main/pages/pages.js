import { RoleTypes } from "../../../users/roletypes";

export const pages = [
  { route: "/boys", title: "boys", permissions: [RoleTypes.none] },
  { route: "/girls", title: "girls", permissions: [RoleTypes.none] },
  { route: "/babyies", title: "babies", permissions: [RoleTypes.none] },
  { route: "/toys", title: "toys", permissions: [RoleTypes.none] },
  {
    route: "/beauty-products",
    title: "beauty products",
    permissions: [RoleTypes.none],
  },
  { route: "/sale", title: "sale", permissions: [RoleTypes.none] },
  { route: "/signup", title: "Sign-Up", permissions: [RoleTypes.none] },
  { route: "/login", title: "Log-In", permissions: [RoleTypes.none] },
  {
    route: "/personal",
    title: "personal",
    permissions: [RoleTypes.user, RoleTypes.bussiness, RoleTypes.admin],
  },
  {
    route: "/add-product",
    title: "add product",
    permissions: [RoleTypes.bussiness, RoleTypes.admin],
  },
  { route: "/customers", title: "customers", permissions: [RoleTypes.admin] },
];

export const settings = [
  {
    route: "/account",
    title: "profile",
    permissions: [RoleTypes.user, RoleTypes.bussiness, RoleTypes.admin],
  },
];
