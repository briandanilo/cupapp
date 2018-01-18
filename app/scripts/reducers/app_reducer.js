export default function AppReducer(state, action) {
  if (state === undefined) {
    return {};
  }

  switch (action.type) {
    case "SUCCESSFUL_GOOGLE_API_CALL":
      if (action.sheet == "cuppers")
        return Object.assign({}, state, { cuppers: action.data })
      else if (action.sheet == "scorecard")
        return Object.assign({}, state, { scorecard: action.data })
    case "INIT_DEV_MODE":
      var devCups = [["Joe"],["Jen"],["Brian"],["Maria"]]
      var devCard = [[0,1],[100,200]]
      return Object.assign({}, state, { cuppers: devCups }, { scorecard: devCard} )
  }

  console.log("Unhandled State!");
  return state;
}
