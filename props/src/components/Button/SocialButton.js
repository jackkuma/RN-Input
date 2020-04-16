import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityBase } from 'react-native'
import PropTypes from 'prop-types'

const SocialBtn = props => (
    <TouchableOpacity style={[props.bgStyle, {backgroundColor:props.bgColor}]} onPress={props.checkPress}>
        <Text style={props.textStyle}>{props.checkTitle}</Text>
    </TouchableOpacity>
)

export default SocialBtn

SocialBtn.propTypes = {
    checkTitle: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    checkPress: PropTypes.func,
}

SocialBtn.defaultProps = {
    checkTitle: 'Share',
}
