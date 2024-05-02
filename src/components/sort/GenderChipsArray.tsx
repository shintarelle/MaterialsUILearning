import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
// eslint-disable-next-line import/no-extraneous-dependencies
import TagFacesIcon from '@mui/icons-material/TagFaces';

interface ChipData {
  key: number;
  label: string;
}
interface GenderChipsArrayProps {
  genders: string[];
  setGenders: React.Dispatch<React.SetStateAction<string[]>>;
}

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export default function GenderChipsArray({ genders, setGenders }: GenderChipsArrayProps) {
  const [chipData, setChipData] = React.useState<readonly ChipData[]>([]);

  // Обновляем chipData при изменении genders
  React.useEffect(() => {
    setChipData(genders.map((gender, index) => ({ key: index, label: gender })));
  }, [genders]);

  const handleDelete = (chipToDelete: ChipData) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
    setGenders((prevGenders) => prevGenders.filter((gender) => gender !== chipToDelete.label));
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
              icon={icon}
              size="small"
              label={data.label}
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
          </ListItem>
        );
      })}
    </Paper>
  );
}
