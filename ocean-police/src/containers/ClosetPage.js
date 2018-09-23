import React, {Component} from 'react';
import {connect} from 'react-redux';
import GarmentOption from '../components/GarmentOption';
import {withStyles, AppBar, Toolbar, IconButton, Button, Input, InputAdornment, Grid, ListItemText, Typography, Paper } from '@material-ui/core';
import Search from '@material-ui/icons/Search';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { withRouter } from 'react-router-dom';
import moment from 'moment';
import Add from '@material-ui/icons/Add';
import Hello from '@material-ui/icons/Menu';

const styles = {
  container: {
    margin: "5vw"
  },
  appbar: {
    backgroundColor: '#7A98E7',
  },
  searchSection: {
    margin: "0 0 40px 0",
  },
  paper: {
    marginBottom: '20px',
  },
  happy: {
    borderLeft: '5px solid #7A98E7',
  },
  medium: {
    borderLeft: '5px solid #D8D8D8',
  },
  sad: {
    borderLeft: '5px solid #7D6299',
  },
  add: {
    color: 'white',
  },
  fabButton: {
    position: 'fixed',
    bottom: '50px',
    right: '50px',
    backgroundColor: '#7A98E7',
  }
};

class ClosetPage extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

  }

  render() {
    const {classes} = this.props;
    return (
      <React.Fragment>
        <AppBar position="fixed" className={classes.appbar}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <Hello />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.grow}>
              My Closet
            </Typography>
          </Toolbar>
        </AppBar>
        <div className={classes.container}>
          <Grid container>
            <Grid item xs={12} className={classes.searchSection}>
              <Input
                id="input-with-icon-adornment"
                fullWidth
                placeholder="Search garment"
                startAdornment={
                  <InputAdornment position="start">
                    <Search/>
                  </InputAdornment>
                }
              />
            </Grid>
          </Grid>
          <List>
              {this.props.garmentsArray.sort((item1, item2) => item1.id < item2.id).map(garment => {
                return (
                  <Paper key={garment.id} className={[classes.paper, classes[garment.happiness]].join(' ')}>
                    <ListItem 
                      button
                      onClick={() => this.props.history.push('/result/' +  garment.id)}
                    >
                      <GarmentOption type={garment.type} />
                      <ListItemText primary={garment.name} secondary={moment(garment.dateAdded).format("MMM Do, YY")} />
                    </ListItem>
                  </Paper>
                )
              })}
          </List>
          <Button onClick={() => this.props.history.push('/add')} variant="fab" className={classes.fabButton}>
            <Add className={classes.add}/>
          </Button>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  garmentsArray: Object.values(state.clothings),
});

const mapDispatchToProps = dispatch => ({
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ClosetPage)));
