import './App.css';
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';
import allImageData from './imageData';

import { useEffect, useState } from 'react';


function App() {
  const [imagesData, setImagesData] = useState([]);
  const [showingImage, setShowingImage] = useState(1);
  const [slicedImagesData, setSlicedImagesData] = useState([]);
  const [deletedImagesData, setDeletedImagesData] = useState([]);
  const [isSlideshow, setIsSlideShow] = useState(false);

  useEffect(() => {
    setImagesData(allImageData);
  }, []);

  useEffect(() => {
    const deletedData = imagesData.splice(5);
    setSlicedImagesData(imagesData);
    setDeletedImagesData(deletedData);
  }, [imagesData]);

  if (isSlideshow === true) {
    const intervalId = setInterval(function () {
      if (intervalId) {
        clearInterval(intervalId)
      }
      if (imagesData.length > showingImage) {
        setShowingImage(1 + showingImage);
      }
      else {
        setShowingImage(1);
      }
    }, 3000);
  }

  const showingImgData = imagesData.find(image => image.id === showingImage);


  const handleRightArrow = async () => {
    if (showingImage < imagesData.length) {
      setShowingImage(showingImage + 1);

      const deletedData = imagesData.splice(0, 1);
      deletedImagesData.push(...deletedData);
      setImagesData([...imagesData, ...deletedImagesData]);

    }
    else {
      setShowingImage(1);
      const deletedData = imagesData.splice(0, 1);
      deletedImagesData.push(...deletedData);
      setImagesData([...imagesData, ...deletedImagesData]);
    }
  }
  const handleLeftArrow = () => {
    if (showingImage > 1) {
      setShowingImage(showingImage - 1);

      const deletedData = imagesData.splice(imagesData.length - 1, 1);
      console.log(deletedData);
      deletedImagesData.unshift(...deletedData);
      console.log(deletedImagesData);
      setImagesData([...deletedImagesData, ...imagesData]);

    }
    else {
      setShowingImage(imagesData.length);

      const deletedData = imagesData.splice(imagesData.length - 1, 1);
      console.log(deletedData);
      deletedImagesData.unshift(...deletedData);
      setImagesData([...deletedImagesData, ...imagesData]);
      console.log(deletedImagesData);
    }
  }


  const handleClickOnImg = (imageId) => {
    setShowingImage(imageId);
  }
  const handleAutoImgChange = () => {
    setIsSlideShow(!isSlideshow);
  }


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} mt="2rem">
        <Grid container>
          <Grid item lg={8} md={12}>
            <img className='mainImage' style={{ borderRadius: '20px', maxWidth: '800px', padding: '10px' }} src={showingImgData?.img} alt="" />

            <Grid mt="1rem" sx={{ display: 'flex', alignItems: 'center' }} container spacing={1}>
              <IconButton color='inherit' disableRipple onClick={handleLeftArrow} sx={{ padding: 0 }} className='arrow'>
                <ArrowLeftIcon sx={{ fontSize: 70 }} />
              </IconButton>

              {
                imagesData.length <= 5 ?
                  imagesData.map(image => <Grid
                    item xs={12} lg={2}
                    key={image.id}>
                    <IconButton color='inherit' disableRipple>
                      <img
                        className='allImages'
                        src={image.img} alt="" onClick={() => handleClickOnImg(image.id)}
                        style={showingImage === image.id ?
                          { borderRadius: '10px', maxWidth: '180px' }
                          :
                          { borderRadius: '10px', maxWidth: '180px', filter: `grayscale(100%)` }
                        }
                      />
                    </IconButton>
                  </Grid>)
                  :
                  slicedImagesData.map(image => <Grid
                    item
                    key={image.id}>
                    <IconButton color='inherit' disableRipple>
                      <img
                        className='allImages'
                        src={image.img} alt="" onClick={() => handleClickOnImg(image.id)}
                        style={showingImage === image.id ?
                          { borderRadius: '10px', maxWidth: '180px', }
                          :
                          { borderRadius: '10px', maxWidth: '180px', filter: `grayscale(100%)` }
                        }
                      />
                    </IconButton>
                  </Grid>)
              }
              <IconButton color='inherit' disableRipple onClick={handleRightArrow} sx={{ padding: 0 }} className='arrow'>
                <ArrowRightIcon sx={{ fontSize: 80 }} />
              </IconButton>

            </Grid>
          </Grid>
          <Grid item lg={4} md={12} sx={{ position: 'relative', paddingBottom: '10rem' }}>

            <Typography variant="h6" component="h2" align='left' padding={2}>
              {showingImgData?.descrption}
            </Typography>

            {isSlideshow ?
              <IconButton disableRipple onClick={handleAutoImgChange} sx={{ padding: 0, bgcolor: 'primary.main', bottom: 50, position: 'absolute' }}>
                <PauseIcon style={{ color: 'white' }} sx={{ fontSize: 70 }} />
              </IconButton>
              :
              <IconButton disableRipple onClick={handleAutoImgChange} sx={{ padding: 0, bgcolor: 'primary.main', bottom: 50, position: 'absolute' }}>
                <PlayArrowIcon style={{ color: 'white' }} sx={{ fontSize: 70 }} />
              </IconButton>
            }

          </Grid>
        </Grid>
      </Box>
    </div >
  );
}

export default App;
