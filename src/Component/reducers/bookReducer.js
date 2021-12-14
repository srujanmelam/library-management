const initialState = {
  books:[]
}

function bookReducer(state = initialState, action) {

  let res = state.books
  switch (action.type) {

    case "search":
      const requestData = res.map((book,index)=>{
        if(book[action.by].toLowerCase().indexOf(action.text.toLowerCase())>=0){
          return res[index]
        }
          return null
      });
      res = requestData.filter(b=>{
        if (b) {return true}
          return false;
        });
      return {
        ...state,
        books: res
      };
    
    case 'sort':
      let ord = 0
      if(action.order === 'asc'){ord = 1}
      if(action.order === 'desc'){ord = -1}
      res.sort((a,b)=>{
        if(a[action.sort] > b[action.sort]){return 1*ord}
        if(a[action.sort] < b[action.sort]){return -1*ord}
        return 0
      }); 
      return{
        ...state,
        books : res
      } 
      
    case 'get':
      return{
        ...state,
        books : action.payload
      }  
    default:
      return state;
  }
}

export default bookReducer