import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@deva/app-header",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-header"
    ),
  activeWhen: ["/"],
});

registerApplication({
  name: "@deva/app-footer",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-footer"
    ),
  activeWhen: [""],
});

registerApplication({
  name: "@deva/app-shop",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-shop"
    ),
  activeWhen: ["/shop"],
});

registerApplication({
  name: "@deva/app-account",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-account"
    ),
  activeWhen: ["/account"],
});

registerApplication({
  name: "@deva/app-cart",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-cart"
    ),
  activeWhen: ["/cart"],
});

registerApplication({
  name: "@deva/app-product",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-product"
    ),
  activeWhen: ["/product"],
});


// registerApplication({
//   name: "@deva/navbar",
//   app: () => System.import("@deva/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
