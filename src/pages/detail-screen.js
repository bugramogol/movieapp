import React from "react";
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Dimensions,
    ScrollView
} from 'react-native';
import HeartLikeButton from './../assets/Icons/svg-icons/heart_like_icon.svg';

const customData = require('./../data');

export default class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: this.props.route.params.movie,
            readMore: false,
            persons: [],
            persons2: []
        };
    }

    componentDidMount() {
        this.setState({
            persons: customData.personData,
            persons2: customData.personDataLong
        })
    }

    handleLikeButton() {
        this.state.movie.liked = !this.state.movie.liked
        this.setState({ movie: this.state.movie })
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View>
                    <Image
                        style={styles.movieImage}
                        source={{ uri: this.state.movie.longimg }}
                    />
                    <TouchableOpacity
                        style={[
                            styles.likeButton,
                            this.state.movie.liked ? { backgroundColor: "#FF0000" } : { backgroundColor: "#9c9da1" }
                        ]}
                        onPress={() => { this.handleLikeButton() }}
                    >

                        <HeartLikeButton height={35} width={35} />

                    </TouchableOpacity>
                </View>

                {/* Duration Genre and Language View */}
                <View style={{ flexDirection: "row", marginTop: 40, marginLeft: 10, marginRight: 10 }}>

                    <View style={styles.flex}>
                        <Text style={styles.headers}>Duration</Text>
                        <Text style={styles.content}>{this.state.movie.duration}</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.headers}>Genre</Text>
                        <Text style={styles.content}>{this.state.movie.type}</Text>
                    </View>
                    <View style={styles.flex}>
                        <Text style={styles.headers}>Language</Text>
                        <Text style={styles.content}>{this.state.movie.language}</Text>
                    </View>

                </View>

                {/* Synopsis View Read More and Less */}
                <View>
                    <View style={[{ marginTop: 10, marginLeft: 10, marginRight: 10 }]}>
                        <View>
                            <Text style={styles.headers}>Synopsis</Text>
                            <Text
                                numberOfLines={this.state.readMore ? (null) : (3)}
                                style={styles.contentSynopsis}
                            >
                                {this.state.movie.descr}
                            </Text>
                        </View>
                    </View>

                    <Text
                        style={{ color: "#FF5C6D", textAlign: "right", margin: 10 }}
                        onPress={() => { this.setState({ readMore: !this.state.readMore }) }}
                    >
                        {this.state.readMore ? ("Read Less") : ("Read More")}
                    </Text>
                </View>

                {/* Main Cast Persons View */}
                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                    <Text style={styles.headers}>Main Cast</Text>
                    <View style={styles.flexWrapBox}>
                        {this.state.persons.map((person) => (
                            // For Each Person in Maincast create this view 
                            <View
                                key={person.id}
                                style={styles.boxStyle}
                            >
                                <View style={styles.boxContent}>
                                    <Text
                                        numberOfLines={1}
                                        style={styles.content}
                                    >
                                        {person.firstname}
                                    </Text>
                                    <Image
                                        style={styles.personImg}
                                        source={{ uri: person.img }}
                                    />
                                    <Text
                                        numberOfLines={1}
                                        style={styles.content}
                                    >
                                        {person.lastname}
                                    </Text>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Main Technical Team Persons View */}
                <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
                    <Text style={styles.headers}> Main Technical Team</Text>
                    <View style={styles.flexWrapBox}>
                        {this.state.persons2.map((person) => (
                            <View
                                key={person.id}
                                style={styles.boxStyle}
                            >
                                <View style={styles.boxContent}>
                                    <Text
                                        numberOfLines={1}
                                        style={styles.content}
                                    >
                                        {person.firstname}
                                    </Text>
                                    <Image
                                        style={styles.personImg}
                                        source={{ uri: person.img }}
                                    />
                                    <Text
                                        numberOfLines={1}
                                        style={styles.content}
                                    >
                                        {person.lastname}
                                    </Text>
                                </View>
                            </View>
                        )
                        )}
                    </View>
                </View>
            </ScrollView >
        );
    }

}
const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    flexWrapBox: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    scrollView: {
        flex: 1
    },

    movieImage: {
        height: 200,
    },
    // View Content
    boxContent: {
        width: 70,
        justifyContent: "center",
        alignItems: "center"
    },
    boxStyle: {
        width: Dimensions.get("screen").width / 3 - 20,
        marginBottom: 15,
    },
    // Text Contents
    headers: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 20,
        lineHeight: 36,
        color: "#575757",
    },
    content: {
        fontFamily: "WorkSans-Medium",
        color: "#9C9DA1",
        fontSize: 16
    },
    contentSynopsis: {
        fontFamily: "WorkSans-Medium",
        color: "#9C9DA1",
        fontSize: 16,
    },
    // Like Button
    likeIcon: {
        height: 26,
        width: 30
    },
    likeButton: {
        height: 60,
        width: 60,
        borderRadius: 60,
        justifyContent: "center",
        alignItems: "center",
        top: 160,
        position: "absolute",
        right: 20
    },
    // Persons
    personImg: {
        height: 60,
        width: 60,
        borderRadius: 60
    }
})