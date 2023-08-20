"use client"
import { Button } from "../ui/button";

export default function Introduction(){
    return(
        <div className=" bg-white rounded-lg">
            <div className="flex-col justify-center border-b-2 border-line">
                <div className="flex justify-center relative ">
                    <img className="w-20 h-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvyorGtXnCDdjKKtWatuY0PDgodNFPwlfq-fyKVbHuxZqaqRN5eOR_VZvaaQqnzXzRMng&usqp=CAU" alt="" />
                    <Button className="absolute right-4 bottom-0 bg-blue-700">Edit profile</Button>
                </div>
                <div className="text-center mt-6">
                    <h1 className="font-bold mb-4 text-4xl">Thanh Nhan</h1>
                    <p className="mb-2">Im student at DUt</p>
                    <div className="flex justify-center mt-2 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z" />
                        </svg>
                        <p className="text-gray-500 ml-2">
                        Joined on Jun 25, 2022
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex justify-around mt-4 pb-4">
                <div className="text-center">
                    <h2 className="text-slate-500">Education</h2>
                    <p>Viet Nam, Da Nang university of technology</p>
                </div>
                <div className="text-center">
                    <h2 className="text-slate-500">work</h2>
                    <p>Studying at University</p>
                </div>
            </div>
        </div>
    )
}