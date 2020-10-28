import { useState } from 'react'

const useGlobalStore = () => {
    const [state, setState] = useState({value: 'I am testing Global State'})

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