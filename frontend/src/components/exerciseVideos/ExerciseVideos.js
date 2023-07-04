import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import './ExerciseVideos.css'

const ExerciseVideos = ({ exerciseVideos, name }) => {
  console.log(`this is exercise video 1: ${exerciseVideos[1]}`)
  return (
    <Box sx={{ marginTop: {lg: '200px', xs: '20px'}}}>
      <Typography sx={{ fontSize: { lg: '44px', xs: '25px' } }} fontWeight={700} color="#000" mb="33px">
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center" sx={{ flexDirection: { lg: 'row'}, gap: { lg: '100px', xs: '0px'} }}>
        {exerciseVideos?.slice(0,3).map((item, index) => (
        <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          <img src={item.video.thumbnails[0].url} alt={item.video.title}/>
          <Box>
              <Typography sx={{ fontSize: { lg: '28px', xs: '18px' } }} fontWeight={600} color="#000">
                {item.video.title}
              </Typography>
              <Typography fontSize="14px" color="#000">
                By: {item.video.channelName}
              </Typography>
            </Box>
        </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos