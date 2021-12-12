const initialState = {
  books:[]
}

function bookReducer(state = initialState, action) {

  let res = state.books
  let ord = 0
  switch (action.type) {
    case "search":
      res = state.books
      switch (action.by) {
        case "title":
          res = res.filter(book=>book.title.toLowerCase().search(action.search))
          break
        case "author":
          res = res.filter(book=>book.author.toLowerCase().search(action.search))
          break
        case "publication":
          res = res.filter(book=>book.publication.toLowerCase().search(action.search))
          break
        default:    
      }
      return {
        ...state,
        books: res
      };
    case "sort":
      res = state.books
      ord = action.order? 1 : -1  
      switch (action.by) {
        case "id":
          res.sort((a, b) => a.id > b.id ? 1*ord:-1*ord)
          break
        case "title":
          res.sort((a, b) => a.title > b.title ? 1*ord:-1*ord)
          break
        case "author":
          res.sort((a, b) => a.author > b.author ? 1*ord:-1*ord)
          break
        case "publication":
          res.sort((a, b) => a.publication > b.publication ? 1*ord:-1*ord)
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