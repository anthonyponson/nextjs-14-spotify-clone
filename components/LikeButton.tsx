'use client'

import { useUser } from "@/hooks/useUser";
import { useSession, useSessionContext } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import {useState, useEffect} from 'react'

interface LikeButtonProps{
    songId: string
}

const LikeButton:React.FC<LikeButtonProps> = ({songId}) => {

    const router = useRouter()

    const {supabaseClient} = useSessionContext()

    const {user} = useUser()

  return (
    <>
      
    </>
  );
}

export default LikeButton;