import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CategoryFilterProps {
  categories: string[];
  selectedCategories: Set<string>;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ categories, selectedCategories, onCategoryChange }) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Filtrar por Categoría
      </Typography>
      {categories.map((category) => (
        <FormControlLabel
          control={
            <Checkbox
              checked={selectedCategories.has(category)}
              onChange={() => onCategoryChange(category)}
              name={category}
            />
          }
          label={category}
          key={category}
        />
      ))}
    </Box>
  );
};

export default CategoryFilter;
