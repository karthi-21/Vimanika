<?php

    $username   = $_GET['un'];
    $count      = isset($_GET['count']) ? (int)$_GET['count'] : 20;
    $return     = array();
    $data       = json_decode(file_get_contents_curl("https://www.instagram.com/$username/?__a=1"));
    
    #echo '<pre>';
    foreach($data as $k => $v){

        #print_r($v);echo '<hr>';
        foreach($v as $imageNumber => $val){
            if($imageNumber == 'media'):
                foreach($val->nodes as $z => $f){
                    $return[$z]['id']               = $f->id;
                    $return[$z]['display_src']      = $f->display_src;
                    $return[$z]['date']             = $f->date;
                    $return[$z]['thumbnail']        = $f->thumbnail_src;
                    $return[$z]['link']             = "https://www.instagram.com/p/".$f->code."/?taken-by=".$username;

                    $return[$z]['image_150']          = $f->thumbnail_resources[0]->src;
                    $return[$z]['image_240']          = $f->thumbnail_resources[1]->src;
                    $return[$z]['image_320']          = $f->thumbnail_resources[2]->src;
                    $return[$z]['image_480']          = $f->thumbnail_resources[3]->src;
                    $return[$z]['image_640']          = $f->thumbnail_resources[4]->src;

                    $return[$z]['height']              = (int)$f->dimensions->height;
                    $return[$z]['width']              = (int)$f->dimensions->width;
                    $return[$z]['comments']              = (int)$f->comments->count;
                    $return[$z]['likes']              = (int)$f->likes->count;
                    #print_r($val); echo "<hr />";
                }
            endif;
        }
    }

    $return = array_slice($return, 0, $count);
    echo json_encode($return);
    #print_r($return);

    function file_get_contents_curl($url, $retries=5){
      $ua = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';
      if (extension_loaded('curl') === true)
      {
          $ch = curl_init();
          curl_setopt($ch, CURLOPT_URL, $url); // The URL to fetch. This can also be set when initializing a session with curl_init().
          curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE); // TRUE to return the transfer as a string of the return value of curl_exec() instead of outputting it out directly.
          curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5); // The number of seconds to wait while trying to connect.
          curl_setopt($ch, CURLOPT_USERAGENT, $ua); // The contents of the "User-Agent: " header to be used in a HTTP request.
          curl_setopt($ch, CURLOPT_FAILONERROR, TRUE); // To fail silently if the HTTP code returned is greater than or equal to 400.
          curl_setopt($ch, CURLOPT_FOLLOWLOCATION, TRUE); // To follow any "Location: " header that the server sends as part of the HTTP header.
          curl_setopt($ch, CURLOPT_AUTOREFERER, TRUE); // To automatically set the Referer: field in requests where it follows a Location: redirect.
          curl_setopt($ch, CURLOPT_TIMEOUT, 5); // The maximum number of seconds to allow cURL functions to execute.
          curl_setopt($ch, CURLOPT_MAXREDIRS, 5); // The maximum number of redirects
          $result = trim(curl_exec($ch));
          curl_close($ch);
      }
      else
      {
          $result = trim(file_get_contents($url));
      }
      if (empty($result) === true)
      {
          $result = false;
          if ($retries >= 1)
          {
              sleep(1);
              return file_get_contents_curl($url, --$retries);
          }
      }
      return $result;
    }
