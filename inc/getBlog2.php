<?php
$URL = "http://www.integrated-financial-group.com/RSSRetrieve.aspx?ID=12744&Type=RSS20";
//$xmlPath = "http://www.integrated-financial-group.com/RSSRetrieve.aspx?ID=12744&Type=RSS20";
//$xml = file_get_contents($xmlPath);
//echo $xml;
/*
$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $URL);
curl_setopt($ch, CURLOPT_HEADER, 0);

$json = XML2JSON(curl_exec($ch));
curl_close($ch);

*/
//print_r($output);
//$json = XML2JSON($output);

function xmlToJson($URL){

$fileContents= file_get_contents($URL);

$fileContents = str_replace(array("\n", "\r", "\t"), '', $fileContents);

$fileContents = trim(str_replace('"', "'", $fileContents));

$simpleXml = simplexml_load_string($fileContents);

$json = json_encode($simpleXml);


return $json;

}

$json = xmlToJson($URL);

print $json; 
?>
