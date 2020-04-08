import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { COLORS, FONT_FAMILY } from '../styles'

export const BackButton = ({
  onPress,
  backIcon = 'arrow-left',
}: {
  onPress?: any
  backIcon?: string
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={onPress ? onPress : () => navigation.pop()}
      hitSlop={{ top: 10, left: 20, right: 20, bottom: 10 }}
    >
      <Icon name={backIcon} size={32} color={COLORS.BLACK_3} />
      <Text
        style={{
          color: COLORS.BLACK_3,
          fontFamily: FONT_FAMILY,
          marginLeft: 12,
          fontSize: 16,
        }}
      >
        ย้อนกลับ
      </Text>
    </TouchableOpacity>
  )
}
