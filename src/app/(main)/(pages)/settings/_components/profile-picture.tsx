'use client'
import React from 'react'
import UploadCareButton from './uploadcare-button'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { X } from 'lucide-react'

type Props = {
  userImage: string | null
  onDelete?: any
  onUpload: any
}

const ProfilePicture = ({ userImage, onDelete, onUpload }: Props) => {
  const router = useRouter()

  const onRemoveProfileImage = async () => {
    const response = await onDelete()
    if (response) {
      router.refresh()
    }
  }

  return (
    <div className="flex flex-col items-center">
      <p className="text-lg font-semibold mb-2">Profile Picture</p>
      <div className="flex flex-col items-center justify-center gap-4">
        {userImage ? (
          <>
            <div className="relative h-32 w-32 sm:h-40 sm:w-40 rounded-full overflow-hidden">
              <Image
                src={userImage}
                alt="User Image"
                fill
                className="object-cover"
              />
            </div>
            <Button
              onClick={onRemoveProfileImage}
              className="  hover:bg-[#2F006B] hover:text-white flex items-center gap-2"
            >
              <X className="w-4 h-4" />
              Remove Logo
            </Button>
          </>
        ) : (
          <UploadCareButton onUpload={onUpload} />
        )}
      </div>
    </div>
  )
}

export default ProfilePicture
