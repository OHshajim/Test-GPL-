import React, {useState } from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Checkbox, Collapse } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { departments } from '../Data/Department';

const DepartmentList: React.FC = () => {

    const [expanded, setExpanded] = useState<{ [key: string]: boolean }>({});
    const [selected, setSelected] = useState<{ [key: string]: boolean }>({});

    const handleExpand = (name: string) => {
        setExpanded(prev => ({ ...prev, [name]: !prev[name] }));
    };

    const handleSelect = (name: string, isSub: boolean, parent?: string) => {
        const newSelected = { ...selected, [name]: !selected[name] };

        if (isSub && parent) {
            const allSubSelected = departments
                .find(dep => dep.department === parent)
                ?.sub_departments.every(sub => newSelected[sub]);
            newSelected[parent] = allSubSelected || false;
        } else {
            departments
                .find(dep => dep.department === name)
                ?.sub_departments.forEach(sub => {
                    newSelected[sub] = newSelected[name];
                });
        }

        setSelected(newSelected);
    };

    return (
        <div>
            <h1 className='text-center mb-5 mt-10 font-semibold text-xl'>Select  Department </h1>
            <List>
                {departments.map(dep => (
                    <div key={dep.department}>
                        <ListItem>
                            <ListItemIcon onClick={() => handleExpand(dep.department)}>
                                {expanded[dep.department] ? <ExpandLess /> : <ExpandMore />}
                            </ListItemIcon>
                            <Checkbox
                                checked={selected[dep.department] || false}
                                onChange={() => handleSelect(dep.department, false)}
                            />
                            <ListItemText primary={dep.department} />
                        </ListItem>
                        <Collapse in={expanded[dep.department]} timeout="auto" unmountOnExit>
                            <List component="div" disablePadding>
                                {dep.sub_departments.map(sub => (
                                    <ListItem key={sub} style={{ paddingLeft: '2em' }}>
                                        <Checkbox
                                            checked={selected[sub] || false}
                                            onChange={() => handleSelect(sub, true, dep.department)}
                                        />
                                        <ListItemText primary={sub} />
                                    </ListItem>
                                ))}
                            </List>
                        </Collapse>
                    </div>
                ))}
            </List>
        </div>
    );
};

export default DepartmentList;
