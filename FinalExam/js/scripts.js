function validate_user() {
	var userName = document.getElementById('name').value;
	var userSex = document.querySelectorAll('input[name="sex"]');
    var userAge = document.getElementById('age').value;

	if (userName == '') {
		alert('Visitor name must be filled out!');
		return false;
	} else {
		if (!/^[ ]*[A-Z][a-z]([a-z]|(([ ]+)[A-Z]))*[ ]*$/.test(userName)) {
			alert('Invalid name!');
			return false;
		} else {
			document.getElementById('name').value = userName
				.replace(/[ ][ ]+/g, ' ')
				.replace(/(^[ ])|([ ]$)/g, '');

			if (!(userSex[0].checked || userSex[1].checked)) {
				alert('Birth sex must be chosen!');
				return false;
			} else {
                if (userAge < 18 || userAge > 111) {
                    alert('Invalid age!');
                } else {
                    return true;
                }
			}
		}
	}
}

/*
function display() { 
            var checkRadio = document.querySelector(
                'input[name="GFG"]:checked');
              
            if(checkRadio != null) {
                document.getElementById("disp").innerHTML
                    = checkRadio.value
                    + " radio button checked";
            }
            else {
                document.getElementById("disp").innerHTML
                    = "No one selected";
            }
        }
*/

/*
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
*/
