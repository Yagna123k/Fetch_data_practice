const url = "https://those-who-want-hard-apis.vercel.app/"

async function fetchdata(){
    try{
        const response = await axios.get(url);
        const data = response.data

        function displaycities(){
            const citys = data.data.flights[0].results.apdet
            console.log(citys)
        }
        console.log(data)
        const twoflights = data.data.flights
        const flights = []
        twoflights.forEach(item => {

            jarr = item.results.j
            jarr.forEach(item1 => {
                item2 = item1.leg
                item2.forEach(item => {
                    item3 = item.flights
                    item3.forEach(item => {
                        flights.push(item)
                    });
                });
            });
        });

        const from = document.getElementById('from').value
        const to = document.getElementById('to').value

        flights.forEach(flight => {
            if(flight.fr == from && flight.to == to){
                console.log(flight)
            }
        });
        console.log(flights)
        
    }
    catch(err){
        console.log(err.message)
    }

}

fetchdata()

// 1 	 1