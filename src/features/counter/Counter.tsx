import React from 'react';
import { useAppSelector } from '../../hooks/appSelector';
import { increment, resetTo, selectCounter } from './counterSlice';
import { useAppDispatch } from '../../hooks/appDispatch';
import { Button, Grid2 as Grid } from '@mui/material';

const Counter: React.FC = () => {
  const { counter } = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={2} justifyContent={'center'}>
      <Grid>
        <Button
          variant="contained"
          color="info"
          data-testid="counter-increment"
          data-counter={counter}
          onClick={() => dispatch(increment())}
        >
          {counter}
        </Button>
      </Grid>
      <Grid>
        <Button variant="contained" color="info" data-testid="counter-reset" onClick={() => dispatch(resetTo(0))}>
          Reset
        </Button>
      </Grid>
    </Grid>
  );
};

export default Counter;
