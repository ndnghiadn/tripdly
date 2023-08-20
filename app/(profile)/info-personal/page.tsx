import DetailPersonalPage from "@/components/profile/Detail";
import Introduction from "@/components/profile/Introduction";
import axios from 'axios'

export default function inforPersonal(){
    axios.get('/api/hello').then(response => {
        alert(response);
    });
    return (
        <div className="w-4/6 h-full">
            <Introduction/>
            <DetailPersonalPage/>
        </div>
    )
}