import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {Address} from "interface/Location";

export default function SetLocationDetail({route}) {
    const addressList: Array<Address> = route.params.addressList;
    const [pageNum, setPageNum] = useState<number>(1);
    const pageInfo:Address = addressList[pageNum];
    return (
        ''
    )
}
