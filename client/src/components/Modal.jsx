/* eslint-disable react/prop-types */
export default function Modal({ isOpen, children }) {

console.log(isOpen)
  return (
    <>
    {isOpen && <div className='overlay' />}
    <dialog open={isOpen}>
    <div className='modal-content'>
      {children}
      </div>
    </dialog>
    </>
  )
}
