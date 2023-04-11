import { registerApplication, start, LifeCycles } from "single-spa";

registerApplication({
  name: "@deva/app-header",
  app: () =>
    System.import<LifeCycles>(
      "@deva/app-header"
    ),
  activeWhen: ["/"],
});

// registerApplication({
//   name: "@deva/app-footer",
//   app: () =>
//     System.import<LifeCycles>(
//       "@deva/app-footer"
//     ),
//   activeWhen: ["/"],
// });

// registerApplication({
//   name: "@deva/app-shop",
//   app: () =>
//     System.import<LifeCycles>(
//       "@deva/app-shop"
//     ),
//   activeWhen: ["/app1"],
// });

// registerApplication({
//   name: "@deva/navbar",
//   app: () => System.import("@deva/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});
