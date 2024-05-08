import * as React from 'react';
import { useRouter } from 'next/navigation';

import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

interface BreadCrumbsProps {
  links: { label: string; href: string }[];
  productName?: string;
}

export default function BreadCrumbs({ links, productName }: BreadCrumbsProps) {
  const router = useRouter();

  return (
    <Stack spacing={2} sx={{ pl: '30px' }}>
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        {links.map((link, index) => (
          <Link
            key={index}
            underline="hover"
            color="inherit"
            href={link.href}
            onClick={(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
              event.preventDefault();
              router.push(link.href);
            }}
          >
            {link.label}
          </Link>
        ))}
        <Typography color="#909eab">{productName}</Typography>
      </Breadcrumbs>
    </Stack>
  );
}
