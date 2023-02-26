const SingleArtPageRoot = '/house/'

const routes = {

  HomePage: '/',
  SingleArtPage:{
    path: `${SingleArtPageRoot}:id`,
    createLink: (id:string&number)=> `/art/${id}`,
  }
} as const;

export type Routes = typeof routes;
export type RouteLink = Routes[keyof Routes];

export default routes;
