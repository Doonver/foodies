const styles = {
    pantryPage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#FFF9DE', // Light green background color
        width: '100%',
        height: '100%',
        paddingTop: '20px', // Add some padding
        fontFamily: 'Roboto, sans-serif', // Change font family for the entire page
        justifyContent: 'space-between',
        minHeight: '60%'
    },
    pageTitle: {
        marginBottom: '20px',
        color: '#FF6969', // Dark green color for the title
        fontSize: '36px', // Increase font size for the title
        fontWeight: 'bold', // Add bold font weight
        textAlign: 'center' // Center align text
    },
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center', // Center items horizontally
        width: '90%', // Set width to 100% to stretch horizontally
        marginTop: '20px', // Add space between pantry title and item boxes
        height: '60%',
        overflow: 'auto',
    },
    itemBox: {
        backgroundColor: '#FFE0C7', // White background color for each item
        borderRadius: '12px', // Add rounded corners
        padding: '20px', // Add more padding around each item
        marginBottom: '20px', // Add more space between items
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a subtle box shadow
        width: '90%', // Set width to 90% to stretch horizontally
        maxWidth: '600px', // Limit maximum width of each item
        fontFamily: 'Roboto, sans-serif', // Change font family
        fontSize: '18px', // Adjust font size
        lineHeight: '1.5', // Increase line height for readability
        display: 'flex', // Use flex display
        justifyContent: 'space-between', // Add space between item text and remove button
        alignItems: 'center' // Center align items vertically
    },
    itemText: {
        flexGrow: 1, // Allow item text to grow
        marginRight: '20px', // Add some space between item text and remove button
        color: '#333' // Dark gray color for item text
    },
    removeButton: {
        color: '#FF9800', // Orange color for remove button
        fontSize: '24px', // Increase font size
        cursor: 'pointer' // Show pointer cursor on hover
    }
};

export default styles;
