import Grid from '@mui/material/Grid2';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import styles from './home.module.scss';

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home_bg_image} />
      
      <Grid
        container
        className={`h-full centered ${styles.home_text_container}`}
      >
        <Grid size={{
          xs: 11,
          md: 9
        }}>
          <Box sx={{
            fontWeight: 'bold',
            fontSize: {
              xs: '28px',
              md: '32px'
            }
          }}>
            Necessitatibus cum quae officiis officia tenetur dolor vero harum aut iste delectus.
          </Box>
          <Box sx={{
            fontSize: {
              xs: '18px',
              md: '24px'
            }
          }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, laudantium, recusandae eius doloribus aliquid fugit odio voluptate debitis sunt aspernatur, quia aut aperiam commodi magnam incidunt alias porro quisquam possimus.
          </Box>

          <Box sx={{
            marginTop: '24px',
            display: 'flex',
            gap: 1
          }}>
            <Button variant='outlined' color='secondary'>
              Button 1
            </Button>

            <Button variant='contained'>
              Button 2
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}