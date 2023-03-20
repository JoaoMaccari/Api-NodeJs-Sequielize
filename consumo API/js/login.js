function login(){
    var emailField = document.getElementById('email');
    var passwordField = document.getElementById('password')

    var email = emailField.value;
    var password = passwordField.value

    axios.post("http://localhost:8080/auth",{
        email,
        password
    }).then(res =>{
        var token = res.data.token
        console.log(res.data)
        localStorage.setItem("token", token)
        
    }).catch(err =>{
        alert('invalido')
    })

}

var axiosConfig ={
    headers: {
        Authorization :'Bearer '+localStorage.getItem('token')
    }
}