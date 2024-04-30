const styles = {
    profilePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#FFF9DE', // Light green background color
        width: '100%',
        height: '100%',
    },
    profileBox: {
        backgroundColor: '#FF6969', // Dark green color for profile box
        padding: '20px', // Add padding inside the profile box
        borderRadius: '12px', // Add rounded corners
        width: 'calc(100% - 40px)', // Fit to the rectangle width wise
        marginTop: '0', // Start from the top
        marginBottom: '20px', // Increase margin bottom to push other content downwards
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center align horizontally
        justifyContent: 'flex-end', // Align content at the bottom
    },
    profileImg: {
        width: '100px', // Decrease profile pic size
        height: '100px', // Decrease profile pic size
        borderRadius: '50%',
        marginTop: 'auto', // Align the profile image at the bottom of the red rectangle
    },
    profileName: {
        fontSize: '40px', // Increase font size for name
        color: '#FF6969', // White color for name
        marginTop: '10px', // Add margin top to separate name from profile image
    },
    profileDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Left justify horizontally
        width: '90%', // Ensure full width
    },
    detailText: {
        marginBottom: '10px',
        color: '#FF6969', // Red color for detail text
    },
    textField: {
        borderRadius: '4px',
        width: '60%', // Decrease width of text fields
        margin: '10px',
        backgroundColor: '#FFD3B0', // Set background color of text fields to #FFD3B0
    },
    chip: {
        marginRight: '5px', // Add margin to the right of the chip
        marginBottom: '5px', // Add margin to the bottom of the chip
        backgroundColor: '#FFD3B0', // Set background color of chips to #FFD3B0
    },
    dietaryRestrictions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    checkboxLabel: {
        marginBottom: '5px',
        color: '#FF6969', // Red color for checkbox labels
    },
};

export default styles;
