import React from 'react';

interface ButtonProps {
    onClick: () => void;
    label: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, label }) => {
    return (
        <button 
            className='
                bg-blue-500 
                hover:bg-blue-700 
                text-white 
                font-bold 
                text-xl
                py-2 
                px-4 
                rounded-lg
            '
            onClick={onClick}>
            {label}
        </button>
    );
}

export default Button;