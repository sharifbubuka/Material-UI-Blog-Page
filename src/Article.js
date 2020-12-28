import React from 'react'
import { Grid, Card, CardActionArea, CardContent, CardActions, CardMedia, Typography, Box, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder'

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 240
  },
  cardActions: {
    display: 'flex',
    margin: '0 10px',
    justifyContent: 'space-between'
  },
  author: {
    display: 'flex'
  }
}))

function Article({avatar, banner, alt, title}) {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            component="img"
            alt={alt}
            height="140"
            image={banner}
            title={alt}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.cardActions}>
          <Box className={classes.author}>
            <Avatar src={avatar} />
            <Box ml={2}>
              <Typography variant="subtitle2" component="p">Bubuka Sharif</Typography>
              <Typography variant="subtitle2" color="textSecondary" component="p">May 14, 2020</Typography>
            </Box>
          </Box>
          <Box>
            <BookmarkBorderIcon />
          </Box>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default Article
