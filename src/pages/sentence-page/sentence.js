import Header from "../../components/header/Header"
import {useNavigate} from "react-router-dom";
import SenCard from "./senCard";
import axios from "axios";
import { useEffect, useState } from "react";

const Sentence = () => {
    const navigate = useNavigate();
    const [sentences, setSentences] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:1234/sentences")
        .then(response => {
            console.log(response.data);
            setSentences(response.data);
        }).catch(err => {
            console.log(err);
        })
    }, []);
    return(
        <div>
            <Header navigate={navigate}/>
            <SenCard sentences={sentences} navigate={navigate}/>
        </div>
    )
}

export default Sentence;