export default function readMongo () {

  return function (dispatch) {
    dispatch( { type: "READING_MONGO" });
    var url = 'https://sheets.googleapis.com/v4/spreadsheets/'
    return  $.ajax({
      url: url,
      headers: {},
    }).then(function (data,err,x) {
      if (err == "success")
        dispatch({ type: "SUCCESSFUL_MONGO_READ", data: data.body })
      else
        dispatch({ type: "FAILED_MONGO_READ" })
    })
  }

}
