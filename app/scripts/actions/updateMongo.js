export default function updateMongo (collection,record) {

  return function (dispatch) {
    dispatch( { type: "UPDATING_MONGO" });
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/'+collection
    return  $.ajax({
      url: url,
      headers: {},
      data: {record}
    }).then(function (data,err,x) {
      if (err == "success")
        dispatch({ type: "SUCCESSFUL_MONGO_UPDATE"})
      else
        dispatch({ type: "FAILED_MONGO_UPDATE" })
    })
  }

}
