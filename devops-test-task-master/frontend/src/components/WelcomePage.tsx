import { FC, useEffect, useState } from 'react';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Container,
  Typography,
} from '@mui/material';
import { IDrink } from '../models/drink';
import listDrinks from '../queries/drinks';

const WelcomePage: FC = () => {
  const [drinks, setDrinks] = useState([]);
  const fetchDrinks = async (): Promise<IDrink[]> => {
    const data = await listDrinks();

    setDrinks(data);
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchDrinks();
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <Container fixed maxWidth="sm">
      <Box textAlign="center" sx={{ m: 4 }}>
        <Typography variant="h4">Welcome to CoffeeShop App! ☕️</Typography>
        <Typography variant="subtitle1">
          If you can see list of drinks below
        </Typography>
        <Typography variant="subtitle1">
          That means all set up right & works fine 💪
        </Typography>
      </Box>
      <Box alignItems="center" sx={{ m: 2 }}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell align="right">Balance</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drinks.map((drink) => (
                <TableRow
                  key={drink.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {drink.title}
                  </TableCell>
                  <TableCell align="right">{drink.balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box textAlign="center" sx={{ m: 2 }}>
        <Button
          variant="contained"
          color="success"
          onClick={() => fetchDrinks()}
        >
          SHOW DRINKS
        </Button>
      </Box>
    </Container>
  );
};

export default WelcomePage;
