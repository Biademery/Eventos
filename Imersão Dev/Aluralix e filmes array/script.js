// const howToLoseAGuyInTenDays =
//   'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5158a6fca394a1c1880508ca729bf357e27657f42da205f000f236c2f93533f6._RI_V_TTW_.jpg';
// const prisionerOfAzkaban =
//   'https://static.wikia.nocookie.net/vvikipedia/images/a/a0/Poster_Harry_Potter_e_o_Prisioneiro_de_Azkaban.jpg/revision/latest?cb=20200413040800&path-prefix=pt';
// const theConjuring =
//   'https://image.tmdb.org/t/p/w500/1NxHKZW5DPbUFtbF3MxbdSyxRqU.jpg';

// document.write(`<img src=${howToLoseAGuyInTenDays}>
// <img src=${prisionerOfAzkaban}>
// <img src=${theConjuring}>`);

const movieImagesURLs = [
  'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5158a6fca394a1c1880508ca729bf357e27657f42da205f000f236c2f93533f6._RI_V_TTW_.jpg',
  'https://static.wikia.nocookie.net/vvikipedia/images/a/a0/Poster_Harry_Potter_e_o_Prisioneiro_de_Azkaban.jpg/revision/latest?cb=20200413040800&path-prefix=pt',
  'https://image.tmdb.org/t/p/w500/1NxHKZW5DPbUFtbF3MxbdSyxRqU.jpg',
];

for (let i = 0; i < movieImagesURLs.length; i++) {
  document.write(`<img src=${movieImagesURLs[i]}>`);
}

// código mais aprimorado :)
// const movies = [
//   {
//     name: 'How to lose a guy in 10 days',
//     imageURL:
//       'https://images-na.ssl-images-amazon.com/images/S/pv-target-images/5158a6fca394a1c1880508ca729bf357e27657f42da205f000f236c2f93533f6._RI_V_TTW_.jpg',
//     link: 'https://www.primevideo.com/region/na/dp/amzn1.dv.gti.a4ac5766-5720-adbb-a2e3-abaae36c7277/ref=atv_pr_sw_sc?autoplay=0',
//   },
//   {
//     name: 'Harry Potter Prisioner of Azkaban',
//     imageURL:
//       'https://static.wikia.nocookie.net/vvikipedia/images/a/a0/Poster_Harry_Potter_e_o_Prisioneiro_de_Azkaban.jpg/revision/latest?cb=20200413040800&path-prefix=pt',
//     link: 'https://play.hbomax.com/page/urn:hbo:page:GXssObwqZrVVGwwEAAABI:type:feature?source=googleHBOMAX&action=open',
//   },
//   {
//     name: 'The Conjuring',
//     imageURL: 'https://image.tmdb.org/t/p/w500/1NxHKZW5DPbUFtbF3MxbdSyxRqU.jpg',
//     link: 'https://play.hbomax.com/page/urn:hbo:page:GXdu2RQKDmpuAuwEAADZ2:type:feature?source=googleHBOMAX&action=open',
//   },
// ];

// movies.forEach(movie =>
//   document.write(
//     `<a href=${movie.link} target="_blank"> <img src=${movie.imageURL}> </a>`,
//   ),
// );
