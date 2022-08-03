function validate_user() {
	var userName = document.getElementById('name').value;
	var userSex = document.querySelectorAll('input[name="sex"]');
    var userAge = document.getElementById('age').value;
    var userPhone = document.getElementById('phone').value;

    // 1a. validate user name -> can't be empty
	if (userName == '') {
		alert('Visitor name must be filled out!');
		return false;
	} else {
        // 1b. validate user name -> match the patterns
		if (!/^[ ]*[A-Z][a-z]([a-z]|([ ][A-Z][a-z]))+[ ]*$/.test(userName)) {
			alert('Invalid name!');
			return false;

		} else {
            // remove spaces
			document.getElementById('name').value = userName
				.replace(/[ ][ ]+/g, ' ')
				.replace(/(^[ ])|([ ]$)/g, '');

            // 2. validate user sex
			if (!(userSex[0].checked || userSex[1].checked)) {
				alert('Birth sex must be chosen!');
				return false;

			} else {

                // 3. validate user age
                if (userAge < 18 || userAge > 111) {
                    alert('Invalid age!');

                } else {

                    // 4. validate user phone by following pattern nn-(nnn)-nnn-nnnn
                    // \((?:[^)(]+|(?R))*+\)

                    if (!/^(\d{1,3}-)?\(?\d{3}\)?-\d{3}-\d{4}$/.test(userPhone)) {
                        alert('Invalid phone number!');
                        return false;

                    } else {
                        // submit if it's ok
                        return true;
                    }
                }
			}
		}
	}
}
