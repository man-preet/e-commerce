import React, { createContext, useEffect, useState } from 'react'

import db, { auth } from '../Firebase/Firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { doc,getDoc,updateDoc } from 'firebase/firestore';

 
const AuthContext=createContext();
export const AuthProvider = ({children}) => {

  const [user,setUser]=useState(null);

  const [address,setAddress]=useState('');


  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,async(currentUser)=>{
       if(currentUser){
        setUser(currentUser);
        try{
          const userDoc=await getDoc(doc(db,"users",currentUser.uid));
          if(userDoc.exists())
            {
              const userData=userDoc.data();
              console.log(userData.house,userData.street,userData.city,userData.state,userData.pincode);


              setAddress(
                {
                  house:userData.house,
                  street:userData.street,
                  city:userData.city,
                  state:userData.state,
                  pincode:userData.pincode || ""
            });

            }
        }
        catch(e){
          console.log("Error fetching address:",e);

        }
        }
        else{
          setUser(null);
          setAddress('');

        }
    })
    return ()=>unsubscribe();
  },[])

  const updateAddress=async (newAddress)=>{
    if(user)
   {
    try{
      const userRef=doc(db,"users",user.uid);
      await updateDoc(userRef,{
        address:newAddress
      })
      setAddress(newAddress)
    }catch(e)
    {
      console.log("Error updating address",e);

    }
   }


  }

  return (
    <>
        <AuthContext.Provider value={{address,updateAddress,user}}>
          {children}
        </AuthContext.Provider>
    
    </>
  )
}

export default AuthContext