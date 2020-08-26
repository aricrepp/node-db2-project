exports.seed = async function (knex) {
  await knex('car').insert([
    {
      vin: '1234',
      make: 'Chevy',
      model: 'Malibu',
      mileage: 100000,
      cleanTitle: true,
    },
    {
      vin: '5678',
      make: 'Hyundai',
      model: 'Elantra',
      mileage: 40000,
      cleanTitle: false,
    },
    {
      vin: '9101',
      make: 'BMW',
      model: 'M600',
      mileage: 5000,
      cleanTitle: true,
    },
  ]);
};
