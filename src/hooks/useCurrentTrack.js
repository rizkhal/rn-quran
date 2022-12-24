import { useState, useEffect } from 'react';
import TrackPlayer, {
  useTrackPlayerEvents,
  Event,
} from 'react-native-track-player';

export const useCurrentTrack = () => {
  const [index, setIndex] = useState();
  const [track, setTrack] = useState();

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async ({ nextTrack }) => {
    setIndex(nextTrack);
  });

  useEffect(() => {
    if (index === undefined) return;

    (async () => {
      const track = await TrackPlayer.getTrack(index);
      setTrack(track || undefined);
    })();
  }, [index]);

  return track;
};
