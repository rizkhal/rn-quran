import React from 'react';
import StyledView from './StyledView';
import colors from 'tailwindcss/colors';
import {
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
} from 'react-native-heroicons/solid';
import Progress from './Progress';
import { State, usePlaybackState } from 'react-native-track-player';
import StyledTouchableOpacity from './StyledTouchableOpacity';

const PlayerController = ({ onPlay, onNext, onPrev }) => {
  const playBackState = usePlaybackState();

  return (
    <>
      <Progress />
      <StyledView className="flex flex-row px-4 pb-4 bg-gray-900">
        <StyledView className="w-full flex flex-row items-center justify-between px-6">
          <StyledTouchableOpacity onPress={() => onPrev()}>
            <BackwardIcon width={30} height={30} color={colors.gray[200]} />
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={() => onPlay()}>
            {playBackState === State.Playing ? (
              <PauseIcon width={30} height={30} color={colors.gray[200]} />
            ) : (
              <PlayIcon width={30} height={30} color={colors.gray[200]} />
            )}
          </StyledTouchableOpacity>
          <StyledTouchableOpacity onPress={() => onNext()}>
            <ForwardIcon width={30} height={30} color={colors.gray[200]} />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </>
  );
};

export default PlayerController;
