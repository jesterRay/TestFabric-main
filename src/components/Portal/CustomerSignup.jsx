
const CustomerSignup = ({
                        user, 
                        handleInput, 
                        handleSubmit, 
                        handleTogglePage
}) => {
    return(
        <>
            <div className="portal-form-wrapper">
                <form className="portal-form" onSubmit={handleSubmit}>
                    <h3 className="portal-form-heading">Customer Portal Signup</h3>
                    <div className="portal-input-group">
                        {/* first name */}
                        <input 
                            name="first_name" 
                            type="text"  
                            placeholder="Enter first name" 
                            required 
                            value={user.first_name}
                            onChange={handleInput}
                            />
                        {/* last name */}
                        <input 
                            name="last_name" 
                            type="text"  
                            placeholder="Enter last name" 
                            required 
                            value={user.last_name}
                            onChange={handleInput}
                            />
                        {/* company */}
                        <input 
                            name="company" 
                            type="text"  
                            placeholder="Enter company" 
                            required 
                            value={user.company}
                            onChange={handleInput}
                            />
                        {/* phone */}
                        <input 
                            name="phone" 
                            type="text"  
                            placeholder="Enter phone" 
                            required 
                            value={user.phone}
                            onChange={handleInput}
                            />
                        {/* email */}
                        <input 
                            name="email" 
                            type="email"  
                            placeholder="Enter email" 
                            required 
                            value={user.email}
                            onChange={handleInput}
                            />
                            {/* password */}
                        <input 
                            name="password" 
                            type="password" 
                            placeholder="Enter password" 
                            required
                            value={user.password}
                            onChange={handleInput}
                        />
                        {/* confirm password */}
                        <input 
                            name="confirm_password" 
                            type="password" 
                            placeholder="Enter confirm password" 
                            required
                            value={user.confirm_password}
                            onChange={handleInput}
                        />
                    </div>
                    <div className="w-full text-center my-3">
                        <span>Already have an account?&nbsp; 
                            <span>
                                <a onClick={()=>{handleTogglePage('login')}} className="text-primary">
                                    Login
                                </a> 
                            </span>
                            <span>&nbsp;to access your account.</span>
                        </span>
                    </div>
                    <div className="portal-form-btn-group">
                        <button type="submit">Signup</button>
                    </div>
                </form>
            </div>
        </>
    );
}



export default CustomerSignup;