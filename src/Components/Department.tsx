import { Checkbox, List, ListItem, ListItemText, ListItemIcon } from '@mui/material';

const departments = [
    {
        department: "customer service",
        sub_departments: [
            "support",
            "customer success"
        ]
    },
    {
        department: "design",
        sub_departments: [
            "graphic design",
            "product design",
            "web design"
        ]
    }
]
const Department = () => {

    return (
        <div>
            <h1 className='text-center mt-10 font-semibold text-xl'>Select  Department </h1>
            <List>
                {departments.map(dep => (
                    <div key={dep.department}>
                        <ListItem>
                            <ListItemIcon >
                                {/* {expanded[dep.name] ? <ExpandLessIcon /> : <ExpandMoreIcon />} */}
                            </ListItemIcon>
                            <Checkbox
                            // checked={selected[dep.name] || false}
                            // onChange={() => handleSelect(dep.name, false)}
                            />
                            <ListItemText primary={dep.department} />
                        </ListItem>
                        {/* {expanded[dep.name] && dep.subDepartments.map(sub => (
                        <ListItem key={sub.name} style={{ paddingLeft: '2em' }}>
                            <Checkbox
                                checked={selected[sub.name] || false}
                                onChange={() => handleSelect(sub.name, true, dep.name)}
                            />
                            <ListItemText primary={sub.name} />
                        </ListItem>
                    ))} */}
                    </div>
                ))}
            </List>
        </div>
    );
};

export default Department;