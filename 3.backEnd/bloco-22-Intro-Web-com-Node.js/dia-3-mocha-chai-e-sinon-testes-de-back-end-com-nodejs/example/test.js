const main = ({email, password}) => {
    if ( (!email || !password) || (email.length < 5 || password.length < 5) ) false;
    return true;
};

console.log(main({ 
        email: 'asdhaskjdha',
        password: 'asdasdadssa' }))
