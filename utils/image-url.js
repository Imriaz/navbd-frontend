// const IMAGE_URL = `${process.env.HOST}:${
//   process.env.NODE_ENV === "production"
//     ? process.env.PRODUCTION_IMAGE_PORT
//     : process.env.DEFAULT_PORT
// }/public/image/`;
const IMAGE_URL = `/../public/image`;

module.exports = {
  logo: `${IMAGE_URL}/icon/logo.png`,
  logo2: `${IMAGE_URL}/icon/logo.svg`,
};
