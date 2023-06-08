

//save user in mongodb
export const saveUserToDb = (user) => {
    const currentUser = {
        email: user?.email,
        photo: user?.photoURL,
        name:user?.displayName
    }
    fetch(`http://localhost:5000/users/${user?.email}`, {
        method: 'PUT',
        headers: {
            'content-type' : 'application/json'
        },
        body:JSON.stringify(currentUser)
    }).then(res => res.json())
        .then(data => {
        console.log(data);
    })
}






    
    
 