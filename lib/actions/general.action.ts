"use server";

import { auth, db } from "@/firebase/admin";
import { cookies } from "next/headers";

// Session duration (1 week)
const SESSION_DURATION = 60 * 60 * 24 * 7;

export async function getInterviewsByUserId(userId: string): Promise<Interview[] | null> {
   const interviews=await db.collection("interviews").where("userId","==",userId).orderBy('createdAt','desc').get();

   return interviews.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
   })) as Interview[];
}
export async function getLatestInterviews(params: GetLatestInterviewsParams): Promise<Interview[] | null> {

  const { userId,limit=20 } = params;
   const interviews=await db.collection("interviews").orderBy('createdAt','desc').where("finalized","==",true).where("userId","!=",userId).limit(limit).get();

   return interviews.docs.map((doc)=>({
    id:doc.id,
    ...doc.data()
   })) as Interview[];
}

export async function getInterviewsById(id: string): Promise<Interview | null> {
   const interview=await db.collection("interviews").doc(id).get();

   return interview.data() as Interview | null;
}