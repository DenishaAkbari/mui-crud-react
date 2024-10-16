const helper = () =>{

    let data = JSON.parse( localStorage.getItem('storageData') );
    

    if(!data){
        return [];
    }
    else{
        return data;
    }

}
export default helper