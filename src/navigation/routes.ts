const routes = {
  HomePage: '/',
  typografyPage:'/typography',
} as const;

export type Routers = typeof routes;
export type Routerslink = Routers[keyof Routers];

export default routes;
