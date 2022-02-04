import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="primary">
            <ShoppingCartOutlinedIcon color="secondary"/>
        </Badge>
    );
}

export default CartWidget;