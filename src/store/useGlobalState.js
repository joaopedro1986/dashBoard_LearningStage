import { useState } from 'react'
import { WorkerData} from '../Components/WorkersData'

const useGlobalStore = () => {

    const worker = WorkerData.map((item) => item )
    const [state, setState] = useState({
        notChangeState: 1000, 
        unSafe: 1000, 
        safe1: 0, 
        safe2: 0, 
        buttonShow: false,
        worker:{
            id: worker.id,
            name: worker[0].name,
            area: worker.area,
            lenght: worker.length
        },
        listEvent: 1,
        circleSize: {
            circle1: 200,
            ciircle2:0
        }
    })

    const actions = (action) => {
        const {type, payload} = action;
        switch (type) {
            case 'setState' : 
                return setState(payload);
            default:
                return state;
        }
    }
    return {state, actions}
}

export default useGlobalStore;