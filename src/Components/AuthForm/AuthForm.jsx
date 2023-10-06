export default function AuthForm({
    buttonText,
    handleSubmit,
    username,
    setUsername,
    password,
    setPassword,
}) {
  return (  
    <form onSubmit= {(e) => handleSubmit (e)}>
    <label htmlFor= "username"> Username</label>
    <br></br>
    <br></br>
    <label htmlFor="password"> Password</label>
    <input
       type="password"
       id="password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
    />
    <br></br>
    <br></br>
    <button Type="submit">{buttonText}</button>
    <br></br>
    <br></br>
    <br></br>  
    {buttonText === "Login" && (
        <div>
        <a href="#">
          Dont have an account? <span>Register</span>
        </a>
        </div>
    )}
    </form>
);
}