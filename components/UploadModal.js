import { modalState } from "../atom/modalAtom"
import {useRecoilState} from "recoil";
import Modal from "react-modal";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)

  return (
    <div>
      {open && (
        <Modal
        className="max-w-md w-[80%] h-[300px] absolute top-60 left-[50%] translate-x-[-50%] bg-white border-2 rounded-md shadow-md"
        isOpen={open}
        onRequestClose={()=>setOpen(false)}
        >
          <div className="flex flex-col justify-center items-center h-[100%]">
            <h1>Modal</h1>

          </div>
         
        </Modal>

      )}
    </div>
  )
  
}
