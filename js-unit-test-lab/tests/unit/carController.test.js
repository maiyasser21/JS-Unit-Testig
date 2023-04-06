const { updateCar } = require("../../src/controllers/carController");

const it = require("ava").default;

it("should update an added car", async (t) => {
  const car = {
    title: "Audi Q7",
    tags: "SUV, luxury",
    price: 80000,
    age: 3,
  };

  const addedCar = await addCar(car);

  const newPrice = 85000;
  const updatedCar = await updateCar({ ...addedCar, price: newPrice });

  t.is(updatedCar.price, newPrice);
});
