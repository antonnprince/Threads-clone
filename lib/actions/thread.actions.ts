"use server"

import { connectToDB } from "../mongoose"
import Thread from "../model/thread.model"
import User from "../model/user.model"
import { revalidatePath } from "next/cache";

interface Params{
    text:string,
    author: string,
    communityId: string|null,
    path:string
}


export async function createThread({text,
    author,
    communityId, path}:Params) {
   
   
   try{
    connectToDB();

    const createThread = await Thread.create({
        text,
        author,
        community: null,
    });

    //update user model
    await User.findByIdAndUpdate(author , {
      $push: { threads: createThread._id}  
    })

    //to make sure changes happen immediately on the path
    revalidatePath(path);
   } catch(error) {
    throw new Error('Error creating thread: ${error.message}')
   }
   
  
}