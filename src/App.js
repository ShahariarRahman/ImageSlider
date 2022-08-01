import './App.css';
import { Box, Grid, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

import PauseIcon from '@mui/icons-material/Pause';

import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import { useEffect, useState } from 'react';


function App() {
  const [imagesData, setImagesData] = useState([]);
  const [showImg, setShowImg] = useState(1);
  const [slicedImagesData, setSlicedImagesData] = useState([]);
  const [deletedImagesData, setDeletedImagesData] = useState([]);
  const [startSlideshow, setStartSlideshow] = useState(false);
  const [intervalId, setIntervalId] = useState(0);





  useEffect(() => {
    setImagesData([
      {
        id: 1,
        name: 'island',
        img: img1,
        descrption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium id provident officia optio quisquam, dolores ipsa cupiditate laudantium? Sint aspernatur explicabo possimus. Perspiciatis laboriosam odio doloribus. Iusto id nulla vero, repudiandae laborum alias tempora quod iure dolores quas vel adipisci minus. Tenetur iure, asperiores enim reiciendis error maiores voluptas? Error at sint vero expedita, dolorum labore nisi eius esse alias eligendi, repellendus nemo, quam voluptatem? Consectetur blanditiis odit quibusdam totam illo eaque similique? Sapiente modi ut ab consequuntur vel ducimus repellat, deserunt corrupti aperiam libero natus est explicabo, odit asperiores temporibus. Natus maxime distinctio voluptate mollitia, blanditiis temporibus nulla expedita.'
      },
      {
        id: 2,
        name: 'kid',
        img: img2,
        descrption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab suscipit, ad sit voluptas labore tenetur dolorem expedita animi tempore in vitae sint nulla harum deserunt. Natus, delectus provident, debitis quia quibusdam atque fuga eum temporibus nulla in, pariatur libero error suscipit voluptate ratione fugiat dolorum facilis dicta nam voluptatem adipisci consequatur non voluptatum aspernatur! Optio voluptas tenetur, voluptatibus enim quia aliquam id quasi, consequuntur perferendis esse eos non rerum sapiente qui rem. Quisquam quam ea dignissimos eligendi totam accusantium cumque amet earum voluptates impedit fugiat minus blanditiis, quia eos, eveniet ullam! Nobis in necessitatibus perferendis accusantium similique molestiae expedita quaerat.'
      },
      {
        id: 3,
        name: 'cute child',
        img: img3,
        descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi distinctio dolores accusantium incidunt asperiores saepe odit labore expedita, accusamus, dolorum quo dolor nam sit ipsam magnam assumenda. Aliquid quod magnam nobis inventore cum fugit quo eveniet quis deleniti reprehenderit! Placeat vel illo laborum porro voluptates voluptate accusamus eos, adipisci fugit nam. Facere eos impedit quidem iusto excepturi quisquam dolor dolore quae hic assumenda? Reprehenderit unde, voluptates in quidem error eos facilis et laborum aut culpa enim quo dolorem nulla, reiciendis beatae nihil. Quaerat eveniet illum reiciendis, vero repellat excepturi iusto rerum, nulla magni fugiat doloribus ea sed, quis facere atque?'
      },
      {
        id: 4,
        name: 'father',
        img: img4,
        descrption: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit.At placeat dolore vitae enim qui ex, rerum consectetur, corporis inventore, tenetur repellat omnis culpa officiis magnam aut quia iste facilis ? Unde tenetur temporibus perspiciatis.Impedit, eligendi! Saepe libero placeat debitis sunt doloremque maxime necessitatibus, dignissimos molestiae autem repudiandae iusto ad rem eius corporis, veniam iure.Temporibus rem in assumenda aliquam sit, laboriosam molestiae nobis quasi odit magni amet reprehenderit nihil laborum ex voluptatibus vitae quae eaque illo libero reiciendis modi! Quidem quisquam ducimus, officiis quibusdam similique nostrum odit excepturi nobis sint recusandae inventore voluptatibus quod, dolor rem.Soluta cupiditate nihil totam.'
      },
      {
        id: 5,
        name: 'father',
        img: img5,
        descrption: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Nulla corporis aliquam reiciendis optio sequi, architecto beatae dolore quam ratione commodi facere cumque unde quis quaerat dicta animi deserunt ea blanditiis, nam laudantium ipsam a ? Molestias labore culpa suscipit ea dolores nobis fuga, recusandae, quae ratione, at autem dignissimos voluptatem fugiat dolor amet a dicta ipsam deserunt incidunt necessitatibus vel neque! Ipsa excepturi voluptate libero doloremque quos id magnam provident qui.Veniam nisi ea nam cumque placeat ? Possimus repudiandae, nam quae consequatur molestias cum accusantium pariatur maiores inventore sint assumenda earum vitae aperiam ea a laboriosam ? Beatae officiis a similique pariatur ?'
      }
    ]);
  }, []);

  useEffect(() => {
    const deletedData = imagesData.splice(5);
    setSlicedImagesData(imagesData);
    setDeletedImagesData(deletedData);
  }, [imagesData]);

  if (startSlideshow === true) {
    const intervalId = setInterval(function () {
      if (intervalId) {
        clearInterval(intervalId)
      }
      if (imagesData.length > showImg) {
        setShowImg(1 + showImg);
      }
      else {
        setShowImg(1);
      }
    }, 3000);
  }

  const showingImgData = imagesData.find(image => image.id === showImg);


  const handleRightArrow = async () => {
    if (showImg < imagesData.length) {
      setShowImg(showImg + 1);

      const deletedData = imagesData.splice(0, 1);
      deletedImagesData.push(...deletedData);
      setImagesData([...imagesData, ...deletedImagesData]);

    }
    else {
      setShowImg(1);
      const deletedData = imagesData.splice(0, 1);
      deletedImagesData.push(...deletedData);
      setImagesData([...imagesData, ...deletedImagesData]);
    }
  }
  const handleLeftArrow = () => {
    if (showImg > 1) {
      setShowImg(showImg - 1);

      const deletedData = imagesData.splice(imagesData.length - 1, 1);
      console.log(deletedData);
      deletedImagesData.unshift(...deletedData);
      console.log(deletedImagesData);
      setImagesData([...deletedImagesData, ...imagesData]);

    }
    else {
      setShowImg(imagesData.length);

      const deletedData = imagesData.splice(imagesData.length - 1, 1);
      console.log(deletedData);
      deletedImagesData.unshift(...deletedData);
      setImagesData([...deletedImagesData, ...imagesData]);
      console.log(deletedImagesData);
    }
  }


  const handleClickOnImg = (imageId) => {
    setShowImg(imageId);
  }
  const handleAutoImgChange = () => {
    setStartSlideshow(!startSlideshow);
  }


  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }} mt="3rem">
        <Grid container>
          <Grid item lg={7} md={12} sx={{ bgcolor: 'primary.main' }}>
            <img style={{ borderRadius: '40px', maxWidth: '1000rem' }} src={showingImgData?.img} alt="" />
            <Grid mt="1rem" sx={{ display: 'flex', alignItems: 'center' }} container spacing={1}>

              <IconButton color='inherit' disableRipple onClick={handleLeftArrow} sx={{ padding: 0 }} >
                <ArrowLeftIcon sx={{ fontSize: 80 }} />
              </IconButton>
              {
                imagesData.length <= 5 ?
                  imagesData.map(image => <Grid
                    item xs={12} lg={2}
                    key={image.id}>
                    <IconButton color='inherit' disableRipple>
                      <img
                        src={image.img} alt="" onClick={() => handleClickOnImg(image.id)}
                        style={showImg === image.id ?
                          { borderRadius: '16px', maxWidth: '180px' }
                          :
                          { borderRadius: '16px', maxWidth: '180px', filter: `grayscale(100%)` }
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
                        src={image.img} alt="" onClick={() => handleClickOnImg(image.id)}
                        style={showImg === image.id ?
                          { borderRadius: '16px', maxWidth: '180px' }
                          :
                          { borderRadius: '16px', maxWidth: '180px', filter: `grayscale(100%)` }
                        }
                      />
                    </IconButton>
                  </Grid>)
              }
              <IconButton color='inherit' disableRipple onClick={handleRightArrow} sx={{ padding: 0 }}>
                <ArrowRightIcon sx={{ fontSize: 80 }} />
              </IconButton>

            </Grid>
          </Grid>
          <Grid item lg={5} md={12} sx={{ bgcolor: 'secondary.main', position: 'relative' }}>

            <Typography variant="h6" component="h2" align='left' padding={2}>
              {showingImgData?.descrption}
            </Typography>

            {startSlideshow ?
              <IconButton disableRipple onClick={handleAutoImgChange} sx={{ padding: 0, bgcolor: 'primary.main', bottom: 50, position: 'absolute' }}>
                <PauseIcon style={{ color: 'white' }} sx={{ fontSize: 80 }} />
              </IconButton>
              :
              <IconButton disableRipple onClick={handleAutoImgChange} sx={{ padding: 0, bgcolor: 'primary.main', bottom: 50, position: 'absolute' }}>
                <PlayArrowIcon style={{ color: 'white' }} sx={{ fontSize: 80 }} />
              </IconButton>
            }

          </Grid>
        </Grid>
      </Box>
    </div >
  );
}

export default App;
