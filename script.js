function Convert()
  {
  	var Celcius = document.form.Celcius.value;
  	var Fahrenheit = document.form.Fahrenheit.value;
  	var bagi =9/5;
  	document.form.Fahrenheit.value=eval(Celcius)*bagi+32;
  }