const styles = {
  loginText: {
    margin: '20px',
    color: '#FF6969', // Updated login text color
    fontSize: '22px', // Default font size for login text
  },
  welcomeText: {
    marginTop: '10px',
    color: '#FF6969', // Font color same as login text color
    fontSize: '30px', // Default font size for welcome text
  },
  textField: {
    width: '70%',
    margin: '10px',
    backgroundColor: '#FFD3B0', // Updated background color for text fields
   
  },
  loginScreen: {
    position: 'relative',
    display: 'flex',
    backgroundColor: '#FFF9DE',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    padding: '20px',
  },
  imageContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: 'calc(20vh - 40px)', // Adjusted height to end just above the text (30vh - top and bottom margin)
    zIndex: -1,
  },
  submitButton: {
    width: '40%',
    height: '5%',
    backgroundColor: '#FF6969',
    borderRadius: '10px',
    marginTop: '20px',
  }
};

export default styles;
