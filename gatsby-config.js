module.exports = {
  siteMetadata: {
    heading:"Selamat Datang di Website Sekolah Kristen TK Generasi Kasih di Kabupaten Pati Juwana Jawa Tengah",
    title: "TK Generasi Kasih Juwana | Sekolah Kristen Terbaik di Juwana",
    description: "Sekolah Kristen TK Generasi Kasih Indonesia, Sekolah Kristen, TK Kristen di Juwana, pengalaman belajar yang memuaskan bagi anak Anda, Staf kami terdiri dari pendidikan yang berpengalaman yang peduli dan berdedikasi,", 
    author:"simon",
    keywords: "sekolah kristen terbaik, sekolah kristen terdekat,sekolah kristen pati, tk kristen dijuwana, kb generasi kasih, program generasi kasih, kegiatan generasi kasihpaud generasi kasih,tk generasi kasih juwana,genka,",
    url: "https://tkgenerasikasih.sch.id", 

    },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        sassOptions: {
          indentedSyntax: true,
        },
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-babel-plugin-typescript-to-proptypes",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-decap-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ['/bulma-style.sass'], // applies purging only on the bulma css file
        printRejected: true,
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};
