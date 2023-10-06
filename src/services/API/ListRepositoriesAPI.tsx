import { useState, useEffect } from "react"
import axios from "axios"

useState

export class ListRepositiesAPI{

    static async getRepositories(){
        const response = await axios.get('https://api.github.com/users/leonardorosasilva/repos')
        return response?.data
    }

}