import React from 'react';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import CategoryFilter from './CategoryFilter';

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  categories: string[];
  selectedCategories: Set<string>;
  onCategoryChange: (category: string) => void;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({ open, onClose, categories, selectedCategories, onCategoryChange }) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250, padding: 2 }}>
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 8, right: 8 }}>
          <CloseIcon />
        </IconButton>
        <CategoryFilter
          categories={categories}
          selectedCategories={selectedCategories}
          onCategoryChange={onCategoryChange}
        />
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
