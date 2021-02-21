import React from "react";
import {
    View,
    Text,
} from 'react-native';
export default class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Welcome To My Profile</Text>
            </View>
        );
    }
}