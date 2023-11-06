function ToggleModel() {
    let darkModeOn = true;
    const darkMode = <h1>Dark Mode is On</h1>
    const lightMode = <h1>Light Mode is On</h1>

    const modeBtn = {
        padding: '12px 25px',
        background: '#f875aa',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontSize: '14px'
    }

    const toggleHandler = () => {
        darkModeOn = !darkModeOn
        if (darkModeOn) {
            console.log('Dark Mode is on');
        } else {
            console.log('Light Mode is on');
        }
    }

    return (
        <div>
            {darkModeOn ? darkMode : lightMode}
            <button style={modeBtn} onClick={toggleHandler}>Click Me</button>
        </div>
    )
}

export default ToggleModel;