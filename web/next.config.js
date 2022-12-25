// const client = require('./client')

module.exports = {
  images: {
    domains: ["cdn.sanity.io"],
    loader: "custom",
  },
  optimizeFonts: false,
};

// module.exports = {
//   reactStrictMode: true,
//   experimental: { appDir: true },
// };

// module.exports = {
//   exportPathMap: async function (defaultPathMap) {
//     const paths = await client
//       .fetch('*[_type == "product" && defined(slug)].slug.current')
//       .then(data =>
//         data.reduce(
//           (acc, slug) => ({
//             '/': { page: '/' },
//             ...acc,
//             [`/product/${slug}`]: { page: '/product/[slug]', query: { slug } }
//           }),
//           defaultPathMap
//         )
//       )
//       .catch(console.error)
//     return paths
//   }
// }
