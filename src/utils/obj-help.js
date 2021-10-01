


export const updateObkectInArray=(items,itemId,objPropName,NewObjectProps)=>{
  return  items.map((u) => {
        if (u[objPropName] === itemId) {
          return { ...u, ...NewObjectProps };
        }
        return u;
      }) 
}