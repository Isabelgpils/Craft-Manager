

const selectedReducer = (state = null, action) => {
	console.log('reducer', state);
	switch (action.type) {
		case 'DMC_SELECTED':
			const prevDmcSelection = (state && state.selectDmc) || [];
			return { ...state, selectDmc: [...prevDmcSelection, action.payload] };
		case 'BEAD_SELECTED':
			const prevBeadSelection = (state && state.selectBead) || [];
			return { ...state, selectBead: [...prevBeadSelection, action.payload] };
		case 'SILK_SELECTED':
			const prevSilkSelection = (state && state.selectSilk) || [];
			return { ...state, selectSilk: [...prevSilkSelection, action.payload] };
		case 'METALLIC_SELECTED':
			const prevMetallicSelection = (state && state.selectMetallic) || [];
			return { ...state, selectMetallic: [...prevMetallicSelection, action.payload] };


		default:
			return state;
	}
};
export default selectedReducer;