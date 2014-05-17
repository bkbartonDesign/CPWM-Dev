<?php


$url = "http://www.integrated-financial-group.com/RSSRetrieve.aspx?ID=12744&Type=RSS20";

$ch = curl_init( $url );

curl_setopt( $ch, CURLOPT_CONNECT_ONLY, true);
curl_setopt( $ch, CURLOPT_FOLLOWLOCATION, true );
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, true );
curl_setopt( $ch, CURLOPT_HTTPGET, true );

$result = curl_exec($ch);
$status = curl_getinfo( $ch );

curl_close( $ch );

xmltojson($result);
 	
function xmltojson($data){

	//echo $data;
	$fileContents = str_replace(array("\n", "\r", "\t", "\\"), '', $data);		
	$fileContents = trim(str_replace('"', "'", $fileContents));
	//echo $fileContents;
	//print_r($fileContents);
	$simpleXml = simplexml_load_string($fileContents);
	//print $simpleXml;
	//$simpleXml = str_replace(array("\/"), '', $simpleXml);		
	
	$json = json_encode($simpleXml);
	//$test = urldecode($json);
	//print_r($test);
	print_r($json);

	return $json;
}

?>




