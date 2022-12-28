import React from 'react';
import TrackPlayer, {
  State,
  usePlaybackState,
} from 'react-native-track-player';

import http from '../../http';

import { useCurrentTrack } from '../../hooks/useCurrentTrack';
import { Surahs, StyledView, PlayerController } from '../../components';
import { SetupService, QueueInitialTrackService } from '../../services';

const Home = () => {
  const track = useCurrentTrack();
  const playBackState = usePlaybackState();
  const [surahs, setSurahs] = React.useState(null);

  const [isPlayerReady, setIsPlayerReady] = React.useState(false);

  const play = async ({ number }) => {
    try {
      const { data } = await http.get(`/v1/surah/${number}/ar.husarymujawwad`);

      setSurahs(data.data);

      const isSetup = await SetupService();
      setIsPlayerReady(isSetup);

      const queue = await TrackPlayer.getQueue();
      if (isSetup) {
        if (queue.length >= 1) {
          await TrackPlayer.reset();
        }

        data.data.ayahs.map(async r => {
          await QueueInitialTrackService({
            url: r.audio,
            number: r.number,
            title: data.data.englishName,
            englishTitle: data.data.englishNameTranslation,
            revelationType: data.data.revelationType,
            artist: 'Shaykh Mahmoud Khalil Al - Husary',
            artwork: require('../../../assets/images/logo.png'),
            duration: 28,
          });
        });

        await TrackPlayer.play();
      }
    } catch (error) {
      log(error);
    }
  };

  const playBackToggle = async playBackState => {
    const current = await TrackPlayer.getCurrentTrack();
    if (current != null) {
      if (playBackState == State.Paused) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  return (
    <>
      <StyledView className="bg-gray-500 flex-1">
        <Surahs onSelect={item => play(item)} />

        <PlayerController
          surahs={surahs}
          onPlay={() => playBackToggle(playBackState)}
          onNext={async () => await TrackPlayer.skipToNext()}
          onPrev={async () => await TrackPlayer.skipToPrevious()}
        />
      </StyledView>
    </>
  );
};

export default Home;
