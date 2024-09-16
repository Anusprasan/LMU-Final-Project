import React, { useEffect ,useState} from 'react'

export default function check() {
   // State to hold form data
   const [userData, setUserData] = useState([]);
   const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
});

useEffect(() => {
    fetch('https://localhost:7270/api/User/GetUserData')  // Replace with your backend endpoint
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();  // Parse the JSON data
        })
        .then(data => {
            setUserData(data);  // Set the fetched data to state
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}, []);  // Empty array ensures this runs only once when the component mounts

// Handle input change
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

// Handle form submission
const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Fetch API call to backend
    fetch('https://localhost:7270/api/User/PostUserData', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        // Handle successful submission
        console.log('Success:', data);
        alert('Form submitted successfully!');
    })
    .catch(error => {
        // Handle errors
        console.error('There was a problem with the fetch operation:', error);
    });
};

return (
    <div>
        <div>
            <h1>User Data</h1>
            {userData.length > 0 ? (
                <ul>
                    {userData.map((user, index) => (
                        <li key={index}>
                            {user.firstName} {user.lastName} - {user.email}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No user data found.</p>
            )}
        </div>
        <h1>Submit Your Details</h1>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    </div>
);
}
