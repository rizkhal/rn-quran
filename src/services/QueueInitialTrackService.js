import TrackPlayer, { RepeatMode } from 'react-native-track-player';

export const QueueInitialTrackService = async playlists => {
  await TrackPlayer.add([playlists]);
  await TrackPlayer.setRepeatMode(RepeatMode.Off);
};
