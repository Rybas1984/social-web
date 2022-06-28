const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    dialogData: [
        {id: 1, name: "Dimych", avaDialog: "https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg"},
        {
            id: 2,
            name: "Andrew",
            avaDialog: "http://pm1.narvii.com/6889/74979d4d2744ec6e27995b6e866f091d04c0b40cr1-515-414v2_uhq.jpg"
        },
        {
            id: 3,
            name: "Sveta",
            avaDialog: "https://w7.pngwing.com/pngs/862/646/png-transparent-beard-hipster-male-man-avatars-xmas-giveaway-icon-thumbnail.png"
        },
        {id: 4, name: "Sasha", avaDialog: "https://static-cse.canva.com/blob/742071/1600w-2so4RyuRmfc.jpg"},
        {
            id: 5,
            name: "Victor",
            avaDialog: "https://i0.wp.com/7youtube.ru/wp-content/uploads/2017/01/dmdmdmddsaaaa.jpg"
        },
        {
            id: 6,
            name: "Valera",
            avaDialog: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEGzhX1-XgeKrNWafWr4YQcGDOuJ56G6sInqfdCqK4MUVp5lUzSTucpoS6w9HlBKgwVx4&usqp=CAU"
        },
    ],
    messageData: [
        {id: 1, message: "Hi"},
        {id: 2, message: "Hello"},
        {id: 3, message: "By"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Funny"},
        {id: 6, message: "Help"},
    ],
    newMessageBody: ''
};

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: {
            state.newMessageBody = action.body;
            return {...state};
        }
        case SEND_MESSAGE: {
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messageData.push({id: 7, message: body});
            return state;
        }
    }

    return state;
}
export default dialogsReducer;
export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBody = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})