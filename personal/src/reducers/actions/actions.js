const storeNewUser=(args)=>{
    return {
        type:"STORE_USER",
        payload:args,
    }
}
export { storeNewUser }