<?php
	$con = mysql_connect("192.168.9.254","test","123456");
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }

	mysql_select_db("dblog", $con);
	$result = mysql_query("select * from DayUserData");
	
	while($row = mysql_fetch_array($result))
	  {
	  echo $row['date_begin_time'] . " " . $row['new_user_count'];
	  echo "<br />";
	  }

	mysql_close($con);
?>