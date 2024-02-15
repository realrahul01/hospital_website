import React from 'react';
import { Button, Space } from 'antd';

const TopMenu = () => {
    const handleSave = () => {
        // Handle save logic
        console.log('Save button clicked');
    };

    const handleDelete = () => {
        // Handle delete logic
        console.log('Delete button clicked');
    };

    return (
        <div style={headerStyle}>
            <div style={rightPharmaStyle}>
                <span>Pharma Nex</span>
            </div>

            <Space>
                <Button type="primary" onClick={handleSave}>
                    New
                </Button>
                <Button type="primary" onClick={handleSave}>
                    Save
                </Button>
                <Button type="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Space>

        </div>
    );
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#FFFF',
};

const rightPharmaStyle = {
    fontWeight: 'bold',
};

export default TopMenu;
