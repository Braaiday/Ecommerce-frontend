import * as actions from '../shared/actiontypes/actiontypes';

const initialState = {
    products: [],
};

const reducerCart = (state = initialState, action) => {
    switch (action.type) {
        case actions.ADD_ITEM_TO_CART:
            const addedProduct = action.payload;
            const existingProduct = state.products.find((p) => p._id === addedProduct._id);

            if (existingProduct) {
                return {
                    ...state,
                    products: state.products.map((p) =>
                        p._id === existingProduct._id ? { ...p, quantity: p.quantity + 1 } : p
                    ),
                };
            } else {
                return {
                    ...state,
                    products: [...state.products, { ...addedProduct, quantity: 1 }],
                };
            }

        case actions.REMOVE_ITEM_FROM_CART:
            const productToRemove = action.payload;
            return {
                ...state,
                products: state.products.filter((product) => product._id !== productToRemove),
            };

        case actions.UPDATE_QUANTITY:
            const { productId, quantity } = action.payload;
            return {
                ...state,
                products: state.products.map((product) =>
                    product._id === productId ? { ...product, quantity } : product
                ),
            };

        default:
            return state;
    }
};

export default reducerCart;
