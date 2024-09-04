import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';

import styles from './introduction.module.scss';

export default function Introduction() {
  return (
    <div className={styles.intro}>
      <div className={styles.intro_bg_image} />
      
      <Grid container className='centered h-full'>
        <Grid 
          size={{
            xs: 11,
            md: 10
          }}
        >
          <div className={styles.intro_text_container}>
            <Box sx={{
              fontWeight: 'bold',
              fontSize: {
                xs: '28px',
                md: '36px'
              }
            }}>
              Seritatis culpa omnis voluptatibus dignissimos nulla laborum numquam
            </Box>
            <Box sx={{
              fontSize: {
                xs: '18px',
                md: '24px'
              }
            }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, explicabo doloribus molestiae cupiditate ut distinctio exercitationem suscipit qui tempore, dolor laudantium, illum nam officia inventore? Quis rerum eveniet ab optio?
            </Box>
          </div>
          <Box
            sx={{
              marginTop: '20px',
              gap: 1
            }}
            className='d-flex'
          >
            <Button
              variant='outlined'
              color='secondary'
            >
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