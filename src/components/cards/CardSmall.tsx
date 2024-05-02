import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


// Интерфейс для данных, передаваемых в компонент
interface CardData {
  id: number;
  title: string;
  price: number;
  image: string;
}

// Пропсы компонента CardSmall
interface CardSmallProps {
  item: CardData;
}

// Компонент CardSmall с типизированными пропсами
const CardSmall: React.FC<CardSmallProps> = ({ item }) => (
  <Card sx={{ maxWidth: 345, height: '100%' }}>
    <CardMedia
      sx={{ height: 290 }}
      image={item.image}
      title="product card small"
    />
    <CardContent >
      <Typography gutterBottom variant="h5" component="div">
        {item.title}
      </Typography>
      <Typography gutterBottom variant="h5" component="div">
        {item.price}
      </Typography>
    </CardContent>
  </Card>
);
  export default CardSmall;
