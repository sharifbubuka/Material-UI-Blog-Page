import React from 'react'
import{ AppBar, Toolbar, Typography, Box, Container, Grid } from '@material-ui/core'
import { Pagination } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles'
import Article from './Article'

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: '#fff'
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),
     url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: '500px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem',
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: '3em'
    }
    },
    blogsContainer: {
      paddingTop: theme.spacing(3),
    },
    blogTitle: {
      fontWeight: 800,
      paddingBottom: theme.spacing(3)
    },
    paginationContainer: {
      display: 'flex',
      justifyContent: 'center'
    }
}))

function App() {
  const classes = useStyles()

  return (
    <div className="app">
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Article avatar="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" banner="https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" alt="man smiling" title="React UseContext" />
          <Article avatar="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" banner="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="woman smiling" title="Testing with Jest" />
          <Article avatar="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" banner="https://images.pexels.com/photos/1181253/pexels-photo-1181253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="happy man" title="Github Profile File" />
        </Grid>
        <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box>
      </Container>
    </div>
  );
}

export default App;
