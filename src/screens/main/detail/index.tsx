import {View, Text, SafeAreaView} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

const index = () => {
    const StarRating = ({rating, starSize, filledColor, emptyColor}) => {
        const maxStars = 5;
        const filledStars = Math.floor(rating);
        const remainder = rating - filledStars;

        const renderStars = () => {
            let stars = [];

            for (let i = 1; i <= maxStars; i++) {
                if (i <= filledStars) {
                    stars.push(
                        <Icon key={i} name="star" size={starSize} color={filledColor}/>
                    );
                } else if (i === filledStars + 1 && remainder > 0) {
                    stars.push(
                        <Icon
                            key={i}
                            name="star-half-full"
                            size={starSize}
                            color={filledColor}
                        />
                    );
                } else {
                    stars.push(
                        <Icon key={i} name="star" size={starSize} color={emptyColor}/>
                    );
                }
            }

            return stars;
        };

        return (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                {renderStars()}
                <Text style={{marginLeft: 5, color: filledColor, fontSize: starSize}}>
                    {rating}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{
            width: '100%',
            height: '100%',
            backgroundColor: 'white'
        }}>
            <View>
                <StarRating
                    rating={4.5}
                    starSize={20}
                    filledColor="yellow"
                    emptyColor="gray"
                />
            </View>

            <View>

            </View>
        </SafeAreaView>
    )
}


export default index;
