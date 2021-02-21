import React from 'react';

import {
    StyleSheet,
    ScrollView,
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions
} from 'react-native';

import GridViewIcon from './../assets/Icons/svg-icons/grid_view_icon.svg';
import ListViewIcon from './../assets/Icons/svg-icons/list_view_icon.svg';
import SearchIcon from './../assets/Icons/svg-icons/search_icon.svg';
import HomeLikeButtonGray from './../assets/Icons/svg-icons/home_like_button_gray.svg';
import HomeLikeButtonRed from './../assets/Icons/svg-icons/home_like_button_red.svg';

const customData = require('./../data');
export default class Home extends React.Component {
    // I cannot understand what the Public value in the images, I assigned it as the variable named val.
    constructor(props) {
        super(props);
        this.state = {
            searchString: "",
            extend: false,
            movies: []
        };
    }

    componentDidMount() {
        this.setState({ movies: customData.jsonData })
    }

    handleLikeButton(index) {
        this.state.movies[index].liked = !this.state.movies[index].liked
        this.setState({
            liked: !this.state.liked,
            movies: this.state.movies
        })
    }

    render() {
        return (
            <View style={{ flexDirection: "column", backgroundColor: "#ffffff" }}>
                <ScrollView>

                    {/* Search Input */}
                    <View>
                        <SearchIcon style={styles.searchIcon} width={15} height={15} />
                        <TextInput
                            placeholder={"Search"}
                            style={styles.searchInput}
                        />
                    </View>

                    {/* Content Header , contains extend button */}
                    <View style={{ flexDirection: "row", marginLeft: 19, }}>
                        <Text style={styles.sectionHeader}>Most Popular</Text>

                        {/* This Button allow to change between grid view and list view */}
                        <TouchableOpacity
                            style={styles.extendButton}
                            onPress={() => {
                                this.setState({ extend: !this.state.extend })
                            }}
                        >
                            {!this.state.extend ?
                                (
                                    <GridViewIcon width={20} height={20} />
                                ) : (
                                    <ListViewIcon width={20} height={20} />
                                )
                            }

                        </TouchableOpacity>
                    </View>

                    {/* Content Header , contains extend button */}
                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>

                        {this.state.movies.map((movie, index) => (
                            // Warning: Each child in a list should have a unique "key" prop.
                            // We add the key props due to the issue mentioned in the top line
                            <TouchableOpacity
                                key={movie.id}
                                style={
                                    [
                                        styles.margin10,
                                        this.state.extend ?
                                            {
                                                width: Dimensions.get("screen").width / 2 - 20, height: 250
                                            } : {
                                                width: Dimensions.get("screen").width - 20
                                            }
                                    ]
                                }
                                onPress={() => {
                                    this.props.navigation.navigate('Movie Detail', { movie })
                                }}>
                                {!this.state.extend ?
                                    (
                                        // List View
                                        <View style={{ flexDirection: "row" }}>
                                            <View>
                                                <Image
                                                    style={styles.movieCover}
                                                    source={{ uri: movie.img }}
                                                />
                                                <TouchableOpacity
                                                    style={styles.likeButton}
                                                    onPress={() => {
                                                        this.handleLikeButton(index)
                                                    }}>
                                                    {this.state.movies[index].liked ?
                                                        (
                                                            <HomeLikeButtonRed width={20} height={20} />
                                                        ) : (
                                                            <HomeLikeButtonGray width={20} height={20} />
                                                        )
                                                    }

                                                </TouchableOpacity>
                                            </View>

                                            {/* Text of Card */}
                                            <View>
                                                <View
                                                    style={
                                                        [
                                                            styles.flex,
                                                            { marginLeft: 19 }
                                                        ]
                                                    }
                                                >
                                                    <Text style={styles.ListViewContentheader}>
                                                        {movie.name}
                                                    </Text>
                                                    <Text style={styles.ContentText}>
                                                        {movie.year} | {movie.langCode}
                                                    </Text>
                                                    <Text style={styles.ContentText}>
                                                        {movie.type}
                                                    </Text>
                                                </View>
                                                {/* imdb and val , val is public etc. */}

                                                <View
                                                    style={{ marginLeft: 19 }}
                                                >
                                                    <Text style={styles.ContentText}>
                                                        {movie.imdb}
                                                    </Text>
                                                    <Text style={styles.ContentText}>
                                                        {movie.val}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    ) : (
                                        // Grid View 
                                        <View style={styles.gridViewBox}>
                                            <View style={{ flex: 1, width: "100%", justifyContent: "flex-start" }}>

                                                <Image
                                                    style={[styles.movieCover, { width: "100%" }]}
                                                    source={{ uri: movie.img }}
                                                />

                                                <TouchableOpacity
                                                    style={styles.likeButton}
                                                    onPress={() => {
                                                        this.handleLikeButton(index)
                                                    }}>
                                                    {this.state.movies[index].liked ?
                                                        (
                                                            <HomeLikeButtonRed width={20} height={20} />
                                                        ) : (
                                                            <HomeLikeButtonGray width={20} height={20} />
                                                        )
                                                    }
                                                </TouchableOpacity>

                                                {/* Grid View Name View*/}
                                                <View style={styles.gridViewTextContainer}>
                                                    <Text style={styles.GridViewContentName}>
                                                        {movie.name}
                                                    </Text>
                                                </View>
                                            </View>

                                            {/* Grid View under image View */}
                                            <View style={styles.gridViewTextContainer}>
                                                <Text style={styles.ContentText}>
                                                    {movie.year} | {movie.langCode}
                                                </Text>
                                                <Text style={styles.ContentText}>
                                                    {movie.type}
                                                </Text>
                                            </View>
                                        </View>
                                    )
                                }
                            </TouchableOpacity>
                        ))}

                    </View>
                </ScrollView>
            </View >
        );
    }
}

