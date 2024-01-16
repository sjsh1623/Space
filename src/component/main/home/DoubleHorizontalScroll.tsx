import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from "react-native";
import {Surface} from "react-native-paper";

const DoubleHorizontalScroll = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, margin: 5, marginBottom: 15, fontWeight: 600, paddingHorizontal: 25}}>
                30분 거리{'\n'}가볼 만한 곳 Best 10
            </Text>

            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{paddingHorizontal: 25}}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('Detail')
                        }}>
                            <Surface style={styles.item} elevation={1}>
                                <Text style={styles.text}>1</Text>
                                <Text style={{marginBottom: 5}}>에버랜드</Text>
                            </Surface>
                        </TouchableOpacity>
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
    container: {},
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
