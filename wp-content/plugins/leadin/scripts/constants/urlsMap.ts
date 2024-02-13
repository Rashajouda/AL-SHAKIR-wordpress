import { routes } from './leadinConfig';

const flatUrls = (
  key: string,
  route: any | string
): {
  [routeKey: string]: string;
} => {
  if (typeof route === 'string') {
    return {
      [key]: route,
    };
  }
  return Object.keys(route).reduce((agg: any, childKey: string) => {
    const childRoute = route[childKey];
    return {
      ...agg,
      ...flatUrls(key + childKey, childRoute),
    };
  }, {});
};

const urlsMap: {
  [key: string]: string;
} = Object.keys(routes).reduce(
  (agg, key) => ({
    ...agg,
    ...flatUrls(key, routes[key]),
  }),
  {}
);

export default urlsMap;
