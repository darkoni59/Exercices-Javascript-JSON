<?php
/**
 * Created by PhpStorm.
 * User: Administrateur
 * Date: 21/01/2019
 * Time: 11:41
 */

$ville=(isset($_GET['ville'])? $_GET['ville']:null);

$ch = curl_init();

// configuration des options
curl_setopt($ch, CURLOPT_URL, "http://api.openweathermap.org/data/2.5/weather?q=".$ville."&units=metric&APPID=994a373e8c79077d295b50d7884a4f4d");
curl_setopt($ch, CURLOPT_HEADER, 0);

// exécution de la session
curl_exec($ch);

// fermeture des ressources
curl_close($ch);


echo  json_encode($ch);
