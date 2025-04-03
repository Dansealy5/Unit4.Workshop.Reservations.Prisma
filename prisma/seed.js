const prisma = require("../prisma");
const seed = async () => {
  // TODO: Create Customers, Restaurants and Reservations
  const createCustomers = async () => {
    const customers = [
      { name: "Billy" },
      { name: "Jacob" },
      { name: "Fred" },
      { name: "Brittany" },
    ];
    await prisma.customer.createMany({ data: customers });
  };

  const createRestaurants = async () => {
    const restaurants = [
      { name: "Texas De Brazil" },
      { name: "Olive Garden" },
      { name: "Zach's" },
      { name: "Applebees" },
    ];
    await prisma.restaurant.createMany({ data: restaurants });
  };

  const createReservations = async () => {
    const reservations = [
      {
        customerId: 1,
        restaurantId: 1,
        date: new Date("2025-04-03"),
        partyCount: 3,
      },
      {
        customerId: 2,
        restaurantId: 2,
        date: new Date("2025-04-04"),
        partyCount: 6,
      },
      {
        customerId: 3,
        restaurantId: 3,
        date: new Date("2025-04-05"),
        partyCount: 5,
      },
    ];
    await prisma.reservation.createMany({ data: reservations });
  };

  await createCustomers();
  await createRestaurants();
  await createReservations();
};

seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
