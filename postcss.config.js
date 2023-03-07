let environment = {
  plugins: [
    require('tailwindcss')('./app/javascript/stylesheet/tailwind.config.js'),
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
};
// Add everything below!
if (process.env.RAILS_ENV === 'production') {
  environment.plugins.push(
    require('@fullhuman/postcss-purgecss')({
      content: [
        './app/**/.html.erb',
        './app/helpers/**/*.rb',
        './app/javascript/**/*.js',
        './app/javascript/**/*.jsx',
      ],
      defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  )
}

module.exports = environment;
// module.exports = {
//     plugins: [
//       require('tailwindcss')('./app/javascript/stylesheest/tailwind.config.js'),
//       require('autoprefixer'),
//       require('postcss-import'),
//       require('postcss-flexbugs-fixes'),
//       require('postcss-presnt-env')({autoprefixer:{
//         flexbox :'no-2009'
//         },
//         stage : 3
//         })
//     ]
//   }
  