const styles = StyleSheet.create({
    flex: {
        flex: 1
    },
    header: {
        justifyContent: "center",
        alignItems: "center",
        color: "#575757",
        height: 50,
        borderBottomWidth: 2,
        borderColor: "#dbdbdb",
    },
    ListViewContentheader: {
        fontFamily: "WorkSans-SemiBold",
        color: "#575757",
        fontWeight: "800",
        fontSize: 21
    },
    ContentText: {
        fontFamily: "WorkSans-Medium",
        color: "#9c9da1",
        fontSize: 18
    },
    movieCover: {
        width: 135,
        height: 200,
        borderRadius: 10
    },
    sectionHeader: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 20,
        lineHeight: 36,
        color: "#575757",

    },
    margin10: {
        margin: 10
    },
    gridViewBox: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
    },
    searchInput: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        fontFamily: "WorkSans-SemiBold",
        fontSize: 16,
        borderRadius: 30,
        height: 25,
        margin: 10,
        paddingBottom: 0,
        paddingTop: 0,
        paddingLeft: 35,
        paddingRight: 10,
        color: "#9C9DA1",
        backgroundColor: "#E4E4E4",

    },
    searchIcon: {
        position: "absolute",
        marginTop: 15,
        zIndex: 2,
        left: 20
    },
    extendButton: {
        height: 20,
        width: 20,
        marginTop: 5,
        position: "absolute",
        right: 20
    },
    likeButton: {
        justifyContent: "center",
        alignItems: "center",
        height: 30,
        width: 30,
        position: "absolute",
        right: 5,
        top: 5,
        borderWidth: 2,
        borderColor: "#CBCBCB",
        borderRadius: 30,
        backgroundColor: "transparent",
    },

    gridViewTextContainer: {
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",

    },
    GridViewContentName: {
        fontFamily: "WorkSans-SemiBold",
        fontSize: 21,
        color: "#ffffff",
        marginLeft: 5,
        marginRight: 5,

    },
})
