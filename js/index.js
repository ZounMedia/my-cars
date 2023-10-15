$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".navbar").addClass("scrolled");
      $(".navbar .navbar-brand").addClass("scrolled");
      $(".navbar #navbarNav ul li a").addClass("scrolled");
    } else {
      $(".navbar").removeClass("scrolled");
      $(".navbar .navbar-brand").removeClass("scrolled");
      $(".navbar #navbarNav ul li a").removeClass("scrolled");
    }
  });

  // Example usage:
  const carService = new CarService();
  console.log(carService);

  // Fetch all cars and render them
  carService
    .getAllCars()
    .done((cars) => {
      console.log(cars);
      carService.renderCars(cars);
    })
    .fail((error) => {
      console.log("Error fetching cars:", error);
    });

  // To create a new car (example data provided)
  // carService.createCar({ name: 'New Car', imgUrl: 'url_here', details: 'Car details here' });

  // To update a car with ID 1 (example data provided)
  // carService.updateCar(1, { name: 'Updated Car Name' });

  // To delete a car with ID 1
  // carService.deleteCar(1);
});
