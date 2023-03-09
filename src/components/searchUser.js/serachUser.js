import React from "react";
// import {useDispatch} from "react-redux";
// import { searchUser } from "../../actions/actions";
import {motion} from "framer-motion"








const SearchComponent =({searchQuery,onChangeQuery})=> {

 const handleSearch =(event) => {
    onChangeQuery(event.target.value)
  }
// const dispatch = useDispatch()


  return (
    <motion.div animate={{x:0}} initial={{x:-100}} transition={{duration:1.2}} className="searchContainer"  style={{marginBottom:'10px'}}>
    {/* <input style={{minHeight:'35px'}} type="search" onChange={(e)=>dispatch(searchUser(e.target.value))}  /> */}
    <input style={{minHeight:'35px'}} type="search" onChange={handleSearch}  />
    </motion.div>
   
  )

}


export default SearchComponent