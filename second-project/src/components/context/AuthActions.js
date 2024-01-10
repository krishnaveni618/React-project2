export const LoginStart = (usercredentials) =>({
    type:"Login_Start",
});

export const LoginSuccess = (user) =>({
    type:"Login_Success",
    payload:user,
});

export const Login_Failure = (error) =>({
    type:"Login_Failure",
    payload:error,
})