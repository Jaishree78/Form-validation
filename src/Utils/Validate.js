export function Validate(values){
    let error={}

    if(!values.username.trim()){
        error.username="Username is required"
    }
    if(!values.email.trim()){
        error.email="Email required"
    }else if(!/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/.test(values.email)){
        error.email="Email address is invalid"
    }
    if(!values.password.trim()){
        error.password="Password is required"
    }else if(values.password.length<6){
        error.password="Password need to be 6 characters or more"
    }
    if(!values.password2.trim()){
        error.password2="Confirm password is required"
    }else if(values.password!=values.password2){
        error.password2="password do not match"
    }
    return error
}