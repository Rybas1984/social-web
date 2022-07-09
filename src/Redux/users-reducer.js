const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';


let initialState = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: 'https://s0.rbk.ru/v6_top_pics/media/img/5/46/756038770746465.jpg',
        //     followed: false,
        //     fullName: "Dmitry",
        //     status: "I am boss",
        //     location: {city: 'Minsk', country: 'Belarus'}
        // },
        // {id: 2, photoUrl: 'https://icdn.lenta.ru/images/2020/12/22/14/20201222142754269/square_320_1d6de3806d700e48f1f2efd9d868c422.jpg', followed: true, fullName: "Sasha", status: "I am a", location: {city: 'Moscow', country: 'Rossia'}},
        // {id: 3, photoUrl: 'https://prophotos.ru/data/articles/0002/2622/image-rectangle_600_x.jpg', followed: false, fullName: "Andrey", status: "I am b", location: {city: 'kiev', country: 'Ukrain'}},
        // {id: 4, photoUrl: 'https://rozetked.me/images/uploads/Y2RTOjqoatFY.jpg', followed: true, fullName: "Sveta", status: "I am c", location: {city: 'Minsk', country: 'Belarus'}},
        // {id: 5, photoUrl: 'https://99px.ru/sstorage/56/2019/09/mid_324597_239159.jpg', followed: true, fullName: "Natasha", status: "I am d", location: {city: 'Minsk', country: 'Belarus'}},

    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_USERS_COUNT: {
            return {...state, totalUsersCount: action.сount}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state;
    }
}

export const followAC = (userID) => ({type: FOLLOW, userID})
export const unfollowAC = (userID) => ({type: UNFOLLOW, userID})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setCurrentPageAC = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountAC = (totalUsersCount) => ({type: SET_USERS_COUNT, сount: totalUsersCount})
export const toggleIsFetchingAC = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export default usersReducer;