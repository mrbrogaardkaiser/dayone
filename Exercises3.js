const cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];


// console.log(cars)


  // Cars newer than 1999
  const newerCars = cars.filter(car=>car.year > 1999);
  console.log("Cars newer than 1999: ");
  console.log(newerCars);

  // All  Volvo’s
  const volvos = cars.filter(car=>car.make==="Volvo");
  console.log("Volvo's: ");
  console.log(volvos);

  // All cars with a price below 5000
  const under5000 = cars.filter(car=>car.price<5000);
  console.log("Cars under 5000: ")
  console.log(under5000);





  