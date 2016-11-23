<!DOCTYPE html>
<html>
	<head>
		<title>ESM: Employee System Manager</title>
		<meta charset="utf-8">
		<script type="text/javascript" src="files/js/funct.js"></script>
	</head>
	<body>
		<h3 class="center">ESM: Employee System Manager</h3>
		<br>
        
        <form id = "search" method="POST">
            <label >Manage employee: </label>
			<input type="number" id="ids" name="id">
            <br>
            <div>
                <input type="button" onclick="search(this.form)" value="Search"><input type="button" onclick="delate(this.form)" value="Delete">
                <input type="button" onclick="reset()" value="Reset">
            </div>
        </form>
	</body>
</html>