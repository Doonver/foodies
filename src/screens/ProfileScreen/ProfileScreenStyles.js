const styles = {
    profilePage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#D9EDBF', // Light green background color
        width: '100%',
        height: '100%',
    },
    profileBox: {
        backgroundColor: '#90D26D', // Light green color for profile box
        padding: '20px', // Add padding inside the profile box
        borderRadius: '12px', // Add rounded corners
        margin: '10px', // Add space below the profile box
        width: '75%' ,// Set width to cover 1/4th of the page
        height:'200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center align horizontally
        justifyContent: 'center' // Center align vertically
    },
    profileInfo: {
        display: 'flex',
        flexDirection: 'row', // Change to row to align name to the right
        alignItems: 'center',
        justifyContent: 'center' // Center align horizontally
    },
    profileImg: {
        width: '100px', // Decrease profile pic size
        height: '100px', // Decrease profile pic size
        borderRadius: '50%',
        marginRight: '20px' // Add space between profile pic and name
    },
    profileName: {
        fontSize: '40px', // Increase font size for name
        color: '#2C7865' // Dark green color for name
    },
    profileDetails: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start', // Left justify horizontally
        width: '90%' // Ensure full width
    },
    detailText: {
        marginBottom: '10px',
        color: '#2C7865' // Dark green color for detail text
    },
    textField: {
        borderRadius: '4px',
        width: '60%', // Decrease width of text fields
        margin: '10px',
        backgroundColor: '#FFFFFF' // White background color for text fields
    },
    dietaryRestrictions: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    checkboxLabel: {
        marginBottom: '5px',
        color: '#333' // Dark gray color for checkbox labels
    }
};

export default styles;
