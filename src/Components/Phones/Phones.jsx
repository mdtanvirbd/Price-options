import React, { useEffect, useState } from 'react';
import axios from 'axios';  // axios import করেছি
import { data } from 'autoprefixer';
import { BarChart, Bar,XAxis, YAxis, Tooltip } from 'recharts';

const Phones = () => {
    const [phones, setPhones] = useState([]);

    useEffect(() => {
        // fetch ইউজ করার জায়গায় axios ইউজ করছি
        axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
            .then(data => {
                const phoneData = data.data.data
                const phonesWithFakeData = phoneData.map(phone=>{
                    const obj = {
                        name : phone.phone_name,
                        price: parseInt(phone.slug.split('-')[1])
                    }
                    return obj
                })
                console.log(phonesWithFakeData)
                setPhones(phonesWithFakeData);
                
            })
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h2 className="text-5xl">Phones: {phones.length}</h2>
            <BarChart width={1000} height={400} data={phones}>
               <Bar dataKey="price" fill="#8884d8" />
               <XAxis dataKey="name"></XAxis>
               <YAxis></YAxis>
               <Tooltip></Tooltip>
             </BarChart>
        </div>
    );
};

export default Phones;
