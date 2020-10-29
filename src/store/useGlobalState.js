import { useState } from 'react'

const useGlobalStore = () => {
    const [state, setState] = useState({unSafe: 1000, safe1: 0, safe2: 0})

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