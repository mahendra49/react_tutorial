console.clear()

//actions
const creactPolicy = (name , amount)=>{
  return {
    type:"CREATE_POLICY",
    payload:{
      name:name,
      amount:amount
    }
  };
};

const deletePolicy = (name)=>{
  return{
    type:"DELETE_POLICY",
    payload:{
      name:name
    }
  };
};

const createClaim = (name , amountToCollect)=>{
    return{
        type:"CREATE_CLAIM",
        payload:{
          name:name,
          amountToCollect:amountToCollect
        }
    };
}

//reducers

const claimsHistory = (oldClaims = [] , action)=>{
  if(action.type === "CREATE_CLAIM"){
    return [...oldClaims , action.payload];
  }
  return oldClaims;
}

const accounting = (bagOfMoney = 100 , action)=>{
  //console.log(action);
  if(action.type==="CREATE_CLAIM"){
    return bagOfMoney-action.payload.amountToCollect;
  }
  else if(action.type==="CREATE_POLICY"){
    return bagOfMoney + action.payload.amount;
  }
  return bagOfMoney;
}


const policies = (listOfPolicies = [], action)=>{
  if(action.type==="CREATE_POLICY"){
      return [...listOfPolicies , action.payload.name];
  }
  else if(action.type==="DELETE_POLICY"){
    return listOfPolicies.filter(name => name!==action.payload.name);
  }
  return listOfPolicies;
  
};

const {createStore , combineReducers} = Redux;
//console.log(createStore);

const ourDept = combineReducers({
    accounting:accounting,
    policies:policies,
    claimsHistory:claimsHistory
});

const store  = createStore(ourDept);

//console.log(store.getState());

//const action = creactPolicy("alex",20);

//console.log(action);

store.dispatch(creactPolicy("alex",20));
store.dispatch(creactPolicy("alex1",20));
store.dispatch(creactPolicy("alex2",20));



console.log(store.getState());
