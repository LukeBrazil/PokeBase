import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard( { pokemon }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={pokemon.sprites.front_default}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
            
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {pokemon.types.map(type => {return <div>{type.type.name}</div>})}
          {pokemon.abilities[0].ability.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}