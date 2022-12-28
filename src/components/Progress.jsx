import React from 'react';
import colors from 'tailwindcss/colors';
import TrackPlayer, { useProgress } from 'react-native-track-player';

import { fonts } from '../utils';
import StyledText from './StyledText';
import StyledView from './StyledView';
import StyledSlider from './StyledSlider';
import { useCurrentTrack } from '../hooks';
import StyledTouchableOpacity from './StyledTouchableOpacity';

import BottomSheet, {
  BottomSheetBackdrop,
  BottomSheetFlatList,
} from '@gorhom/bottom-sheet';

const Progress = ({ surahs }) => {
  const progress = useProgress();
  const track = useCurrentTrack();

  const bottomSheetRef = React.useRef(null);

  const snapPoints = React.useMemo(() => ['20%', '95%'], []);

  const renderBackdrop = React.useCallback(
    props => (
      <BottomSheetBackdrop
        {...props}
        disappearsOnIndex={0}
        appearsOnIndex={1}
      />
    ),
    [],
  );

  return (
    <>
      <BottomSheet
        ref={bottomSheetRef}
        index={-1}
        snapPoints={snapPoints}
        enablePanDownToClose={true}
        backdropComponent={renderBackdrop}>
        <StyledView className="flex-1 flex flex-col pb-40">
          {surahs?.ayahs.length && (
            <BottomSheetFlatList
              data={surahs.ayahs}
              renderItem={({ item, index }) => (
                <StyledView
                  className={`flex flex-row p-4 border-b border-b-gray-100`}>
                  <StyledView className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-md mr-2">
                    <StyledText className="text-lg text-green-50">
                      {item.numberInSurah}
                    </StyledText>
                  </StyledView>
                  <StyledView className="flex-1 flex flex-row items-center justify-end">
                    <StyledText
                      className="text-gray-600 text-3xl"
                      style={{ fontFamily: fonts.secondary.regular }}>
                      {item.text.split(
                        'بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ',
                      )}
                    </StyledText>
                  </StyledView>
                </StyledView>
              )}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 60 }}
            />
          )}
        </StyledView>
      </BottomSheet>

      {track && (
        <StyledTouchableOpacity
          onPress={() => bottomSheetRef?.current.snapToIndex(1)}
          className="p-3 flex flex-col bg-gray-800">
          <StyledText className="text-xl">
            {track.number} | {track.title} - {track.englishTitle}
          </StyledText>
          <StyledText>{track.artist}</StyledText>
        </StyledTouchableOpacity>
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
    </>
  );
};

export default Progress;
