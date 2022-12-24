import React from 'react';
import colors from 'tailwindcss/colors';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import StyledText from './StyledText';
import StyledView from './StyledView';
import StyledSlider from './StyledSlider';
import { useCurrentTrack } from '../hooks/useCurrentTrack';

const Progress = () => {
  const progress = useProgress();
  const track = useCurrentTrack();

  return (
    <StyledView>
      {track && (
        <StyledView className="p-3 flex flex-col bg-gray-800">
          <StyledText className="text-xl">
            {track.number} | {track.title} - {track.englishTitle}
          </StyledText>
          <StyledText>{track.artist}</StyledText>
        </StyledView>
      )}

      <StyledSlider
        value={progress.position}
        minimumValue={0}
        maximumValue={progress.duration}
        thumbTintColor={colors.green[500]}
        minimumTrackTintColor={colors.green[500]}
        maximumTrackTintColor={colors.gray[50]}
        onSlidingComplete={TrackPlayer.seekTo}
        className="bg-gray-900 pt-8"
      />
    </StyledView>
  );
};

export default Progress;
