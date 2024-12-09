import { useState } from "react";
import './Form.css';

const Form = () => {
    const [inputValue, setInputValue] = useState({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
    });

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); // Toggle to show user info
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputValue((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleReset = () => {
        setInputValue({
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
        });
        setIsSubmitted(false); 
    };

    return (
        <>
            {!isSubmitted ? (
                <form onSubmit={handleSubmit}>
                    <h1>Welcome!</h1>
                    <p>Please provide your information below</p>
                    <input
                        name="firstName"
                        type="text"
                        placeholder="First Name"
                        value={inputValue.firstName}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        name="lastName"
                        type="text"
                        placeholder="Last Name"
                        value={inputValue.lastName}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        name="phone"
                        type="number"
                        placeholder="Phone Number"
                        value={inputValue.phone}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <input
                        name="email"
                        type="email"
                        placeholder="Email Address"
                        value={inputValue.email}
                        onChange={handleChange}
                    />
                    <br />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            ) : (
                <div className="userInfo">
                    <h1>Thank You for Submitting!</h1>
                    <h2>{inputValue.firstName},{inputValue.lastName}</h2>
                    <h2> {inputValue.phone}|{inputValue.email}</h2>
                    <button onClick={handleReset}>Reset</button>
                </div>
            )}
        </>
    );
};

export default Form;
