const btn = document.getElementById("mybtn");
const input_cityName = document.getElementById("input_cityName");

//for restutls 
const result = document.querySelector('.result-container')

const cityName = document.createElement('p')
const tamp = document.createElement('p')
const humidity = document.createElement('p')
const wind_speed = document.createElement('p')
const clouds = document.createElement('p')

const err = document.createElement('p')

cityName.classList.add("cityName")
tamp.classList.add("temp")
humidity.classList.add("humidity")
wind_speed.classList.add("wind_speed")
clouds.classList.add("clouds")
err.classList.add("error")

btn.addEventListener("click", clickbn);

async function clickbn(event) {
    event.preventDefault();

    // Clear previous results
    result.innerHTML = "";

    const value = input_cityName.value.trim();
    const correct_value = value.toLowerCase();


    if (pakistanCitiesLower.includes(correct_value)) {
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${correct_value}&appid=b37ac3ee68e89d9f5fc585d278a2686e`;

        try {
            const res = await fetch(URL);
            const data = await res.json();

            // Fill data
            cityName.innerHTML = `City: ${data.name}`;
            tamp.innerHTML = `Temperature: ${(data.main.temp - 273.15).toFixed(1)}°C`;
            humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
            wind_speed.innerHTML = `Wind Speed: ${data.wind.speed} m/s`;
            clouds.innerHTML = `Weather: ${data.weather[0].main}`;

            // Append results
            result.append(cityName, tamp, humidity, wind_speed, clouds);

        } catch (error) {
            console.log("Error fetching weather:", error);
        }
    } else {
        err.innerHTML = "Please enter a correct city name!";
        result.append(err);
    }
}



const pakistanCities = [
    "Abbottabad", "Abdul Hakeem", "Achh", "Adezai", "Ahmedpur East", "Ahmadpur Sial", "Ajnala", "Akora Khattak",
    "Aliabad", "Alipur", "Amir Chah", "Arifwala", "Attock", "Awaran", "Ayubia", "Baden", "Badin", "Bagh",
    "Bahawalnagar", "Bahawalpur", "Bannu", "Batkhela", "Bela", "Bhalwal", "Bhakkar", "Bhimber", "Birote",
    "Burewala", "Chak Jhumra", "Chakwal", "Chaman", "Charsadda", "Chichawatni", "Chiniot", "Chitral", "Dadu",
    "Daska", "Darya Khan", "Dera Bugti", "Dera Ghazi Khan", "Dera Ismail Khan", "Dera Murad Jamali", "Digri",
    "Dina", "Dinga", "Faisalabad", "Fateh Jang", "Gakhar Mandi", "Ghakhar Mandi", "Ghotki", "Gojra", "Gujranwala",
    "Gujrat", "Gwadar", "Hafizabad", "Hangu", "Haripur", "Harnai", "Hasilpur", "Havelian", "Haveli", "Hub",
    "Hunza", "Hyderabad", "Islamabad", "Jacobabad", "Jahanian", "Jalalpur Jattan", "Jamshoro", "Jampur",
    "Jaranwala", "Jatoi", "Jauharabad", "Jhang", "Jhelum", "Kallar Kahar", "Kamalia", "Kamoke", "Karachi",
    "Karak", "Kasur", "Khairpur", "Khairpur Nathan Shah", "Khanewal", "Khanpur", "Khaplu", "Kharan", "Kharian",
    "Khushab", "Khuzdar", "Kohat", "Kot Addu", "Kotli", "Kotri", "Kundian", "Lahore", "Lakki Marwat", "Lalamusa",
    "Larkana", "Layyah", "Lodhran", "Loralai", "Mandi Bahauddin", "Mangla", "Mansehra", "Mardan", "Mastung",
    "Mian Channu", "Mianwali", "Mingora", "Mirpur", "Mirpur Khas", "Mithi", "Moro", "Multan", "Murree",
    "Muzaffarabad", "Muzaffargarh", "Nankana Sahib", "Narang Mandi", "Narowal", "Naseerabad", "Naushahro Feroze",
    "Nawabshah", "New Mirpur", "Nowshera", "Okara", "Pakpattan", "Pano Aqil", "Pasni", "Pattoki", "Peshawar",
    "Phalia", "Pind Dadan Khan", "Pindi Bhattian", "Quetta", "Raiwind", "Rajanpur", "Rakhni", "Ranipur",
    "Rawalakot", "Rawalpindi", "Renala Khurd", "Sadiqabad", "Safdarabad", "Sahiwal", "Sanghar", "Sangla Hill",
    "Sargodha", "Shahdadkot", "Shahdadpur", "Shahkot", "Shakargarh", "Sheikhupura", "Shikarpur", "Shujaabad",
    "Sialkot", "Sibi", "Skardu", "Sukkur", "Swabi", "Swat", "Tando Adam", "Tando Allahyar", "Tando Jam",
    "Tando Muhammad Khan", "Tank", "Tarbela", "Toba Tek Singh", "Turbat", "Umerkot", "Vehari", "Wah Cantt",
    "Wazirabad", "Zhob", "Ziarat",
    // Additional smaller towns & cities
    "Ali Pur Chattha", "Athara Hazari", "Baffa", "Bakhar", "Balloki", "Bandhi", "Banni", "Bhiria", "Bhit Shah",
    "Burewala", "Chak 44", "Chak 99", "Chak 106", "Chak 116", "Chak 159", "Chak Jhumra", "Chichawatni",
    "Chishtian", "Dajal", "Dargai", "Darya Khan", "Daur", "Dhaular", "Dijkot", "Dina City", "Dinga", "Dokri",
    "Fatehpur", "Ferozwala", "Gambat", "Garhi Khairo", "Ghakhar Mandi", "Gujar Khan", "Gujranwala",
    "Gujarwala", "Hafizabad", "Haripur", "Hasilpur", "Hingorja", "Hujra Shah Muqeem", "Islamkot", "Jaccobabad",
    "Jahanian Shah", "Jalalpur Pirwala", "Jampur", "Jaranwala", "Jati", "Jatoi", "Jhang Sadr", "Jhelum City",
    "Johi", "Kabirwala", "Kandiaro", "Kandi", "Kanganpur", "Karak", "Karaundi", "Kashmor", "Kasur", "Khairpur",
    "Khairpur Nathan Shah", "Khanpur", "Khanewal", "Khuzdar", "Khyber", "Kot Addu", "Kotli Loharan", "Kotri",
    "Kundian", "Lahore Cantt", "Layyah", "Lodhran", "Loralai", "Mach", "Mailsi", "Mandi Bahauddin", "Mansehra",
    "Mardan", "Mastung", "Matli", "Mian Channu", "Mianwali", "Mingora", "Mirpur Khas", "Moro", "Mubarakpur",
    "Muridke", "Mushkaf", "Muzaffargarh", "Nankana Sahib", "Narowal", "Nawabshah", "Nowshera Cantt", "Okara",
    "Pakpattan", "Pano Aqil", "Pasni City", "Pattoki", "Peshawar City", "Phalia", "Pindi Bhattian", "Qambar",
    "Qila Saifullah", "Qila Abdullah", "Quetta", "Rahim Yar Khan", "Raiwind", "Rajanpur", "Rawalakot",
    "Rawalpindi", "Renala Khurd", "Sadiqabad", "Safdarabad", "Sahiwal", "Sanghar", "Sangla Hill", "Sargodha",
    "Shahdadkot", "Shahdadpur", "Shahkot", "Shakargarh", "Sheikhupura", "Shikarpur", "Shujaabad", "Sialkot",
    "Sibi", "Skardu", "Sukkur", "Swabi", "Swat", "Tando Adam Khan", "Tando Allahyar", "Tando Jam", "Tando Muhammad Khan",
    "Tank", "Tarbela", "Toba Tek Singh", "Turbat", "Umerkot", "Vehari", "Wah Cantt", "Wazirabad", "Zhob", "Ziarat"
];

const pakistanCitiesLower = pakistanCities.map(city => city.trim().toLowerCase());
