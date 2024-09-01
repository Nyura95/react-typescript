import React, { useMemo, useState } from 'react';

import Counter from '../features/counter/Counter';
import { Button, Grid2 as Grid } from '@mui/material';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const languages = useMemo(() => i18n.languages, []);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);

  const changeLanguage = () => {
    const nextLangIndex = (currentLangIndex + 1) % languages.length;
    i18n.changeLanguage(languages[nextLangIndex]);
    setCurrentLangIndex(nextLangIndex);
  };

  return (
    <Grid container flexDirection={'column'}>
      <Grid padding={5} textAlign={'center'}>
        <h1>React-typescript</h1>
      </Grid>
      <Grid paddingBottom={5} textAlign={'center'}>
        <Button
          onClick={changeLanguage}
          color="info"
          variant="contained"
          data-language={languages[currentLangIndex]}
          data-testid="i18n-switch"
        >
          {t('buttonChange')}
        </Button>
      </Grid>
      <Counter />
    </Grid>
  );
};

export default HomePage;
