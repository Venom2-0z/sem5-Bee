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

addtweet(1,"my first tweet").then(data => {console.log({data})})


