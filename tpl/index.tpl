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
			<input type="number" id="ids" name="ids">
            <br>
            <div>
                <input type="button" onclick="searchEmp(this.form)" value="Search">
                <input type="button" onclick="deleteEmp(this.form)" value="Delete">
                <input type="button" onclick="reset()" value="Reset">
            </div>
        </form>
        <form id = "form" method="POST">
			<div id="employee">
				<br>
				<label> Employee ID: </label><br>
				<input type="number" id="id" name="id" value="(:id:)"><br>
				<label for="name">Name:</label><br>
				<input type="text" id="name" name="name" value="(:name:)"><br>
				<label for="surname">Surname:</label><br>
				<input type="text" id="surname" name="surname" value="(:surname:)"><br>
				<label for="level">Level:</label><br>
				<input type="number" id="level" name="level" value="(:level:)"><br>
				<label for="salary">Salary:</label><br>
				<input type="number" id="salary" name="salary" value="(:salary:)"><br>
				<input type="button" onclick="addEmp(this.form)" value="Send data">
				<input type="button" onclick="reset()" value="Reset">
			</div>
		</form>
	</body>
</html>