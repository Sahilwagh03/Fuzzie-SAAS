'use client'
import React, { useEffect, useRef } from 'react'
import * as LR from '@uploadcare/blocks';
import { useRouter } from 'next/navigation';


LR.registerBlocks(LR);

const UploadCareButton = ({ onUpload }) => {
    const router = useRouter()
    const ctxProviderRef = useRef(null)

    useEffect(() => {
        const handleUpload = async (e) => {
            const file = await onUpload(e.detail.cdUrl)
            if (file) {
                router.refresh()
            }
        }

        ctxProviderRef.current.addEventListener('file-upload-success', handleUpload)
    }, [])
    return (
        <>
            <div>
                <lr-config
                    ctx-name="my-uploader"
                    pubkey="a9428ff5ff90ae7a64eb"
                />

                <lr-file-uploader-regular
                    ctx-name="my-uploader"
                    css-src={`https://cdn.jsdelivr.net/npm/@uploadcare/blocks@0.35.2/web/lr-file-uploader-regular.min.css`}
                />

                <lr-upload-ctx-provider
                    ctx-name="my-uploader"
                    ref={ctxProviderRef}
                />
            </div>
        </>
    )
}

export default UploadCareButton