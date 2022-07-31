import './App.css';
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Stack from '@mui/material/Stack';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import { useEffect, useState } from 'react';

function App() {
  const [imagesData, setImagesData] = useState([]);
  const [showImg, setShowImg] = useState(3);
  const [startImgSlice, setStartImgSlice] = useState(showImg - 3);
  const [endImgSlice, setEndImgSlice] = useState(showImg + 2);
  const [slicedImagesData, setSlicedImagesData] = useState([]);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);


  useEffect(() => {
    setImagesData([
      { id: 1, name: 'melv', img: img1, descrption: 'descrpition1' },
      { id: 2, name: 'kid', img: img2, descrption: 'descrpition2' },
      { id: 3, name: 'cute kid', img: img3, descrption: 'descrpition3' },
      { id: 4, name: 'father', img: img4, descrption: 'descrpition4' },
      { id: 5, name: 'father', img: img5, descrption: 'descrpition5' },
      { id: 6, name: 'father', img: img4, descrption: 'descrpition4' }
    ]);
    setCount(-imagesData.length + 3);
  }, [imagesData.length]);

  useEffect(() => {
    if (imagesData.length > 5) {
      console.log(count);
      setSlicedImagesData([...imagesData.slice(startImgSlice, endImgSlice), imagesData[count]]);
    }
  }, [imagesData.length, imagesData, startImgSlice, endImgSlice, count]);




  const showingImgData = imagesData.find(image => image.id === showImg);

  const handleRightArrow = () => {
    if (count >= imagesData.length - 1) {
      setCount(-imagesData.length + 3);
    }
    else {
      setCount(count + 1);
    }

    if (showImg < imagesData.length) {
      setShowImg(showImg + 1);
      setStartImgSlice(startImgSlice + 1);
      setEndImgSlice(endImgSlice + 1);
    }
    else {
      setShowImg(1);
    }
  }
  const handleLeftArrow = () => {
    if (showImg > 1) {
      setShowImg(showImg - 1);
    }
    else {
      setShowImg(imagesData.length);
    }
  }


  const handleClickOnImg = (imageId) => {
    setShowImg(imageId);
  }

  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} mt="3rem">
        <Grid container>
          <Grid item md={7} xs={12} sx={{ bgcolor: 'primary.main' }}>

            <img style={{ borderRadius: '40px', width: '1000px' }} src={showingImgData?.img} alt="" />

            <Box mt="1rem" sx={{ display: 'flex', alignItems: 'center' }}>

              <IconButton color='inherit' disableRipple
                onClick={handleLeftArrow}
              >
                <ArrowLeftIcon sx={{ fontSize: 80 }} />
              </IconButton>

              {
                imagesData.length <= 5 ?
                  imagesData.map(image => <img
                    key={image.id}
                    style={{ borderRadius: '16px', width: '180px' }}
                    src={image.img} alt=""
                    onClick={() => handleClickOnImg(image.id)}
                  />)
                  :
                  slicedImagesData.map(image => <img
                    key={image?.id}
                    style={{ borderRadius: '16px', width: '180px' }}
                    src={image?.img} alt=""
                    onClick={() => handleClickOnImg(image.id)}
                  />)
              }


              <IconButton
                color='inherit' disableRipple
                onClick={handleRightArrow}
              >
                <ArrowRightIcon sx={{ fontSize: 80 }} />
              </IconButton>
            </Box>
          </Grid>
          <Grid item md={5} xs={12} sx={{ bgcolor: 'secondary.main' }}> {showingImgData?.descrption} </Grid>
        </Grid>
      </Box>
    </div >
  );
}

export default App;
