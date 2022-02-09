import * as React from 'react';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';



const CartWidget = () => {
    return (
        <Badge badgeContent={1} color="warning">
            <ShoppingCartOutlinedIcon className="ShoppingCartOutlinedIcon"/>
        </Badge>
    );
}

export default CartWidget;