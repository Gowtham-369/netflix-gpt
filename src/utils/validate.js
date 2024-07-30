export const checkValidData = (isSignInForm, name, email, password) => {
    if(!isSignInForm){
        const isNameValid = /^[a-zA-Zà-öø-ÿÀ-ÖØ-ß'’-]{2,50}(?: [a-zA-Zà-öø-ÿÀ-ÖØ-ß'’-]{1,50})*$/.test(name);
        if(!isNameValid){
            return "Full Name is not Valid"
        }
    }
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if(!isEmailValid){
        return "Email ID is not Valid"
    }
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$#!%*?&])[A-Za-z\d@$#!%*?&]{8,20}$/.test(password);
    if(!isPasswordValid){
        return "Password is not Valid"
    }
    return null;
}