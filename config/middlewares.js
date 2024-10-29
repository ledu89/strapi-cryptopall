(module.exports = [
  "strapi::logger",
  "strapi::errors",
  "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
]),
  {
    name: "strapi::security",
    config: {
      cors: {
        origin: ["https://strapi-cryptopall.onrender.com"],
      },
    },
  };
