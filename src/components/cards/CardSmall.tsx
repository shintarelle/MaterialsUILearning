import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';


// Интерфейс для данных, передаваемых в компонент
export interface CardData {
  id: number;
  title: string;
  price: number;
  image: string;
  collection?: string;
  gender: string;
  category: string;
  color: string;
  rating: number;
}

// Пропсы компонента CardSmall
interface CardSmallProps {
  item: CardData;
}

// Компонент CardSmall с типизированными пропсами
const CardSmall: React.FC<CardSmallProps> = ({ item }) => (
  <Card sx={{  height: '100%', display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ padding: '8px', marginBottom: '10px' }}>
      <img src={item.image} alt="Product" style={{ maxWidth: '100%', height: 'auto', borderRadius: '12px' }} />
    </Box>
    <CardContent
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexGrow: '1',
        gap: 2,
        padding: '16px 24px',
      }}
    >
      <Typography variant="subtitle2" noWrap sx={{ flexGrow: '1' }}>
        <Link
          href={`/dashboard/one/${item.id}`}
          underline="hover"
          sx={{ cursor: 'pointer' }}
          color="inherit"
        >
          {item.title}
        </Link>
      </Typography>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ width: '16px', height: '16px', bgcolor: item.color }}> </Avatar>
        <Typography gutterBottom variant="h6" component="div">
          {item.price}
        </Typography>
      </Stack>
    </CardContent>
  </Card>
);
  export default CardSmall;
