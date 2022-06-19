import { modalState } from "../atom/modalAtom"
import {useRecoilState} from "recoil";

export default function UploadModal() {
  const [open, setOpen] = useRecoilState(modalState)

  return <div>
    {open && <h1>The Modal is Open</h1>}

    </div>;
  
}
