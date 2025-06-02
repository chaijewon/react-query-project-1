import {useParams} from "react-router-dom";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import apiClient from "../http-commons";

/*
    useQuery => SELECT
    useMutation => INSERT/UPDATE/DELETE
    =>
 */
function RecipeDetail(){
    const {no}= useParams();
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-center">{no}</h1>
            </div>
        </div>
    )
}

export default RecipeDetail;