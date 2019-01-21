function ajaxRequest()
{
            var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {

        if (this.readyState == 4 && this.status == 200) {

            document.getElementById('ville').innerHTML = this.responseText;

            console.log(this.responseText);
            var ville = this.responseText;      }
            var weather = JSON.parse(ville);
        document.getElementById('ville').innerHTML = weather.name ;
            var unixtimestamp = weather.dt;
            var months_arr = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
            var date = new Date(unixtimestamp*1000);
            var year = date.getFullYear();


        // Month
            var month = months_arr[date.getMonth()];
        // Day
            var day = date.getDate();
        // Hours
            var hours = date.getHours();
        // Minutes
            var minutes = "0" + date.getMinutes();
        // Seconds
            var seconds = "0" + date.getSeconds();
        // Display date time in MM-dd-yyyy h:m:s format
            var convdataTime = month+'-'+day+'-'+year+' '+hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                document.getElementById('date').innerHTML = convdataTime;
                document.getElementById('temperature').innerHTML = weather.main.temp + "°C";
                document.getElementById('temp_max').innerHTML = weather.main.temp_max + "°C";
                document.getElementById('temp_min').innerHTML = weather.main.temp_min + "°C";
                document.getElementById('pression').innerHTML = weather.main.pressure + "Pa";
                document.getElementById('vent').innerHTML = weather.wind.speed*3.6 + "km/h";
                document.getElementById('humidite').innerHTML = weather.main.humidity + "%";
                document.getElementById('longitude').innerHTML = weather.coord.lon + " °";
                document.getElementById('lattitude').innerHTML = weather.coord.lat + " °";
    };

    xhttp.open("GET", "index.php", true);

    xhttp.send();


}
ajaxRequest();



