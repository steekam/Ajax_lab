<?php
// Return current date and time from the server
date_default_timezone_set("Africa/Nairobi");
$noon = strtotime("12:00:00");
$evening = strtotime("16:00:00");

if (time() >= $noon && time() < $evening) {
  echo "Good Afternoon, <br>";
}else if (time() < $noon){
    echo "Good Morning, <br>";
} else {
    echo "Good Evening, <br>";
}
echo date("F d, Y H:i:s");

?>