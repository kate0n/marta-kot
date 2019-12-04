// const path = require(`path`)
//
// const rebuildPages = typeof process.env.REBUILD_PAGES === "string" ? process.env.REBUILD_PAGES.split(",") : []
//
//
// const pagesPath ={
//   'video':'/video/',
//   'music':'/music/',
//   'contacts':'/contacts/',
//   'concert':'/concert/',
//   'index':'/',
// }
//
//
// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//
//   console.log('process.env.NODE_ENV: ', process.env.NODE_ENV)
//   if(process.env.NODE_ENV === 'production'){
//     if (rebuildPages.length) {
//       rebuildPages.forEach((item)=>{
//         createPage({
//           path: pagesPath[item],
//           component: path.resolve(`./src/templates/${item}.js`),
//         })
//       })
//       return
//     }
//   }
//
//   Object.entries(pagesPath).forEach(([key,value])=>{
//     createPage({
//       path: value,
//       component: path.resolve(`./src/templates/${key}.js`),
//     })
//   })
//
// }
