import { styled } from 'nativewind'
import {
  FlatList as RNFlatList,
  Pressable as RNPressable,
  SafeAreaView as RNSafeAreaView,
  ScrollView as RNScrollView,
  Text as RNText,
  TextInput as RNTextInput,
  TouchableOpacity as RNTouchableOpacity,
  View as RNView,
} from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
export const Text = styled(RNText)
export const View = styled(RNView)
export const TextInput = styled(RNTextInput)
export const TouchableOpacity = styled(RNTouchableOpacity)
export const KeyboardAvoidingView = styled(KeyboardAwareScrollView)
export const SafeAreaView = styled(RNSafeAreaView)
export const ScrollView = styled(RNScrollView)
export const Pressable = styled(RNPressable)
export const FlatList = styled(RNFlatList)
