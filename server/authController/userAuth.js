const userAuth=()=>{
    const userData=[]
    return {
        userLogin(req,res){
           const loginData=req.body.data
           console.log(loginData,"gfgfgfg")
           let temp=userData.find(user=>user.email===loginData.email)
           console.log(temp,"Login successful")
         

        },
        userReg(req,res){
            userData.push(req.body.data)
            console.log(userData)
        }
    }
}
module.exports=userAuth