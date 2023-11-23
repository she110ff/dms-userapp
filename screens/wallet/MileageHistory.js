import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import { useStores } from '../../stores';
import { observer } from 'mobx-react';
import { Box, FlatList, HStack, Text, VStack } from '@gluestack-ui/themed';
import MobileHeader from '../../components/MobileHeader';

const MileageHistory = observer(({ navigation }) => {
  const { noteStore, userStore } = useStores();

  const data = [
    {
      id: 'bd7acbea',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: 'PIN 번호 변경',
    },
    {
      id: '3ac68afc',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '바이오 인증 사용',
    },
    {
      id: '58694a0f',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-1',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-2',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-3',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-4',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-5',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-6',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-7',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-8',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-9',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-10',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-11',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-12',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-13',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-14',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-15',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-16',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-17',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-18',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-19',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-20',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
    {
      id: '58694a0f-21',
      type: '적립',
      date: '2023/06/01 15:27:54',
      amount: '5400',
      name: '월렛 설정',
    },
  ];
  return (
    <SafeAreaView>
      <Box
        sx={{
          _dark: { bg: '$backgroundDark800' },
          _web: {
            height: '100vh',
            w: '100vw',
            overflow: 'hidden',
          },
        }}
        height='$full'
        bg='$backgroundLight0'>
        <MobileHeader
          title='마일리지 적립/사용 내역'
          subTitle='포인트 사용 및 적립 내역'
        />
        <FlatList
          m='$3'
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Box
              borderBottomWidth='$1'
              borderColor='$trueGray800'
              sx={{
                _dark: {
                  borderColor: '$trueGray100',
                },
                '@base': {
                  pl: 0,
                  pr: 0,
                },
                '@sm': {
                  pl: '$4',
                  pr: '$5',
                },
              }}
              py='$2'>
              <HStack
                space='md'
                alignItems='center'
                justifyContent='space-between'>
                <VStack>
                  <Text
                    fontSize='$sm'
                    color='$coolGray600'
                    sx={{
                      _dark: {
                        color: '$warmGray200',
                      },
                    }}>
                    {item.type}
                  </Text>
                  <Text
                    fontSize='$sm'
                    color='$coolGray600'
                    sx={{
                      _dark: {
                        color: '$warmGray200',
                      },
                    }}>
                    {item.date}
                  </Text>
                </VStack>
                <Box>
                  <Text>{item.amount} 포인트</Text>
                </Box>
              </HStack>
            </Box>
          )}
        />
      </Box>
    </SafeAreaView>
  );
});

export default MileageHistory;