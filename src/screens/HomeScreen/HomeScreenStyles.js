const styles = {
  homeScreen: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    overflow: 'auto',
    marginTop: '20px',
    justifyContent: 'space-between',
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
  },
  scrollable: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'column',
    backgroundColor: '#FFF9DE',
    height: '100%',
  },
  searchBar: {
    borderRadius: '4px',
    width: '90%',
    margin: '10px'
  },
  avatar: {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '90%'
  },
  image: {
    maxWidth: "100%",
    margin: "10px 0 20px 0",
    height: '29%'
  },
  bottomGroup: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    justifyContent: 'flex-end',
    margin: '20px'
  },
  sugarLevel: {
    display: 'flex'
  }
};

export default styles;