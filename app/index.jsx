import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View, Image } from 'react-native';
import { Redirect, router } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { images } from '../constants'
import CustomButton from '../components/CustomButton';

export default function App() {
  return (
    <SafeAreaView className='bg-primary h-full'>
      <ScrollView contentContainerStyle={{height: '100%'}}>
        <View className='w-full h-[85vh] justify-center items-center px-4'>
          {/* <Image source={images.logo} className='w-[130px] h-[84px]' resizeMode='contain' /> */}
          <Text className='text-white text-4xl font-bold'>Pixl</Text>
          <Image source={images.cards} className='max-w-[380px] w-full h-[300px]' resizeMode='contain' />

          <View className='relative mt-5'>
            <Text className='text-3xl text-white font-bold text-center max-w-[75%]'>
              Express yourself with{' '}
              <Text className='text-secondary-200 underline decoration-[#24a7cd]'>Pixl</Text>
            </Text>
            {/* <Image source={images.path} className='w-[75px] absolute -bottom-[6px] -right-3 h-[15px] ' resizeMode='contain' /> */}
          </View>

          <CustomButton title='Continue to Login' handlePress={() => {router.push("/sign-in")}} containerStyles='w-full mt-7' />
        </View>
      </ScrollView>

      <StatusBar backgroundColor='#161622' style='light' />
    </SafeAreaView>
  );
}