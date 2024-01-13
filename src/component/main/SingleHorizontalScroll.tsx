import {SafeAreaView, ScrollView, StyleSheet, Text, View} from "react-native";
import {Surface} from "react-native-paper";

const SingleHorizontalScroll = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 16, margin: 5, marginBottom: 15, fontWeight: 600}}>
               Something
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.rowContainer}>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
                                <Text style={{fontWeight: 500}}>Something</Text>
                                <Text style={{fontWeight: 500}}>혼잡 | 여유</Text>
                            </View>
                        </View>
                        <View>
                            <Surface style={styles.item} elevation={1}>
                                <Text>Image</Text>
                            </Surface>
                            <View  style={{marginLeft: 5}}>
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
    container: {
        marginLeft: 20
    },
    rowContainer: {
        flexDirection: 'row',
    },
    item: {
        width: 150, // Adjust the width as needed
        height: 100, // Adjust the height as needed
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
