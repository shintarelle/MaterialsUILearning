import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar'; // Импорт Avatar
// eslint-disable-next-line import/no-extraneous-dependencies
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
  color: string; // Добавляем цвет в данные чипа
}
interface ColorsChipsArrayProps {
  colors: string[];
  setColors: React.Dispatch<React.SetStateAction<string[]>>;
}
const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function ColorsChipsArray({ colors, setColors }: ColorsChipsArrayProps) {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);

  React.useEffect(() => {
    const newChipData: ChipData[] = colors.map((color, index) => ({
      key: index,
      label: color,
      color
    }));
    setChipData(newChipData);
  }, [colors]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setColors((prevColors) => prevColors.filter((color) => color !== chipToDelete.color));
  };

  return (
    <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        let icon;

        if (data.label === 'React') {
          icon = <TagFacesIcon />;
        }

        return (
          <ListItem key={data.key}>
            <Chip
              icon={<Avatar sx={{ bgcolor: data.color, width: '18px', height: '18px' }}> </Avatar>}
              size="small"
              onDelete={data.label === 'React' ? undefined : handleDelete(data)} // !important
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
