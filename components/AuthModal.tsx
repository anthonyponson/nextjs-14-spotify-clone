"use client"

import Modals from "./Modals"

const AuthModal = () => {
  return (
    <div>
      <Modals
        title="Test Modal"
        description="Test discription"
        isOpen
        onChange={() => {}}
      >
        Auth Modal children
      </Modals>
    </div>
  )
}

export default AuthModal
