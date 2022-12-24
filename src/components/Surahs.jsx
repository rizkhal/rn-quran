import React from 'react';
import { FlatList } from 'react-native';

import http from '../http';
import { fonts } from '../utils';
import StyledText from './StyledText';
import StyledView from './StyledView';
import StyledTouchableOpacity from './StyledTouchableOpacity';

const Surahs = ({ onSelect }) => {
  const [surah, setSurah] = React.useState([]);

  React.useEffect(() => {
    http.get('/v1/surah').then(r => {
      setSurah(r.data);
    });
  }, []);

  return (
    <>
      <StyledView className="bg-white flex-1">
        <StyledView>
          {surah?.data?.length ? (
            <FlatList
              data={surah.data}
              renderItem={({ item, index }) => (
                <StyledTouchableOpacity
                  onPress={() => onSelect(item)}
                  className={`flex flex-row p-2 ${
                    index != surah.data.length - 1
                      ? 'border-b border-b-gray-100'
                      : ''
                  }`}>
                  <StyledView className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-md mr-2">
                    <StyledText className="text-lg text-green-50">
                      {item.number}
                    </StyledText>
                  </StyledView>
                  <StyledView className="flex-1 flex flex-row items-center justify-between">
                    <StyledView>
                      <StyledText
                        className="text-green-500 text-xl"
                        style={{ fontFamily: fonts.secondary.semiBold }}>
                        {item.englishName}
                      </StyledText>
                      <StyledText
                        className="text-green-500 text-sm"
                        style={{ fontFamily: fonts.secondary.regular }}>
                        {item.englishNameTranslation} ({item.numberOfAyahs})
                      </StyledText>
                    </StyledView>
                    <StyledText
                      className="text-gray-600 text-2xl"
                      style={{ fontFamily: fonts.secondary.regular }}>
                      {item.name.split('سُورَةُ')[1]}
                    </StyledText>
                  </StyledView>
                </StyledTouchableOpacity>
              )}
              keyExtractor={(_, index) => index.toString()}
              contentContainerStyle={{ paddingBottom: 60 }}
            />
          ) : null}
        </StyledView>
      </StyledView>
    </>
  );
};

export default Surahs;
