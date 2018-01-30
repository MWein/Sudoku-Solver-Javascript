export const createAction = (namespace, constant) => {
  const rConstant = `@${namespace}/${constant}`
  const createdAction = payload => ({ type: rConstant, payload })

  return {
    constant: rConstant,
    action: createdAction,
  }
}

const createActions = (namespace, constants) => {
  const createActionsHelper = (keys, index, resultConstants, resultActions) => {
    const currentKey = keys[index]
    const currentConst = constants[currentKey]
    const actionBundle = createAction(namespace, currentConst)

    const newResultConstants = {
      ...resultConstants,
      [currentConst]: actionBundle.constant,
    }
    const newResultActions = {
      ...resultActions,
      [currentKey]: actionBundle.action,
    }

    return index < keys.length - 1 ?
      createActionsHelper(keys, index + 1, newResultConstants, newResultActions) :
      {
        constants: newResultConstants,
        actions: newResultActions,
      }
  }

  return createActionsHelper(Object.keys(constants), 0, {}, {})
}

export default createActions
