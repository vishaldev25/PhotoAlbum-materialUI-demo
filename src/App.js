import { Typography, AppBar, Button, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, } from '@mui/material'
import PhotoCamera from "@mui/icons-material/PhotoCamera"


// import useStyles from "./styles"

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const date = new Date().getFullYear()
function App() {
  // const classes = useStyles();
  // console.log(classes)
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCamera />
          <Typography variant='h6' style={{marginLeft: "15px"}}>Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div style={{paddingTop: "50px"}} >
          <Container maxWidth="sm">
            <Typography variant='h3' align='center' color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color = "textSecondary" paragraph>
              Hello this is a photo album so it is net worthy on saying obn te page
            </Typography>
            <div style={{marginTop: "30px"}} >
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant='contained' color='primary'>See my photos</Button>
                </Grid>
                <Grid item>
                  <Button variant='outlined' color='primary'>Secondary Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container maxWidth="md" style={{paddingTop: "30px", paddingBottom: "30px"}}>
          <Grid container spacing={4}>
            {cards.map(each => (
              <Grid item key = {each} xs = {12} sm = {6} md = {4}>
                <Card style={{padding: "10px"}}>
                  <CardMedia
                    image="https://source.unsplash.com/random"
                    title="image title"
                    style={{ height: "200px"}}
                  />
                  <CardContent>
                    <Typography variant='h5' gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      This is media section and you can find the media is here.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
            </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer style={{ backgroundColor: "white", padding: "50px 0" }}>
        <Typography variant = "h6" align='center' gutterBottom>Footer</Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary">
          Something is need to say here
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary">
            Copyright {date}
        </Typography>
      </footer>
    </>
    
  );
}

export default App;
