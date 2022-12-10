import { createSlice } from '@reduxjs/toolkit'

const rootSlice = createSlice ({
    name: 'root',
    initialState: {
        // id: 1009187,
        name: 'Black Panther',
        desc: '',
        // num_comics: 721,
        // num_series: 247,
        // num_stories: 941
    },
    reducers: {
        // chooseId: (state, action) => { state.id = action.payload },
        chooseName: (state, action) => { state.name = action.payload },
        chooseDesc: (state, action) => { state.desc = action.payload },
        // chooseComics: (state, action) => { state.num_comics = action.payload },
        // chooseSeries: (state, action) => { state.num_series = action.payload },
        // chooseStories: (state, action) => { state.num_stories = action.payload }
    }
});

export const reducer = rootSlice.reducer;
export const {
    // chooseId,
    chooseName,
    chooseDesc,
    // chooseComics,
    // chooseSeries,
    // chooseStories 
} = rootSlice.actions;
