export default function callGoogleApi (sheetName) {

  return function (dispatch) {

    var IS_DEV_MODE = true

    dispatch( { type: "STARTING_GOOGLE_API_CALL" });

    var baseUrl = 'https://sheets.googleapis.com/v4/spreadsheets/'
    var CLIENT_ID = '874892869774-1r8ffk6of10tuis2ov0geptc6iv5gjfg.apps.googleusercontent.com'
    var API_KEY = 'AIzaSyBAPR_o1Bs_xHi1zGkP2K8Ou5weX5zPwZs'
    var SPREADSHEET_ID = '1U4N1HxNj9SGXn8ioG-NcUaG3Ulffmrlq7PisbDUOwLM'
    var url = baseUrl + SPREADSHEET_ID + '/values/' + sheetName + '?key=' + API_KEY

    if (IS_DEV_MODE)
      dispatch({type:"INIT_DEV_MODE"})
    else
      return  $.ajax({
        url: url,
        headers: {},
        data: {}
      }).then(function (data,err,x) {
        if (err == "success")
          dispatch( { type: "SUCCESSFUL_GOOGLE_API_CALL", sheet: sheetName, data: data.values })
        else
          dispatch( { type: "FAILED_GOOGLE_API_CALL", sheet: sheetName, data: data.values })
      })
  }
}
