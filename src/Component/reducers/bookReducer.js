const initialState = {
  books:[]
}

function bookReducer(state = initialState, action) {

  let res = state.books
  switch (action.type) {
    case "search":
      let requestData = null
      switch (action.by){
        case "title":
          requestData = res.map((book,index)=>{
            if(book.title.toLowerCase().indexOf(action.text.toLowerCase())>=0){
              return res[index]
            }
            return null
          });
          res = requestData.filter(b=>{
            if (b) {return true}
            return false;
          });
          break
        case "author":
          requestData = res.map((book,index)=>{
            if(book.author.toLowerCase().indexOf(action.text.toLowerCase())>=0){
              return res[index]
            }
            return null
          });
          res = requestData.filter(b=>{
            if (b) {return true}
            return false;
          });
          break
        case "publication":
          requestData = res.map((book,index)=>{
            if(book.publication.toLowerCase().indexOf(action.text.toLowerCase())>=0){
              return res[index]
            }
            return null
          });
          res = requestData.filter(b=>{
            if (b) {return true}
            return false;
          });
          break
        default:   
      }
      return {
        ...state,
        books: res
      };
    case "sort":
      let ord = action.ord? 1 : -1  
      switch (action.by) {
        case "id":
          res.sort((a, b) => a.id > b.id ? 1*ord:-1*ord)
          break
        case "title":
          res.sort((a,b)=>{
            if(a.title.toLowerCase() > b.title.toLowerCase()){return 1*ord}
            if(a.title.toLowerCase() < b.title.toLowerCase()){return -1*ord}
            return 0
          });
          break
        case "author":
          res.sort((a,b)=>{
            if(a.author.toLowerCase() > b.author.toLowerCase()){return 1*ord}
            if(a.author.toLowerCase() < b.author.toLowerCase()){return -1*ord}
            return 0
          });
          break
        case "publication":
          res.sort((a,b)=>{
            if(a.publication.toLowerCase() > b.publication.toLowerCase()){return 1*ord}
            if(a.publication.toLowerCase() < b.publication.toLowerCase()){return -1*ord}
            return 0
          });
          break
        default : 
          res.sort()   
      }
      return {
        ...state,
        books: res
      };
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