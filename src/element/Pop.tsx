import {Snackbar} from "react-native-paper";
import {useEffect, useState} from "react";

interface PopProps {
    text: string
}

const Pop: React.FC<PopProps> = () => {
    const [visible, setVisible] = useState(false);
    const onDismissSnackBar = () => setVisible(false);
    useEffect(() => {
        setVisible(true)
    }, []);
    return (
        <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}>
            OK
        </Snackbar>
    )
}

export default Pop;
