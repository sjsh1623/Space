import {ScrollView, StyleSheet, Text, View} from "react-native";
import {Surface} from "react-native-paper";

const SingleHorizontalScroll = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, margin: 5, marginBottom: 15, fontWeight: 600, paddingHorizontal: 25}}>
                Something
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{paddingHorizontal: 25}}>
                    <View style={styles.rowContainer}>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    rowContainer: {
        flexDirection: 'row',
    },
    item: {
        width: 200, // Adjust the width as needed
        height: 130, // Adjust the height as needed
        padding: 10,
        margin: 5,
        borderRadius: 8,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic"
    },
});

export default SingleHorizontalScroll;
