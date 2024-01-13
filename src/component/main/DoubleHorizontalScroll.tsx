import {ScrollView, View, Text, StyleSheet} from "react-native";
import {Surface} from "react-native-paper";

const DoubleHorizontalScroll = () => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 17, margin: 5, marginBottom: 15, fontWeight: 600}}>
                30분 거리{'\n'}가볼 만한 곳 Best 10
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View>
                    <View style={styles.rowContainer}>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>1</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>3</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>5</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>7</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>9</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                    </View>
                    <View style={styles.rowContainer}>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>2</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>4</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>6</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>8</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
                        <Surface style={styles.item} elevation={1}>
                            <Text style={styles.text}>10</Text>
                            <Text style={{marginBottom: 5}}>에버랜드</Text>
                        </Surface>
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
        width: 130, // Adjust the width as needed
        height: 130, // Adjust the height as needed
        padding: 10,
        margin: 5,
        justifyContent: 'space-between',
        borderRadius: 8,
    },
    text: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
        fontStyle: "italic"
    },
});

export default DoubleHorizontalScroll;
