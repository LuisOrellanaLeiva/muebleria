import React, { useState } from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ProductFilter: React.FC = () => {
  const [category, setCategory] = useState<string>('');
  const [priceRange, setPriceRange] = useState<string>('');
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleCategoryChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handlePriceRangeChange = (event: SelectChangeEvent) => {
    setPriceRange(event.target.value as string);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleFilterReset = () => {
    setCategory('');
    setPriceRange('');
    setSearchTerm('');
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 2,
        justifyContent: 'center',
        padding: '1rem',
        marginBottom: '1.5rem',
        backgroundColor: '#f4f4f4',
        borderRadius: '8px',
      }}
    >
      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Categoría</InputLabel>
        <Select value={category} onChange={handleCategoryChange}>
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value="sofas">Sofás</MenuItem>
          <MenuItem value="mesas">Mesas</MenuItem>
          <MenuItem value="sillas">Sillas</MenuItem>
          {/* Agrega más categorías según sea necesario */}
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 200 }}>
        <InputLabel>Rango de Precios</InputLabel>
        <Select value={priceRange} onChange={handlePriceRangeChange}>
          <MenuItem value="">
            <em>Todos</em>
          </MenuItem>
          <MenuItem value="0-100">$0 - $100</MenuItem>
          <MenuItem value="100-300">$100 - $300</MenuItem>
          <MenuItem value="300-500">$300 - $500</MenuItem>
          <MenuItem value="500+">Más de $500</MenuItem>
        </Select>
      </FormControl>

      <TextField
        label="Buscar Producto"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{ minWidth: 200 }}
      />

      <Button variant="contained" onClick={handleFilterReset} sx={{ alignSelf: 'center' }}>
        Reiniciar Filtros
      </Button>
    </Box>
  );
};

export default ProductFilter;
