const styles = {
  homeScreen: {
    display: 'flex',
    backgroundColor: '#D9EDBF',
    alignItems: 'center',
    flexDirection: 'column',
    width: '100%',
    maxHeight: '90%',
    overflow: 'auto',
    
  },
  heading: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '80%',
    margin: '20px',
  },
  scrollable: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: 'column',
    backgroundColor: '#D9EDBF',
    height: '100%',
  },
  searchBar: {
    borderRadius: '4px',
    width: '90%',
    margin: '10px'
  },
  recipeList: {
    maxHeight: 700, 
    overflow: 'auto',
  },
  list: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  }
};

export default styles;