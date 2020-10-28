import { useState } from 'react'

const useGlobalStore = () => {
    const [state, setState] = useState({value: 'Global State! Test #1',
                                        value2: 'Global State! Test #2!'})

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