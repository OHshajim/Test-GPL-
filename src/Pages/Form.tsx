import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

const Form = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    console.log(email);

    const handleSubmit = () => {

        if (name && phone && email) {
          localStorage.setItem('user', JSON.stringify({ name, phone, email }));
          window.location.href = '/content';
        } else {
          setError('Please fill in all fields');
        }
    };
    return (
        <div className="mt-20">
            <div className="flex flex-col" style={{ display: "flex", flexDirection: "column", gap: "15px", maxWidth: "1400px", margin: "auto", width: "full" }}>
                <Typography variant="h4" >User Information</Typography>
                <TextField label="Name" onChange={(e) => setName(e.target.value)} />
                <TextField label="Phone Number" onChange={(e) => setPhone(e.target.value)} />
                <TextField label="Email" onChange={(e) => setEmail(e.target.value)} />
                <Button onClick={handleSubmit}>Submit</Button>
                {error && <Typography color="error">{error}</Typography>}
            </div>
        </div>
    );
};

export default Form;