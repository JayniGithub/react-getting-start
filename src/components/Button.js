const btnStyling = {
    padding: '12px 20px',
    background: '#39a7ee',
    fontSize: '14px',
    border: 'none',
    borderRadius: '15px',
    cursor: 'pointer'
}

const clickHandler = () => {
    console.log('Hi Rubaya...');
}

function Button () {
    return (
        <>
            <button style={btnStyling} onClick={clickHandler}>Click Me</button>
        </>
    )
}

export default Button;