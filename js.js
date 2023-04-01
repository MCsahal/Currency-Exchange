function convert() {
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;
  
    // make API call to get exchange rate
    const url = `https://api.exchangerate-api.com/v4/latest/${from}`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const rate = data.rates[to];
        const result = amount * rate;
        document.getElementById("result").textContent = `${amount} ${from} = ${result} ${to}`;
      })
      .catch(error => {
        console.error(error);
        document.getElementById("result").textContent = "An error occurred";
      });
  }
  