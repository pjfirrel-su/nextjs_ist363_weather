const colors = [
    {
        name: "red",
        value: "#ff0000",
    }
]

const ColorPicker = () => {
    return <div style={{
        backgroundColor: colors[0].value,
    }}>Color Picker</div>;
};
export default ColorPicker;