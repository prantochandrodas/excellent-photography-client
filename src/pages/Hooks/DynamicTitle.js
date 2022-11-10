import React, { useEffect } from 'react';

const DynamicTitle = title => {
   useEffect(()=>{
    document.title=`${title}- Excillent-Photography`
   },[title])
};

export default DynamicTitle;