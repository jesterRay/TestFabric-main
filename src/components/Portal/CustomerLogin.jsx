
const CustomerLogin = ({
                        user, 
                        handleInput, 
                        handleSubmit, 
                        handleTogglePage
}) => {
    return(
        <>
            <div className="portal-form-wrapper">
                <form className="portal-form" onSubmit={handleSubmit}>
                    <h3 className="portal-form-heading">Customer Portal Login</h3>
                    <div className="portal-input-group">
                        <input 
                            name="email" 
                            type="text"  
                            placeholder="Enter email..." 
                            required 
                            value={user.email}
                            onChange={handleInput}
                            />
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Enter password...." 
                            required

                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full text-center my-3">
                        <span>Don't have an account?&nbsp; 
                            <span>
                                <a onClick={()=>{handleTogglePage('signup')}} className="text-primary">
                                    Signup
                                </a> 
                            </span>
                            <span>&nbsp;to create a new account.</span>
                        </span>
                    </div>
                    <div className="portal-form-btn-group">
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </>
    );
}



export default CustomerLogin;