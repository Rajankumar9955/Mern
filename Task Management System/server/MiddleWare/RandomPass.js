const RandomPass=()=>{

const String="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";

const MyPass="";
for(var i=0; i<8; i++)
      {
          MyNo=Math.floor(Math.random()*String.length);
          MyPass+=String.charAt(MyNo);
      }
      
      return MyPass;
}
module.exports=RandomPass