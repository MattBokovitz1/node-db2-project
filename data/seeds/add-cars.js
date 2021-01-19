exports.seed = function (knex) {
  return knex("cars")
    .truncate()
    .then(function () {
      return knex("cars").insert([
        {
          vin: "254",
          make: "Toyota",
          model: "Corolla",
          mileage: 100000,
          transmission: "Automatic",
          clean_title: true,
        },
      ]);
    });
};
