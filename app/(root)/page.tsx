import React from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { dummyInterviews } from '@/constants'
import InterviewCard from '@/components/InterviewCard'
import { getCurrentUser , getInterviewsByUserId , getLatestInterviews} from '@/lib/actions/auth.action'

const page =async () => {
  const user=await getCurrentUser();
  //using parallel request to fetch both get inteview as well as get latest interview of other users using promise.all
  const [userInterviews, latestInterview] = await Promise.all([
    getInterviewsByUserId(user?.id!),
    getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length! > 0;
  const hasUpcomingInterviews = latestInterview?.length! > 0;



    return (
    <>
    <section className='card-cta'>
      <div className='flex flex-col gap-6 max-w-lg'>
        <h2>
Appear for Mock Interviews with AI-Powered Interviewer
        </h2>
        <p className='text-lg'>
    Showcase your skills and appear for AI-powered mock interviews. Practice anytime, anywhere, and get instant feedback to improve your performance.
        </p>
        <Button asChild className='btn-primary max-sm:w-full'><Link href="/interview">Book Slot Now</Link></Button>
      </div>
      <Image src="/robot.png" alt="robot dude" width={400} height={400} className='max-sm:hidden'/>
    </section>
    <section className='flex flex-col gap-6 mt-6'>
      <h2>Your Interviews</h2>
      <div className='interviews-section'>
       { hasPastInterviews?(userInterviews?.map((interviews)=>(
          <InterviewCard {...interviews} key={interviews.id}/>

        ))): (<p>You haven&apos;t taken any interviews yet</p>)
        }
        
      </div>
    </section>
    <section className='flex flex-col gap-6 mt-8'>
<h2>Take Interview</h2>
<div className='interviews-section'>
         { hasUpcomingInterviews?(latestInterview?.map((interviews)=>(
          <InterviewCard {...interviews} key={interviews.id}/>

        ))): (<p>There are no new interview avalaible</p>)
        }
</div>
    </section>
    </>
  )
}

export default page