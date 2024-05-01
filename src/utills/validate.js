const checkValidateData = (email, password) => {
    console.log("email", email)
    const isEmailValid = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email);
    const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(password);
    if (!isEmailValid) {
        return "Email ID is not valid"
    }
    if (!isPasswordValid) {
        return "Password is not valid"
    }
    return null
}

export { checkValidateData };