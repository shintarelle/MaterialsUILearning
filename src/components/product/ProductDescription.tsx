import React from 'react'

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';


interface FlexListProps {
  items: string[];
}

function FlexList({ items }: FlexListProps) {
  return (
    <List style={{ display: 'flex', flexDirection: 'row', gap: '8px', padding: '0px' }}>
      {items.map((item, index) => (
        <ListItem key={index} sx={{ width: '240px', p: '0px' }}>
          {item}
        </ListItem>
      ))}
    </List>
  );
}
function ProductDescription() {
  return (
    <>
      <Typography variant="h6">Specifications</Typography>
      <Box sx={{ height: 16 }} />
      <FlexList items={['Category', 'Shoes']} />
      <Box sx={{ height: 16 }} />
      <FlexList items={['Manufacturer', 'Nike']} />
      <Box sx={{ height: 16 }} />
      <FlexList items={['Serial Number', '358607726380311']} />
      <Box sx={{ height: 16 }} />
      <FlexList items={['Ships From ', 'United States']} />
      <Box sx={{ height: 16 }} />
      <Box sx={{ height: 16 }} />
      <Typography variant="h6">Product Details</Typography>
      <Box sx={{ height: 16 }} />

      <List
        sx={{
          m: 0,
          py: 0,
          li: { py: '0px' },
          '& li::before': {
            content: '"\\2022"',
            color: 'text.primary',
            display: 'inline-block',
            width: '0.7em',
            marginLeft: '0.5em',
            fontSize: '20px',
          },
        }}
      >
        <ListItem>The foam sockliner feels soft and comfortable</ListItem>
        <ListItem>Pull tab</ListItem>
        <ListItem>Not intended for use as Personal Protective Equipment</ListItem>
        <ListItem>Colour Shown: White/Black/Oxygen Purple/Action Grape</ListItem>
        <ListItem>Style: 921826-109</ListItem>
        <ListItem>Country/Region of Origin: China</ListItem>
      </List>
      <Box sx={{ height: 16 }} />
      <Box sx={{ height: 16 }} />

      <Typography variant="h6">Benefits</Typography>
      <List
        sx={{
          m: 0,
          py: 0,
          li: { py: '0px' },
          '& li::before': {
            content: '"\\2022"',
            color: 'text.primary',
            display: 'inline-block',
            width: '0.7em',
            marginLeft: '0.5em',
            fontSize: '20px',
          },
        }}
      >
        <ListItem>
          Mesh and synthetic materials on the upper keep the fluid look of the OG while adding
          comfort and durability.
        </ListItem>
        <ListItem>
          Originally designed for performance running, the full-length Max Air unit adds soft,
          comfortable cushioning underfoot.
        </ListItem>
        <ListItem>The foam midsole feels springy and soft.</ListItem>
        <ListItem>The rubber outsole adds traction and durability.</ListItem>
      </List>
      <Box sx={{ height: 16 }} />
      <Box sx={{ height: 16 }} />
      <Typography variant="h6">Delivery and Returns</Typography>
      <Box sx={{ height: 16 }} />
      <Typography variant="body1">
        Your order of $200 or more gets free standard delivery.
      </Typography>
      <Box sx={{ height: 16 }} />
      <List
        sx={{
          m: 0,
          py: 0,
          li: { py: '0px' },
          '& li::before': {
            content: '"\\2022"',
            color: 'text.primary',
            display: 'inline-block',
            width: '0.7em',
            marginLeft: '0.5em',
            fontSize: '20px',
          },
        }}
      >
        <ListItem>Standard delivered 4-5 Business Days</ListItem>
        <ListItem>Express delivered 2-4 Business Days</ListItem>
      </List>
      <Box sx={{ height: 16 }} />
      <Typography variant="body1">
        Orders are processed and delivered Monday-Friday (excluding public holidays)
      </Typography>
    </>
  );
}

export default ProductDescription
