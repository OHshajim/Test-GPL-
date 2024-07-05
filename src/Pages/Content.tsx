import { DataGrid } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';
import Department from '../Components/Department';
// import DataGrid from"@mui/"
const Content = () => {
    const [data, setData] = useState([]);
    const user = localStorage.getItem('user') || ""
    if (user=="") {
        window.location.href = '/';
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(data=>setData(data))
            // .catch(error => console.error(error));
    }, []);
    console.log(data);
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'Title', width: 130 },
        { field: 'body', headerName: 'Body', width: 230 },
    ];
    return (
        <div className='my-10 max-w-7xl mx-auto'>
            {/* table */}
            <h1 className='text-center mb-5 font-semibold text-xl'>Select  Department </h1>
            <div style={{ height: 400, width: '100%' }}>
                <DataGrid rows={data} columns={columns} />
            </div>
            
            {/* Task 4 Component will go here */}
            <Department/>
        </div>
    );
};

export default Content;