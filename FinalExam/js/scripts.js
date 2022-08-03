function validate() {
	var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
	
    if (name == '') {
		alert('Name cannot be empty!');
        return false;
	} else {
		if (!/^[ ]*[A-Z][a-z]([a-z]|(([ ]+|-)[A-Z]))*[ ]*$/.test(name)) {
			alert('Invalid name!');	
            return false;
		} else {
            if (email == '') {
                alert('Email cannot be empty!');
                return false;
            } else {
                if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
                    alert('Invalid email!');
                    return false;
                } else {
                    alert('Thanks for subscribing!');

                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';

                    return true;
                }
            }
		}
	}
}