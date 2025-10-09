const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));



app.listen(3000,()=>{
    console.log("Server started on port 3000");
})


const {PrismaClient} = require( "./generated/prisma")

const prisma = new PrismaClient()









async function adduser(email,name){
  const user = await prisma.user.create({
    data:{
      email,
      name
    }
  })
  console.log(user)
}
// adduser("john.doe@example.com","John Doe")

async function readuser(email){
   return await prisma.user.findUnique({
    where:{email}
  })
}


// readuser("john.doe@example.com").then(data => {
//   console.log({data})
// })
async function updateuser(email,newname){
    const updated = await prisma.user.update({
        where:{email},
        data:{name:newname}
    })
    return updated;
}

// updateuser("john.doe@example.com","updated john").then(data => {console.log({data})});


async function deleteuser(email){
    const deleted = await prisma.user.delete({
        where:{email}
    })
    return deleted;
}

// deleteuser("john.doe@example.com").then(data => {console.log({data})});



async function addtweet(id,content){
//   const user = await readuser(email);
//   if(!user) throw new Error("User not found");
  const tweet = await prisma.tweet.create({
    data:{
      content,
      userid: id
    }
  })
  return tweet;
}

// addtweet(1,"my first tweet").then(data => {console.log({data})})


async function readTweets(){
  // select inc;iude 
  let alltweets = await prisma.tweet.findMany({
    eslect:{
      user:{
        select:{name:true}
      },
      body:true,
      id:true
    }
  });
  return alltweets;
}
