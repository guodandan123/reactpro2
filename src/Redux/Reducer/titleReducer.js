const titleReducer = (prevState="猫眼电影",action={})=>{
    let {type,payload} =action;
    switch (type){
        case "changeTitle":
            return payload;
        default:
            return prevState;
    }
};
export default titleReducer;