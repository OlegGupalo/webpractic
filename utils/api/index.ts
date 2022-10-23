import { GetServerSideProps, NextPageContext } from "next";
// import { UserApi } from "./user";
import Cookies, { parseCookies } from 'nookies'
import axios from "axios";
import { UserApi } from "./user";
import { PostApi } from "./post";

export type ApiReturnType = {
    user: ReturnType<typeof UserApi>
    post: ReturnType<typeof PostApi>
}

export const Api = (ctx?: NextPageContext | GetServerSideProps): ApiReturnType => {

    // const cookies = ctx ? Cookies.get(ctx) : parseCookies()
    // const token = cookies.pepper

    const instance = axios.create({
        baseURL: 'https://cb37-83-234-174-21.eu.ngrok.io',
        // headers: {
        //     Authorization: `Bearer ${token}`
        // }
    })


    return {
        user: UserApi(instance),
        post: PostApi(instance)
    }
}