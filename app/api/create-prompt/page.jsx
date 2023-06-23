"use client"
import { useState } from "react"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"

import Form from "@components/Form"

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    })

    const createPrompt = async(e) => {

    }
  return (
    <Form 
    type= 'create'
    post= {post}
    setPost= {setPost} 
    submitting={submitting}
    handleSubmit= {createPrompt}
    />
  )
}

export default CreatePrompt
